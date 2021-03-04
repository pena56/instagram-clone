import { useState, useRef } from 'react';

import { CgAddR } from 'react-icons/cg';
import { IoMdClose, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import ReactLoading from 'react-loading';

import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

import { createPost } from '../adapters/post';
import checkFileType from '../utils/checkFileType';
import uploadImage from '../adapters/uploadImage';
import { useAuth } from '../contexts/AuthContext';

import {
  ModalContainer,
  UploadButton,
  UploadField,
  ModalHeader,
  ModalTitle,
  NextButton,
  ImagePreview,
  FooterAction,
  PhotoSection,
  CaptionSection,
  DescContainer,
  UserPrevImage,
  TextArea,
  LoadingModal,
} from '../styles/posts';
import defaultProfile from '../images/BlankImage.jpg';

function UploadModal() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [slide, setSlide] = useState(false);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();

  const image = useRef();
  const postDesc = useRef();

  const handleSelect = () => {
    const imgURL = URL.createObjectURL(image.current.files[0]);
    setSelectedImage(imgURL);
    setShowModal(true);
  };

  const handleUpload = () => {
    setLoading(true);
    if (checkFileType(image.current.files[0])) {
      uploadImage(image.current.files[0]).then((url) => {
        createPost(currentUser, url, postDesc.current.value)
          .then((ref) => {
            // console.log(ref);
            setLoading(false);
            window.location.reload();
          })
          .catch((error) => {
            console.error(error.message);
            setLoading(false);
          });
      });
    }
  };

  return (
    <>
      <UploadButton htmlFor="uploadImage">
        <CgAddR fontSize="1.5rem" cursor="pointer" />
      </UploadButton>

      <UploadField
        onChange={handleSelect}
        type="file"
        id="uploadImage"
        ref={image}
      />

      <Rodal
        visible={showModal}
        onClose={() => setShowModal(false)}
        showCloseButton={false}
        customMaskStyles={{ opacity: '0.8', backgroundColor: '#262626' }}
        customStyles={{
          padding: '0',
          width: '320px',
          height: 'fit-content',
          maxHeight: '90vh',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >
        <ModalContainer className="upload">
          <PhotoSection>
            <ModalHeader>
              <IoMdClose
                cursor="pointer"
                onClick={() => setShowModal(false)}
                fontSize="1.5rem"
              />
              <ModalTitle>New Photo Post</ModalTitle>
              <NextButton onClick={() => setSlide(true)}>Next</NextButton>
            </ModalHeader>
            {selectedImage && (
              <ImagePreview src={selectedImage} alt="preview" />
            )}
            <ModalHeader className="footer">
              <FooterAction className="disabled">
                <ModalTitle>Filter</ModalTitle>
              </FooterAction>
              <FooterAction>
                <ModalTitle>Edit</ModalTitle>
              </FooterAction>
            </ModalHeader>
          </PhotoSection>

          <CaptionSection show={slide}>
            <ModalHeader>
              <IoIosArrowBack
                cursor="pointer"
                onClick={() => setSlide(false)}
                fontSize="1.5rem"
              />
              <ModalTitle>New Post</ModalTitle>
              <NextButton onClick={handleUpload}>Share</NextButton>
            </ModalHeader>

            <DescContainer>
              <UserPrevImage src={currentUser.photoURL} alt="profile" />
              <TextArea
                ref={postDesc}
                placeholder="Write a caption..."
                rows="2"
              />
              {selectedImage && (
                <ImagePreview
                  className="small"
                  src={selectedImage}
                  alt="preview"
                />
              )}
            </DescContainer>

            <DescContainer>
              <ModalTitle>Add Location</ModalTitle>
              <IoIosArrowForward fontSize="1.3rem" />
            </DescContainer>

            <DescContainer>
              <ModalTitle>Tag People</ModalTitle>
              <IoIosArrowForward fontSize="1.3rem" />
            </DescContainer>
          </CaptionSection>

          {loading && (
            <LoadingModal>
              <ReactLoading
                type="balls"
                color="#ffffff"
                height="30%"
                width="30%"
              />
            </LoadingModal>
          )}
        </ModalContainer>
      </Rodal>
    </>
  );
}

export default UploadModal;

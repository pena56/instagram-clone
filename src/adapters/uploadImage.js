import checkFileType from '../utils/checkFileType';
import { storage } from '../adapters/firebase';

const UploadImage = (file) => {
  if (checkFileType(file)) {
    let promise = new Promise(function (resolve, reject) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.name);
      fileRef
        .put(file)
        .then(() => {
          fileRef
            .getDownloadURL()
            .then((url) => {
              resolve(url);
            })
            .catch((err) => {
              reject(err);
            });
        })
        .catch((err) => reject(err));
    });

    return promise;
  } else {
    return 'File must be an Image';
  }
};

export default UploadImage;

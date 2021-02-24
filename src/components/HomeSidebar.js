import {
  SidebarContainer,
  PostHeader,
  PostHeaderDetails,
  UserImage,
  Names,
  AuthorName,
  CommentButton,
} from '../styles/posts';
import { ProfileImageContainer } from '../styles/profile';
import blankProfile from '../images/BlankImage.jpg';

function HomeSidebar() {
  return (
    <SidebarContainer>
      <PostHeader>
        <PostHeaderDetails>
          <ProfileImageContainer>
            <UserImage src={blankProfile} alt="profile" />
          </ProfileImageContainer>
          <Names>
            <AuthorName className="thick">brake_emi</AuthorName>
            <AuthorName className="secondary">Moses Ogbopina</AuthorName>
          </Names>
        </PostHeaderDetails>

        <CommentButton>Switch</CommentButton>
      </PostHeader>

      <AuthorName className="secondary suggestion">
        Suggestions for you
      </AuthorName>

      <PostHeader className="small">
        <PostHeaderDetails>
          <UserImage className="mini" src={blankProfile} alt="profile" />
          <Names>
            <AuthorName className="thick">brake_emi</AuthorName>
            <AuthorName className="secondary small">
              Suggested for you
            </AuthorName>
          </Names>
        </PostHeaderDetails>

        <CommentButton>Follow</CommentButton>
      </PostHeader>

      <PostHeader className="small">
        <PostHeaderDetails>
          <UserImage className="mini" src={blankProfile} alt="profile" />
          <Names>
            <AuthorName className="thick">brake_emi</AuthorName>
            <AuthorName className="secondary small">
              Suggested for you
            </AuthorName>
          </Names>
        </PostHeaderDetails>

        <CommentButton>Follow</CommentButton>
      </PostHeader>

      <PostHeader className="small">
        <PostHeaderDetails>
          <UserImage className="mini" src={blankProfile} alt="profile" />
          <Names>
            <AuthorName className="thick">brake_emi</AuthorName>
            <AuthorName className="secondary small">
              Suggested for you
            </AuthorName>
          </Names>
        </PostHeaderDetails>

        <CommentButton>Follow</CommentButton>
      </PostHeader>

      <PostHeader className="small">
        <PostHeaderDetails>
          <UserImage className="mini" src={blankProfile} alt="profile" />
          <Names>
            <AuthorName className="thick">brake_emi</AuthorName>
            <AuthorName className="secondary small">
              Suggested for you
            </AuthorName>
          </Names>
        </PostHeaderDetails>

        <CommentButton>Follow</CommentButton>
      </PostHeader>

      <PostHeader className="small">
        <PostHeaderDetails>
          <UserImage className="mini" src={blankProfile} alt="profile" />
          <Names>
            <AuthorName className="thick">brake_emi</AuthorName>
            <AuthorName className="secondary small">
              Suggested for you
            </AuthorName>
          </Names>
        </PostHeaderDetails>

        <CommentButton>Follow</CommentButton>
      </PostHeader>
    </SidebarContainer>
  );
}

export default HomeSidebar;

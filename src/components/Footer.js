// icons
import { MdKeyboardArrowDown } from 'react-icons/md';

// styles
import { FooterContainer, FooterRow, FooterLink } from '../styles/footer';

function Footer() {
  return (
    <FooterContainer>
      <FooterRow>
        <FooterLink>About</FooterLink>
        <FooterLink>Blog</FooterLink>
        <FooterLink>Jobs</FooterLink>
        <FooterLink>Help</FooterLink>
        <FooterLink>API</FooterLink>
        <FooterLink>Privacy</FooterLink>
        <FooterLink>Terms</FooterLink>
        <FooterLink>Top accounts</FooterLink>
        <FooterLink>hashtags</FooterLink>
        <FooterLink>locations</FooterLink>
      </FooterRow>
      <FooterRow>
        <FooterLink>
          English <MdKeyboardArrowDown /> &copy;{new Date().getFullYear()}{' '}
          Instagram from Facebook
        </FooterLink>
      </FooterRow>
    </FooterContainer>
  );
}

export default Footer;

import './Footer.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className="container footer">
      <div className="socials">
        <h3>Connect with us</h3>
        <div className="socials-container">
          <TwitterIcon className="social-icon"/>
          <LinkedInIcon className="social-icon"/>
          <InstagramIcon className="social-icon"/>
        </div>
      </div>
      <form action="">
        <input type="text" className="email-input" placeholder="email ID"/>
        <input type="button" value="Receive updates" className="email-submit"/>
      </form>
    </div>
  )
}

export default Footer;

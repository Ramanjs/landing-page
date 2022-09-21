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
          <a href="https://twitter.com/dazeindia" className="social-icon"><TwitterIcon /></a>
          <a href="https://www.linkedin.com/company/dazeweb3" className="social-icon"><LinkedInIcon /></a>
          <a href="https://www.instagram.com/daze_india/" className="social-icon"><InstagramIcon /></a>
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

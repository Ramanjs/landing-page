import './About.css';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import PublicIcon from '@mui/icons-material/Public';
import SendIcon from '@mui/icons-material/Send';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';

const About = () => {
  return (
    <div className="container about" id="about">
      <h3 className="cl-grey">About Us</h3>
      <h2>Send money securely anywhere in the world</h2>
      <p className="cl-grey">Sem et tortor consequat id porta. Egestas dui id ornare arcu odio ut sem. Laoreet id donec ultrices tincidunt arcu non sodales neque.</p>
      <div className="about-cards">
        <div className="about-card">
          <CurrencyBitcoinIcon />
          <h4>Eget egestas</h4>
          <p className="cl-grey">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className="about-card">
          <PublicIcon />
          <h4>Metus aliquam</h4>
          <p className="cl-grey">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className="about-card">
          <SendIcon />
          <h4>Aenean sed</h4>
          <p className="cl-grey">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className="about-card">
          <EnhancedEncryptionIcon />
          <h4>Quis blandit</h4>
          <p className="cl-grey">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
    </div>
  )
}

export default About;

import './Footer.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [joinMsg, setJoinMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setJoinMsg(true);
    setTimeout(() => setJoinMsg(false), 2000); 

    const isReg = localStorage.getItem('registered');
    if (isReg == 'true') {
      console.log('already registered')
      return;
    }

    const templateParams = {
      from_name: email,
      message: 'Hi! I visited the DAZE website and I"m interested in receiving updates'
    };

    emailjs.send('service_sjycgpb', 'template_lez0xsn', templateParams, '6V56S1schqD0OC4uy')
      .then((result) => {
        console.log(result.text);
        localStorage.setItem('registered', 'true');
      }, (error) => {
        console.log(error.text);
      });
    setEmail('');
  }

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
      <form onSubmit={handleSubmit} className={joinMsg ? "join-msg" : ""}>
        <input type="email" className="email-input" placeholder="email ID" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="submit" value="Receive updates" className="email-submit"/>
      </form>
    </div>
  )
}

export default Footer;

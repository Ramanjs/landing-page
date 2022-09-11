import './About.css';
import SchoolIcon from '@mui/icons-material/School';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import BuildIcon from '@mui/icons-material/Build';
import ShareIcon from '@mui/icons-material/Share';
import LanguageIcon from '@mui/icons-material/Language';
import TokenIcon from '@mui/icons-material/Token';
import DoneIcon from '@mui/icons-material/Done';
import LaunchIcon from '@mui/icons-material/Launch';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container about" id="about">
      <h3 className="cl-grey">About DAZE</h3>
      <h2>Bridging the gap between the metaverse and the common man</h2>
      <p className="cl-grey">DAZE was conceptualised by artists from CryptoArt India Collective (CIC), a community and safe haven for artists pushing the boundaries of digital art and storytelling across various blockchains and platforms</p>
      <div className="about-cards">
        <div className="about-card">
          <TokenIcon />
          {/*<h4>Eget egestas</h4>*/}
          <p className="cl-grey">Create a premium curated ecosystem to bring NFTs into the world of fine arts</p>
        </div>
        <div className="about-card">
          <LanguageIcon />
          {/*<h4>Eget egestas</h4>*/}
          <p className="cl-grey">Help companies build their products and enter the web3 space</p>
        </div>
        <div className="about-card">
          <ShareIcon />
          {/*<h4>Eget egestas</h4>*/}
          <p className="cl-grey">Creating an engaging space that encourages collaboration, learning and networking</p>
        </div>
        <div className="about-card">
          <BuildIcon />
          {/*<h4>Eget egestas</h4>*/}
          <p className="cl-grey">Help build tools and products with collaboration with industry leaders</p>
        </div>
        <div className="about-card">
          <SchoolIcon />
          {/*<h4>Eget egestas</h4>*/}
          <p className="cl-grey">Educate and create awareness among the audience</p>
        </div>
        <div className="about-card">
          <Diversity3Icon />
          {/*<h4>Eget egestas</h4>*/}
          <p className="cl-grey">Consulting brands and corporations, make their transition to web3 smoother</p>
        </div>
      </div>
      <div className="news">
        <h3 >In the News</h3>
        <ul className="news-list">
          <li><a href="https://www.youtube.com/watch?v=CQtNoKpsn-s&t=231s" className="cl-grey">NDTV <LaunchIcon className="news-icon"/></a></li>
          <li><a href="https://www.mid-day.com/mumbai-guide/things-to-do/article/cryptoart-for-the-win-23173609" className="cl-grey">Midday Mumbai <LaunchIcon className="news-icon"/></a></li>
          <li><a href="https://www.hindustantimes.com/lifestyle/art-culture/nft-art-the-charisma-comes-to-the-capital-101639765509031.html" className="cl-grey">HT <LaunchIcon className="news-icon"/></a></li>
        </ul>
      </div>
      <div className="what-we-do">
        <h3 style={{textAlign: 'center'}}>What We Do</h3>
        <ul className="what-we-do-list cl-grey">
          <li><DoneIcon style={{width: '25px'}}/>Business consultation in web3 ecosystem</li>
          <li><DoneIcon style={{width: '25px'}}/>Smart contract deployment for projects, dapps</li>
          <li><DoneIcon style={{width: '25px'}}/>Play-to-Earn, Play-to-Learn mechanism for games</li>
          <li><DoneIcon style={{width: '25px'}}/>Designing and Branding</li>
          <li><DoneIcon style={{width: '25px'}}/>Strategic consultation on roadmaps, whitepaper etc</li>
          <li><DoneIcon style={{width: '25px'}}/>Community building</li>
        </ul>
      </div>
      <div className="menu-tiles">
        <Link to="/work" className="menu-tile cl-grey">Our Work<LaunchIcon className="news-icon"/></Link>
        <Link to="/team" className="menu-tile cl-grey">Team<LaunchIcon className="news-icon"/></Link>
        <Link to="/team/#partners" className="menu-tile cl-grey">Our Partners<LaunchIcon className="news-icon"/></Link>
      </div>
    </div>
  )
}

export default About;

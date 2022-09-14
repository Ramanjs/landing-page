import './Team.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import cai from '../../assets/partner-logos/CAI_Lockup_RGB_Black.png';
import moca from '../../assets/partner-logos/iDB-R2Yx.png';
import jugadu from '../../assets/partner-logos/jugadu Logo_Circle.png';
import kai from '../../assets/partner-logos/kai_5220_flat-color.png';
import iam from '../../assets/partner-logos/Logo_Block_Black.png';
import corpoedge from '../../assets/partner-logos/logo-without-line.png';
import bandwagon from '../../assets/partner-logos/no bg logo-01 (1).png';
import jatinpathi from '../../assets/Jatin .jpg';
import vishesh from '../../assets/Vishesh.jpg';

const Team = () => {
  const team = [
    {
      logo: jatinpathi, 
      name: 'Jatin Pathi',
      title: 'Founder - CEO',
      linkedin: 'https://www.linkedin.com/in/jatinpathi/',
      twitter: 'https://twitter.com/RageOfPotato'
    },
    {
      logo: vishesh, 
      name: 'Vishesh Chopra',
      title: 'Founder - COO',
      linkedin: 'https://www.linkedin.com/in/chopravishesh/',
      twitter: 'https://twitter.com/Vylkrom'
    },
    {
      //logo: vishnu, 
      name: 'Vishnu',
      title: 'CMO',
      linkedin: 'https://www.linkedin.com/in/vishnu-5b0864122/',
      twitter: ''
    },
  
  ];

  const partners = [
    {
      logo: bandwagon, 
      name: 'Bandwagon',
      title: 'Media Partner',
      linkedin: 'https://www.linkedin.com/company/bandwagon-communications/',
      twitter: ''
    },
    {
      logo: corpoedge, 
      name: 'Corpo Edge',
      title: 'Financial Advisor',
      linkedin: 'https://www.linkedin.com/company/corpoedge/',
      twitter: ''
    },
    {
      logo: iam, 
      name: 'i.AM Lab',
      title: 'Development Partner',
      linkedin: 'https://www.linkedin.com/company/iam-lab/',
      twitter: 'https://twitter.com/iamlab_eth'
    },
    {
      logo: kai, 
      name: 'Kai Turner',
      title: 'Strategic Advisor',
      linkedin: 'https://www.linkedin.com/in/kaigani/',
      twitter: 'https://twitter.com/kaigani'
    },
    {
      name: 'Beunic.in',
      title: 'Merch Partner',
      linkedin: 'https://www.linkedin.com/company/beunic/',
      twitter: ''
    },
    {
      logo: jugadu, 
      name: 'jugadu.in',
      title: 'Technical Partner',
      linkedin: 'https://www.linkedin.com/company/jugadu/',
      twitter: ''
    },
    {
      name: 'Smit Khakhkhar',
      title: 'Technical Advisor',
      linkedin: 'https://www.linkedin.com/in/smit-khakhkhar-3a4040111/',
      twitter: 'https://twitter.com/Smitether'
    },
    {
      logo: moca, 
      name: 'MOCA',
      title: 'Dapp Partner',
      linkedin: 'https://www.linkedin.com/company/museum-of-crypto-art/',
      twitter: 'https://twitter.com/MuseumofCrypto'
    },
    {
      logo: cai, 
      name: 'Adobe\'s CAI',
      title: 'Member',
      linkedin: '/',
      twitter: ''
    },
 
  ];
  return (
    <div className="container team">
      <div className="team-members">
        <h2 className="cl-grey">Team</h2>
        <ul className="partners-list">
          {team.map(member => (
            <li className="partner">
              {member.logo ? <img src={member.logo} alt="" className="partner-logo" /> : null}
              <div className="partner-container">
                <span>{member.name}</span>
                <h4 className="cl-grey">{member.title}</h4>
                <div className="partner-socials">
                  {member.linkedin ?
                    <a href={member.linkedin}><LinkedInIcon className="partner-social-icon" /></a> : null}
                  {member.twitter ?
                    <a href={member.twitter}><TwitterIcon className="partner-social-icon" /></a> : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="partners" id="partners">
        <h2 className="cl-grey">Our Partners</h2>
        <ul className="partners-list">
          {partners.map(partner => (
            <li className="partner">
              {partner.logo ? <img src={partner.logo} alt="" className="partner-logo" /> : null}
              <div className="partner-container">
                <span>{partner.name}</span>
                <h4 className="cl-grey">{partner.title}</h4>
                <div className="partner-socials">
                  {partner.linkedin ?
                    <a href={partner.linkedin}><LinkedInIcon className="partner-social-icon" style={{color: 'black'}}/></a> : null}
                  {partner.twitter ?
                    <a href={partner.twitter}><TwitterIcon className="partner-social-icon" style={{color: 'black'}}/></a> : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default Team;

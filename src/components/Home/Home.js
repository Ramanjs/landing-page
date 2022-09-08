import './Home.css';
import { Link } from 'react-router-dom';
import About from '../About/About';
import daze from '../../assets/DAZE_white_svg 1.svg';

const Home = () => {
  return (
    <div>
      <div className="container home" id="home">
        {/*<h3>We are</h3>*/}
        <img src={daze} alt="DAZE banner" className="daze-banner"/>
        {/*<h1 className="cl-grey">Landing X</h1>*/}
        {/*}<p className="cl-grey">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>*/}
        {/*<Link to="/about" ><button className="btn">Find out more</button></Link>*/}
      </div>
      <About />
    </div>
  )
}

export default Home;

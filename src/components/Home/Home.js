import './Home.css';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div className="container home" id="home">
      <h3>Adipiscing elit</h3>
      <h1 className="cl-grey">Landing X</h1>
      <p className="cl-grey">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
      <Link to="about" smooth={true}><button className="btn">Find out more</button></Link>
    </div>
  )
}

export default Home;

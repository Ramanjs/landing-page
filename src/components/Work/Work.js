import Slider from 'react-slick';
import './Work.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../assets/images/SK-16.jpg';
import img2 from '../../assets/images/SK-166.jpg';
import img3 from '../../assets/images/SK-28.jpg';
import img4 from '../../assets/images/SK-72.jpg';

const Work = () => {

  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    {
      id: 1,
      src: img1,
      alt: 'event pic',
    },
    {
      id: 2,
      src: img2,
      alt: 'event pic',
    },
    {
      id: 3,
      src: img3,
      alt: 'event pic',
    },
    {
      id: 4,
      src: img4,
      alt: 'event pic',
    }
  ];

  return (
    <div className="container work"> 
      <h2 className="cl-grey">Exhibition</h2>
      <div className="work-slideshow">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt={item.alt} className="work-img"/>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Work;

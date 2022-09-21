import Slider from 'react-slick';
import './Work.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from 'react';

const Work = () => {

  useEffect(() => {
    document.title = 'Our Work - Decentralized Art Zone';
  });

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
      src: 'https://res.cloudinary.com/deby9hi8w/image/upload/v1662896461/SK-16_as9glu.jpg',
      alt: 'event pic',
    },
    {
      id: 2,
      src: 'https://res.cloudinary.com/deby9hi8w/image/upload/v1662896466/SK-166_qqcjt4.jpg',
      alt: 'event pic',
    },
    {
      id: 3,
      src: 'https://res.cloudinary.com/deby9hi8w/image/upload/v1662896557/SK-72_ev4fvi.jpg',
      alt: 'event pic',
    },
    {
      id: 4,
      src: 'https://res.cloudinary.com/deby9hi8w/image/upload/v1662896464/SK-28_pktsvv.jpg',
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

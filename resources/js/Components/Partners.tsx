import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import partner1 from '../assets/images/Dell_Logo.svg-removebg-preview.png';
import partner2 from '../assets/images/Microsoft-Logo.wine-removebg-preview.png';
import partner3 from '../assets/images/Sage_logo-removebg-preview.png';
import partner4 from '../assets/images/US_Air_Force_Logo_Solid_Colour.svg-removebg-preview.png';
import partner5 from '../assets/images/Logo_1_dont-removebg-preview.png';

const Partners = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="partners py-12 bg-gray-50 text-center">
      <p className="text-lg text-gray-700 mb-8">Trust your upskilling to the organization that prioritizes hands-on training. Just like the world's top companies have.</p>
      <Slider {...settings}>
        <div className="sponsor-image">
          <img src={partner1} alt="Partner 1" className="w-20 h-20" />
        </div>
        <div className="sponsor-image">
          <img src={partner2} alt="Partner 2" className="w-20 h-20" />
        </div>
        <div className="sponsor-image">
          <img src={partner3} alt="Partner 3" className="w-20 h-20" />
        </div>
        <div className="sponsor-image">
          <img src={partner4} alt="Partner 4" className="w-20 h-20" />
        </div>
        <div className="sponsor-image">
          <img src={partner5} alt="Partner 5" className="w-20 h-20" />
        </div>
      </Slider>
    </section>
  );
};

export default Partners;
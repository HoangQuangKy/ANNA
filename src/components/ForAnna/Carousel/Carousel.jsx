// Carousel.jsx
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';


const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  Carousel.propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  return (
    <Slider {...settings}>
      {images?.map((image, index) => (
        <div key={index}>
          <img src={image?.src} alt={`slide-${index}`} className='w-[323px] h-[390px]' />
          <p className='w-[323px] text-center pt-[16px] text-teal-300 font-bold text-lg'>{image?.name}</p>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;

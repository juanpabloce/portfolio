import Swiper, { ReactIdSwiperProps } from 'react-id-swiper';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '../../../hooks/useTheme';
import 'swiper/swiper.scss';

const Carousel: React.FC<ReactIdSwiperProps> = ({ children }) => {
  const { theme } = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const params = {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };

  return (
    <div style={{ width: isMobile ? '300px' : '500px' }}>
      <Swiper {...params}>{children}</Swiper>
    </div>
  );
};

export { Carousel };

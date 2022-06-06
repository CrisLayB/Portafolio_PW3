import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './SliderCarousel.css'

const SliderCarousel = ({ data }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="slider-carousel">
      <Slider {...settings}>
        {data.map((d) => (
          <div>
            <img className="img-game" src={d.img} alt={d.title} />
            <p>{d.description}</p>
            {d.page_url !== undefined && (
              <a href={d.page_url}>Click para Ver 👀</a>
            )}
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SliderCarousel

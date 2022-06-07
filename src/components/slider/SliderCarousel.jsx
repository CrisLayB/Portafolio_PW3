/**
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologías Web - Sección 10
 *
 * Proyecto 3 - Portafolio Personal
 *
 * ! Slider : Slider para mostrar páginas y un poco de información
 *
 * @author   Cristian Fernando Laynez Bachez - 201281
 * @date     2-Junio-2022
 */

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
            {d.type === 'mp4' && (
              <video className="img-game" autoplay loop src={d.img}></video>
            )}
            {d.type !== 'mp4' && (
              <img className="img-game" src={d.img} alt={d.title} />
            )}
            <p>{d.description}</p>
            {d.page_url !== undefined && (
              <>
                <br />
                <a className="see-page" href={d.page_url} target="_blank">
                  Click para Ver Página 👀
                </a>
              </>
            )}
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SliderCarousel

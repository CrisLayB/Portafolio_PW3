/**
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologías Web - Sección 10
 *
 * Proyecto 3 - Portafolio Personal
 *
 * ! Portafolio : Página Principal Portafolio
 *
 * @author   Cristian Fernando Laynez Bachez - 201281
 * @date     2-Junio-2022
 */

import { Link } from 'react-router-dom'

import './css/PageScroll.css'

// Componentes
import Contact from './components/contact/Contact.jsx'
import CardsOuter from './components/cardsOuter/CardsOuter.jsx'
import SliderCarousel from './components/slider/SliderCarousel.jsx'
import CircularNav from './components/circular-nav/CircularNav.jsx'

// Imagenes
import ImgCodeWars from './img/img-code-wars1.png'
import ImgHackerRank from './img/img-hackerrank.png'
import ImgMe from './img/cris_lay.jpg'

// Data
import Robotic from './data/robotic.js'
import LangCode from './data/lang-code'
import OtherTools from './data/other-tools'

// Para los lenguajes y Herramientas
import Code from './img/icons-tools/window.png'
import Tools from './img/icons-tools/tool-box.png'

const Portfolio = () => {
  return (
    <div className="App">
      <div className="page-scroll">
        <section className="two">
          <div>
            <h1 className="name">Cristian Fernando Laynez Bachez</h1>
            <p className="sub-information">
              Desarrollador de Software Full Stack
            </p>
            <p className="sub-information h1-subtitle">
              Diseñador y Desarrollador de Videojuegos Junior
            </p>
            <br />
            <img
              className="img-cris"
              src={ImgMe}
              alt="El Cristhian"
            />
          </div>
        </section>
        <section className="three">
          <div>
            <p>Actualmente estoy estudiando Ingenieria en Ciencias de la</p>
            <p>Computación y TI en la Universidad del Valle de Guatemala.</p>
            <p>Soy una persona con hambre de conocimiento y que busca</p>
            <p>superarse en las metas/objetivos que se propone.</p>
            <br />
            <br />
            <br />
            <Link to={'/Portafolio_PW3/about'}>
              <div className="btn-about">
                <a className="btn-neon">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <p className="text-about">Conoce más sobre mí</p>
                </a>
              </div>
            </Link>
          </div>
        </section>
        <section className="four">
          <h1 className="habiltys">Habilidades Principales</h1>
        </section>
        <section className="fourp">
          <CardsOuter />
        </section>
        <section className="five">
          <h1>
            Desde pequeño siempre me ha gustado jugar videojuegos. <br />
            Uno de mis grandes sueños y objetivos es crear videojuegos que tengo
            en mi mente. <br />
            Por este sueño estoy estudiando Computer Science
          </h1>
        </section>
        <section className="six">
          <div>
            <h1>
              Actualmente estoy trabajando en mi proyecto personal 'Robotic
              Slaughter'
            </h1>
          </div>
        </section>
        <section className="sixp">
          <SliderCarousel data={Robotic} />
        </section>
        <br />
        <p>Videojuego todavía en desarrollo</p>
        <br />
        <section className="seven">
          <div>
            <h1>Pero no solo me gustan los videojuegos.</h1>
            <h1>
              También escogí la carrera porque me encanta la computación y
              programación.
            </h1>
          </div>
        </section>
        <section className="eight">
          <div>
            <h1>
              Cuando tengo la oportunidad y el tiempo realizo varios ejercicios
              y desafios de código en páginas como:
            </h1>
            <br />
            <div className="flex-competitive-code">
              <div class="flex-item-left">
                <a
                  href="https://www.codewars.com/users/CL%20The%20Dreamer"
                  target="_blank"
                >
                  <img
                    className="img-competitive-code"
                    src={ImgCodeWars}
                    alt="codewars"
                  />
                </a>
              </div>
              <div class="flex-item-right">
                <a
                  href="https://www.hackerrank.com/cristianlaynezb1"
                  target="_blank"
                >
                  <img
                    className="img-competitive-code"
                    src={ImgHackerRank}
                    alt="hackerrank"
                  />
                </a>
              </div>
            </div>
            <br />
            <h1>La Programación Competitiva me interesa</h1>
          </div>
        </section>
        <hr className="hr-langaugues" />
        <section className="nine">
          <div>
            <h1>Lenguajes de Programación</h1>
            <br></br>
            <p>Presiona/dale click al icono 👀</p>
          </div>
        </section>
        <section className="ninep">
          <div>
            <CircularNav
              MainIcon={Code}
              Data={LangCode}
              Number="1"
            />
          </div>
        </section>
        <hr className="hr-tools" />
        <section className="ten">
          <div>
            <h1>Herramientas y Frameworks</h1>
            <br></br>
            <p>Presiona/dale click al icono 👀</p>
          </div>
        </section>
        <section className="tenp">
          <div>
            <CircularNav
              MainIcon={Tools}
              Data={OtherTools}
              Number="2"
            />
          </div>
        </section>
        <hr className="hr-contact" />
        <section className="eleven">
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default Portfolio

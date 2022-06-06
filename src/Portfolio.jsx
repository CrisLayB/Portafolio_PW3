import { Link } from 'react-router-dom'

import './css/PageScroll.css'

// Componentes
import Contact from './components/Contact.jsx'
import CardsOuter from './components/cardsOuter/CardsOuter.jsx'
import SliderCarousel from './components/slider/SliderCarousel.jsx'

// Imagenes
import ImgCodeWars from './img/img-code-wars1.png'
import ImgHackerRank from './img/img-hackerrank.png'

// Data
import Robotic from './data/robotic.js'

/**
 * REFERENCIAS PARA LOS ICONOS DE LOS LENGUAJES Y FRAMEWORKS
 * <a href="https://www.flaticon.com/free-icons/c-sharp" title="c sharp icons">C sharp icons created by Freepik - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/python" title="python icons">Python icons created by Freepik - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons">Javascript icons created by Freepik - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/java" title="java icons">Java icons created by Freepik - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/postgre" title="postgre icons">Postgre icons created by Freepik - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/letter-c" title="letter c icons">Letter c icons created by Hight Quality Icons - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/html-5" title="html 5 icons">Html 5 icons created by Freepik - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/css-3" title="css 3 icons">Css 3 icons created by Freepik - Flaticon</a>
 *
 * <a href="https://www.flaticon.com/free-icons/unity" title="unity icons">Unity icons created by Freepik - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/react" title="react icons">React icons created by Kiranshastry - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/photoshop" title="photoshop icons">Photoshop icons created by Freepik - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/nodejs" title="nodejs icons">Nodejs icons created by Freepik - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/postgre" title="postgre icons">Postgre icons created by Freepik - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/raspberry-pi" title="raspberry pi icons">Raspberry pi icons created by Freepik - Flaticon</a>
 *
 * <a href="https://www.flaticon.com/free-icons/code" title="code icons">Code icons created by Freepik - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/toolbox" title="toolbox icons">Toolbox icons created by Freepik - Flaticon</a>
 */

const Portfolio = () => {
  return (
    <div className="App">
      <div className="page-scroll">
        <section className="two">
          <div>
            <h1 className="name">Cristian Fernando Laynez Bachez</h1>
            <p className="sub-information">
              Ingeniero en Ciencias de la Computación
            </p>
            <p className="sub-information">
              Futuro Desarrollador de Videojuegos
            </p>
          </div>
        </section>
        <section className="three">
          <div>
            <p>Actualmente estoy estudiando Ingenieria en Ciencias de la</p>
            <p>Computación en la Universidad del Valle de Guatemala.</p>
            <p>Soy una persona con hambre de conocimiento y que busca</p>
            <p>superarse en las metas/objetivos que se propone.</p>
            <br />
            <br />
            <br />
            <Link to={'/about'}>
              <div className="btn-about">
                <a href="#">
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
                <a href="https://www.codewars.com/users/CL%20The%20Dreamer">
                  <img
                    className="img-competitive-code"
                    src={ImgCodeWars}
                    alt="codewars"
                  />
                </a>
              </div>
              <div class="flex-item-right">
                <a href="https://www.hackerrank.com/cristianlaynezb1">
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
        <section className="nine">
          <div>
            <h1>Lenguajes de Programación</h1>
            {/* <ul>
              <li>C#</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>C++</li>
              <li>Java</li>
              <li>C</li>
              <li>Kotlin</li>
            </ul> */}
          </div>
        </section>
        <section className="ten">
          <div>
            <h1>Herramientas y Frameworks</h1>
            {/* <ul>
              <li>Unity</li>
              <li>React</li>
              <li>PostgresSQL</li>
              <li>Android Studio</li>
              <li>Raspberry</li>
              <li>Linux</li>
              <li>Photoshop</li>
            </ul> */}
          </div>
        </section>
        <section className="eleven">
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default Portfolio

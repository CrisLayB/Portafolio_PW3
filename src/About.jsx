// Componentes
import Contact from './components/contact/Contact.jsx'
import SliderCarousel from './components/slider/SliderCarousel.jsx'

// Data
import Uvg from './data/uvg.js'
import Web from './data/web.js'

import './css/About.css'

const About = () => {
  return (
    <div className="App">
      <div className="page-scroll">
        <section className="one-about">
          <div>
            <p>Hola! Soy Cristian Laynez</p>
            <h1>Ingeniero en Ciencias de la Computación</h1>
            <p>
              Soy de Guatemala, actualmente estoy en tercer año de Ingenieria en
              Ciencias de la Computación
            </p>
            <p>
              Aprendí a programar cuando tenía 15 años, mi primer lenguaje fue
              C#
            </p>
            <p>
              Desde ese día procuré empezar a aprender por mi cuenta, me
              concidero una persona autodidacta.
            </p>
            <p>
              Gracias a la educación universitaria he podido aprender más sobre
              la programación y otras habilidades
            </p>
            <p>
              como el diseño de aplicaciones, matemáticas y he competido en unas
              cuantas hackatoons y competencias.
            </p>
            <h4>
              Me encanta poder aprender varios temas de computer science, Estoy
              abierto a aprender cualquier tipo de conocimiento que pueda
              adquirir.
            </h4>
          </div>
        </section>
        <section className="three-about">
          <div>
            <h1 className="slide-right">Hobbies</h1>
            <ul className="hobbies-list">
              <li>🎮 Jugar Videojuegos 🎮</li>
              <li>💻 Programar 💻</li>
              <li>🎵 Escuchar Música 🎵 (especialmente de los 80's y 90's)</li>
              <li>⚔ Mirar Anime ⚔</li>
              <li>🤿 Jugar Deportes 🥊 (Cuando tengo la oportunidad)</li>
            </ul>
          </div>
        </section>
        <section className="four-about">
          <div>
            <h1>Historial Académico</h1>
          </div>
        </section>
        <section className="five-about">
          <div>
            <h1>Colegio Adventista JUBA - [2016 - 2019]</h1>
            <p>El año 2016 a 2017 curse los grados 2do y 3ro básico.</p>
            <p>El año 2018 a 2019 estudié Bachillerato en Computación.</p>
            <p>
              En ese tiempo aproveche a aprender varias cosas tanto de la
              programación como del Arte en 3D y el desarrollo de videojuegos.
            </p>
          </div>
        </section>
        <section className="five-about-2">
          <div>Implementar carrousel</div>
        </section>
        <section className="six-about">
          <div>
            <h1>Universidad del Valle de Guatemala - [2020 - 2025]</h1>
            <br />
            <p>
              Nunca olvidaré ese primer día de la Universidad, mis posibilidades
              de entrar eran muy bajas a pesar de haber pasado el examen de
              admisión y ortorgado un porcentaje de beca.
            </p>
            <p>
              Pero gracias a mi persistencia y familia que me apoyaron y
              confiaron en mí logré entrar a la Universidad y a la Carrera de
              mis Sueños.
            </p>
            <br />
            <p>
              Hasta la fecha no he olvidado mis ideales, objetivos y sueños, me
              mantengo fiel ante mis sueños y anhelos.
            </p>
            <br />
            <p>
              Cuando me aferro a algo que realmente quiero/anhelo no lo dejo
              soltar con facilidad.
            </p>
          </div>
        </section>
        <section className="six-about-1">
          <div>
            <h2>Algunas actividades realizadas por el momento en UVG:</h2>
          </div>
        </section>
        <section className="six-about-2">
          <SliderCarousel data={Uvg} />
        </section>
        <section className="six-about-3">
          <div>
            <h2>
              Laboratorios favoritos del Curso Sistemas y Tecnologías Web:
            </h2>
          </div>
        </section>
        <section className="six-about-4">
          <SliderCarousel data={Web} />
        </section>
        <hr className="hr-contact" />
        <section className="seven-about">
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default About

/**
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologías Web - Sección 10
 *
 * Proyecto 3 - Portafolio Personal
 *
 * ! About : Componente que se usará como página
 *
 * @author   Cristian Fernando Laynez Bachez - 201281
 * @date     2-Junio-2022
 */

import '../css/About.css'

import { Contact, SliderCarousel } from '../components'
import { Juba, Uvg } from '../data/'

export const About = () => {
  return (
    <div className="App">
      <div className="page-scroll">
        <section className="one-about">
          <div>
            <h1>Hello! I{`'`}m Cristian Laynez</h1>
            <br></br>
            <p>I learned to program when I was 15 years old, my first language was C#</p>
            <p>
              Since that day I tried to start learning on my own, I consider myself a self-taught
              person.
            </p>
            <p>
              Thanks to university education I have been able to learn more about programming and
              other skills
            </p>
            <p>
              such as application design, mathematics, and I have competed in a few hackathons and
              competitions.
            </p>
          </div>
        </section>
        <section className="three-about">
          <div>
            <h1 className="slide-right">Hobbies</h1>
            <ul className="hobbies-list">
              <li>🎮 Playing Video Games 🎮</li>
              <li>💻 Programming 💻</li>
              <li>
                🎵 Listening to Music 🎵 (especially from the 80{`'`}s and 90{`'`}s)
              </li>
              <li>⚔ Watching Anime ⚔</li>
            </ul>
          </div>
        </section>
        <section className="four-about">
          <div>
            <h1>Academic History</h1>
          </div>
        </section>
        <section className="five-about">
          <div>
            <h1>Adventist School JUBA - [2016 - 2019]</h1>
            <p>From 2016 to 2017 I attended 8th and 9th grade.</p>
            <p>From 2018 to 2019 I studied a Computer Science Baccalaureate.</p>
            <p>
              During that time I took the opportunity to learn several things about programming as
              well as 3D Art and video game development.
            </p>
          </div>
        </section>
        <section className="five-about-2">
          <SliderCarousel data={Juba} />
        </section>
        <section className="six-about">
          <div>
            <h1>Universidad del Valle de Guatemala - [2020 - 2025]</h1>
            <br />
            <p>
              I will never forget that first day at University, my chances of getting in were very
              low despite having passed the admission exam and being granted a scholarship
              percentage.
            </p>
            <p>
              But thanks to my persistence and my family who supported and believed in me, I managed
              to enter the University and the career of my dreams.
            </p>
            <br />
            <p>
              To this day I have not forgotten my ideals, goals, and dreams, I remain faithful to my
              dreams and aspirations.
            </p>
            <br />
            <p>When I hold on to something I really want/desire, I don{`'`}t let go easily.</p>
          </div>
        </section>
        <section className="six-about-1">
          <div>
            <h2>Some outstanding activities and projects carried out at UVG:</h2>
          </div>
        </section>
        <section className="six-about-2">
          <SliderCarousel data={Uvg} />
        </section>
        <hr className="hr-contact" />
        <section className="seven-about">
          <Contact />
        </section>
      </div>
    </div>
  )
}

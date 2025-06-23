/**
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologías Web - Sección 10
 *
 * Proyecto 3 - Portafolio Personal
 *
 * ! Cards Outer : Mostrar Cartas bonitas neon
 *
 * @author   Cristian Fernando Laynez Bachez - 201281
 * @date     2-Junio-2022
 */

import './cardsOuter.css'

const skills = [
  {
    title: 'Game Development',
    description:
      'Unity 2D/3D and C# are my main tools. I also design game mechanics and storylines.',
  },
  {
    title: 'Full Stack Development',
    description:
      'I can work with both frontend (HTML, CSS, JavaScript, React) and backend (Node.js, Express). I prefer backend when required.',
  },
  {
    title: 'Project Managment',
    description: "I'm enable to coordinate and create a work flow for create amazing projects.",
  },
]

export const CardsOuter = () => {
  return (
    <div className="card-outer">
      <div className="container">
        {skills.map((skill, idx) => (
          <div className="card" key={idx}>
            <div className="face face1">
              <div className="content">
                <h3 className="title-card">{skill.title}</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

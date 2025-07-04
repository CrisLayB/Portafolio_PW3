/**
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologías Web - Sección 10
 *
 * Proyecto 3 - Portafolio Personal
 *
 * ! Contact : Mostrar medio de contacto hacia mi persona
 *
 * @author   Cristian Fernando Laynez Bachez - 201281
 * @date     2-Junio-2022
 */

import IconGitHub from '../../icons/icons8-github-150.png'
import IconGmail from '../../icons/icons8-gmail-logo-150.png'
import IconLinkedin from '../../icons/icons8-linkedin-128.png'

import './Contact.css'

export const Contact = () => {
  return (
    <div>
      <h1>Contact me</h1>
      <br />
      <ul>
        <a
          className="a-social-media"
          target="_blank"
          href="mailto:cristianlaynezbachez@gmail.com"
          rel="noreferrer"
        >
          <img className="img-social-media" src={IconGmail} alt="gmail"></img>
        </a>
        <a
          className="a-social-media"
          target="_blank"
          href="https://github.com/CrisLayB"
          rel="noreferrer"
        >
          <img className="img-social-media" src={IconGitHub} alt="linkedin"></img>
        </a>
        <a
          className="a-social-media"
          target="_blank"
          href="https://www.linkedin.com/in/cristian-laynez-b66a77173/"
          rel="noreferrer"
        >
          <img className="img-social-media" src={IconLinkedin} alt="linkedin"></img>
        </a>
      </ul>
    </div>
  )
}

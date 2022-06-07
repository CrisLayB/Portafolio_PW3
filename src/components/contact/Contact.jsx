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

/**
 * GMAIL:
 * <a target="_blank" href="https://icons8.com/icon/38158/gmail-logo">Gmail logo</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
 *
 * GITHUB:
 * <a target="_blank" href="https://icons8.com/icon/12598/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
 *
 * LINKEDIN:
 * <a target="_blank" href="https://icons8.com/icon/IuI5Yd3J3qcC/linkedin">LinkedIn</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
 */

import IconGmail from '../../icons/icons8-gmail-logo-150.png'
import IconGithub from '../../icons/icons8-github-150.png'
import IconLinkedin from '../../icons/icons8-linkedin-128.png'

import './Contact.css'

const Contact = () => {
  return (
    <div>
      <h1>Contactame</h1>
      <br />
      <ul>
        <a
          className="a-social-media"
          target="_blank"
          href="mailto:cristianlaynezbachez@gmail.co,"
          // href="https://icons8.com/icon/38158/gmail-logo"
        >
          <img className="img-social-media" src={IconGmail} alt="gmail"></img>
        </a>
        <a
          className="a-social-media"
          target="_blank"
          href="https://github.com/CRLB-sketch"
          // href="https://icons8.com/icon/12598/github"
        >
          <img className="img-social-media" src={IconGithub} alt="gmail"></img>
        </a>
        <a
          className="a-social-media"
          target="_blank"
          href="https://www.linkedin.com/in/cristian-laynez-b66a77173/"
          // href="https://icons8.com/icon/IuI5Yd3J3qcC/linkedin"
        >
          <img
            className="img-social-media"
            src={IconLinkedin}
            alt="gmail"
          ></img>
        </a>
      </ul>
    </div>
  )
}

export default Contact

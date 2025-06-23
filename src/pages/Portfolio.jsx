/**
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologías Web - Sección 10
 *
 * Proyecto 3 - Portafolio Personal
 *
 * ! Portafolio : Página Principal Portafolio
 *
 * @author    Cristian Fernando Laynez Bachez - 201281
 * @date      2-Junio-2022
 */

import '../css/HeroSection.css'
import '../css/AboutMeSection.css'
import '../css/GoldenfySection.css'
import '../css/PageScroll.css'

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { CardsOuter, CircularNav, Contact, SliderCarousel } from '../components'
import { GamesInDevelpoment, LangCode, OtherTools } from '../data/'
import ImgMe from '../img/cris_lay.jpg'
import MySelf3D from '../img/my_self_in_3d.png'
import Tools from '../img/icons-tools/tool-box.png'
import Code from '../img/icons-tools/window.png'
import ImgCodeWars from '../img/img-code-wars1.png'
import ImgHackerRank from '../img/img-hackerrank.png'
import GoldenfyStudiosLogo from '../img/goldenfy_games_logo.png'

const profileImages = [
  ImgMe,
  MySelf3D,
];

const newsItems = [
  {
    id: 1,
    title: "Platyfa - Goldenfy Studios (Videogame)",
    description: "Description and new updates about our latest game project...",
    link: "/Portafolio_PW3/games",
    date: "2025"
  },
  {
    id: 2,
    title: "Instagram for Goldenfy Games Its Avaliable",
    description: "I'm exited to introduce all of you, the oficial instagram page",
    link: "https://www.instagram.com/goldenfy_studios?igsh=MWJpaXBnZGF3Nnhwcw==",
    date: "2025"
  },
];

export const Portfolio = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % profileImages.length
      );
    }, 4000);

    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    const newsInterval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => 
        (prevIndex + 1) % newsItems.length
      );
    }, 5000);

    return () => clearInterval(newsInterval);
  }, []);

  return (
    <div className="App">
      <div className="page-scroll">
        <section className="hero-section">
          {/* Shooting Stars Background */}
          <div className="shooting-stars">
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
          </div>

          <div className="hero-container">
            {/* Left Side - Profile Image */}
            <div className="profile-section">
              <div className="profile-image-container">
                <img 
                  className="profile-image" 
                  src={profileImages[currentImageIndex]} 
                  alt="Cristian Fernando Laynez Bachez" 
                />
                <div className="image-frame"></div>
                {/* Image indicators */}
                <div className="image-indicators">
                  {profileImages.map((_, index) => (
                    <button
                      key={index}
                      className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Information */}
            <div className="info-section">
              <h1 className="hero-name">Cristian Fernando Laynez Bachez</h1>
              <p className="hero-welcome">
                Welcome to my web site and portfolio! You can know more about me and my projects. Be free to interact :)
              </p>
              
              <div className="roles-list">
                <p className="role">Computer Science Engineer</p>
                <p className="role">Game Developer & Game Designer</p>
                <p className="role">Full Stack Developer</p>
                <p className="role">Project Manager</p>
              </div>

              {/* News Carousel */}
              <div className="news-carousel">
                <div className="news-item">
                  <h3 className="news-title">{newsItems[currentNewsIndex].title}</h3>
                  <p className="news-description">{newsItems[currentNewsIndex].description}</p>
                  <div className="news-footer">
                    <span className="news-date">{newsItems[currentNewsIndex].date}</span>
                    <Link 
                      to={newsItems[currentNewsIndex].link} 
                      className="news-link"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
                
                {/* News indicators */}
                <div className="news-indicators">
                  {newsItems.map((_, index) => (
                    <button
                      key={index}
                      className={`indicator ${index === currentNewsIndex ? 'active' : ''}`}
                      onClick={() => setCurrentNewsIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-me-section">
          <div className="about-me-container">
            <div className="about-me-content">
              <p className="about-text">I am an Engineer in Computer Science and Information Technology.</p>
              <p className="about-text">I consider myself a creative and analytical person</p>
              <p className="about-text">capable of turning ideas and needs into reality.</p>
              <p className="about-text highlight">My greatest passion is video game development and design.</p>
              
              <Link to={'/Portafolio_PW3/about'} className="btn-about-me">
                <div className="btn-neon-blue">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <p className="text-about-me">Learn More About Me</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="four">
          <h1 className="habiltys">Main Skills</h1>
        </section>
        <section className="fourp">
          <CardsOuter />
        </section>
        <section className="five">
          <h1>
            Since I was a child, I have always liked playing video games. <br />
            One of my biggest dreams and goals is to create the video games I have in my mind. <br />
            For this dream, I am studying Computer Science. <br />
            Fortunately, I am achieving it with various projects <br />
            that will be shown below.
          </h1>
        </section>
        <section className="six">
          <div>
            <h1>Video games developed and/or in development:</h1>
          </div>
        </section>
        <section className="sixp">
          <SliderCarousel data={GamesInDevelpoment} />
        </section>
        <br />
        <br />
        <section className="goldenfy-header">
          <div>
            <h1>Goldenfy Studios</h1>
          </div>
        </section>

        <section className="goldenfy-content">
          <div className="goldenfy-container">
            <div className="goldenfy-logo-section">
              <img src={GoldenfyStudiosLogo} alt="Goldenfy Studios Logo" className="goldenfy-logo-img" />
            </div>
            
            <div className="goldenfy-info">
              <h1 className="startup-title">The startup of a video game studio</h1>
              <p className="startup-description">
                Foundation and initiative of a small multidisciplinary group that seeks to create video games 
                by mixing the best of gaming with new ideas and different contexts, among other varied experiences.
              </p>
              
              <Link to={'/Portafolio_PW3/about'} className="btn-learn-more">
                <div className="btn-neon">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <p className="text-learn-more">Learn More About Goldenfy Studios</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="seven">
          <div>
            <h1>But I don't just like video games.</h1>
            <h1>I also chose this career because I love computing and programming.</h1>
          </div>
        </section>
        <section className="eight">
          <div>
            <h1>
              When I have the opportunity and time, I do several coding exercises and challenges on websites like:
            </h1>
            <br />
            <div className="flex-competitive-code">
              <div className="flex-item-left">
                <a
                  href="https://www.codewars.com/users/CL%20The%20Dreamer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="img-competitive-code" src={ImgCodeWars} alt="codewars" />
                </a>
              </div>
              <div className="flex-item-right">
                <a
                  href="https://www.hackerrank.com/cristianlaynezb1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="img-competitive-code" src={ImgHackerRank} alt="hackerrank" />
                </a>
              </div>
            </div>
            <br />
            <h1>Competitive Programming interests me</h1>
          </div>
        </section>
        <hr className="hr-langaugues" />
        <section className="nine">
          <div>
            <h1>Programming Languages</h1>
            <br></br>
            <p>Press/click the icon 👀</p>
          </div>
        </section>
        <section className="ninep">
          <div>
            <CircularNav MainIcon={Code} Data={LangCode} Number="1" />
          </div>
        </section>
        <hr className="hr-tools" />
        <section className="ten">
          <div>
            <h1>Tools and Frameworks</h1>
            <br></br>
            <p>Press/click the icon 👀</p>
          </div>
        </section>
        <section className="tenp">
          <div>
            <CircularNav MainIcon={Tools} Data={OtherTools} Number="2" />
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

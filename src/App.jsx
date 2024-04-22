import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  /* -----------------------------------------
    Have focus outline only for keyboard users 
   ---------------------------------------- */

  const handleFirstTab = (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing')

      window.removeEventListener('keydown', handleFirstTab)
      window.addEventListener('mousedown', handleMouseDownOnce)
    }

  }

  const handleMouseDownOnce = () => {
    document.body.classList.remove('user-is-tabbing')

    window.removeEventListener('mousedown', handleMouseDownOnce)
    window.addEventListener('keydown', handleFirstTab)
  }

  window.addEventListener('keydown', handleFirstTab)

  const backToTopButton = document.querySelector(".back-to-top");
  let isBackToTopRendered = false;

  let alterStyles = (isBackToTopRendered) => {
    backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
    backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
    backToTopButton.style.transform = isBackToTopRendered
      ? "scale(1)"
      : "scale(0)";
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      isBackToTopRendered = true;
      alterStyles(isBackToTopRendered);
    } else {
      isBackToTopRendered = false;
      alterStyles(isBackToTopRendered);
    }
  });
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" type="image/png" href="./images/favicon.png" />


        <title>
          Alexandra Docheff | A Web Developer based in Montevideo, Uruguay.
        </title>

        <meta name="description" content="Add small description of yourslef." />

        <meta name="keywords" content="Alexandra Docheff, Javascript, React, HTML, CSS, PostgreSQL" />
        <link rel="stylesheet" href="index.css" />
      </head>

      <body>

        {/* -- ***** Header ***** -- */}

        <header class="header" role="banner" id="top">
          <div class="row">
            <nav class="nav" role="navigation">
              <ul class="nav__items">
                <li class="nav__item"><a href="#work" class="nav__link">Work</a></li>
                {/* <li class="nav__item"><a href="#clients" class="nav__link">Clients</a></li> */}
                <li class="nav__item">
                  <a href="#about" class="nav__link">About</a>
                </li>
                <li class="nav__item">
                  <a href="#contact" class="nav__link">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="header__text-box row">
            <div class="header__text">
              <h1 class="heading-primary">

                <span>Alexandra Docheff</span>
              </h1>

              <p>A Web Developer based in Montevideo, Uruguay.</p>
              <a href="#contact" class="btn btn--pink">Get in touch</a>
            </div>
          </div>
        </header>

        <main role="main">

          {/* -- ***** Work ***** -- */}

          <section class="work" id="work">
            <div class="row">
              <h2>My Work</h2>
              <div class="work__boxes">

                {/* -- Each div with the work__box class is a project. -- */}

                <div class="work__box">
                  <div class="work__text">
                    <h3>Audn Music App</h3>
                    <p>
                      Music that follows your emotions. <br />
                      The experience you get with this app is unique and personal.It focuses on creating song lists based on your emotions and context of the day.
                    </p>
                    <ul class="work__list">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>React.js</li>
                      <li>Node</li>
                      <li>PostgreSQL</li>
                    </ul>

                    <div class="work__links">
                      <a href="" target="_blank" class="link__text">
                        Visit Site <span>&rarr;</span>
                      </a>
                      <a href="https://github.com/Seraphyr/Frontend-Proyecto-Integrador-Final" title="View Source Code" target="_blank">
                        <a href="https://github.com/Seraphyr/Backend-Proyecto-Integrador-Final" title="View Source Code" target="_blank" />
                        <img src="./images/github.svg" class="work__code" alt="GitHub" />
                      </a>
                    </div>
                  </div>
                  <div class="work__image-box">
                    <img src="./images/audn-mockup.jpg" class="work__image" alt="Project 1" />
                  </div>
                </div>

                <div class="work__box">
                  <div class="work__text">
                    <h3>Pokedex</h3>
                    <p>
                      The Pokedex allows you to search and filter information about your favorite Pokémon. <br />This project taught me about the use of APIs, how to consume them, and how to make their information available on a mobile web page.              </p>
                    <ul class="work__list">
                      <li>React</li>
                      <li>Next.js</li>
                      <li>Node</li>
                    </ul>

                    <div class="work__links">
                      <a href="https://proyecto-pokedex-phi.vercel.app/" class="link__text">
                        Visit Site <span>&rarr;</span>
                      </a>
                      <a href="https://github.com/Seraphyr/proyectoPokedex" title="View Source Code" target="_blank">
                        <img src="./images/github.svg" class="work__code" title="View Source Code" alt="GitHub" />
                      </a>
                    </div>
                  </div>
                  <div class="work__image-box">
                    <img src="./images/pokedex-mockup.jpg" class="work__image" alt="Project 1" />
                  </div>
                </div>

                <div class="work__box">
                  <div class="work__text">
                    <h3>Fylo one page website</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                      eius.
                    </p>
                    <ul class="work__list">
                      <li>React</li>
                      <li>Next.js</li>
                      <li>Node</li>
                    </ul>

                    <div class="work__links">
                    <a href="https://sprint5-lovat.vercel.app" class="link__text">
                        Visit Site <span>&rarr;</span>
                      </a>
                      <a href="https://github.com/Seraphyr/sprint5" title="View Source Code" target="_blank">
                        <img src="./images/github.svg" class="work__code" title="View Source Code" alt="GitHub" />
                      </a>
                    </div>
                  </div>
                  <div class="work__image-box">
                    <img src="./images/mockup2.jpg" class="work__image" alt="Project 3" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* -- ***** Clients ***** -- */}

          {/*  <section class="client" id="clients">
      <div class="row">
        <h2>Clients</h2>
        <div class="client__logos">
          
          
        </div>
      </div>
    </section>
 */}
          {/* -- ***** About ***** -- */}

          <section class="about" id="about">
            <div class="row">
              <h2>About Me</h2>
              <div class="about__content">
                <div class="about__text">

                  <p>

                    I am Alexandra, a passionate Junior Web Developer with a focus on frontend. If I had to describe myself with one word, it would be perseverance. This quality has been forged in me through a diverse range of work and personal experiences that have taught me the importance of standing firm in the face of challenges and learning from every obstacle. <br />

                    My journey so far has been a blend of experiences in different roles and areas of knowledge. From my work in administrative procedure management to my training in graphic design and web development, I have gained diverse skills and knowledge that have prepared me to tackle web development challenges with confidence and determination. <br />

                    My academic background includes a certification in UX Design, along with solid training in web development at Senpai Academy. This combination of hands-on experience and academic training has provided me with a solid foundation in technical skills such as HTML, CSS, JavaScript, React, and Node.js, as well as agile methodologies like SCRUM. <br />

                    My current focus is on finding opportunities to grow as a web developer and contribute meaningfully to exciting projects. I am ready to face new challenges and continue learning along the way. <br />
                  </p>

                  <a href="./images/Alexandra Docheff - CV.pdf" rel="noopener noreferrer" target="_blank" class="btn">My Resume</a>
                </div>

                <div class="about__photo-container">

                  {/* <img class="about__photo" src="./images/syed-ali-hussnain.jpg" alt="" /> */}
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* -- ***** Contact ***** -- */}

        <section class="contact" id="contact">
          <div class="row">
            <h2>Get in Touch</h2>
            <div class="contact__info">
              <p>
                Are you looking for a fast-performing and user-friendly website to
                represent your product or business? or looking for any kind of
                consultation? or want to ask questions? or have some advice for me
                or just want to say "Hi 👋" in any case feel free to Let me know. I
                will do my best to respond back. 😊 The quickest way to reach out to
                me is via an email.
              </p>

              <a href="mailto:t.docheff@gmail.com" class="btn">t.docheff@gmail.com</a>
              <a
                class="btn" onClick={() => navigator.clipboard.writeText('t.docheff@gmail.com')}Copy this text to clipboard
              >Copy to Clipboard</a>
            </div>
          </div>
        </section>

        {/* -- ***** Footer ***** -- */}

        <footer role="contentinfo" class="footer">
          <div class="row">

            <ul class="footer__social-links">

              <li class="footer__social-link-item">
                <a href="https://github.com/Seraphyr" title="Link to Github Profile">
                  <img src="./images/github.svg" class="footer__social-image" alt="Github" />
                </a>
              </li>

              <li class="footer__social-link-item">
                <a href="https://www.linkedin.com/in/alexandra-docheff/" title="Link to Linkedin Profile" />
                <img src="./images/linkedin.svg" title="Link to Linkedin Profile" class="footer__social-image" alt="Linkedin" />

              </li>
            </ul>



            {/* <div class="footer__github-buttons">
        <iframe
          src="https://ghbtns.com/github-btn.html?user=nisarhassan12&repo=portfolio-template&type=watch&count=true"
          frameborder="0" scrolling="0" width="170" height="20" title="Watch Portfolio Template on GitHub">
        </iframe>
      </div> */}
          </div>
        </footer>

        <a href="#top" class="back-to-top" title="Back to Top">
          <img src="./images/arrow-up.svg" alt="Back to Top" class="back-to-top__image" />
        </a>
        <script src="./index.js"></script>
      </body>


    </>
  )
}

export default App

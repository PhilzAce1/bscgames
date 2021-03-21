import React from 'react';

/**==================Images=============================== */
import bgames2PNG from '../assets/images/bgames2.png';
import MailPNG from '../assets/images/email.png';
import TelegramPNG from '../assets/images/telegram.png';
import ManPNG from '../assets/images/man.jpg';
import TwitterPNG from '../assets/images/twitter.png';
import Supply from '../assets/images/tokenomics.png';

/**=================Style======================= */
// import '../assets/css/main_style.css';
/**=================External Dependencies============================= */
import Particles from 'react-particles-js';

export default function Home() {
  return (
    <div className="home">
      <header>
        <nav class="navbar navbar-inverse navbar-fixed-top">
          <div class="container">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a href="https://stuff.com" class="navbar-brand">
                <img class="logo" src={bgames2PNG} alt="tokenlogo" />
              </a>
            </div>
            <div
              class="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul class="nav navbar-nav">
                <li>
                  <a class="gold" href="index.html">
                    Home
                  </a>
                </li>
                <li>
                  <a class="gold" href="https://docs.bscgames.win/">
                    Documentation
                  </a>
                </li>
                <ul class="nav navbar-right">
                  <a href="https://twitter.com/bscgameswin">
                    <img src={TwitterPNG} alt="twitter" />
                  </a>
                  <a href="cdn-cgi/l/email-protection.html#543d3a323b1436273733353931277a233d3a">
                    <img src={MailPNG} alt="email" />
                  </a>
                  <a href="https://t.me/bscgameswin">
                    <img src={TelegramPNG} alt="telegram" />
                  </a>
                </ul>
              </ul>
            </div>
          </div>
        </nav>
        <div class="container">
          <div class="row ccounter">
            <div class="col-sm-12 text-center">
              <h1 class="intro-title" style={{ color: '#ffd54f' }}>
                BSC GAMES
              </h1>
              <p class="intro-text">
                Binance Smart Chain Decentralized <span>Game Platform</span>
              </p>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-sm-offset-1 col-md-8 col-md-offset-2">
              <h1 class="intro-title" style={{ color: '#ffd54f' }}>
                BSC GAMES CONCEPT
              </h1>
              <p>
                BSC Games is decentralized gaming platform on the Binance Smart
                Chain hence the name BSC Games, it is owned by no one nor
                present in any physical location but owned by everyone holding
                the platform BSCG token.
              </p>
              <p>
                The concept behind BSC Games is to turn gaming from just leisure
                activity to a cash cow. BSC Games will redefine the idea of
                online betting and casino generally by offering peer to peer
                competitive board and video games.
              </p>
              <p>
                Players will be able to play for leisure and at the same time
                compete against each other to earn in board games like snooker,
                scrabble, ludo and lots more. Also video games such as car
                racing, combat, shooting and strategy games and many others.
                Sport games like soccer, tennis and so many fun filled games.
              </p>
            </div>
            <div class="col-sm-12 col-sm-offset-1 col-md-8 col-md-offset-2">
              <hr />
              <h1 class="intro-title" style={{ color: '#ffd54f' }}>
                GAMING MODEL
              </h1>
              <div>
                <img
                  src={ManPNG}
                  alt="man"
                  class="img-responsive img-center man"
                />
              </div>
              <br />
              <p>
                Gamers on BSC Games platform will have two broad options of
                playing and making money on the platform.
                <br />
                1. By playing the casino games of coin flip and BNBroll to
                multiply their BNB up to 98X. <br />
                2. By playing against other players on the platform in the
                available peer to peer games and participating in cryptolympic
                tournaments that will be hosted on the platform from time to
                time in which BSCG Token will be used as game currency.
              </p>
              <hr />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container statistics text-center">
          <div class="row">
            <h1 class="intro-title" style={{ color: '#ffd54f' }}>
              TOKEN MODEL
            </h1>
            <div class="row">
              <img
                class="pie img-responsive img-center"
                src={Supply}
                alt="supply"
              />
            </div>
            <div class="col-sm-4">
              <p>
                Token shall be used to distribute the platform profit to token
                holder who have fulfilled the condition for profit distribution
              </p>
            </div>
            <div class="col-sm-4">
              <p>
                Token shall give token holder voting right on governance issues
                since every token holder is a decision maker and the platform is
                owned by no one but everyone
              </p>
            </div>
            <div class="col-sm-4">
              <p>
                Token shall be used alongside BNB as the platform gaming and
                contest currencies
              </p>
            </div>
          </div>
          <br />
          <br />
        </div>
      </section>
      <section id="particles-js">
        <Particles
          params={{
            particles: {
              number: { value: 80, density: { enable: true, value_area: 800 } },
              color: { value: '#ffffff' },
              shape: {
                type: 'circle',
                stroke: { width: 0, color: '#000000' },
                polygon: { nb_sides: 5 },
                image: { src: 'img/github.svg', width: 100, height: 100 },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 5,
                random: true,
                anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
              },
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true,
              },
              modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: { distance: 200 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
              },
            },
            retina_detect: true,
            config_demo: {
              hide_card: false,
              background_color: '#b61924',
              background_image: '',
              background_position: '50% 50%',
              background_repeat: 'no-repeat',
              background_size: 'cover',
            },
          }}
        />
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h2 class="white">Roadmap</h2>
              <br />
              <br />
              <ul class="timeline">
                <li>
                  <div class="timeline-badge">
                    <i class="fa fa-calendar"></i>
                  </div>
                  <div class="timeline-line">&nbsp;</div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">Q1 2021</h4>
                    </div>
                    <div class="timeline-body">
                      <p>
                        Ground work on project setup and scout for
                        collaborations
                      </p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-badge">
                    <i class="fa fa-calendar"></i>
                  </div>
                  <div class="timeline-line">&nbsp;</div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">Q2 2021</h4>
                    </div>
                    <div class="timeline-body">
                      <p>Limited launch of platform operations</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="timeline-badge">
                    <i class="fa fa-calendar"></i>
                  </div>
                  <div class="timeline-line">&nbsp;</div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">Q3 2021</h4>
                    </div>
                    <div class="timeline-body">
                      <p>
                        Launch of peer to peer gaming operation including
                        tournaments
                      </p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-badge">
                    <i class="fa fa-calendar"></i>
                  </div>
                  <div class="timeline-line">&nbsp;</div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">Q4 2021</h4>
                    </div>
                    <div class="timeline-body">
                      <p>
                        Progressive development of platform and more
                        collaborations throughout platform lifetime.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <br />
            <br />
          </div>
        </div>
      </section>
      <footer class="text-center">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              Copyright &copy; 2021 BSC GAMES <span class="hidden-xs">|</span>
              <br class="visible-xs" />
              All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

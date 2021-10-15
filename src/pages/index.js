import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Hero from '../components/Hero';
import colors from '../config/colors';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { useRouter } from 'next/router';
import VisibilitySensor from 'react-visibility-sensor';
import { motion, useAnimation } from 'framer-motion';

import Footer from '../globals/footer/Footer';
import bg from '../assets/img/19.png';
import bg2 from '../assets/img/20.png';
import Link from 'next/link';

import About from '../components/About';
import colorless_arrow from '../assets/img/colorless_arrow.png';
import impactBig from '../assets/img/12.png';
import impact from '../assets/img/12a.png';
import creative from '../assets/img/12c.png';
import creativeBig from '../assets/img/12cb.png';
import Navbar from '../globals/navbar/Navbar';
import YourDream from '../components/YourDream';
import mentor from '../assets/img/34.png';
import mentorBig from '../assets/img/34a.png';
import driven from '../assets/img/37.png';
import drivenBig from '../assets/img/37a.png';
import evolution from '../assets/img/14.png';
import impactNg from '../assets/img/16.png';
import partnership from '../assets/img/28a.png';
import idea from '../assets/img/28b.png';
import investment from '../assets/img/28c.png';
import { useInView } from 'react-intersection-observer';
import roll from '../assets/img/29a.png';
import Modal from '../components/Modal';

const Card = ({ img, title, txt }) => {
  return (
    <article className="card">
      <div className="img-container">
        <img src={img} alt="incubator reality" />
      </div>
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="txt">
        <p>{txt}</p>
      </div>
    </article>
  );
};

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [isVisibleOne, setIsVisibleOne] = useState(false);
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);
  const videoRefOne = useRef(null);
  const videoRefTwo = useRef(null);
  const controlsOne = useAnimation();
  const controlsTwo = useAnimation();
  const controlsThree = useAnimation();
  const controlsFour = useAnimation();
  const controlsFive = useAnimation();
  const controlsSix = useAnimation();
  const [refOne, inViewOne] = useInView();
  const [refTwo, inViewTwo] = useInView();
  const [refThree, inViewThree] = useInView();
  const [refFour, inViewFour] = useInView();
  const [refFive, inViewFive] = useInView();
  const [refSix, inViewSix] = useInView();
  const [show, setShow] = useState({
    impact: false,
    creative: false,
    driven: false,
    evolution: false,
    mentor: false,
    impactNg: false,
  });

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const handleShowModal = (data) => {
    setShowModal(!showModal);
    switch (data) {
      case 'impact':
        return setShow({
          impact: true,
          creative: false,
          driven: false,
          evolution: false,
          mentor: false,
          impactNg: false,
        });
      case 'creative':
        return setShow({
          impact: false,
          creative: true,
          driven: false,
          evolution: false,
          mentor: false,
          impactNg: false,
        });
      case 'driven':
        return setShow({
          impact: false,
          creative: false,
          driven: true,
          evolution: false,
          mentor: false,
          impactNg: false,
        });
      case 'evolution':
        return setShow({
          impact: false,
          creative: false,
          driven: false,
          evolution: true,
          mentor: false,
          impactNg: false,
        });
      case 'mentor':
        return setShow({
          impact: false,
          creative: false,
          driven: false,
          evolution: false,
          mentor: true,
          impactNg: false,
        });
      case 'impactNg':
        return setShow({
          impact: false,
          creative: false,
          driven: false,
          evolution: false,
          mentor: false,
          impactNg: true,
        });
      default:
        return setShow({
          impact: false,
          creative: false,
          driven: false,
          evolution: false,
          mentor: false,
          impactNg: false,
        });
    }
  };

  useEffect(() => {
    if (isVisibleOne) {
      videoRefOne.current.play();
    } else {
      if (videoRefOne.current.play) {
        videoRefOne.current.pause();
      }
    }
  }, [isVisibleOne]);

  useEffect(() => {
    if (isVisibleTwo) {
      videoRefTwo.current.play();
    } else {
      if (videoRefTwo.current.play) {
        videoRefTwo.current.pause();
      }
    }
  }, [isVisibleTwo]);

  const appearUp = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 }, delay: '0' },
    hidden: { opacity: 0, y: 10 },
  };

  useEffect(() => {
    if (inViewOne) {
      controlsOne.start('visible');
    } else {
      controlsOne.start('hidden');
    }
    if (inViewTwo) {
      controlsTwo.start('visible');
    } else {
      controlsTwo.start('hidden');
    }
    if (inViewThree) {
      controlsThree.start('visible');
    } else {
      controlsThree.start('hidden');
    }
    if (inViewFour) {
      controlsFour.start('visible');
    } else {
      controlsFour.start('hidden');
    }
    if (inViewFive) {
      controlsFive.start('visible');
    } else {
      controlsFive.start('hidden');
    }
    if (inViewSix) {
      controlsSix.start('visible');
    } else {
      controlsSix.start('hidden');
    }
  }, [
    controlsOne,
    inViewOne,
    controlsTwo,
    inViewTwo,
    controlsThree,
    inViewThree,
    controlsFour,
    inViewFour,
    controlsFive,
    inViewFive,
    controlsSix,
    inViewSix,
  ]);

  const router = useRouter();

  const handleClick = (href) => {
    router.push(href);
  };

  return (
    <Wrapper>
      <Head>
        <title>The Incubator Reality</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="The Incubator Reality - a social-entrepreneurial program where the best brains are made to compete with their skills, ideas and passion during incubation. The Incubator Reality as a vehicle, aims to disrupt start-up and elevate the thoughts of innovation."
        />
        <meta
          name="keywords"
          content="innovation, startups, realty tv show, the incubator reality, theincubatoreality, incubator reality, entertainment, transformation, entrepreneurship, gamechangers, creativity, partnership, incubationreality, startup, "
        />
        <meta name="author" content="The Incubator Reality" />
      </Head>
      <header>
        <Navbar />
        <Hero />
      </header>

      <main>
        <section className="indexSection">
          <div className="bannerSection">
            <div className="caption">
              <span className="caption-text">
                WATCH OUT FOR AUDITIONS AT THE FOLLOWING LOCATIONS &nbsp;&nbsp;
                Lagos &nbsp;• &nbsp;Ibadan &nbsp;• &nbsp;Abuja&nbsp; • &nbsp;
                London &nbsp;• &nbsp;New-York&nbsp; •&nbsp; Toronto &nbsp;
                &nbsp; THE INCUBATOR REALITY, &nbsp;THE RIGHT HATCHING AVENUE.
              </span>
            </div>
            <div className="caption caption-two">
              <span className="caption-text">
                WATCH OUT FOR AUDITIONS AT THE FOLLOWING LOCATIONS &nbsp;&nbsp;
                Lagos &nbsp;• &nbsp;Ibadan &nbsp;• &nbsp;Abuja&nbsp; • &nbsp;
                London &nbsp;• &nbsp;New-York&nbsp; •&nbsp; Toronto &nbsp;
                &nbsp; THE INCUBATOR REALITY, &nbsp;THE RIGHT HATCHING AVENUE.
              </span>
            </div>
          </div>
          <div className="first-extra">
            <motion.div
              className="first-extra-area"
              initial="hidden"
              animate={controlsOne}
              variants={appearUp}
              ref={refOne}
            >
              <p className="first-extra-header">
                We Match Emergent Solutions With Identified Challenges
              </p>
              <p className="first-extra-text">
                We accept start-ups working on a wide-range of sectors such as
                FinTech, ecommerce, Energy Efficiency, Saas, IOT/Wearables and
                Agriculture, etc. The Incubation Reality Program will span over
                a period of 13 weeks.
              </p>
            </motion.div>
            <Link href="/participation">
              <img
                className="colorless-arrow"
                src={colorless_arrow}
                alt="colorless_arrow"
              />
            </Link>
          </div>
          <VisibilitySensor
            onChange={(isVisibleOne) => setIsVisibleOne(isVisibleOne)}
          >
            <video
              //autoPlay={true}
              className="videoCoverOne"
              controls
              loop
              fullscreen="true"
              ref={videoRefOne}
            >
              <source
                src={require('../assets/videos/vidOne.mp4')}
                type="video/mp4"
              />
            </video>
          </VisibilitySensor>
          <motion.div
            className="startup"
            variants={appearUp}
            initial="hidden"
            animate={controlsTwo}
            ref={refTwo}
          >
            <div className="heading">
              <h1>Disrupting Startup</h1>
            </div>
            <div className="txt">
              <p>
                The biggest hatching program for the Game Changers. Don't limit
                your ability to lead, Come where your thought-of innovation can
                become reality.
              </p>
            </div>
            <div className="txt">
              <p>
                A social entrepreneurial platform where best brains will compete
                in partnership using their ideas, skills and passion.
              </p>
            </div>
          </motion.div>
        </section>
        <section className="secondSection">
          <img className="web" src={require('../assets/img/web.png')} />
          <div className="dream">
            <YourDream />
          </div>
          <motion.div
            className="secondContainer"
            variants={appearUp}
            initial="hidden"
            animate={controlsThree}
            ref={refThree}
          >
            <div id="cloud">
              <div className="action_call">
                <p>
                  Join 25 of the best brains in Nigeria and its diaspora between
                  the ages of 25-45 to compete in a team of 5 to represent 5
                  companies for a seed of $1.7m for the Winner and 1st
                  runner-up.
                </p>
              </div>
              <h2> The Incubator Reality is... </h2>
              <p>
                Partnering to power the next generations of entrepreneur....
              </p>
            </div>
          </motion.div>
        </section>
        <section className="thirdSection">
          <About />
          <VisibilitySensor
            onChange={(isVisibleTwo) => setIsVisibleTwo(isVisibleTwo)}
          >
            <video
              className="videoCoverTwo"
              controls
              loop
              fullscreen
              ref={videoRefTwo}
            >
              <source
                src={require('../assets/videos/vidTwo.mp4')}
                type="video/mp4"
              />
            </video>
          </VisibilitySensor>
        </section>

        <section className="fourthSection">
          <motion.div
            className="card-section"
            variants={appearUp}
            initial="hidden"
            animate={controlsFour}
            ref={refFour}
          >
            <Card
              img={partnership}
              title="Partnership"
              txt="We continually give you assurance on our service"
            />
            <Card
              img={idea}
              title="Idea Exposure"
              txt="We committed to our high standards which is why we stick to them, even in difficult situations"
            />
            <Card
              img={investment}
              title="Investment"
              txt="We have a trademark of astonishing performance, beating our own records"
            />
          </motion.div>
        </section>

        <section className="fifthSection">
          <article>
            <motion.div
              className="text"
              variants={appearUp}
              initial="hidden"
              animate={controlsFive}
              ref={refFive}
            >
              <div className="head">
                <h1>The Incubator Reality</h1>
              </div>
              <div className="txt">
                <p>
                  Focused on revolutionizing the erstwhile challenges of
                  start-ups...
                </p>
              </div>
              <div className="txt">
                <p>
                  ...While creating a catalyst for empowerment of youth
                  <br /> and women to foster economic growth and development.
                </p>
                <a onClick={() => handleClick('/participation')}>
                  Join the Game Changers
                </a>
              </div>
            </motion.div>
            <div className="img-container">
              <img src={roll} alt="incubator reality" />
            </div>
          </article>
        </section>
        <motion.section
          className="sixthSection"
          variants={appearUp}
          initial="hidden"
          animate={controlsSix}
          ref={refSix}
        >
          <div className="heading">
            <h1>Why be a part of The Incubator Reality?</h1>
            <p>Because everyone is a winner</p>
          </div>
          <div className="txt">
            <p>
              The uniqueness of the Incubator gives all contestants the
              opportunity to be winners. Contestants will have gained tremendous
              value and entrepreneurial experience. Additionally, cash prices
              are awarded to individual and teams that excel during sponsored
              task activities.
            </p>
          </div>
          <div className="txt">
            <p>
              Furthermore, a contestant might even have a job contract or
              consultancy project awaiting them at the end of the program from
              viewer or companies who admire or need their skills and
              competence.
            </p>
          </div>
        </motion.section>
        <section className="seventhSection">
          <Slider {...settings}>
            <div className="img-container">
              <div className="text">
                <div className="heading-one">
                  <p>We navigate you to survive </p>
                  <p>In this fierce terrain</p>
                </div>
                <div className="txt-one">
                  <p>
                    The business terrain in Nigeria constitute lesser
                    opportunities for start-ups, however the brave is rewarded
                    in this fierce competition for the best to rise to the top.{' '}
                  </p>
                </div>
              </div>
              <img src={bg} alt="bg pmg" />
            </div>
            <div className="img-container idea">
              <div className="text">
                <div className="heading-two">
                  <p>Idea Conception</p>
                  <p>Births Innovative Transformation</p>
                </div>
                <div className="txt-two">
                  <p>
                    Kick start your journey to success with a new sense of
                    purpose
                  </p>
                </div>
              </div>
              <img src={bg2} alt="bg pmg" />
            </div>
          </Slider>
        </section>
      </main>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  font-size: 1.4em;
  background-color: ${colors.colorWhite};
  main {
    background-image: linear-gradient(to center, #fff, #fafafa);
    .indexSection {
      display: flex;
      flex-flow: column;
      padding: 0em;
      .bannerSection {
        height: 3em;
        margin-bottom: 0em;
        background-color: ${colors.colorYellow};
        color: ${colors.colorWhite};
        display: flex;
        font-family: 'Open sans';
        align-items: center;
        font-size: 1.4em;
        font-weight: 700;
        .caption {
          margin: 0 auto;
          white-space: nowrap;
          overflow: hidden;
          position: absolute;
          width: 100%;
          span {
            display: inline-block;
            padding-left: 100%;
            animation: marquee 20s linear infinite;
          }
        }
        .caption-two {
          span {
            animation-delay: 10s;
          }
        }
        @keyframes marquee {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-150%, 0);
          }
        }
      }
      .first-extra {
        background: #031428;
        display: flex;
        flex-flow: column;
        color: white;
        align-items: center;
        justify-content: center;
        padding-top: 8em;
        padding-bottom: 10em;
        .first-extra-area {
          .first-extra-header {
            font-size: 3.5em;
            font-weight: 700;
            width: 60%;
            margin-bottom: 1em;
            position: relative;
            left: 15%;
            font-family: 'Open sans' !important;
          }
          .first-extra-text {
            font-size: 1.7em;
            font-weight: 400;
            position: relative;
            left: 15%;
            width: 55%;
            font-family: 'Open sans';
            padding-bottom: 1em;
          }
        }
        .colorless-arrow {
          position: relative;
          left: 22%;
          top: -9%;
          cursor: pointer;
        }
      }
      .videoCoverOne {
        padding: 0%;
        background: #f0f0f0;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: -7em 18em 0em 18em;
      }
      .startup {
        top: 0px;
        background-color: white;
        color: ${colors.colorBlue};
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0em 0em 1.2em 0em;
        margin: 0em 18em 0em 18em;
        align-items: center;
        width: 63%;
        .heading {
          h1 {
            font-size: 2.6em;
            font-weight: 400;
            margin-bottom: 0.2em;
            margin-top: 1.5em;
          }
        }
        .txt:not(:last-child) {
          margin-bottom: 1.2rem;
          font-weight: 500;
          font-size: 1.4em;
          width: 32em;
        }
        .txt:last-child {
          margin: 0;
          font-weight: 500;
          width: 45em;
          p {
            font-size: 1.4em;
          }
        }
      }
    }
    .secondSection {
      font-size: 1.2em;
      margin-top: 9%;

      .web {
        z-index: 1;
        position: absolute;
        margin-left: 69.5%;
        width: 30%;
        height: 72%;
        top: 112em;
      }

      .dream {
        z-index: 1;
        position: absolute;
        margin-left: 9%;
        width: 32%;
        top: 115em;
      }

      .secondContainer {
        height: 400px;
        background-color: ${colors.colorYellow};
        color: ${colors.colorWhite};
        font-size: 1.3em;
        font-weight: bold;
        z-index: -1;
        display: flex;
        flex-flow: column;
        justify-content: center;

        #cloud {
          z-index: 1;
          width: 40%;
          margin: 2% 0% 0% 53%;
          position: relative;
          color: ${colors.colorMidnightBlue};
          .action_call {
            margin-bottom: 2em;
            margin-top: 0em;
            p {
              font-size: 1.1em;
            }
          }
          h2 {
            font-size: 1.6em;
            font-weight: 600;
            color: blue;
          }
          p {
            font-weight: lighter;
            font-size: 1.1em;
            margin-top: 0em;
          }
        }
      }
    }

    .thirdSection {
      width: 100%;
      position: relative;
      top: 7em;
      display: flex;
      flex-flow: row;
      background: ${colors.colorWhite};
      touch-action: manipulation;
      padding-left: 4em;
      padding-top: 10rem;
      padding-bottom: 5rem;
      &::-webkit-scrollbar {
        width: 0;
      }
      p {
        font-size: 1.2em;
        color: ${colors.colorMidnightBlue};
      }
      .videoCoverTwo {
        margin: 3em 6em 0em 0em;
        width: 40em;
        height: 22.5em;
        background: #f0f0f0;
      }
    }

    .fourthSection {
      padding: 5rem;
      padding-bottom: 0;
      padding-top: 0;
      margin-top: 10em;
      display: flex;
      background-color: ${colors.colorWhite};

      justify-content: center;

      .card-section {
        position: relative;
        display: flex;
        flex-flow: row;
        scroll-padding: 2.4rem;
        grid-auto-columns: 80%;
        justify-content: flex-start;
        bottom: -60px;
        z-index: 100;
        width: 80%;
        .card {
          background-color: ${colors.colorWhite};
          border: 16px solid ${colors.colorGreyLighter};
          display: flex;
          justify-content: center;
          flex-direction: column;
          width: 35em;
          padding: 2em 2em 2em 2em;
          margin: 0em 0.5em;
          text-align: center;
          color: ${colors.colorBlue};
          height: 15em;
          .img-container {
            margin-bottom: 1.2rem;
          }
          .title {
            margin-bottom: 0.6rem;
          }
        }
      }
    }

    .fifthSection {
      padding: 10rem 0 0;
      background-color: ${colors.colorYellow};
      article {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .img-container {
          width: 40%;
          position: relative;
          z-index: 100;
          padding: 2em 0em 2em 4em;
          img {
            width: 70%;
          }
        }
        .text {
          width: 60%;
          padding: 0em 2em 0em 15em;
          p {
            font-size: 1.4em;
          }
          .head {
            h1 {
              font-size: 3em;
              font-weight: 300;
              margin-bottom: 0.7rem;
            }
          }
          .txt:nth-child(2) {
            font-weight: bold;
            margin-bottom: 1rem;
          }
          .txt:last-child {
            display: flex;
            flex-direction: column;
            a {
              color: ${colors.colorWhite};
              padding: 1em 1.5em;
              margin-top: 2.5em;
              font-size: 1.2em;
              font-weight: bold;
              border-radius: 0.5em;
              background: ${colors.colorBlue};
              width: 20em;
              text-align: center;
              &:hover {
                background: midnightblue;
                font-size: 1.206em;
                color: whitesmoke;
                cursor: pointer;
              }
            }
          }
        }
      }
    }

    .sixthSection {
      display: flex;
      flex-flow: column;
      justify-content: center;
      width: 80%;
      margin: 0 auto;
      padding: 6em 10em 6em 10em;
      .heading {
        margin-bottom: 2rem;
        color: ${colors.colorRed};
        line-height: 1.2;
        h1 {
          font-size: 2.5em;
          margin-bottom: 0.4rem;
          font-weight: 300;
          font-family: 'LeagueSpartan-Bold';
        }
        p {
          font-size: 2em;
          font-weight: 500;
        }
      }
      .txt {
        line-height: 1.6;
        font-weight: 500;
        width: 80%;
        p {
          font-size: 1.2em;
        }
      }
      .txt:nth-child(2) {
        margin-bottom: 2rem;
        font-weight: 500;
      }
    }

    .seventhSection {
      margin-bottom: -4px;
      .img-container {
        position: relative;
        img {
          width: 100%;
        }
        .text {
          position: absolute;
          top: 30%;
          left: 20%;
          .heading-one {
            font-size: 2.6em;
            font-weight: bolder;
            margin-bottom: 1rem;
          }
          .txt-one {
            width: 65%;
            font-size: 1.6em;
          }
        }
      }
      .idea {
        color: ${colors.colorWhite};
        .text {
          font-size: 1.3em;
          left: 30%;
          top: 32%;
          .heading-two {
            font-size: 2em;
            font-weight: bolder;
            margin-bottom: 1rem;
          }
          .txt-two {
            width: 65%;
            font-size: 1.3em;
          }
        }
      }
    }
  }

  @media (max-width: 690px) {
    width: 100% !important;

    .indexSection {
      width: 99.5% !important;
      padding: 0em !important;
      .bannerSection {
        .caption {
          width: 100%;
        }
      }
      .first-extra {
        background: #031428;
        display: flex;
        flex-flow: column;
        color: white;
        align-items: center;
        justify-content: center;
        padding-top: 5em !important;
        padding-bottom: 9em !important;
        .first-extra-area {
          .first-extra-header {
            font-size: 1.7em !important;
            width: 90% !important;
            left: 8% !important;
            font-family: 'LeagueSpartan-Bold';
          }
          .first-extra-text {
            font-size: 0.95em !important;
            left: 8% !important;
            width: 84% !important;
            padding-bottom: 1em !important;
          }
        }
        .colorless-arrow {
          left: 35% !important;
          top: 10%;
          cursor: pointer;
        }
      }
      .videoCoverOne {
        padding: 0%;
        margin: -7em 1em 0em 0.7em !important;
        width: 95% !important;
        justify-content: flex-start;
        align-items: flex-start;
      }
      .startup {
        display: flex;
        flex-direction: column;
        padding: 0em 0em 1.2em 0em;
        margin: 0em 1em !important;
        width: 95% !important;
        .heading {
          h1 {
            font-size: 2.2em !important;
            font-weight: 500;
            margin: 1.5em 1em 0.5em 0.3em !important;
          }
        }
        .txt:not(:last-child) {
          margin-bottom: 1.2rem;
          font-size: 1.2em !important;
          width: 90% !important;
          margin-left: 0.5em !important;
          color: ${colors.colorMidnightBlue} !important;
        }
        .txt:last-child {
          margin-left: 0.5em !important;
          font-size: 0.82em !important;
          width: 90% !important;
          p {
            font-size: 1.3em;
            color: ${colors.colorMidnightBlue} !important;
          }
        }
      }
    }
    .secondSection {
      display: flex;
      width: 100% !important;
      flex-direction: column-reverse;
      margin-top: 2% !important;

      .web {
        display: none;
      }
      .dream {
        z-index: 1;
        position: static !important;
        margin-left: 0% !important;
        width: 100% !important;
        top: 0em !important;
      }

      .secondContainer {
        height: 200px !important;
        width: 100% !important;
        z-index: 1 !important;

        #cloud {
          z-index: 1;
          width: 96% !important;
          margin: 0% 0% 0% 3% !important;
          padding-top: 1.5em;
          position: static !important;
          color: ${colors.colorMidnightBlue};
          h2 {
            font-size: 1.2em !important;
            margin: 0em 1em 0em 0.8em;
          }
          p {
            font-weight: lighter;
            font-size: 0.75em !important;
            margin: 0em 1em 2em 1em !important;
          }
          .action_call {
            margin: 0em 1em 0.5em 0em !important;
            p {
              font-size: 0.75em;
            }
          }
        }
      }
    }
    .thirdSection {
      width: 99.5% !important;
      top: 0.5em !important;
      position: static !important;
      flex-flow: column !important;
      padding-left: 0em !important;
      padding-top: 1rem !important;
      padding-bottom: 2rem !important;
      p {
        font-size: 1.25em !important;
        width: 100% !important;
        color: ${colors.colorMidnightBlue};
      }
      .videoCoverTwo {
        margin: 3em 0em 0em 3em !important;
        width: 85% !important;
        height: 100% !important;
        background: #f0f0f0;
      }
    }
    .fourthSection {
      width: 99.5% !important;
      padding-left: 1.25em !important;
      margin-top: 0em !important;
      display: flex;
      background-color: ${colors.colorWhite} !important;
      justify-content: start !important;

      .card-section {
        position: static !important;
        flex-flow: column !important;
        grid-auto-columns: 1% !important;
        background-color: ${colors.colorWhite};
        justify-content: flex-start !important;
        width: 100% !important;
        .card {
          border-bottom: 20px solid ${colors.colorGreyLighter};
          justify-content: initial !important;
          flex-direction: column !important;
          width: 100% !important;
          padding: 2em 1em 0.5em 1.5em !important;
          margin: 0em 0em 0em 1em !important;
          font-size: 1.2em;
          text-align: initial !important;
          color: ${colors.colorBlue};
          height: 15em;
          .img-container {
            margin-bottom: 1.2rem;
          }
          .title {
            margin-bottom: 0.9rem !important;
          }
        }
      }
    }
    .fifthSection {
      padding: 0rem 2rem 2rem 3rem !important;
      width: 99% !important;
      article {
        flex-direction: column-reverse !important;
        align-items: initial !important;
        text-align: initial !important;
        justify-content: initial !important;
        height: 16em;
        .img-container {
          width: 21% !important;
          position: absolute !important;
          top: 247.5em !important;
          left: 75% !important;
          z-index: 200 !important;
          padding: 0.5em 0em 1em 0em !important;
          img {
            width: 100% !important;
          }
        }
        .text {
          width: 100% !important;
          padding: 0em !important;
          p {
            font-size: 0.95em !important;
          }
          .head {
            h1 {
              font-size: 2.1em !important;
              padding-left: 0em !important;
            }
          }
          .txt:last-child {
            a {
              margin-left: 0em;
              font-size: 1em !important;
              width: 15em !important;
              &:hover {
                font-size: 1.1em !important;
              }
            }
          }
        }
      }
    }
    .sixthSection {
      display: flex;
      flex-flow: column;
      justify-content: initial !important;
      width: 99% !important;
      padding: 6em 0.5em 6em 3em !important;
      .heading {
        margin-bottom: 2rem;
        color: ${colors.colorRed};
        line-height: 1.2;
        h1 {
          font-size: 1.45em !important;
        }
        p {
          font-size: 1.3em !important;
        }
      }
      .txt {
        line-height: 1.6;
        font-weight: 500;
        width: 100% !important;
        p {
          font-size: 1em !important;
        }
      }
      .txt:nth-child(2) {
        margin-bottom: 2rem;
        font-weight: 500;
      }
    }

    .seventhSection {
      display: none;
    }
  }

  @media screen and (min-width: 690px) and (max-width: 900px) {
    main {
      .indexSection {
        .first-extra {
          .first-extra-area {
            .first-extra-header {
              font-size: 3em;
              width: 80%;
            }
            .first-extra-text {
              width: 75%;
            }
          }
        }
        .videoCoverOne {
          margin: -7em 8em 0em 8em;
        }
        .startup {
          padding: 0em;
          margin: 0em 5em 0em 5em;
          width: 78%;
          .heading {
            h1 {
              font-size: 2.6em;
              font-weight: 400;
              margin-bottom: 0.2em;
              margin-top: 1.5em;
            }
          }
          .txt:not(:last-child) {
            margin-bottom: 1.2rem;
            font-weight: 500;
            font-size: 1.4em;
            width: 30em;
          }
          .txt:last-child {
            margin: 0;
            font-weight: 500;
            width: 40em;
            p {
              font-size: 1.4em;
            }
          }
        }
      }
      .secondSection {
        .web {
          margin-left: 67%;
          width: 32%;
          height: 65%;
          top: 92em;
        }

        .dream {
          margin-left: 3%;
          width: 50%;
          top: 100em;
        }
        .secondContainer {
          #cloud {
            width: 45%;
            margin: 2% 0% 0% 55%;
            h2 {
              font-size: 1.3em;
              font-weight: 500;
            }
            p {
              font-size: 1em;
            }
          }
        }
      }

      .thirdSection {
        padding-left: 2em;
        padding-top: 7rem;
        padding-bottom: 5rem;
        p {
          font-size: 1.1em;
        }
        .videoCoverTwo {
          margin: 3em 0em 0em 0em;
          width: 26em;
          height: 14.5em;
        }
      }
      .fourthSection {
        padding: 5rem;
        padding-bottom: 0;
        padding-top: 0;
        margin-top: 3em;
        display: flex;
        background-color: ${colors.colorWhite};
        justify-content: center;

        .card-section {
          width: 110%;
          .card {
            padding: 2em 0em;
            margin: 0em 0.5em;
            font-size: 1em;
            height: 15em;
          }
        }
      }
      .fifthSection {
        padding: 8rem 0 0;
        article {
          text-align: initial;
          .img-container {
            padding: 2em 0em 2em 2em;
            img {
              width: 65%;
            }
          }
          .text {
            width: 65%;
            padding: 0em 1em 0em 5em;
            p {
              font-size: 1.1em;
            }
            .head {
              h1 {
                font-size: 1.8em;
                margin-bottom: 0.7rem;
              }
            }
            .txt:last-child {
              a {
                margin-top: 1em;
                font-size: 0.8em;
                &:hover {
                  font-size: 0.806em;
                }
              }
            }
          }
        }
      }
      .sixthSection {
        width: 95%;
        padding: 4em 4em 4em 5em;
        .heading {
          margin-bottom: 2rem;
          h1 {
            font-size: 2em;
            margin-bottom: 0.4rem;
          }
          p {
            font-size: 1.8em;
          }
        }
        .txt {
          line-height: 1.5;
          p {
            font-size: 1em;
            letter-spacing: -0.02em;
          }
        }
        .txt:nth-child(2) {
          margin-bottom: 2rem;
        }
      }
      .seventhSection {
        .img-container {
          .text {
            top: 23%;
            .heading-one {
              font-size: 2em;
            }
            .txt-one {
              width: 65%;
              font-size: 1.2em;
            }
          }
        }
        .idea {
          .text {
            font-size: 1.2em;
            .heading-two {
              font-size: 1.6em;
            }
            .txt-two {
              font-size: 1.3em;
            }
          }
        }
      }
    }
  }
  @media (min-width: 900px) and (max-width: 1100px) {
    main {
      .indexSection {
        .videoCoverOne {
          margin: 0em 15em 0em 15em;
        }
        .startup {
          padding: 0em 0em 1.2em 0em;
          margin: 0em 15em 0em 15em;
          width: 78%;
          .heading {
            h1 {
              font-size: 2.6em;
              font-weight: 400;
              margin-bottom: 0.2em;
              margin-top: 1.5em;
            }
          }
          .txt:not(:last-child) {
            margin-bottom: 1.2rem;
            font-weight: 500;
            font-size: 1.4em;
            width: 30em;
          }
          .txt:last-child {
            margin: 0;
            font-weight: 500;
            width: 40em;
            p {
              font-size: 1.4em;
            }
          }
        }
      }
      .secondSection {
        .web {
          margin-left: 67%;
          width: 31%;
          height: 65%;
          top: 100em;
        }

        .dream {
          margin-left: 7%;
          width: 39%;
          top: 101em;
        }
        .secondContainer {
          #cloud {
            h2 {
              font-size: 1.2em;
              font-weight: 600;
            }
            p {
              font-size: 0.9em;
            }
            .action_call {
              margin-bottom: 2em;
              margin-top: 0em;
              p {
                font-size: 0.9em;
              }
            }
          }
        }
      }

      .thirdSection {
        padding-left: 2em;
        padding-top: 10rem;
        padding-bottom: 5rem;
        p {
          font-size: 1.1em;
        }
        .videoCoverTwo {
          margin: 3em 1em 0em 0em;
          width: 32em;
          height: 18em;
        }
      }
      .fourthSection {
        padding: 5rem;
        padding-bottom: 0;
        padding-top: 0;
        margin-top: 10em;
        display: flex;
        background-color: ${colors.colorWhite};
        justify-content: center;

        .card-section {
          width: 100%;
          .card {
            padding: 2em 1em 2em 1em;
            margin: 0em 0.5em;
            font-size: 1em;
            height: 15em;
            width: 35em;
            .img-container {
              margin-bottom: 1.2rem;
            }
            .title {
              margin-bottom: 0.6rem;
            }
          }
        }
      }
      .fifthSection {
        padding: 10rem 0 0;
        article {
          .img-container {
            padding: 2em 0em 2em 2em;
            img {
              width: 65%;
            }
          }
          .text {
            width: 65%;
            padding: 0em 1em 0em 10em;
            p {
              font-size: 1.2em;
            }
            .head {
              h1 {
                font-size: 2em;
                margin-bottom: 0.7rem;
              }
            }
            .txt:last-child {
              a {
                margin-top: 1em;
                font-size: 1em;
                &:hover {
                  font-size: 1.06em;
                }
              }
            }
          }
        }
      }
      .sixthSection {
        width: 85%;
        padding: 4em 8em 4em 10em;
        .heading {
          margin-bottom: 2rem;
          h1 {
            font-size: 2em;
            margin-bottom: 0.4rem;
          }
          p {
            font-size: 1.8em;
          }
        }
        .txt {
          line-height: 1.5;
          p {
            font-size: 1.1em;
          }
        }
        .txt:nth-child(2) {
          margin-bottom: 2rem;
        }
      }
      .seventhSection {
        .img-container {
          .text {
            .heading-one {
              font-size: 2em;
            }
            .txt-one {
              width: 65%;
              font-size: 1.3em;
            }
          }
        }
        .idea {
          .text {
            font-size: 1.2em;
            .heading-two {
              font-size: 1.7em;
            }
            .txt-two {
              font-size: 1.3em;
            }
          }
        }
      }
    }
  }
  @media (min-width: 1100px) and (max-width: 1210px) {
    main {
      .secondSection {
        .web {
          margin-left: 68%;
          width: 32%;
          height: 65%;
          top: 80em;
        }

        .dream {
          margin-left: 7%;
          width: 38%;
          top: 84em;
        }
        .secondContainer {
          #cloud {
            width: 35% !important;
            margin-left: 57%;
            .action_call {
              margin-bottom: 2em;
              margin-top: 0em;
              p {
                font-size: 0.9em;
              }
            }
            h2 {
              font-size: 1.2em;
              font-weight: bolder;
            }
            p {
              font-weight: lighter;
              font-size: 0.9em;
              margin-top: 0.5em;
            }
          }
        }
      }
      .fifthSection {
        padding: 10rem 0 0;
        article {
          text-align: initial;
          justify-content: center;
          .img-container {
            padding: 2em 0em 2em 4em;
            img {
              width: 70%;
            }
          }
          .text {
            width: 60%;
            padding: 0em 2em 0em 10em;
            p {
              font-size: 1.4em;
            }
            .head {
              h1 {
                font-size: 3em;
                font-weight: 300;
                margin-bottom: 0.7rem;
              }
            }
            .txt:nth-child(2) {
              margin-bottom: 1rem;
            }
            .txt:last-child {
              a {
                margin-top: 1em;
                font-size: 1.2em;
                &:hover {
                  font-size: 1.26em;
                }
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 1210px) and (max-width: 1350px) {
    main {
      .secondSection {
        .web {
          margin-left: 68%;
          width: 32%;
          height: 65%;
          top: 112em;
        }

        .dream {
          margin-left: 7%;
          width: 34%;
          top: 118em;
        }

        .secondContainer {
          #cloud {
            width: 35% !important;
            margin-left: 57%;
            .action_call {
              margin-bottom: 2em;
              margin-top: 0em;
              p {
                font-size: 1em;
              }
            }
            h2 {
              font-size: 1.2em;
              font-weight: bolder;
            }
            p {
              font-weight: lighter;
              font-size: 1em;
              margin-top: 0.5em;
            }
          }
        }
      }
    }
  }
  @media (min-width: 1500px) {
    main {
      .indexSection {
        .first-extra {
          .first-extra-area {
            .first-extra-header {
              width: 55%;
            }
            .first-extra-text {
              width: 50%;
            }
          }
        }
      }
      .secondSection {
        .dream {
          top: 139em;
          width: 27%;
          @media (min-width: 1500px) and (max-width: 1650px) {
            top: 122em;
          }
        }
        .web {
          margin-left: 69.5%;
          width: 30%;
          height: 72%;
          top: 118em;
        }
        .secondContainer {
          font-size: 1.3em;
          #cloud {
            margin: 2% 0% 0% 55%;
            width: 35%;
            h2 {
              font-size: 1.8em;
            }
            p {
              font-size: 1.2em;
            }
          }
        }
      }
      .thirdSection {
        padding-left: 7em;
        padding-top: 9rem;
        padding-bottom: 2rem;
        p {
          font-size: 1.25em;
        }
        .videoCoverTwo {
          margin: 2em 4em 0em 0em;
          width: 39em;
          height: 22em;
        }
      }
      .fifthSection {
        article {
          .img-container {
            padding: 2em 0em 2em 3em;
            img {
              width: 60%;
            }
          }
          .text {
            .head {
              h1 {
                font-size: 3.5em;
              }
            }
            .txt:nth-child(2) {
            }
            .txt:last-child {
              a {
                font-size: 1.25em;
                &:hover {
                  font-size: 1.2506em;
                }
              }
            }
          }
        }
      }
      .sixthSection {
        .heading {
          margin-bottom: 2rem;
          line-height: 1.4;
          h1 {
            font-size: 2.7em;
            font-weight: 200;
          }
          p {
            font-size: 2.2em;
          }
        }
        .txt {
          line-height: 1.7;
          p {
            font-size: 1.25em;
          }
        }
      }
      .seventhSection {
        .img-container {
          .text {
            .heading-one {
              font-size: 2.6em;
            }
            .txt-one {
              width: 65%;
              font-size: 1.65em;
            }
          }
        }
        .idea {
          .text {
            font-size: 1.4em;
            .heading-two {
              font-size: 2em;
            }
            .txt-two {
              font-size: 1.3em;
            }
          }
        }
      }
    }
  }
`;

import React, { useState } from 'react';
import styled from 'styled-components';

import Toolbar from '../globals/toolbar/Toolbar';
import SideNav from '../globals/sideBar/SideNav';
import colors from '../config/colors';
import Form from '../components/Form';
import Footer from '../globals/footer/Footer';

export default function Participation(props) {
  return (
    <Wrapper>
      <div className="navbar">
        <div className="upper-nav">
          <SideNav />
          <Toolbar props={props} />
        </div>
        <div className="lower-nav">
          <div className="headline">
            <p>limitless you</p>
            <div className="dotted-lines">
              <hr className="line-one" />
              <hr className="line-two" />
              <hr className="line-three" />
              <hr className="line-four" />
            </div>
            <h2>
              <span>Do You Have&nbsp;</span>
              <span>What It Takes</span>
            </h2>
          </div>
          <img src={require('../assets/img/hands.jpg')} />
        </div>
      </div>
      <div className="section-one">
        <p>
          Join the many aspiring entrepreneurs aged 23-45, and compete for a
          seedfund of $1.7 million. This is where ideas meet collaboration
          supported with mentorship.
        </p>
      </div>
      <div className="section-two">
        <div className="form-section">
          <div className="signup">
            <p>Sign Up for Free</p>
            <p>...and be the first to hear</p>
          </div>
          <img
            className="form-image"
            src={require('../assets/img/coming_soon.png')}
          />
          <Form />
        </div>
        <div className="side-text">
          <div className="upper-text">
            <h2>The Incubator Reality</h2>
            <p className="first-text">
              A social entrepreneurial platform where best brains will compete
              in partnership using their skills ideas and passion. Do you have
              what it takes to be part of The Incubator Reality? Do you see
              yourself as a game changer?
            </p>
            <p className="second-text">
              Why not join the biggest start-up disruption program. 12 weeks of
              reality show, full of{' '}
              <span className="examples">
                Entertainment, Diversity, Politics & Wits.
              </span>
            </p>
          </div>
          <div className="lower-text">
            <h1>Prerequisite to Being a Game Changer</h1>
            <ul>
              <li>Entrepreneurial skill with originality</li>
              <li>Confidence & assertive</li>
              <li>Determined & self-driven</li>
              <li>Positive influencing skills</li>
              <li>Critical thinking with ability to perform</li>
              <li>Excellent communication skills</li>
              <li>Good team player</li>
              <li>Sales & marketing skills</li>
              <li>From Ages 23-45</li>
            </ul>
            <p>
              Flights will be paid for successful & invited applicants from the
              UK, US and Canada.
            </p>
          </div>
          <div className="steps">
            <h1>Steps to Register</h1>
            <p>
              <span>
                <img src={require('../assets/img/notepad.jpg')} />
              </span>
              <span>
                Fill out the application form with valid details. Registration
                is FREE.
              </span>
            </p>
            <p>
              <span>
                <img src={require('../assets/img/messenger.jpg')} />
              </span>
              <span>
                Upload a short video containing a pitch of your idea, how it
                would disrupt startups and why you should be chosen as a game
                changer.
              </span>
            </p>
            <p>
              <span>
                <img src={require('../assets/img/video-icon.jpg')} />
              </span>
              <span>
                If you qualify for the next phase of the selection process, then
                you will be notified.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="section-three">
        <div className="text">
          <h2 className="header">
            Auditions <br />
            <span> Coming Soon in These Locations</span>
          </h2>
          <div className="list">
            <hr />
            <ul>
              <li>Lagos</li>
              <li>Ibadan</li>
              <li>Abuja</li>
            </ul>
            <ul>
              <li>New-York</li>
              <li>Canada</li>
              <li>London</li>
            </ul>
          </div>
        </div>
        <div className="img">
          <img src={require('../assets/img/strange-ground.jpg')} />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #fafafa;
  .navbar {
    background: ${process.browser &&
    window.location.pathname === '/participation'
      ? 'transparent'
      : `${colors.colorBlue}`};
    height: 40em;
    font-weight: 2em;
  }
  .upper-nav {
    z-index: 100;
    position: relative;
    font-size: 1.3em;
  }
  .lower-nav {
    display: flex;
    flex-flow: row;
    .headline {
      width: 100%;
      position: relative;
      z-index: 50;
      margin-top: 1.5%;
      display: flex;
      flex-flow: column;
      padding-left: 0em;
      p {
        font-size: 11em;
        font-weight: 400;
        font-family: 'chiller';
        color: #fbca02;
        margin-left: 1.2em;
        margin-bottom: 0em;
        padding-bottom: 0em;
      }
      h2 {
        font-size: 3em;
        margin-left: 3.5em;
        font-weight: 100;
        font-family: 'OratorStd';
        color: ${colors.colorWhite};
      }
      .dotted-lines {
        display: flex;
        flex-flow: row;
        .line-one {
          height: 0.2em;
          width: 50em;
          background: #fbca02;
          margin: 0em 2em 0em 0em;
        }
        .line-two {
          height: 0.2em;
          width: 10em;
          background: #fbca02;
          margin: 0em 2em 0em 2em;
        }
        .line-three {
          height: 0.2em;
          width: 5em;
          background: #fbca02;
          margin: 0em 2em 0em 2em;
        }
        .line-four {
          height: 0.2em;
          width: 3em;
          background: #fbca02;
          margin: 0em 2em 0em 2em;
        }
      }
    }
    img {
      position: absolute;
      z-index: 1;
      height: 40em;
      width: 100%;
      top: 0em;
    }
  }

  .section-one {
    display: flex;
    padding: 7% 16% 7% 15%;
    p {
      font-size: 4em;
      font-weight: 700;
      font-family: 'Open sans';
      margin: 0em 2.1em 0em 1.5em;
      color: #bd9907;
      letter-spacing: -1.8px;
    }
  }
  .section-two {
    display: flex;
    flex-flow: row;
    margin: 2em 10em 10em 10em;
    color: #354054;
    .form-section {
      background: white;
      width: 39%;
      padding-top: 3em;
      padding-bottom: 3em;
      .signup {
        margin-bottom: 2em;
        margin-left: 7em;
        p:not(:last-child) {
          font-size: 3em;
          margin-bottom: 0.35em;
          font-weight: 300;
        }
        p:last-child {
          font-size: 2em;
          font-weight: 700;
        }
      }
      .form-image {
        width: 40%;
        position: absolute;
        left: 40px;
      }
    }
    .side-text {
      display: flex;
      flex-flow: column;
      width: 65%;
      margin: 0em 5em 0em 2em;
      .upper-text {
        font-size: 2em;
        margin: 0em 1em 0em 2.5em;
        h2 {
          font-size: 1.5em;
        }
        .second-text {
          margin-top: 1.8em;
          .examples {
            font-weight: bolder;
          }
        }
      }
      .lower-text {
        font-size: 2em;
        margin: 1.5em 1em 0em 2.5em;
        h1 {
          margin-bottom: 0.5em;
        }
        ul {
          list-style-type: initial;
          margin-left: 1.1em;
          margin-bottom: 1.2em;
          li {
            font-size: 1em;
          }
        }
        p {
          margin-top: 1em;
          font-size: 1em;
        }
      }
      .steps {
        border: 1px solid #354054;
        padding: 2.5em 2em 7em 2.5em;
        margin-top: 3em;
        h1 {
          font-size: 3em;
          margin: 0em 0em 1em 0.8em;
        }
        p {
          font-size: 1.5em;
          margin-top: 1em;
          display: flex;
          flex-direction: row;
          span {
            margin: 0em 1em;
          }
          span:not(:last-child) {
            position: relative;
            top: 0.2em;
          }
        }
      }
    }
  }
  .section-three {
    margin-bottom: 0.5em;
    .text {
      position: relative;
      z-index: 100;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      color: white;
      h2 {
        font-size: 4em;
        font-weight: 700;
        span {
          font-weight: 300;
        }
      }
      .list {
        width: 59em;
        hr {
          width: 49em;
          height: 0.3em;
          background: white;
          margin: 1.5em 0em 1.5em 0.5em;
        }
        ul {
          display: flex;
          flex-direction: row;
          list-style-type: none;
          li {
            margin: 0em 1em 0em 0.3em;
            font-size: 2.5em;
            font-weight: bolder;
          }
        }
      }
    }
    .img {
      img {
        position: absolute;
        z-index: 1;
        top: 195em;
        height: 35em;
        width: 100%;
      }
    }
  }
  .footer {
    font-size: 1.4em;
    z-index: -1;
  }

  @media screen and (min-width: 700px) and (max-width: 1000px) {
    .navbar {
      height: 25em;
      font-size: 1.2em;
    }
    .lower-nav {
      .headline {
        p {
          margin-left: 1em;
          font-size: 7.2em;
          line-height: 1em;
        }
        h2 {
          margin-left: 3.5em;
          font-size: 1.8em;
          display: flex;
          flex-flow: column;
          span {
            font-size: 1.3em;
          }
        }
        .dotted-lines {
          display: none;
        }
      }
      img {
        height: 25em;
      }
    }
    .section-one {
      display: flex;
      padding: 7% 2% 7% 1%;
    }
    .section-two {
      margin: 2em 0em 10em 3em;
    }
    .section-three {
      .img {
        img {
          top: 208em;
        }
      }
    }
  }
  @media (max-width: 570px) {
    .navbar {
      height: 26em;
      font-weight: 2em;
    }
    .lower-nav {
      .headline {
        p {
          margin-left: 1em;
          font-size: 7.2em;
          line-height: 1em;
        }
        h2 {
          margin-left: 3.5em;
          font-size: 1.8em;
          display: flex;
          flex-flow: column;
          span {
            font-size: 1.3em;
          }
        }
        .dotted-lines {
          display: none;
        }
      }
      img {
        display: none;
      }
    }
    .section-one {
      padding: 7% 2% 7% 8%;
      p {
        font-size: 2.8em;
        margin: 0em 0.5em 0em 0.2em;
        letter-spacing: -1.8px;
      }
    }
    .section-two {
      flex-flow: column;
      margin: 0em 2em 10em 2em;
      .form-section {
        width: 100%;
        margin-left: 0em;
        padding: 3em 0em 3em 0em;
        .signup {
          margin-left: 4em;
          p:not(:last-child) {
            font-size: 2.5em;
            margin-bottom: 0.3em;
          }
          p:last-child {
            font-size: 1.5em;
            margin-bottom: 0em;
          }
        }
        .form-image {
          width: 65%;
          left: 90px;
          top: 705px;
          z-index: 1;
        }
      }
      .side-text {
        width: 100%;
        margin: 4em 0em 0em 0em;
        .upper-text {
          margin: 0em 1em 0em 0.8em;
          font-size: 1.8em;
          h2 {
            margin-top: 0.1em;
            margin-bottom: 0.3em;
          }
          .second-text {
            margin-top: 1.2em;
          }
        }
        .lower-text {
          font-size: 1.8em;
          margin: 1.5em 0em 0em 0.8em;
        }
        .steps {
          padding: 3em 0em 7em 2.5em;
        }
      }
    }
    .section-three {
      .text {
        h2 {
          font-size: 2.9em;
          font-weight: 700;
        }
        .list {
          width: 80%;
          hr {
            width: 75%;
            margin: 1.5em 0em 1.5em 1.5em;
          }
          ul {
            li {
              margin: 0em 1em 0em 1em;
              font-size: 2.1em;
              font-weight: bolder;
            }
          }
        }
      }
      .img {
        img {
          top: 275em;
          height: 27em;
        }
      }
    }
  }

  @media (min-width: 1500px) {
    .navbar {
      height: 45em;
    }
    .lower-nav {
      .headline {
        p {
          font-size: 15em;
          line-height: 1.2em;
          margin-left: 0.9em;
        }
        h2 {
          font-size: 3.8em;
          margin-left: 3em;
        }
        .dotted-lines {
          .line-one {
            width: 60em;
          }
          .line-two {
            width: 11em;
          }
          .line-three {
            width: 6em;
          }
          .line-four {
            width: 4em;
          }
        }
      }
      img {
        height: 45em;
      }
    }
    .section-one {
      padding: 5% 14% 5% 13%;
      p {
        font-size: 5em;
      }
    }
    .section-two {
      margin: 2em 2em 10em 20em;
      .form-section {
        width: 32%;
        padding: 3em 0em 3em 0em;
        .signup {
          margin-left: 5em;
        }
        .form-image {
          width: 30%;
          left: 195px;
          top: 1100px;
          z-index: 1;
        }
      }
      .side-text {
        width: 45% !important;
        margin: 0em 0em 0em 3em !important;
        .upper-text {
          font-size: 2em;
          margin: 0em 2.5em 0em 2.5em;
          h2 {
            font-size: 1.5em;
            margin-bottom: 0.3em;
          }
          .second-text {
            margin-top: 1.8em;
            .examples {
              font-weight: bolder;
            }
          }
        }
        .lower-text {
          font-size: 2em;
          margin: 1.5em 2.5em 0em 2.5em;
          ul {
            list-style-type: initial;
            margin-left: 1.1em;
            margin-bottom: 1.2em;
            li {
              font-size: 1em;
            }
          }
          p {
            margin-top: 1em;
            font-size: 1em;
          }
        }
        .steps {
          padding: 3em 0em 11em 2.5em;
          h1 {
            font-size: 3.2em;
          }
          p {
            font-size: 1.9em;
          }
        }
      }
    }
    .section-three {
      .img {
        img {
          top: 221em;
        }
      }
    }
  }
  @media (max-width: 460px) {
    .section-three {
      .text {
        h2 {
          font-size: 2.3em;
          font-weight: 700;
        }
        .list {
          width: 70%;
          hr {
            width: 65%;
            margin: 1.5em 0em 1.5em 1.2em;
          }
          ul {
            li {
              margin: 0em 1em 0em 0.5em;
              font-size: 1.8em;
            }
          }
        }
      }
      .img {
        img {
          top: 277em;
          height: 23em;
        }
      }
    }
  }
  @media (max-width: 440px) {
    .section-three {
      display: none;
    }
  }
`;

// import React, { useState } from 'react';
// import styled from 'styled-components';

// import Toolbar from '../globals/toolbar/Toolbar';
// import SideNav from '../globals/sideBar/SideNav';
// import colors from '../config/colors';
// import Form from '../components/Form';
// import Footer from '../globals/footer/Footer';

// export default function Participation(props) {
//   return (
//     <Wrapper>
//       <div className="navbar">
//         <div className="upper-nav">
//           <SideNav />
//           <Toolbar props={props} />
//         </div>
//         <div className="lower-nav">
//           <div className="headline">
//             <p>limitless you</p>
//             <div className="dotted-lines">
//               <hr className="line-one" />
//               <hr className="line-two" />
//               <hr className="line-three" />
//               <hr className="line-four" />
//             </div>
//             <h2>Do You Have What It Takes</h2>
//           </div>
//           <img src={require('../assets/img/hands.jpg')} />
//         </div>
//       </div>
//       <div className="section-one">
//         <p>
//           Join the many aspiring entrepreneurs <br />
//           aged 23-45, and compete for a seedfund of $1.7 million. This is where
//           ideas meet collaboration supported with mentorship.
//         </p>
//       </div>
//       <div className="section-two">
//         <div className="form-section">
//           <div className="signup">
//             <p>Sign Up for Free</p>
//             <p>...and be the first to hear</p>
//           </div>
//           <img
//             className="form-image"
//             src={require('../assets/img/coming_soon.png')}
//           />
//           <Form />
//         </div>
//         <div className="side-text">
//           <div className="upper-text">
//             <h2>The Incubator Reality</h2>
//             <p className="first-text">
//               A social entrepreneurial platform where best brains will compete
//               in partnership using their skills ideas and passion. Do you have
//               what it takes to be part of The Incubator Reality? Do you see
//               yourself as a game changer?
//             </p>
//             <p className="second-text">
//               Why not join the biggest start-up disruption program. 12 weeks of
//               reality show, full of{' '}
//               <span className="examples">
//                 Entertainment, Diversity, Politics & Wits.
//               </span>
//             </p>
//           </div>
//           <div className="lower-text">
//             <h1>Prerequisite to Being a Game Changer</h1>
//             <ul>
//               <li>Entrepreneurial skill with originality</li>
//               <li>Confidence & assertive</li>
//               <li>Determined & self-driven</li>
//               <li>Positive influencing skills</li>
//               <li>Critical thinking with ability to perform</li>
//               <li>Excellent communication skills</li>
//               <li>Good team player</li>
//               <li>Sales & marketing skills</li>
//               <li>From Ages 23-45</li>
//             </ul>
//             <p>
//               Flights will be paid for successful & invited applicants from the
//               UK, US and Canada.
//             </p>
//           </div>
//           <div className="steps">
//             <h1>Steps to Register</h1>
//             <p>
//               <span>
//                 <img src={require('../assets/img/notepad.jpg')} />
//               </span>
//               <span>
//                 Fill out the application form with valid details. Registration
//                 is FREE.
//               </span>
//             </p>
//             <p>
//               <span>
//                 <img src={require('../assets/img/messenger.jpg')} />
//               </span>
//               <span>
//                 Upload a short video containing a pitch of your idea, how it
//                 would disrupt startups and why you should be chosen as a game
//                 changer.
//               </span>
//             </p>
//             <p>
//               <span>
//                 <img src={require('../assets/img/video-icon.jpg')} />
//               </span>
//               <span>
//                 If you qualify for the next phase of the selection process, then
//                 you will be notified.
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="section-three">
//         <div className="text">
//           <h2 className="header">
//             Auditions <br />
//             <span> Coming Soon in These Locations</span>
//           </h2>
//           <div className="list">
//             <hr />
//             <ul>
//               <li>Lagos</li>
//               <li>Ibadan</li>
//               <li>Abuja</li>
//             </ul>
//             <ul>
//               <li>New-York</li>
//               <li>Canada</li>
//               <li>London</li>
//             </ul>
//           </div>
//         </div>
//         <div className="img">
//           <img src={require('../assets/img/strange-ground.jpg')} />
//         </div>
//       </div>
//       <div className="footer">
//         <Footer />
//       </div>
//     </Wrapper>
//   );
// }

// const Wrapper = styled.div`
//   background: #fafafa;
//   .navbar {
//     background: ${process.browser &&
//     window.location.pathname === '/participation'
//       ? 'transparent'
//       : `${colors.colorBlue}`};
//     height: 40em;
//     font-weight: 2em;
//   }
//   .upper-nav {
//     z-index: 100;
//     position: relative;
//     font-size: 1.3em;
//   }
//   .lower-nav {
//     display: flex;
//     flex-flow: row;
//     .headline {
//       width: 100%;
//       position: relative;
//       z-index: 50;
//       margin-top: 1.5%;
//       display: flex;
//       flex-flow: column;
//       padding-left: 0em;
//       @media (max-width: 768px) {
//         display: block;
//         padding: 2em;
//         margin-top: 1em;
//       }
//       p {
//         font-size: 11em;
//         font-weight: 400;
//         font-family: 'chiller';
//         color: #fbca02;
//         margin-left: 1.2em;
//         margin-bottom: 0em;
//         padding-bottom: 0em;
//         @media (max-width: 768px) {
//           margin: 0 auto;
//           font-size: 9em;
//         }
//       }
//       h2 {
//         font-size: 3em;
//         margin-left: 3.5em;
//         font-weight: 100;
//         font-family: 'OratorStd';
//         color: ${colors.colorWhite};
//         @media (max-width: 768px) {
//           margin: 0 auto;
//           font-size: 3em;
//         }
//       }
//       .dotted-lines {
//         display: flex;
//         flex-flow: row;
//         @media (max-width: 768px) {
//           display: none;
//         }
//         .line-one {
//           height: 0.2em;
//           width: 50em;
//           background: #fbca02;
//           margin: 0em 2em 0em 0em;
//         }
//         .line-two {
//           height: 0.2em;
//           width: 10em;
//           background: #fbca02;
//           margin: 0em 2em 0em 2em;
//         }
//         .line-three {
//           height: 0.2em;
//           width: 5em;
//           background: #fbca02;
//           margin: 0em 2em 0em 2em;
//         }
//         .line-four {
//           height: 0.2em;
//           width: 3em;
//           background: #fbca02;
//           margin: 0em 2em 0em 2em;
//         }
//       }
//     }
//     img {
//       position: absolute;
//       z-index: 1;
//       height: 40em;
//       width: 100%;
//       top: 0em;
//       @media (max-width: 768px) {
//         display: none;
//       }
//     }
//   }

//   .section-one {
//     display: flex;
//     padding: 7% 16% 7% 15%;
//     @media (max-width: 768px) {
//       width: 100%;
//       display: block;
//       margin: 0 auto;
//     }
//     p {
//       font-size: 4em;
//       font-weight: 700;
//       font-family: 'Open sans';
//       margin: 0em 2.1em 0em 1.5em;
//       color: #bd9907;
//       @media (max-width: 768px) {
//         font-size: 2.8em;
//         width: 100%;
//         padding: 0;
//         margin: 0 auto;
//       }
//       letter-spacing: -1.8px;
//     }
//   }
//   .section-two {
//     display: flex;
//     flex-flow: row;
//     margin: 2em 10em 10em 10em;
//     color: #354054;
//     @media (max-width: 768px) {
//       display: block;
//       width: 100%;
//       margin: 0 auto;
//       // display:none;
//     }
//     @media (min-width: 768px) {
//       display: flex;
//       width: 100%;
//       flex-flow: row;
//       margin: 0 auto;
//       color: #354054;
//     }
//     .form-section {
//       width: 39%;
//       padding-top: 3em;
//       padding-bottom: 3em;
//       // for mobile
//       @media (max-width: 600px) {
//         justify-content: center;
//         align-items: center;
//         width: 100%;
//       }
//       // for ipad
//       @media (min-width: 768px) {
//       }
//       .signup {
//         margin-bottom: 2em;
//         margin-left: 7em;
//         @media (max-width: 768px) {
//           width: 100%;
//           margin-bottom: 2em;
//           margin-left: 0em;
//           padding-left: 6em;
//         }
//         p:not(:last-child) {
//           font-size: 3em;
//           margin-bottom: 0.35em;
//           font-weight: 300;
//         }
//         p:last-child {
//           font-size: 2em;
//           font-weight: 700;
//         }
//       }
//       .form-image {
//         width: 40%;
//         position: absolute;
//         left: 40px;
//         @media (max-width: 600px) {
//           width: 70%;
//           z-index: 1;
//         }
//         @media (max-width: 768px) {
//           left: 68px;
//           top: 1000px;
//           text-align: center;
//           z-index: 1;
//         }
//       }
//     }
//     .side-text {
//       display: flex;
//       flex-flow: column;
//       width: 65%;
//       margin: 0em 5em 0em 2em;
//       @media (max-width: 600px) {
//         display: block;
//         width: 100%;
//         margin: 0 auto;
//       }
//       @media (min-width: 768px) {
//         display: flex;
//         flex-flow: column;
//         width: 100%;
//         justify-content: space-even;
//         // margin: 0em 5em 0em 2em;
//         margin-left: 10em;
//       }
//       .upper-text {
//         font-size: 2em;
//         margin: 0em 1em 0em 2.5em;

//         h2 {
//           font-size: 1.5em;
//         }
//         .second-text {
//           margin-top: 1.8em;
//           .examples {
//             font-weight: bolder;
//           }
//         }
//       }
//       .lower-text {
//         font-size: 2em;
//         margin: 1.5em 1em 0em 2.5em;
//         ul {
//           list-style-type: initial;
//           margin-left: 1.1em;
//           margin-bottom: 1.2em;
//           li {
//             font-size: 1em;
//           }
//         }
//         p {
//           margin-top: 1em;
//           font-size: 1em;
//         }
//       }
//       .steps {
//         border: 1px solid #354054;
//         padding: 2.5em 2em 7em 2.5em;
//         margin-top: 3em;
//         @media (max-width: 600px) {
//           padding: 2.5em 2em 3em 2.5em;
//           width: 95%;
//           margin: 1em auto;
//         }
//         h1 {
//           font-size: 3em;
//           margin: 0em 0em 1em 0.8em;
//         }
//         p {
//           font-size: 1.8em;
//           margin-top: 1em;
//           display: flex;
//           flex-direction: row;
//           span {
//             margin: 0em 1em;
//           }
//           span:not(:last-child) {
//             position: relative;
//             top: 0.2em;
//           }
//         }
//       }
//     }
//   }
//   .section-three {
//     padding-top: 5em;
//     margin-bottom: 0.5em;
//     .text {
//       position: relative;
//       z-index: 100;
//       display: flex;
//       flex-flow: column;
//       align-items: center;
//       justify-content: center;
//       color: white;
//       h2 {
//         font-size: 4em;
//         font-weight: 700;
//         span {
//           font-weight: 300;
//         }
//       }
//       .list {
//         width: 59em;
//         hr {
//           width: 49em;
//           height: 0.3em;
//           background: white;
//           margin: 1.5em 0em 1.5em 0.5em;
//         }
//         ul {
//           display: flex;
//           flex-direction: row;
//           list-style-type: none;
//           li {
//             margin: 0em 1em 0em 0.3em;
//             font-size: 2.5em;
//             font-weight: bolder;
//           }
//         }
//       }
//     }
//     .img {
//       img {
//         position: absolute;
//         z-index: 1;
//         top: 195em;
//         height: 35em;
//         width: 100%;
//       }
//     }
//     @media (max-width: 768px) {
//       display: none;
//     }
//   }
//   .footer {
//     font-size: 1.4em;
//     z-index: -1;
//   }
// `;

import React from 'react';
import styled from 'styled-components';

export default function Form(props) {
  return (
    <Wrapper>
      <form className="form">
        <div className="first-section">
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="First Name"
            defaultValue=""
          />
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            placeholder="Last Name"
            defaultValue=""
          />
          <br />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            defaultValue=""
          />
          <br />
          <input
            type="number"
            id="mobile"
            name="phone no"
            placeholder="Phone No"
            defaultValue=""
          />
          <br />
          <select
            name="cars"
            id="cars"
            defaultValue="Country of Application"
            form="carform"
          >
            <option defaultValue="Country of Application" disabled>
              Country of Application
            </option>
            <option defaultValue="">Nigeria</option>
            <option defaultValue="">United Kingdom</option>
            <option defaultValue="">United States</option>
            <option defaultValue="">Canada</option>
          </select>
          <br />
          <select
            name="cars"
            id="cars"
            placeholder="Last name"
            defaultValue="State of Origin"
            form="carform"
          >
            <option defaultValue="" disabled>
              State of Participation
            </option>
            <option defaultValue="">Lagos</option>
            <option defaultValue="">Oyo</option>
            <option defaultValue="">Anambra</option>
            <option defaultValue="">Edo</option>
            <option defaultValue="">Osun</option>
          </select>
          <br />
          <input
            type="text"
            id="residence"
            name="residence"
            placeholder="Residential Address"
            defaultValue=""
          />
          <br />
          <input
            type="text"
            id="province"
            name="province"
            placeholder="LCDA/Province"
            defaultValue=""
          />
        </div>
        <div className="second-section">
          <div className="upper">
            <div className="other-text">
              <p>Choose a Preferred Audition Time & Location.</p>
            </div>
            <div className="other-form">
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="10am"
                defaultValue=""
                disabled
              />
              <br />
              <select
                name="cars"
                id="cars"
                placeholder="Last name"
                defaultValue=""
                form="carform"
                disabled
              >
                <option defaultValue="" disabled>
                  Lagos
                </option>
                <option defaultValue="volvo">Lagos</option>
                <option defaultValue="saab">Ibadan</option>
                <option defaultValue="opel">Abuja</option>
                <option defaultValue="audi">London</option>
                <option defaultValue="audi">Newyork</option>
                <option defaultValue="audi">Toronto</option>
              </select>
              <br />
            </div>
          </div>
          <div className="lower">
            <div className="other-text">
              <p>Date of Birth.</p>
            </div>
            <div className="other-form">
              <input type="date" id="bdaymonth" name="bdaymonth" disabled />
              <br />
            </div>
          </div>
          <div className="button">
            <a>Submit</a>
            <p>
              Priority information on audition process, time & location venue
              will be communicated to registered participant first.
            </p>
          </div>
        </div>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: white;
  padding-top: 0em;
  .form {
    .first-section {
      width: 34em;
      margin-left: 5em;
      input {
        width: 24.5em;
        height: 3em;
        font-size: 1.2em;
        margin: 0.5em 0em 2em 2em;
        padding: 0em 1em 0em 1em;
        border: 0.2px groove #354054;
      }
      select {
        width: 24.5em;
        height: 3em;
        font-size: 1.2em;
        margin: 0.5em 0em 2em 2em;
        padding: 0em 1em 0em 1em;
        border: 0.2px groove #354054;

        background-image: linear-gradient(45deg, transparent 50%, black 50%),
          linear-gradient(135deg, black 50%, transparent 50%),
          linear-gradient(to right, #ccc, #ccc);
        background-position: calc(100% - 20px) calc(1em + 2px),
          calc(100% - 13px), calc(1em + 2px), calc(100% - 2.5em) 0.5em;
        background-size: 7px 7px, 7px 7px, 0px 1.5em;
        background-repeat: no-repeat;
        -webkit-appearance: none;
        -moz-appearance: none;
      }
    }
    .second-section {
      width: 45em;
      .upper {
        display: flex;
        flex-flow: column;
        padding-top: 1.5em;
        padding-left: 7.5em;
        width: 45em;
        .other-text {
          padding-left: 0em;
          font-weight: bolder;
          p {
            margin: 0.5em 0em 0em 0em;
            font-size: 1.2em;
            font-weight: bolder;
          }
        }
        .other-form {
          display: flex;
          flex-flow: row;
          padding-left: 0em;

          input {
            width: 10.5em;
            height: 3em;
            font-size: 1.2em;
            margin: 1em 0.5em 1em 0em;
            padding: 0em 1em 0em 1em;
            border: 0.2px groove #354054;
          }
          select {
            width: 13em;
            height: 3em;
            font-size: 1.2em;
            margin: 1em 0.5em 1em 0.5em;
            padding: 0em 1em 0em 1em;
            border: 0.2px groove #354054;
            background-image: linear-gradient(45deg, transparent 50%, black 50%),
              linear-gradient(135deg, black 50%, transparent 50%),
              linear-gradient(to right, #ccc, #ccc);
            background-position: calc(100% - 22px) calc(1em + 2px),
              calc(100% - 15px), calc(1em + 2px), calc(100% - 2.5em) 0.5em;
            background-size: 7px 7px, 7px 7px, 0px 1.5em;
            background-repeat: no-repeat;
            -webkit-appearance: none;
            -moz-appearance: none;
          }
        }
      }
      .lower {
        display: flex;
        flex-flow: column;
        padding: 2em 7.5em;
        align-items: flex-start;
        width: 45em;
        margin: 1.5em 0em 2.5em 0em;
        background-color: #eff4f7;
        .other-text {
          p {
            margin: 1em 0em 0em 0em;
            font-size: 1.5em;
            font-weight: bolder;
          }
        }
        .other-form {
          display: flex;
          flex-flow: row;
          width: 30em;
          input {
            width: 32em;
            height: 2.8em;
            font-size: 2em;
            margin: 1em 0.5em 1em 0em;
            padding: 0em 1em 0em 1em;
            border: 0.2px groove #354054;
          }
          .year {
            margin-right: 0em;
          }
        }
      }
      .button {
        width: 45em;
        display: flex;
        margin-left: 0em;
        flex-direction: column;
        align-items: center;
        a {
          padding: 0.6em 5.4em 0.6em 5.4em;
          text-align: center;
          background-color: gray;
          color: white;
          border-radius: 0.6em;
          font-weight: 600;
          font-size: 2em;
        }
        p {
          margin: 1em 7em 0em 7em;
          font-size: 1.2em;
          font-weight: 400;
        }
      }
    }
  }
  @media (min-width: 1500px) {
    z-index: -1;
    .first-section {
      width: 85% !important;
      margin-left: 4em !important;
      input {
        width: 100% !important;
        height: 3.5em !important;
        margin-left: 0em !important;
      }
      select {
        width: 100% !important;
        height: 3.5em !important;
        margin-left: 0em !important;
      }
    }

    .second-section {
      width: 100% !important;
      .upper {
        margin-left: 4em !important;
        padding-left: 0em !important;
        width: 85% !important;
        .other-text {
          width: 100% !important;
        }
        .other-form {
          width: 100% !important;

          input {
            width: 35% !important;
            height: 3.5em !important;
            margin: 4% 2% 5% 0% !important;
          }
          select {
            width: 62% !important;
            height: 3.5em !important;
            margin: 4% 0% 0% 1% !important;
          }
        }
      }
      .lower {
        padding: 2em 3em 2em 3em !important;
        width: 100% !important;
        .other-text {
        }
        .other-form {
          width: 100% !important;
          input {
            width: 99% !important;
            height: 3.5em !important;
            margin: 1em 0em 1em 0em !important;
          }
        }
      }
      .button {
        width: 100% !important;
        a {
          width: 85% !important;
          height: 3.5em !important;
          margin: 0px;
          // &:hover {
          //   background: grey;
          //   color: lightyellow;
          //   cursor: pointer;
          //   font-size: 2.05em;
          // }
        }
        p {
          font-size: 1.25em !important;
          width: 85% !important;
        }
      }
    }
  }
  @media (max-width: 570px) {
    .first-section {
      width: 85% !important;
      margin-left: 3em !important;
      input {
        width: 100% !important;
        margin-left: 0em !important;
      }
      select {
        width: 100% !important;
        margin-left: 0em !important;
      }
    }

    .second-section {
      width: 100% !important;
      .upper {
        margin-left: 3em !important;
        padding-left: 0em !important;
        width: 85% !important;
        .other-text {
          width: 100% !important;
        }
        .other-form {
          width: 100% !important;

          input {
            width: 35% !important;
            margin: 4% 2% 4% 1% !important;
          }
          select {
            width: 60% !important;
          }
        }
      }
      .lower {
        padding: 2em 3em 2em 3em !important;
        width: 100% !important;
        .other-text {
        }
        .other-form {
          width: 100% !important;
          input {
            width: 100% !important;
            margin: 1em 0em 1em 0em !important;
          }
        }
      }
      .button {
        width: 100% !important;
        a {
          width: 85% !important;
          margin: 0px;
          // &:hover {
          //   background: grey;
          //   color: lightyellow;
          //   cursor: pointer;
          //   font-size: 2.05em;
          // }
        }
        p {
          font-size: 1.25em !important;
          width: 85% !important;
        }
      }
    }
  }
`;

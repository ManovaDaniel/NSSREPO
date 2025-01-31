import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Nssindex.css';

function Nssindex() {
  const navigate = useNavigate();

  return (
    <>
      {/* btn top */}
      <button
        className="btn-to-top"
        onClick={() => navigate('/nss-main')}  {/* Update to correct route */}
      >
        <i className="fa fa-arrow-up fa-2x" />
      </button>
      
      {/* section 0 start*/}
      <section className="main" id={0}>
        {/* Flipping Images Start*/}
        <div className="grids">
          <div className="card-one">
            <div className="card">
              <div className="card__side card__side--front" id="front-1" />
              <div className="card__side card__side--back" id="back-1" />
            </div>
          </div>
          {/* Additional Cards */}
          <div className="card-two">
            <div className="card">
              <div className="card__side card__side--front" id="front-2" />
              <div className="card__side card__side--back" id="back-2" />
            </div>
          </div>
        </div>
        {/* Flipping images end */}
      </section>
      {/* section 0 ends */}

      {/* section 1.1 start*/}
      <section className="aboutus" id="1.1">
        <br />
        <div className="flex-container">
          <div className="box" id="box1">
            <div className="about__img">
              <img
                src="./img/Nss.png"
                alt="About Image"
                style={{ width: 200, height: 200, marginBottom: 10 }}
              />
              <br />
              <h2 className="about_subtitle">Welcome to the National Service Scheme.</h2>
              <p style={{ textAlign: "justify" }} className="about__text"></p>
              <ul>
                <li className="about__text">The National Service Scheme (NSS) is an Indian government-sponsored public service program conducted by the Ministry of Youth Affairs and Sports of the Government of India.</li>
                <li className="about__text">
                  Popularly known as NSS, the scheme was launched in Gandhiji's Centenary year, 1969. Aimed at developing student's personality through community service. <strong>The motto of NSS is "Not Me, But You".</strong>
                </li>
                <li className="about__text">The NSS volunteers work on issues of social relevance, which keep evolving in response to the needs of the community, through regular and special camping programs.</li>
              </ul>

              <h2 className="about_subtitle">Our Objectives</h2>
              <ul>
                <li className="ourmission_txt">To understand the community in which they work.</li>
                <li className="ourmission_txt">To understand themselves in relation to their community.</li>
                <li className="ourmission_txt">To identify the needs and problems of the community and involve them in problem-solving.</li>
              </ul>
            </div>
            <br />
            <div className="button" id="button">
              <i className="fa fa-dashboard" /> Dashboard
            </div>
            <p><strong>The Dashboard feature is an exclusive feature only for Present, Ex - NSS Volunteers and Teachers of Velammal Engineering College</strong></p>
          </div>

          <div className="box" id="box2">
            {/* NOTICE BOARD */}
            <div className="content_">
              <h1 className="header_">NOTIFICATIONS</h1>
              <marquee behavior="scroll" direction="up" scrollamount={8} onMouseOver={() => this.setAttribute('scrollamount', 0)} onMouseOut={() => this.setAttribute('scrollamount', 8)} className="movingbody_" />
            </div>
            {/* NSS Manual Book Download (PDF) */}
            <div className="content">
              <h1 className="header">NSS MANUAL BOOK</h1>
              <a href="./pdf/manualNss.pdf" target="_blank" rel="noopener noreferrer">
                <img src="./img/Mannual_Cover.jpg" alt="NSS Manual Book" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Nssindex;

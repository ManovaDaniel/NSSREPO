import React from "react";
import "./Team.css"; // Ensure to include necessary CSS files for styling

const Team = () => {
  return (
    <section className="team-section2" id="2">
      <h2>Faculty Coordinator</h2>
      <div className="team-container">
        <div className="team-card">
          <div className="team-content">
            <div className="imgBx">
              <img src="./img/KarthikSir.jpg" alt="Dr. R. Karthik" />
            </div>
            <div className="contentBx">
              <h3>
                Dr. R. Karthik <br />
                <span>NSS, Program Officer</span>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <h2>Core Members 24-25</h2>
      <section className="team-section">
        <div className="team-container">
          {[
            {
              name: "KAVIYA SHREE",
              role: "GCO & MECH&AUTO Department Coordinator",
              imgSrc: "img/kaviya.jpg",
              instagram: "https://www.instagram.com/kaviya.shree.07/",
              linkedin: "",
            },
            {
              name: "LALITH KANNAN",
              role: "VCO & CSE Department Coordinator",
              imgSrc: "img/lalith.jpg",
              instagram: "https://www.instagram.com/lalith_kannan02/?__pwa=1",
              linkedin: "",
            },
            {
              name: "VINOTH KUMAR",
              role: "ECE Department Coordinator",
              imgSrc: "img/vinoth.jpg",
              instagram: "https://www.instagram.com/persona_unica_22/?__pwa=1",
              linkedin: "",
            },
            {
              name: "DAYANITHA",
              role: "IT Department Coordinator",
              imgSrc: "img/daya.jpg",
              instagram: "https://www.instagram.com/_daya.nitha_/?__pwa=1",
              linkedin: "",
            },
            {
              name: "SANJAY KUMAR",
              role: "Civil, Cyber, EIE Department Coordinator",
              imgSrc: "img/sanjai.jpg",
              instagram: "https://www.instagram.com/_.sannnxx/?__pwa=1",
              linkedin: "",
            },
            {
              name: "SUBASHINI",
              role: "EEE Department Coordinator",
              imgSrc: "img/subashini.jpg",
              instagram: "https://www.instagram.com/suba_shini277/?__pwa=1",
              linkedin: "",
            },
            {
              name: "RAHUL KUMARAN",
              role: "AI&DS Department Coordinator",
              imgSrc: "img/rahul.jpg",
              instagram: "https://www.instagram.com/_rahul_21_____/?__pwa=1",
              linkedin: "",
            },
            {
              name: "SHRAVANTH KUMAR",
              role: "Posters Team Head",
              imgSrc: "img/shravanth.jpg",
              instagram: "https://www.instagram.com/the.boy_who.lived.934/?__pwa=1",
              linkedin: "",
            },
            {
              name: "SWEDHA",
              role: "Newsletter Team Head",
              imgSrc: "img/swetha.jpg",
              instagram: "https://www.instagram.com/ps_swe/?__pwa=1",
              linkedin: "",
            },
            {
              name: "MUKESH",
              role: "Technical Team Head",
              imgSrc: "img/mukeshnss.jpg",
              instagram: "https://www.instagram.com/_mxkshh_/?__pwa=1",
              linkedin: "",
            },
            {
              name: "Manova Daniel",
              role: "Website & Camera Handling Team Head",
              imgSrc: "img/mano.jpg",
              instagram: "https://www.instagram.com/mxnovx/?__pwa=1",
              linkedin: "",
            },
          ].map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-content">
                <div className="imgBx">
                  <img src={member.imgSrc} alt={member.name} />
                </div>
                <div className="contentBx">
                  <h3>
                    {member.name} <br />
                    <span>{member.role}</span>
                  </h3>
                </div>
              </div>
              <ul className="sci">
                {member.instagram && (
                  <li style={{ "--i": 1 }}>
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </li>
                )}
                {member.linkedin && (
                  <li style={{ "--i": 2 }}>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <h2>Core Members 23-24</h2>
      <section className="team-section">
        <div className="team-container">
          {[
            {
              name: "ROHITH PRABAKARAN",
              role: "GCO & EEE Department Coordinator",
              imgSrc: "./img/Rohit.jpg",
              instagram: "https://www.instagram.com/rohith_praba",
              linkedin: "https://www.linkedin.com/in/rohith-prabakaran-undefined-2a7566286/",
            },
            {
              name: "APARNA KUMARESAN",
              role: "VCO & ECE Department Coordinator",
              imgSrc: "./img/Aparna.jpg",
              instagram: "https://www.instagram.com/_appu_here_/",
              linkedin:
                "https://www.linkedin.com/in/aparna-kumaresan-b7127625a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            {
              name: "DIVYA M",
              role: "CSE Department Coordinator",
              imgSrc: "./img/Divya.jpg",
              instagram: "http://www.instagram.com/_.divya.10_",
              linkedin: "",
            },
          ].map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-content">
                <div className="imgBx">
                  <img src={member.imgSrc} alt={member.name} />
                </div>
                <div className="contentBx">
                  <h3>
                    {member.name} <br />
                    <span>{member.role}</span>
                  </h3>
                </div>
              </div>
              <ul className="sci">
                {member.instagram && (
                  <li style={{ "--i": 1 }}>
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </li>
                )}
                {member.linkedin && (
                  <li style={{ "--i": 2 }}>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Team;

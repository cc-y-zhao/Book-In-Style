import React from "react";

import './AboutMe.css'

const AboutMe = () => {

  return (
    <>
      <div className='footer'>
        <div className='footer-left'>
          <div className='about-bis'>ABOUT BOOK-IN-STYLE</div>
          <div className='bis-description'>
            Book-In-Style ("BIS"), created by full-stack developer, Cecilia Zhao, is inspired by StyleSeat, an online destination for beauty & wellness professionals and clients.
            On BIS, professionals can showcase their work, connect with new and existing clients, and build their business.
            Clients can discover new services and providers, book appointments online, and get inspired.
          </div>
        </div>
        <div className='footer-right'>
          <div className="contact-cecilia">
            For more inquiries, contact Cecilia Zhao:
          </div>
          <div className='linkedin-github'>
            <div className='linkedin'>
              <div>
                <a className='linkedin-github' href="https://www.linkedin.com/in/ceciliazh/">LinkedIn</a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/ceciliazh/">
                  <img
                    className='linkedin-logo'
                    src='https://content.linkedin.com/content/dam/me/news/en-us/icons/Social_Icons_linkedin.svg.original.svg'
                    onError={(e) => {
                      e.target.setAttribute("src", "https://raw.githubusercontent.com/cc-y-zhao/Book-In-Style/misc_v3/react-app/src/images/linkedin_logo.png");
                    }}
                    alt='LinkedIn'
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='linkedin-github'>
            <div className='github'>
              <div>
                <a className='linkedin-github' href="https://github.com/cc-y-zhao">GitHub</a>
              </div>
              <div>
                <a href="https://github.com/cc-y-zhao">
                  <img
                    className='github-logo'
                    src='https://bitzyon.com/img/wallets/github.png'
                    onError={(e) => {
                      e.target.setAttribute("src", "https://raw.githubusercontent.com/cc-y-zhao/Book-In-Style/misc_v3/react-app/src/images/github_logo.png");
                    }}
                    alt='Github'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;

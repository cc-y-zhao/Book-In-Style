import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import './AboutMe.css'

const AboutMe = () => {

  return (
    <>
      <div className='footer'>
        <div className='footer-left'>
          <div className='about-bis'>ABOUT BOOK-IN-STYLE</div>
          <div className='bis-description'>
            Book-In-Style ("BIS") is an app created by full-stack developer, Cecilia Zhao, and inspired by StyleSeat, the online destination for beauty & wellness professionals and clients.
            On BIS, professionals can showcase their work, connect with new and existing clients, and build their business.
            Clients can discover new services and providers, book appointments online, and get inspired.
          </div>
        </div>
        <div className='footer-right'>
          <div className="contact-cecilia">
            For more inquiries, contact Cecilia Zhao:
          </div>
          <div className='linkedin-github'>
            <a className='linkedin-github' href="https://www.linkedin.com/in/ceciliazh/">LinkedIn</a>
          </div>
          <div className='linkedin-github'>
            <a className='linkedin-github' href="https://github.com/cc-y-zhao">GitHub</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;

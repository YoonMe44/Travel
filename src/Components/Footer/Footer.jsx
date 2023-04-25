import React, { useEffect } from 'react'
import './footer.css'
import './footer.scss'
import {BsSend} from 'react-icons/bs'
import {SiYourtraveldottv} from 'react-icons/si'
import video from '../../Assets/footerBG.mp4'
import {FaTwitter} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  const year = new Date().getFullYear();
  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type='video/mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address'/>
            <button data-aos="fade-up" className='btn flex' type='submit'>
              SEND <BsSend className='icon'/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
              <SiYourtraveldottv className='icon'/>Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
                <FaTwitter className='icon'/>
                <FaYoutube className='icon'/>
                <FaInstagramSquare className='icon'/>
                <FaTripadvisor className='icon'/>
            </div>
          </div>
          <div className="footerLinks grid">

              <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                <span className="groupTitle">
                  OUR AGENCY
                </span>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Services
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Insurance
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Agency
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Tourism
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Payment
                </li>
              </div>


              <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                <span className="groupTitle">
                  PARTNERS
                </span>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Bookings
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Rentcars
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  HostelWorld
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Trivago
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  TripAdvisor
                </li>
              </div>


              <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                <span className="groupTitle">
                  HOTELS
                </span>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  NOVOTEL
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  PARADISE
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  JASMINE
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  ACE
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  EASE
                </li>
              </div>

            


          </div>
          <div className="footerDiv flex">
                  <small>BEST TRAVEL WEBSITE THEME</small>
                  <small>Copyright © {year}</small>
              </div>
        </div>
      </div>
      
    </section>
  )
}

export default Footer
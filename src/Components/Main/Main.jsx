import React, { useEffect } from 'react'
import './main.css'
import './main.scss'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsClipboardData} from 'react-icons/bs'

import img from '../../Assets/img(1).jpg'
import img2 from '../../Assets/img(2).jpg'
import img3 from '../../Assets/img(3).jpg'
import img4 from '../../Assets/img(4).jpg'
import img5 from '../../Assets/img(5).jpg'
import img6 from '../../Assets/img(6).jpg'
import img7 from '../../Assets/img(7).jpg'
import img8 from '../../Assets/img(8).jpg'
import img9 from '../../Assets/img(9).jpg'
import img10 from '../../Assets/img(10).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data= [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Bagan',
    location: 'Mandalay',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:'Bagan is an ancient city located in the Mandalay Region of Myanmar. It was once the capital of the Bagan Kingdom, which ruled over a large part of Myanmar from the 9th to the 13th century. Bagan is known for its thousands of well-preserved temples, pagodas, and other religious structures, many of which date back to the 11th and 12th centuries. The site is considered to be one of the most important archaeological sites in Southeast Asia and attracts a large number of tourists every year. In 2019, Bagan was designated a UNESCO World Heritage Site.'
  },
  {
    id:2,
    imgSrc: img2,
    destTitle: 'Inle Lake',
    location: 'Shan State',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description:' Inle Lake is a freshwater lake located in the Shan State of Myanmar. It is the second largest lake in Myanmar and is a popular tourist destination. The lake is known for its scenic beauty and unique way of life of the local Intha people who live in stilted houses and fish using traditional techniques. The lake is also home to various species of fish and birds, as well as floating gardens and temples that can be visited by boat.'
  },
  {
    id:3,
    imgSrc: img3,
    destTitle: 'ShweDagon Pagoda',
    location: 'Yangon',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:"Yangon is the largest city and former capital of Myanmar. It is known for its colonial architecture, bustling street markets, and the iconic Shwedagon Pagoda, which is one of the most sacred Buddhist sites in Myanmar. Visitors can explore the city's markets and museums, visit historic sites such as the Secretariat Building, and take a ride on the circular train that circles the city."
  },
  {
    id:4,
    imgSrc: img4,
    destTitle: 'U Bein Bridge',
    location: 'Mandalay',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description:"Mandalay is the cultural and religious center of Myanmar, with many temples, monasteries, and pagodas to explore. Visitors can also visit the famous U Bein Bridge, which is the world's longest teak bridge, and see traditional crafts such as gold leaf making and silk weaving."
  },
  {
    id:5,
    imgSrc: img5,
    destTitle: 'Ngapali Beach',
    location: 'Rakhine State',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description:'Ngapali is a beautiful beach town located on the Bay of Bengal in western Myanmar. It is known for its white sand beaches, clear waters, and palm trees. Visitors can enjoy swimming, sunbathing, and water sports, as well as visiting local fishing villages and exploring the nearby jungle.'
  },
  {
    id:6,
    imgSrc: img6,
    destTitle: 'Hpa-An',
    location: 'Kayin State',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description:'Hpa-An is a small town located in the Kayin State of Myanmar. It is known for its natural caves and limestone formations, which visitors can explore on foot or by boat. Other popular attractions include the Hpa-An Market, Kyauk Ka Latt Pagoda, and the Saddan Cave.'
  },
  {
    id:7,
    imgSrc: img7,
    destTitle: 'Pyin Oo Lwin',
    location: 'Mandalay',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description:"Pyin Oo Lwin is a hill station located in the Mandalay Region of Myanmar. It is known for its cooler climate, beautiful gardens, and colonial-era architecture. Visitors can explore the National Kandawgyi Botanical Gardens, take a horse-drawn carriage tour of the town, and visit historic sites such as the Candacraig Hotel."
  },
  {
    id:8,
    imgSrc: img8,
    destTitle: 'Mrauk U',
    location: 'Rakhine State',
    grade: 'CULTURAL RELAX',
    fees: '$1000',
    description:'Mrauk U is an ancient city located in the Rakhine State of Myanmar. It was once the capital of the powerful Arakanese Kingdom and is known for its archaeological sites and temples, many of which date back to the 15th century. Visitors can explore the ancient temples and pagodas, as well as visiting local villages and experiencing the traditional culture of the region.'
  },
  {
    id:9,
    imgSrc: img9,
    destTitle: 'Kyaiktiyo Pagoda',
    location: 'Mon State',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:' The Kyaiktiyo Pagoda, also known as the Golden Rock, is a famous Buddhist pilgrimage site located in the Mon State of Myanmar. It is famous for its large golden rock that seems to defy gravity, as well as the stunning views of the surrounding mountains and valleys. Visitors can take a cable car or hike up to the pagoda, and can also visit nearby villages and monasteries.'
  },
  {
    id:10,
    imgSrc: img10,
    destTitle: 'Mount Popa ',
    location: 'central Myanmar',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description:'The mountain rises to a height of 1,518 meters (4,981 feet) above sea level and is home to the Popa Taungkalat Shrine, a Buddhist monastery that is perched atop a rocky outcrop. The monastery is accessible via a staircase with 777 steps that leads up the side of the mountain.'
  },
]

const Main = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []);

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>
      <div className="secContent grid">
    {
      Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
          return(
            <div key={id} data-aos="fade-up" className="singleDestination">
              <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} />
              </div>
              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="container flex">
                  <HiOutlineLocationMarker className='icon'/>
                  <span className="name">{location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>{grade}<small>+1</small></span>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>
                <div className="desc">
                  <p>{description}</p>
                </div>
                <button className='btn flex'>
                  DETAILS <BsClipboardData className='icon'/>
                </button>
              </div>
            </div>
          )
      })
    }
      </div>
    </section>
  )
}

export default Main
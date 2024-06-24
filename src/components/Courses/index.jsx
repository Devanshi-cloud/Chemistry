import React from 'react'
import "./Courses.css"
import Divider from "../Divider"
import Slider from 'react-slick'
import {courses} from '../../data'
import { TiStarFullOutline } from 'react-icons/ti'

const Courses = () => {
  const settings= {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode:true,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed:3000,
    centerPadding:0,
    responsive: [
    {
      breakpoint: 900,
      settings:{
        slidesToShow: 2,
      }
    },
    {
      breaakpoint:600,
      settings:{
        slidesToShow: 1,
    }
  },
    ]
  }
  return (
    <section id='courses'>
      <div className="container">
        <h1 className="title">Explore Our <span className='text__gradient'>Achievements</span></h1>
        <Divider/>
        <Slider {...settings} className="courses__container">
          {
            courses.map((list, index) => (
              <React.Fragment key={index}>
                <div className="picture">
                  <img src={list.image} alt={list.title} className='' />
                </div>
                <div className="details">
                  <h3 className="name">{list.title}</h3>
                  <p className="text__muted">{list.description}</p>
                </div>
                <div className="row">
                  <div className="stars__container">
                    <TiStarFullOutline/>
                    <TiStarFullOutline/>
                    <TiStarFullOutline/>
                    <TiStarFullOutline/>
                    <TiStarFullOutline/>
                  </div>
                </div>
              </React.Fragment>
            ))
          }
        </Slider>
      </div>
      </section>
  )
}

export default Courses
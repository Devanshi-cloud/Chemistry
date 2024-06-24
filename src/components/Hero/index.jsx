import React,{useRef} from 'react'
import "./Hero.css"
import { Link } from "react-scroll"
import { student_pic } from '../../assets'
import { IoMdStar } from 'react-icons/io'
import FunFacts from '../FunFacts'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react' 


const Hero = () => {
  const container = useRef(null)
  useGSAP(()=>{
    const timeline = gsap.timeline({delay:.5});
    timeline
    .fromTo(
      ".media__group",
      {scale:0.5, opacity:0},
      {scale:1,opacity:1}
    )
    .from(
      ".title",
      {opacity:0}
    )
    .from(
      ".description",
      {opacity:0}
    )
    .from(
      ".buttons__group",
      {x:-40,opacity:0}
    )
  },{scope:container})
  return (
    <header id='hero' ref={container}>
      <div className="container full__height">
        <div className="group info">
          <h1 className="title">
            Stay Together With
            <span className="text__gradient">
              Naveen's Chemistry Classes
            </span>
            Anywhere
          </h1>
          <p className="description text__muted">
          Unlock the secrets of chemistry with our expert guidance at Tripple point. Our comprehensive coaching centre offers personalized instruction and practice sessions tailored to your learning needs. Our experienced instructor will help you grasp complex concepts, build a strong foundation, and develop problem-solving skills to excel in your chemistry exams. With our dedicated support and resources, you'll be well-prepared to tackle even the most challenging topics and achieve your academic goals.
          </p>
          <div className="buttons__group">
          <Link to='focus-base' className='btn btn__primary'>Explore more</Link>
          <Link to='contact' className='btn'>Get Started</Link>
          </div>
          <FunFacts/>
        </div>
        <div className="group">
          <div className="media__group">
            <img src={student_pic} alt="" />
            <div className="rating__container">
              <h1>Excellent</h1>
              <div className="stars__container">
                <div className="icon__container"><IoMdStar/></div>
                <div className="icon__container"><IoMdStar/></div>
                <div className="icon__container"><IoMdStar/></div>
                <div className="icon__container"><IoMdStar/></div>
                <div className="icon__container"><IoMdStar/></div>
              </div>
              <p>All Students can learn and succeed, but not in the same way and not in the same day.</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
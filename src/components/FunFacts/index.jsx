import React, { useState, useEffect, useRef } from 'react'
import "./FunFacts.css"
import  Odometer  from 'react-odometerjs'
import { GiTeacher } from 'react-icons/gi'
import { FaBookAtlas } from 'react-icons/fa6'
import { PiStudentBold } from 'react-icons/pi'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const FunFacts = () => {
    const container = useRef(null);
    const [instructors,setInstructors] = useState(0)
    const [students, setStudents] = useState(0)
    const [courses, setCourses] = useState(0)
    useEffect(()=>{
        const timeOutId = setTimeout(()=>{
            setInstructors(40);
            setStudents(15000);
            setCourses(100);
        },3000);

        return ()=>{
            clearTimeout(timeOutId)
        }
    },[])
    useGSAP(()=>{
        const timeline = gsap.timeline({delay:2});
        timeline
        .from(
            ".fact__item",
            {x:-100,stagger:.5,opacity:0}
        )
    },{scope:container})

  return (
    <div className='fun__facts blur-effect' ref={container}>
        <div className="fact__item">
            <div className="icon__container" style={{background:'var(--color-success)'}}>
                <GiTeacher/>
                </div>   
            <div className="count__container">
                <Odometer 
                value={instructors} 
                className='title'
                />
                <div className="tittle">+</div>
            </div>
            <p className="text__muted">Years Of Experience</p>
        </div>

        <div className="fact__item">
            <div className="icon__container" style={{background:'blue'}}>
                <PiStudentBold/>
            
                </div>   
            <div className="count__container">
                <Odometer 
                value={students} 
                className='title'
                />
                <div className="tittle">+</div>
            </div>
            <p className="text__muted">Students Taught</p>
        </div>

        <div className="fact__item">
            <div className="icon__container" style={{background:'red'}}>
            <FaBookAtlas/>  
                </div> 
            <div className="count__container">
                <Odometer 
                value={courses} 
                className='title'
                />
                <div className="tittle">+</div>
            </div>
            <p className="text__muted">Pages Handwritten Notes</p>
        </div>

    </div>
  )
}

export default FunFacts
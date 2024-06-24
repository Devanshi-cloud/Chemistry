import { IoCallOutline,IoLocationOutline,IoBusinessSharp,IoAccessibility } from "react-icons/io5";
import { LiaConnectdevelop } from "react-icons/lia";
import { MdOutlineDatasetLinked,MdElectricScooter,MdOutlineAlternateEmail,
         MdDraw,MdLaptopChromebook } from "react-icons/md";
import { AiOutlineSolution} from "react-icons/ai";
import { CgTrack } from "react-icons/cg";
import { IoMdAnalytics } from "react-icons/io";
import { FaInstagram, FaServer } from "react-icons/fa6";
import { GiGrandPiano } from "react-icons/gi";
import { TfiAlarmClock } from "react-icons/tfi";
import { FaCreditCard,FaYoutube,FaFacebook,FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { profile2, profile3,profile4,profile5,profile6,profile7,profile11} from "./assets";

export const menus = [
    {name:"Home",routeId:'hero'},
    {name:"About Us",routeId:'about-us'},
    {name:"Achievements",routeId:'courses'},
    {name:"Contact",routeId:'contact'},
];

export const categories = [
  {
    name:"Development",
    icon:<LiaConnectdevelop/>,
    courseCount:45,
  },
  {
    name:"Marketing",
    icon:<IoMdAnalytics/>,
    courseCount:340,
  },
  {
    name:"Business",
    icon:<IoBusinessSharp/>,
    courseCount:121,
  },
  {
    name:"IT and Software",
    icon:<FaServer/>,
    courseCount:401,
  },
  {
    name:"Music",
    icon:<GiGrandPiano/>,
    courseCount:187,
  },
  {
    name:"Design",
    icon:<MdDraw/>,
    courseCount:70,
  },
];

export const about = [
    {
        title:"Easily Accessible",
        icon:<IoAccessibility/>,
        color:"var(--color-primary)",
        description:`Our coaching, located in Swaroop Nagar Mall Road, Kanpur, is situated in a highly safe area with parking facilities,
        nearby shops for dining, and other coaching centers within walking distance. 
        This central location makes it easily accessible and convenient for students. `,
    },
    {
        title:"Flexible study time",
        icon:<TfiAlarmClock/>,
        color:"orange",
        description:`The timings are tailored to students' routines, with additional classes for clarifying doubts 
        and for those who missed a class due to genuine reasons.`,
    },
    {
        title:"More affordable cost",
        icon:<FaCreditCard/>,
        color:"blueviolet",
        description:`The fees payment system is flexible, allowing students to pay quarterly or in a single lump sum. Digital payments are accepted.
         The coaching offers free demo classes, providing students the opportunity to experience the learning environment before committing.`,
    },
    {
        title:"Fun learning experience",
        icon:<MdLaptopChromebook/>,
        color:"var(--color-success)",
        description:`The classes feature advanced technology, including air-conditioned classrooms, digital teaching boards, 
        and interactive sessions, which facilitate the resolution of real-time problems and queries faced by students.`,
    },
]

export const courses = [
  {
    title: "High class teaching faculty",
    image: profile2,
    description: `Exceptional teaching faculty are the backbone of our educational institution. 
    Our Expert possess a deep understanding of their subject matter, a passion for imparting knowledge, 
    and a commitment to fostering student growth and success.`,
  },
  {
    title: "Results of 2024",
    image: profile3,
    description: `The top students in the class were a testament to the power of dedication and hard work. They had consistently pushed themselves to excel, often staying late after class to complete assignments and study for exams.
     Their efforts had paid off, as they had achieved outstanding grades and had been recognized for their academic achievements.`,
  },
  {
    title: "Results published in newspaper",
    image: profile4,
    description: ``,
  },
  {
    title: "Results of 2023",
    image: profile5,
    description: `The coaching centre's chemistry results for 2023 were impressive, with students consistently performing well in various exams. 
    The centre's emphasis on conceptual understanding and practical application of chemical reactions, equations, and types helped students grasp the subject effectively. `,
  },
  {
    title: "Best coaching in Kanpur",
    image: profile6,
    description: `With years of experience and a proven track record of success,
     our coaching center is the perfect place for students to improve their understanding and skills in chemistry.
      Our expert coaches use interactive and engaging teaching methods to ensure that students stay motivated and focused throughout their studies. Whether you're a student looking to improve your grades or prepare for competitive exams, our chemistry coaching in Kanpur is the ideal choice for you.`,
  },
  {
    title: "Excellence",
    image: profile7,
    description: `Shobhit Sharma, a student from our esteemed institute, has achieved an outstanding feat by securing a perfect score of 100/100 in chemistry. This remarkable achievement has earned him the distinction of being the city topper of Kanpur. Shobhit's exceptional academic prowess and dedication to his studies have undoubtedly paid off, and we are all proud of his remarkable accomplishment.`,
  },
  {
    title: "Digital Learning Experience",
    image: profile11,
    description: `Digital boards, such as interactive whiteboards or touchscreen displays, can be powerful tools for enhancing the learning experience and saving time in the classroom. By leveraging the capabilities of digital boards, educators can save time on tasks like writing on a traditional chalkboard, switching between different teaching materials, and managing physical resources. This can lead to more efficient use of class time, allowing teachers to focus on delivering high-quality instruction and fostering deeper student engagement and understanding.`,
  },
]

export const pricing = [
  {
    name:'Basic',
    price:"₦1,500",
    benefits:[
       "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
       "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", 
       "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      ]
  },
  {
    name:'Favourite',
    price:"₦55,000",
    benefits:[
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", 
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
     ]
  },
  {
    name:'Enterprise',
    price:"₦95,000",
    benefits:[
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", 
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
     ]
  },
]

export const services = [
    {
        icon:<MdOutlineDatasetLinked/>,
        name:"Automated Manufacturing",
        description:`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Non dolore ut nisi aspernatur alias `,
    },
    {
        icon:<MdOutlineDatasetLinked/>,
        name:"Robotic Process Automation",
        description:`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Non dolore ut nisi aspernatur alias `,
    },
    {
        icon:<MdOutlineDatasetLinked/>,
        name:"AI-Powered Analytics",
        description:`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Non dolore ut nisi aspernatur alias `,
    },
    {
        icon:<MdOutlineDatasetLinked/>,
        name:"Autonomous Vehicles",
        description:`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Non dolore ut nisi aspernatur alias `,
    },
    {
        icon:<MdOutlineDatasetLinked/>,
        name:"Personalized Healthcare Solutions",
        description:`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Non dolore ut nisi aspernatur alias `,
    },
    {
        icon:<MdOutlineDatasetLinked/>,
        name:"Smart Home Systems",
        description:`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Non dolore ut nisi aspernatur alias `,
    },
]

export const whyChooseUs = [
    {
        name:"Innovative and Flexible Learning Environment",
        icon:<MdElectricScooter/>,
        description:`At our online school, we leverage the latest educational technology to 
                     create an engaging and interactive learning experience. Our flexible 
                     scheduling options allow you to study at your own pace, making it easier 
                     to balance education with other commitments.`,
    },
    {
        name:"Expert Instructors",
        icon:<AiOutlineSolution/>,
        description:`Our team of highly qualified instructors brings years of 
                     experience and expertise to each course. We offer a wide range of subjects 
                     and specialized programs that cater to various interests and career aspirations.`,
    },
    {
        name:"Supportive Community and Resources",
        icon:<CgTrack/>,
        description:`Joining our online school means becoming part of a supportive and 
                     vibrant community. We provide extensive resources, including academic 
                     advising, career counseling, and technical support, to ensure you have 
                     everything you need to succeed. `,
    },
]

export const testimonial = [
    {
      image:profile2,
      name:'Samuel Eze',
      review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`
    },
    {
      image:profile3,
      name:'Emmanuel Joseph',
      review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
    },
    {
      image:profile4,
      name:'Gloria Chiwendu',
      review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`
    },
    {
      image:profile5,
      name:'Precious Stone',
      review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
    }
  
];

export const socialHandles = [
    {
      name:"Facebook",
      icon:<FaFacebook/>,
      link:"https://www.facebook.com/naveen.jaiswal7",
    },
    {
      name:"Twitter",
      icon:<FaInstagram/>,
      link:"https://www.instagram.com/naveen.jaiswal7/",
    },
    {
      name:"LinkedIn",
      icon:<CiLinkedin/>,
      link:"https://www.linkedin.com/in/devanshi-jaiswal-b83774217/",
    },
    {
      name:"Youtube",
      icon:<FaYoutube/>,
      link:"https://www.youtube.com/@naveenjaiswal6911",
    },
];

export const footer = [
    {
      group:"Explore",
      routes:[
        {name:"Home",routeId:'hero'},
        {name:"About Us",routeId:'about-us'},
        {name:"Achievements",routeId:'courses'},
        {name:"Contact",routeId:'contact'},
      ]
    },
    {
      group:"Others",
      routes:[
        {name:"Privacy Policy"},
        {name:"Terms and Conditions"},
        {name:"Cookie Policy"},
      ]
    },
    {
      group:"Contacts",
      routes:[
        {
          name:"naveen.jaiswal7@gmail.com",
          icon:<MdOutlineAlternateEmail />,
        },
        {
          name:"+91-8795430430",
          icon:<IoCallOutline/>,
        },
        {
          name:"7/136 B, Friend's Colony Swaroop Nagar, Kanpur, Uttar Pradesh",
          icon:<IoLocationOutline/>,
        },
      ]
    },
]
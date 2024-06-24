import React from 'react'
import './Footer.css'
import { footer } from '../../data'

import Logo from '../Logo'

import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="container">
        <div className="row">
          {
            footer.map((list,index)=>(
              <div className="column" key={index}>
                <h3 className="group__name">{list.group}</h3>
                <div className="routes__container">
                  {
                    list.routes.map((route,i)=>(
                      <Link to={route.routeId || "#"} className='route__item' key={i}>
                      {
                      route.icon ? <div className="icon__container">{route.icon}</div>:""
                    }
                    <p className="name">{route.name}</p>
                    </Link>
                  ))
                }
                </div>
              </div>
            ))
              }
              <div className="column">
                <Logo />
              </div>
        </div>
        <article className="copyright__container">
          <h4>Copyright &copy; All right reserved -| 2024</h4>
          <p className='text__muted'>Built with love by Devanshi Jaiswal</p>
        </article>
      </div>
    </footer>
  )
}

export default Footer
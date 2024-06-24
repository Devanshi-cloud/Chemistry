import React from 'react'
import './SocialHandles.css';
import { socialHandles } from '../../data';

const SocialHandles = () => {
  return (
    <div className='social__handles__container'>
        {
            socialHandles.map((handle, index) => (
                <a href={handle.link} target='_blank' className='icon__container handle' key={index}>
                    {handle.icon}
                </a>
            ))
            }
    </div>
  )
}

export default SocialHandles
import './Header.css'
import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'
const HeaderSocials =() => {
  return (
      <div className='header__socials'>
          <a href='https://www.linkedin.com/in/prashantkr006/' target='_blank' rel="noreferrer"><BsLinkedin /></a>
          <a href='https://github.com/prashantkr006' target='_blank' rel="noreferrer"><BsGithub /></a>
          <a href='https://www.instagram.com/prashantkr006/' target='_blank' rel="noreferrer"><BsInstagram /></a>
      </div>
  )
}

export default HeaderSocials
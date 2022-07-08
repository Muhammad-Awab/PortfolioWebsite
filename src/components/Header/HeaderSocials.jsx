import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
      <a href="https://gitub.com" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials

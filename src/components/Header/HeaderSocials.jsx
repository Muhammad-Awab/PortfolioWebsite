import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/muhammadawab/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
      <a href="https://gitub.com/Muhammad-Awab" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
      <a href="https://www.facebook.com/muhammad.awab.338   " target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials

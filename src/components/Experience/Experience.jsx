import React from 'react'
import './Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
<section id='experience'>
<h5>What Skills I Have</h5>
<h2>My Experience</h2>
<div className="container experience_container">
  <div className="experience_frontened">
    <h3>Frontened Development</h3>
    <div className="experience_content">
      <article className='experience_details'>
<BsFillPatchCheckFill className='experience_details-icons'/>
<div>
<h4>HTML</h4>
<small className='text-light'>Experienced</small>
</div>
</article>
      <article className='experience_details'>
<BsFillPatchCheckFill className='experience_details-icons'/>
<div>
<h4>CSS</h4>
<small className='text-light'>Intermediate</small>
</div>
</article>
      <article className='experience_details'>
<BsFillPatchCheckFill className='experience_details-icons'/>
<div>
<h4>JavaScript</h4>
<small className='text-light'>Experienced</small>
</div>
</article>
      <article className='experience_details'>
<BsFillPatchCheckFill className='experience_details-icons'/>
<div>
<h4>BootStrap</h4>
<small className='text-light'>Experienced</small>
</div>
</article>
      <article className='experience_details'>
<BsFillPatchCheckFill className='experience_details-icons'/>
<div>
<h4>React Js</h4>
<small className='text-light'>Experienced</small>
</div>
</article>
    </div>
  </div>
  <div className="experience_backened">
  <h3>Backened Development</h3>
  <div className="experience_content">
      <article className='experience_details'>
<BsFillPatchCheckFill className='experience_details-icons'/>
<div>
<h4>Node js</h4>
<small className='text-light'>Intermediate</small>
</div>
</article>
      <article className='experience_details'>
<BsFillPatchCheckFill className='experience_details-icons'/>
<div>
<h4>MongoDB</h4>
<small className='text-light'>Intermediate</small>
</div>
</article>
      <article className='experience_details'>
<BsFillPatchCheckFill className='experience_details-icons'/>
<div>
<h4>Flask</h4>
<small className='text-light'>Intermediate</small>
</div>
</article>
      <article className='experience_details'>
<BsFillPatchCheckFill className='experience_details-icons'/>
<div>
<h4>MySQL</h4>
<small className='text-light'>Basic</small>
</div>
</article>
      <article className='experience_details'>
<BsFillPatchCheckFill className='experience_details-icons'/>
<div>
<h4>Python</h4>
<small className='text-light'>Basic</small>
</div>
</article>
    </div>

  </div>
</div>
</section>
  )
}

export default Experience

import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
<h5>What I Offer</h5>
<h2>Services</h2>
<div className="container services_container">
  <article className='service'>
    <div className="service_head">
      <h3>Wordpress</h3>
    </div>
    <ul className='service_list'>
      <li><BiCheck className='service_list-icon'/>
      <p>Custom WordPress. Website Development.</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>Customization. Theme Development & Customization</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>Blog Development. Blog Development.</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>Blog Development. Blog Development.</p>
      </li>
      
     
    </ul>
  </article>
  <article className='service'>
    <div className="service_head">
      <h3>Frontened Development</h3>
    </div>
    <ul className='service_list'>
      <li><BiCheck className='service_list-icon'/>
      <p>HTML5 development</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>JavaScript development</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>CSS3 development</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>UI/UX design</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>Responsive and Mobile design</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>React js Development</p>
      </li>
    </ul>
  </article>
  <article className='service'>
    <div className="service_head">
      <h3>Backened Development</h3>
    </div>
    <ul className='service_list'>
      <li><BiCheck className='service_list-icon'/>
      <p>Login Authentication</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>Databases</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>Email Notifications</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>Data Management</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>Sql Database Integration</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>Firebase</p>
      </li>
    </ul>
  </article>
</div>
    </section>
  )
}

export default Services

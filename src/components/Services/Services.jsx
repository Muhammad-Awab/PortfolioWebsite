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
      <h3>Devops</h3>
    </div>
    <ul className='service_list'>
      <li><BiCheck className='service_list-icon'/>
      <p>Automates code integration, build, and testing for rapid feedback.</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>Automates deployment pipelines to ensure consistent and efficient software releases.</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>Manages infrastructure and application configurations through code.</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>Uses containers and automation to deploy and manage applications at scale.
</p>

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

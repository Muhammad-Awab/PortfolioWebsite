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
      <p>WordPress is a content management system (CMS), software used to build, modify, and maintain websites.</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>WordPress is a content management system (CMS) that allows you to host and build websites</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>WordPress contains plugin architecture and a template system, so you can customize any website to fit your business, blog, portfolio, or online store.</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>    WordPress is free, as are many of its add-ons. Still, at the very least you'll need to spend money on both hosting and a domain.</p>
      </li>
     
    </ul>
  </article>
  <article className='service'>
    <div className="service_head">
      <h3>Frontened Development</h3>
    </div>
    <ul className='service_list'>
      <li><BiCheck className='service_list-icon'/>
      <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
      </li>
    </ul>
  </article>
  <article className='service'>
    <div className="service_head">
      <h3>Backened Development</h3>
    </div>
    <ul className='service_list'>
      <li><BiCheck className='service_list-icon'/>
      <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
      </li>
    </ul>
  </article>
</div>
    </section>
  )
}

export default Services

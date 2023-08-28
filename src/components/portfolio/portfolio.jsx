import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio7.jpg'
import IMG2 from '../../assets/portfolio3.jpg'
import IMG3 from '../../assets/portfolio2.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio6.jpg'
import IMG6 from '../../assets/portfolio5.jpg'
const Portfolio = () => {
  const data=[
    {
      id:1,
      image:IMG1,
      title:'Resturant Food Delievery',
      gitub:'https://github.com/Muhammad-Awab',
      demo:'https://github.com/Muhammad-Awab/PizzaApplication'
    },
    {
      id:2,
      image:IMG2,
      title:'Pizza Delievery Website',
      gitub:'https://github.com/Muhammad-Awab',
      demo:'https://github.com/Muhammad-Awab/PizzaDelieveryApplication'
    },
    {
      id:3,
      image:IMG3,
      title:'Car Showroom Website',
      gitub:'https://github.com/Muhammad-Awab',
      demo:'https://github.com/Muhammad-Awab/Car-Show-Room-Website'
    },
    {
      id:4,
      image:IMG4,
      title:'Todos Item List Website',
      gitub:'https://github.com/Muhammad-Awab',
      demo:'https://github.com/Muhammad-Awab/WeatherAPP_Using_API_TODOAPP'
    },
    {
      id:5,
      image:IMG5,
      title:'Live Country Weather Website',
      gitub:'https://github.com/Muhammad-Awab',
      demo:'https://github.com/Muhammad-Awab/WeatherAPP_Using_API_TODOAPP'
    },
    {
      id:6,
      image:IMG6,
      title:'Call Center Application',
      gitub:'https://github.com/Muhammad-Awab',
      demo:'https://github.com/Muhammad-Awab/CallCenterApplication'
    }
  ]
  return (
    <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        
        <div className="container portfolio_container">
          {
 data.map((item)=>{
  return(
  <article key={item.id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={item.image} alt="" />
                </div>
                    <h3>{item.title}</h3>
                    <div className="porifolio_item-cta">
                    <a href={item.gitub} className='btn' target='_blank' rel="noreferrer">Gitub</a>
                    <a href={item.demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
            </article>
  )})           
        
}
        </div>
    </section>
  )
}

export default Portfolio

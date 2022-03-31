/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './Portfolio.css'

const data = [
  {
    id: 1,
    image:
      "https://raw.githubusercontent.com/prashantkr006/assets/master/images/portfolio/portfolio1.jpg",
    title: "portfolio1",
    github: "https://github.com/",
    live: "https://github.com/prashantkr006/prashantkr006",
  },
  {
    id: 2,
    image:
      "https://raw.githubusercontent.com/prashantkr006/assets/master/images/portfolio/portfolio2.jpg",
    title: "portfolio2",
    github: "https://github.com/",
    live: "https://github.com/prashantkr006/prashantkr006",
  },
  {
    id: 3,
    image:
      "https://raw.githubusercontent.com/prashantkr006/assets/master/images/portfolio/portfolio3.jpg",
    title: "portfolio3",
    github: "https://github.com/",
    live: "https://github.com/prashantkr006/prashantkr006",
  },
  {
    id: 4,
    image:
      "https://raw.githubusercontent.com/prashantkr006/assets/master/images/portfolio/portfolio4.jpg",
    title: "portfolio4",
    github: "https://github.com/",
    live: "https://github.com/prashantkr006/prashantkr006",
  },
  {
    id: 5,
    image:
      "https://raw.githubusercontent.com/prashantkr006/assets/master/images/portfolio/portfolio5.png",
    title: "portfolio5",
    github: "https://github.com/",
    live: "https://github.com/prashantkr006/prashantkr006",
  },
  {
    id: 6,
    image:
      "https://raw.githubusercontent.com/prashantkr006/assets/master/images/portfolio/portfolio6.jpg",
    title: "portfolio6",
    github: "https://github.com/",
    live: "https://github.com/prashantkr006/prashantkr006",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, live }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={ image } alt="portfolio image" />
                </div>
                <h3>{ title }</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='__blank'>Source Code</a>
                  <a href={live} className='btn btn-primary' target='__blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  );
}

export default Portfolio
import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Static Web Apps</p>
              <BiCheck className="service__list-icon" />
              <p>Dynamic Web Apps</p>
              <BiCheck className="service__list-icon" />
              <p>Single-Page Applications</p>
              <BiCheck className="service__list-icon" />
              <p>Multi-Page Applications</p>
              <BiCheck className="service__list-icon" />
              <p>Animated Web Apps</p>
              <BiCheck className="service__list-icon" />
              <p>eCommerce Web Apps</p>
              <BiCheck className="service__list-icon" />
              <p>Progressive Web Apps</p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEVELOPMENT*/}
        <article className="service">
          <div className="service__head">
            <h3>App Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Firebase connectivity</p>
              <BiCheck className="service__list-icon" />
              <p>API Support</p>
              <BiCheck className="service__list-icon" />
              <p>Push Notification</p>
              <BiCheck className="service__list-icon" />
              <p>Material Design</p>
              <BiCheck className="service__list-icon" />
              <p>Retrofit</p>
              <BiCheck className="service__list-icon" />
              <p>Responsive Screen</p>
              <BiCheck className="service__list-icon" />
              <p>Admob integration</p>
              <BiCheck className="service__list-icon" />
              <p>Map/GPS</p>
              <BiCheck className="service__list-icon" />
              <p>Authentication using Gmail, Facebook, and Phone, etc</p>
              <BiCheck className="service__list-icon" />
              <p>Payment gateways</p>
            </li>
          </ul>
        </article>
        {/*END OF APP DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Data Science</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Data Pre Processing</p>
              <BiCheck className="service__list-icon" />
              <p>Exploratory Data Analysis</p>
              <BiCheck className="service__list-icon" />
              <p>Data Visualization</p>
              <BiCheck className="service__list-icon" />
              <p>Feature Selection</p>
              <BiCheck className="service__list-icon" />
              <p>Feature Engineering</p>
              <BiCheck className="service__list-icon" />
              <p>Machine Learning</p>
              <BiCheck className="service__list-icon" />
              <p>Model Building</p>
              <BiCheck className="service__list-icon" />
              <p>Data representation</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services
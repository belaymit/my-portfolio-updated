import React, { useState } from 'react';
import '../../styles/services.scss';
import ServiceList from '../ui/ServiceList';

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section-title">
        Services
      </h2>
      <span className="section-subtitle">What I offer</span>
      <div className="service-container container grid">
        <div className="service-content">
          <div>
            <i className="uil uil-web-grid service-icon" />
            <h3 className="service-title">
              Product
              <br />
              Designer
            </h3>
          </div>
          <span className="services-button" onClick={() => toggleTab(1)} role="presentation">
            View More
            {' '}
            <i className="uil uil-arrow-right service-button-icon" />
          </span>
          <div className={toggleState === 1 ? 'service-modal active-modal' : 'service-modal'}>
            <div className="service-modal-content">
              <i className="uil uil-times service-modal-close" onClick={() => toggleTab(0)} role="presentation" />
              <h3 className="service-modal-title">Product Designer</h3>
              <p className="services-modal-description">
                Services with more than five Months of experience.
                I provide quality services to clients and Companies
              </p>
              <ServiceList />
            </div>
          </div>
        </div>
        <div className="service-content">
          <div>
            <i className="uil uil-arrow service-icon" />
            <h3 className="service-title">
              UI/UX
              <br />
              Designer
            </h3>
          </div>
          <span className="services-button" onClick={() => toggleTab(2)} role="presentation">
            View More
            {' '}
            <i className="uil uil-arrow-right service-button-icon" />
          </span>
          <div className={toggleState === 2 ? 'service-modal active-modal' : 'service-modal'}>
            <div className="service-modal-content">
              <i className="uil uil-times service-modal-close" onClick={() => toggleTab(0)} role="presentation" />
              <h3 className="service-modal-title">UI/UX Designer</h3>
              <p className="services-modal-description">
                Services with more than five Months of experience.
                I provide quality services to clients and Companies
              </p>
              <ServiceList />
            </div>
          </div>
        </div>
        <div className="service-content">
          <div>
            <i className="uil uil-edit service-icon" />
            <h3 className="service-title">
              Visual
              <br />
              Designer
            </h3>
          </div>
          <span className="services-button" role="presentation" onClick={() => toggleTab(3)}>
            View More
            {' '}
            <i className="uil uil-arrow-right service-button-icon" />
          </span>
          <div className={toggleState === 3 ? 'service-modal active-modal' : 'service-modal'}>
            <div className="service-modal-content">
              <i className="uil uil-times service-modal-close" onClick={() => toggleTab(0)} role="presentation" />
              <h3 className="service-modal-title">Visual Designer</h3>
              <p className="services-modal-description">
                Services with more than five Months of experience.
                I provide quality services to clients and Companies
              </p>
              <ul className="service-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle service-modal-icon" />
                  <p className="services-modal-info">
                    I develop user interface
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="uil uil-check-circle service-modal-icon" />
                  <p className="services-modal-info">
                    Web page development
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="uil uil-check-circle service-modal-icon" />
                  <p className="services-modal-info">
                    I position your company brand
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="uil uil-check-circle service-modal-icon" />
                  <p className="services-modal-info">
                    I create ux element interactions
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="uil uil-check-circle service-modal-icon" />
                  <p className="services-modal-info">
                    Design and mockups of products for companies
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

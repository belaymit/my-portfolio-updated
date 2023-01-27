import React from 'react';
import { services } from '../../commons/navLink';

const ServiceList = () => (
  <ul className="service-modal-services grid">
    {
      services.map((elem) => (
        <li className="services-modal-service" key={elem.id}>
          <i className="uil uil-check-circle service-modal-icon" />
          <p className="services-modal-info">
            {elem.service}
          </p>
        </li>
      ))
    }
  </ul>
);

export default ServiceList;

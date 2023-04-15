import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, className, onClick }) => (
  <article className={`card ${className}`} onClick={onClick} role="presentation">
    {children}
  </article>
);

Card.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;

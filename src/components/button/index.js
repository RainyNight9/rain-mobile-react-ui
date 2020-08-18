import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Button = ({ text }) => <button className="btn">{text}</button>

Button.propTypes = {
  text: PropTypes.any
};

export default Button;
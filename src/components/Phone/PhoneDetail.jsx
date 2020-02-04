import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PhoneDetail = ({ phone, setPhone }) => (
  <Link className="phone fadein" onClick={() => setPhone(phone)} to={{ pathname: '/phone', search: `?id=${phone.id}` }}>
    <div className="phone-image">
      <img src={phone.image} alt={phone.title} />
    </div>
    <div className="phone-info">
      <div className="phone-header">
        <p className="phone-title">{phone.title}</p>
        <p className="phone-seller">({phone.seller})</p>
      </div>
      <p className="phone-desc">{phone.description}</p>
      <p className="phone-color">Color: {phone.color}</p>
    </div>
    <div className="phone-price">
      <p>{phone.price}</p>
    </div>
  </Link>
);

PhoneDetail.defaultProps = {
  phone: {},
};

PhoneDetail.propTypes = {
  phone: PropTypes.object,
  setPhone: PropTypes.func.isRequired,
};

export default PhoneDetail;

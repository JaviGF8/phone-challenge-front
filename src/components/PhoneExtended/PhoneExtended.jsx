import React from 'react';
import PropTypes from 'prop-types';

const PhoneExtended = ({ phone }) =>
  phone && (
    <div className="phone-extended fadein">
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
    </div>
  );

PhoneExtended.defaultProps = {
  phone: {},
};

PhoneExtended.propTypes = {
  phone: PropTypes.object,
};

export default PhoneExtended;

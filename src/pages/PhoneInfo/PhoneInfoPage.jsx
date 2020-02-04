import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import PhoneExtended from '../../components/PhoneExtended';
import Loading from '../../components/Loading';
import { getParametersFromUrl } from '../../utils/functions';

const PhoneInfoPage = ({ getAllPhones, getPhoneData, loading, phone }) => {
  useEffect(() => {
    const { id } = getParametersFromUrl();

    if (id && (!phone || !phone.id)) {
      // setTimeout for showing the loader
      setTimeout(() => getAllPhones().then(() => getPhoneData(id)), 1500);
    }
  }, []);

  return (
    <div id="phone-info-container">
      {loading ? (
        <Loading />
      ) : (
        <>{phone && phone.id ? <PhoneExtended key={phone.id} phone={phone} /> : <div>No phone found</div>}</>
      )}
      <Link to="/">Back</Link>
    </div>
  );
};

PhoneInfoPage.defaultProps = {
  loading: false,
  phone: {},
};

PhoneInfoPage.propTypes = {
  getAllPhones: PropTypes.func.isRequired,
  getPhoneData: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  phone: PropTypes.object,
};

export default PhoneInfoPage;

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Phone from '../../components/Phone';
import Loading from '../../components/Loading';

const PhoneListPage = ({ getAllPhones, loading, phones, setPhone }) => {
  useEffect(() => {
    if (!phones || 0 === phones.length) {
      getAllPhones();
    }
  }, []);

  return (
    <div id="phone-list-container">
      {loading ? (
        <Loading />
      ) : (
        <div className="phone-list">
          {phones && 0 < phones.length ? (
            phones.map((phone) => <Phone key={phone.id} phone={phone} setPhone={setPhone} />)
          ) : (
            <div>No phones found</div>
          )}
        </div>
      )}
    </div>
  );
};

PhoneListPage.defaultProps = {
  loading: false,
  phones: [],
};

PhoneListPage.propTypes = {
  getAllPhones: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  phones: PropTypes.array,
  setPhone: PropTypes.func.isRequired,
};

export default PhoneListPage;

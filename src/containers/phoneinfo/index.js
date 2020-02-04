import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAllPhones, getPhoneData } from '../../actions/phones/phones';
import PhoneInfoPage from '../../pages/phoneInfo';

const mapStateToProps = (state) => ({
  loading: state.phone.loading,
  phone: state.phone.phone,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ getAllPhones, getPhoneData }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneInfoPage);

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAllPhones, setPhone } from '../../actions/phones/phones';
import PhoneListPage from '../../pages/Phones';

const mapStateToProps = (state) => ({
  loading: state.phone.loading,
  phones: state.phone.phones,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ getAllPhones, setPhone }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneListPage);

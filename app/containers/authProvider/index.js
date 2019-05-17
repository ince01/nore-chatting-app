import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';

function AuthProvider() {
  return null;
}

const withReducer = injectReducer({ key: 'authProvider', reducer });
const withSaga = injectSaga({ key: 'authProvider', saga });

export default compose(withSaga, withReducer)(AuthProvider);
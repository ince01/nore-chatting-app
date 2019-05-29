import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';

function DataProvider() {
  return null;
}

const withReducer = injectReducer({ key: 'dataProvider', reducer });
const withSaga = injectSaga({ key: 'dataProvider', saga });

export default compose(withSaga, withReducer)(DataProvider);
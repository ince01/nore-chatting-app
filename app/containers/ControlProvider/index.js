import injectReducer from 'utils/injectReducer';
import reducer from './reducer';

function ControlProvider() {
  return null;
}

const withReducer = injectReducer({ key: 'controlProvider', reducer });

export default withReducer(ControlProvider);
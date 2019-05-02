import React, { Component } from 'react';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import { register } from './actions';
import saga from './saga';

import ChatForm from './ChatForm';
import InputMessage from './Components/InputMessage';
import Footer from './Components/Footer';

class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      socket: null,
      listMessage: ['ss', 'sss', 'qwewqd']
    }
  }

  componentDidMount() {
    const socket = io('http://localhost:5000', {
      query: {
        token: window.localStorage.getItem('sessionToken')
      }
    });

    this.setState({ socket });
    socket.on('connect', (err) => {
      if (err) {
        throw err;
      }
    });
  }

  sendMess = () => {

    var message = {
      from: "5cc282f7dc2cfe1f445f436f",
      to: "5cc944874a5f104e06c954fc",
      content: "yyyy"
    }

    this.state.socket.emit('message', message)
  }

  render() {
    const { listMessage } = this.state;
    return (
      <article>
        <div className="container">
          <div className="row">
            <div className="col">
              <a>asddddddddddddd</a>
            </div>
            <div className="col">
              <div>
                {listMessage.map((message, i) => {
                  return (
                    <div role="text" style={{
                      backgroundColor: "#b3d7ff",
                      border: '3px solid black',
                    }} key={i}>{message}</div>
                  )
                })}
                <InputMessage sendMess={this.sendMess} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </article>
    )
  }
}

// MainPage.propTypes = {
//   onSubmitForm: PropTypes.func.isRequired,
// };

// const mapDispatchToProps = (dispatch) => ({
//   onSubmitForm: (value) => dispatch(register(value))
// });

// const withConnect = connect(null, mapDispatchToProps);
// const withReducer = injectReducer({ key: 'registerPage', reducer });
// const withSaga = injectSaga({ key: 'registerPage', saga });

// export default compose(withReducer, withSaga, withConnect)(MainPage);

export default MainPage
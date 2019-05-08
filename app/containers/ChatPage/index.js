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
import { Nav, NavItem, Dropdown, NavLink } from 'react-bootstrap';

import axios from 'axios';

import './styles.scss';

class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: "chat",
      listFriends: [],
    }
  }

  componentDidMount() {
    const axiosAPI = axios.create({
      baseURL: 'http://localhost:5000',
      timeout: 1000,
      headers: { 'Authorization': `jwt ${localStorage.getItem('sessionToken')}` }
    });
    const app = this;
    axiosAPI.get('/user/friends')
      .then(function (res) {
        app.setState({
          listFriends: res.data.result
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  friend = (user) => {
    return (
      <p>{user}</p>
    )
  }

  itemChat = () => {
    let a = [];
    for (let index = 0; index < 50; index++) {
      a.push(
        <div className='item'>
          <img src='https://lh3.googleusercontent.com/gmiN7xU-meKFXDXQ75HmMtXTt_J6E5jE3iZ2w4U-W_jzDNjiT31HxoPmHgnTE0gD3eu6TEj-=w128-h128-e365'></img>
          <div className='info'>
            <p>tanh</p>
            <p>toan</p>
          </div>
          <div className='end'>
            <p>thu 4</p>
          </div>
        </div>
      )
    }
    return a
  }

  render() {
    const { tab, listFriends } = this.state;
    console.log(listFriends)
    return (
      <div className='main'>
        <div className="sidenav-container">
          <div className="tabs">
            <div className="tab" style={tab === 'chat' ? { backgroundColor: "rgb(199, 237, 252)" } : {}} onClick={() => { this.setState({ tab: 'chat' }) }}>
              <img src="https://img.icons8.com/color/48/000000/sms.png" />
              <p>Chat</p>
            </div>
            <div className="tab" style={tab === 'contact' ? { backgroundColor: "rgb(199, 237, 252)" } : {}} onClick={() => { this.setState({ tab: 'contact' }) }}>
              <img src="https://img.icons8.com/office/80/000000/contacts.png" />
              <p>Contact</p>
            </div>
          </div>
          <div className="list-container" >
            {
              tab === 'chat' ?
                (<div className="list-friend">
                  {this.itemChat()}
                </div>)
                : listFriends.map(i => this.friend(i.idFriend.fullName))
            }
          </div>
        </div>
        <div class="content">
          <h2>CSS Template</h2>
          <p>A full-height, fixed sidenav and content.</p>
        </div>
      </div>
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
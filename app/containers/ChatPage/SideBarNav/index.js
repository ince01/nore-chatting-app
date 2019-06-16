import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { onChangeTab, openPopupAddFr } from '../../ControlProvider/actions';
import { createStructuredSelector } from 'reselect';
import { makeSelectNavTabStatus } from '../../ControlProvider/selector';
import { makeSelectCurrentUser } from 'containers/authProvider/selector';
import { Avatar } from '../../../components/ComponentForms';
import { ItemChat, ItemContact } from '../../../components';
import iconAddFr from 'images/add-friend.svg';
import SearchForm from './SearchForm';
import PopupAddFriend from './popupAddFriend';
import { TAB_NOTIFICATION, TAB_CONTACT } from 'utils/constants';
import _ from 'lodash';
import { Button } from 'react-bootstrap';
import './style.scss';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import uploadIcon from 'images/icons8-upload-64.png';

import { ImagePicker } from '../../../components/ComponentForms'
import { withRouter } from 'react-router-dom';


class SideBarNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isViewDetailEdit: false,
      isViewEditProfile: false,
      updateUser: {
      }
    }
    this.fileUpload = React.createRef();
  }

  selectTabNotification = () => {
    this.props.onChangeTab(TAB_NOTIFICATION);
  }

  selectTabContact = () => {
    this.props.onChangeTab(TAB_CONTACT);
  }

  onClickAddFr = () => {
    this.props.openPopupAddFr();
  }

  handleSelectedImage(evt) {
    const selectedFile = evt.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = (file) => {
        this.setState({ updateUser: { ...this.state.updateUser, avatarUrl: file.target.result } });
        this.setState({ updateUser: { ...this.state.updateUser, fileAvatar: selectedFile } });
      };
      reader.readAsDataURL(selectedFile);
    }
  }


  ItemUserContact(user) {
    return (
      <>
        <div className="item-user-contact">
          {
            user.avatarUrl ? <img src={user.avatarUrl} /> :
              <img src='https://img.icons8.com/cotton/36/000000/gender-neutral-user.png' />
          }
          <div className="item-info" >
            <div className="name" >{user.fullName}</div>
          </div>
          <Button onClick={() => { this.props.accectFriend(user) }}>Comform</Button>
        </div>
      </>
    );
  }

  handleChange(name, event) {
    this.setState({ updateUser: { ...this.state.updateUser, [name]: event } });
  };


  viewDetailEdit() {
    return (
      <div className='view-detail-edit-container'>
        <div className='detail-user item' onClick={() => { this.setState({ updateUser: this.props.currentUser }); this.setState({ isViewEditProfile: true }); }}>
          {
            this.props.currentUser.avatarUrl ?
              <img src={this.props.currentUser.avatarUrl} /> :
              <img src='https://img.icons8.com/cotton/36/000000/gender-neutral-user.png' />
          }
          <div className='name-email'>
            <div className='name'>{this.props.currentUser.fullName}</div>
            <div>{this.props.currentUser.email}</div>
          </div>
        </div>
        <hr />
        <div className='item' onClick={() => { localStorage.removeItem('sessionToken'); this.props.history.push('/') }}>Log out</div>
      </div >
    )
  }

  selectImage(evt) {
    evt.preventDefault();
    this.fileUpload.current.click();
  }

  render() {
    const { navTabStatus } = this.props;
    const { fullName, avatarUrl, friends } = this.props.currentUser;

    return (
      <div className="side-bar-nav">
        <div className="control">
          <div tabIndex={0} className="user-info" onBlur={() => { this.setState({ isViewDetailEdit: false }) }} onClick={() => { const isViewDetailEdit = this.state.isViewDetailEdit; this.setState({ isViewDetailEdit: !isViewDetailEdit }) }} >
            <Avatar src={avatarUrl} />
            <div className="user-name" >{fullName}</div>
            <img className="icon-add-fr" src={iconAddFr} onClick={this.onClickAddFr} />
            <PopupAddFriend
              onHide={this.onHidePopupAddFr}
              handleConfirm={(user) => { this.props.accectFriend(user) }}
              handleAddFriend={(user) => { this.props.handleAddFriend(user) }}
            />
            {this.state.isViewDetailEdit && this.viewDetailEdit()}
          </div>

          <Dialog open={this.state.isViewEditProfile} onClose={() => { this.setState({ isViewEditProfile: false }) }} aria-labelledby="form-dialog-title">
            <DialogTitle id="alert-dialog-title">Edit profile</DialogTitle>
            <DialogContent>
              <div className="image-picker">
                <div className="image-preview" style={this.state.updateUser.avatarUrl ? { backgroundImage: `url(${this.state.updateUser.avatarUrl})` } : { backgroundImage: `url(https://img.icons8.com/cotton/64/000000/person-male.png)` }} />
                <div className="control">
                  <div className="image-picker-label-1">Profile picture</div>
                  <div className="image-picker-label-2">(320px × 320px以上)</div>
                  <button className="btn-pick-imgage" onClick={(e) => this.selectImage(e)}>
                    <img alt="upload-icon" src={uploadIcon} />
                    Choose file
                  </button>
                  <input ref={this.fileUpload} id="fileUpload" type="file" className='display-none' onChange={(e) => this.handleSelectedImage(e)} />
                </div>
              </div>
              <TextField
                id="standard-name"
                label="Name"
                value={this.state.updateUser.fullName}
                onChange={(e) => { this.handleChange('fullName', e.target.value) }}
                margin="normal"
              />
              <RadioGroup
                aria-label="Gender"
                name="gender1"
                value={this.state.updateUser.gender}
                onChange={(e) => { this.handleChange('gender', e.target.value) }}
              >
                <FormControlLabel value="Women" control={<Radio />} label="Female" />
                <FormControlLabel value="Men" control={<Radio />} label="Male" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
              </RadioGroup>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  id={'birthday'}
                  label='Birthday'
                  value={this.state.updateUser.birthday}
                  onChange={(e) => { this.handleChange('birthday', e) }}
                />
              </MuiPickersUtilsProvider>

            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={() => this.setState({ isViewEditProfile: false })}>
                Cancel
              </Button>
              <Button color="primary" onClick={() => { this.props.updateUser(this.state.updateUser); this.setState({ isViewEditProfile: false }) }} autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
          {/* <div className="search-field" >
            <SearchForm />
          </div> */}
          <div className="tab-bar" >
            <div className="contact" onClick={this.selectTabContact}>
              <img src="https://img.icons8.com/ultraviolet/20/000000/contacts.png" />
              <div className="descr" > Contact </div>
            </div>
            <div className="chat" onClick={this.selectTabNotification} >
              <img src="https://img.icons8.com/ultraviolet/40/000000/appointment-reminders.png" />
              <div className="descr" > Notification </div>
            </div>
          </div>
        </div>
        {
          navTabStatus === TAB_NOTIFICATION &&
          <div className="list-chat" >
            {this.props.listFriendRequest.map(i => {
              return this.ItemUserContact(i);
            })}
          </div>
        }
        {
          navTabStatus === TAB_CONTACT &&
          <div className="list-contact" >
            {!_.isEmpty(friends) && friends.map((i, index) => {
              return <ItemContact active={i._id === this.props.idFriendCurrent} key={index} user={i} onClick={() => { this.props.onChangeUserChatting(i) }} />
            })}
          </div>
        }
      </div>
    )
  }
}

SideBarNav.propTypes = {
  navTabStatus: PropTypes.string.isRequired,
  currentUser: PropTypes.object.isRequired,
  onChangeTab: PropTypes.func,
  openPopupAddFr: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  navTabStatus: makeSelectNavTabStatus(),
  currentUser: makeSelectCurrentUser(),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeTab: (status) => dispatch(onChangeTab(status)),
  openPopupAddFr: () => dispatch(openPopupAddFr()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(withRouter(SideBarNav));
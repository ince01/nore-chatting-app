import React from 'react';
import PropTypes from 'prop-types';
import uploadIcon from 'images/icons8-upload-64.png';
import './style.scss';
import _ from 'lodash';

class ImagePicker extends React.Component {
  constructor(props) {
    super(props);
    this.fileUpload = React.createRef();
    this.state = {
      imageUrl: '',
      originalUrl: ''
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = {};
    const value = _.get(nextProps, 'input.value');
    if (typeof value === 'string' && value !== prevState.originalUrl) {
      state.imageUrl = value;
      state.originalUrl = value;
      return state;
    }
    return null;
  }

  selectImage = (evt) => {
    evt.preventDefault();
    this.fileUpload.current.click();
  }

  handleSelectedImage = (evt) => {
    const selectedFile = evt.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = (file) => {
        this.setState({ imageUrl: file.target.result });
        this.props.input.onChange(selectedFile);
      };
      reader.readAsDataURL(selectedFile);
    }
  }

  render() {
    const { imageUrl } = this.state;
    return (
      <div className="image-picker">
        <div className="image-preview" style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : { backgroundImage: `url(https://img.icons8.com/cotton/36/000000/gender-neutral-user.png)`, backgroundSize: '60%' }} />
        <div className="control">
          <div className="image-picker-label-1">Profile picture</div>
          <div className="image-picker-label-2">(320px × 320px以上)</div>
          <button className="btn-pick-imgage" onClick={this.selectImage}>
            <img alt="upload-icon" src={uploadIcon} />
            Choose image
            </button>
          <input ref={this.fileUpload} id="fileUpload" type="file" className='display-none' onChange={(e) => this.handleSelectedImage(e)} />
        </div>

      </div>
    );
  }
}

ImagePicker.propTypes = {
  input: PropTypes.any
}

export default ImagePicker;
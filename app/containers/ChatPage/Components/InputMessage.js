import React, { Component } from 'react';

class InputMessage extends Component {
  render() {
    const { sendMess } = this.props;
    return (
      <div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Type a message..." aria-label="Input message" aria-describedby="button-addon2" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={sendMess} >Send</button>
          </div>
        </div>
      </div>
    )
  }
}

export default InputMessage
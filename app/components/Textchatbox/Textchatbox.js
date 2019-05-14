import React from 'react';
import './style.scss';

class Textchatbox extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
      return (
        <div className="Textchatbox">
           <hr></hr>
			<input type="text" className="form-control"  placeholder="Type Message..." name="textchatbox"/>
        </div>
      );
    }
  }
  export default  Textchatbox;
import React, { Component } from 'react';
import io from 'socket.io-client';


class ChatForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      listMess: [],
    }
  }

  handleClick = () => {
    this.state.listMess.push(this.state.value);

    var mess = {
      from: '5cc282f7dc2cfe1f445f436f',
      to: '5cc944874a5f104e06c954fc',
      contents: this.state.value,
    };

  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps)
    console.log(prevState)
    // Return null to indicate no change to state.
    return null;
  }

  componentDidMount() {
    const client = io('http://localhost:5000', {
      query: {
        token: window.localStorage.getItem('sessionToken')
      }
    });
    client.on('connect', (err, socket) => {
      if (err) {
        throw err;
      }
      client.on('message', (data) => {
        console.log(data)
      })
    });
  }

  render() {
    console.log(this.state.listMess)
    return (
      <div>
        {this.state.listMess.map((value, index) => {
          return (
            <div key={index} className='row'>
              <span key={index} >{value}</span>
            </div>
          )
        })}
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Type a message..." aria-describedby="button-addon2" value={this.state.value} onChange={(e) => { this.setState({ value: e.target.value }) }} />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.handleClick} >Send</button>
          </div>
        </div>
      </div>
    )
  }
}

export default (ChatForm)

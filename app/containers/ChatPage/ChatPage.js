import React, { Component } from 'react';
import { InputButtonField } from '../../components/ComponentForms'
import { Field, reduxForm } from 'redux-form';
import io from 'socket.io-client';


class ChatPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // client: io('http://localhost:5000',)
    }
  }

  componentDidMount() {
    const client = io('http://localhost:5000', {
      query: {
        token: window.localStorage.getItem('sessionToken')
      }
    });
    client.on('connect', function (err) {
      if (err) {
        return console.log(err)
      }
      console.log('Client has connected to the server!');
    });
  }

  render() {
    console.log(document.cookie)
    console.log(this.props)
    return (
      <div>
        <form>
          <Field
            name="inputMess"
            component={InputButtonField}
            placeholder='Type a message .. '
          />
        </form>
      </div>
    )
  }
}

export default reduxForm({ form: 'chatPage' })(ChatPage)

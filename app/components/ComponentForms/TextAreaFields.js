import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class TextAreaFields extends Component {
  render() {
    return (
      <Form.Control as="textarea" rows="1" />
    )
  }
}

export default TextAreaFields

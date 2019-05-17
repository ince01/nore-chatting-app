import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class TextAreaFields extends Component {
  render() {
    return (
      // <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Control as="textarea" rows="1" />
      // </Form.Group>
    )
  }
}

export default TextAreaFields

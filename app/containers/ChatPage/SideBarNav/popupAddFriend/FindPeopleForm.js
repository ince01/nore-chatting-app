import React from 'react';
import { reduxForm, Field, Form } from 'redux-form/immutable';
import { Button } from 'react-bootstrap';

class FindPeopleForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form className="input-find-people" onSubmit={handleSubmit} >
        <Field
          name="email"
          type="text"
          placeholder="Find people"
          component="input"
        />
        <Button variant="outline-primary" className="btn-find-friend" type="submit" >Find</Button>
      </Form>
    );
  }
}

export default reduxForm({ form: 'findPeope' })(FindPeopleForm);
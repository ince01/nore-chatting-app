import React from 'react';
import { reduxForm, Field, Form } from 'redux-form/immutable';
import { Button } from 'react-bootstrap';
import { TextFields } from '../../../../components/ComponentForms'

class FindPeopleForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form className="input-find-people" onSubmit={handleSubmit} >
        <div className="input-search" >
          <Field
            name="email"
            type="text"
            placeholder="Find people"
            component={TextFields}
          />
        </div>
        <div>
          <Button variant="outline-primary" className="btn-find-friend" type="submit" >Find</Button>
        </div>
      </Form>
    );
  }
}

export default reduxForm({ form: 'findPeope' })(FindPeopleForm);
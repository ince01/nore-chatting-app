import React from 'react';
import { reduxForm, Field, Form } from 'redux-form/immutable';
import { TextAreaFields } from '../../../components/ComponentForms';

class TypeForm extends React.Component {
  render() {
    return (
      <Form>
        <Field
          name="typeMessage"
          type="text"
          placeholder="Type a message..."
          component={TextAreaFields}
        />
      </Form>
    );
  }
}

export default reduxForm({ form: 'typeMessage' })(TypeForm);
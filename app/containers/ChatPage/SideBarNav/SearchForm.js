import React from 'react';
import { reduxForm, Field, Form } from 'redux-form/immutable';
import { TextFields } from '../../../components/ComponentForms';

class SearchForm extends React.Component {
  render() {
    return (
      <Form>
        <Field
          name="search"
          type="text"
          placeholder="Search.."
          component={TextFields}
        />
      </Form>
    );
  }
}

export default reduxForm({ form: 'search' })(SearchForm);
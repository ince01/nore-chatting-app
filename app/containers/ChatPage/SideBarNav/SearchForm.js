import React from 'react';
import { reduxForm, Field, Form } from 'redux-form/immutable';
import { TextFields } from '../../../components/ComponentForms';
import { FormControl } from 'react-bootstrap';

class SearchForm extends React.Component {
  render() {
    return (
      <Form>
        <Field
          name="search"
          type="text"
          placeholder="Search people..."
          component={TextFields}
        />
      </Form>
    );
  }
}

export default reduxForm({ form: 'search' })(SearchForm);
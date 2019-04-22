import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import calendarIcon from 'images/Form/icon-calendar.svg'
import { formatDate } from '../../utils/date';

class Datepicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: props.selected
    }
  }

  handleChange = (date) => {
    this.setState({ startDate: date });
    this.props.input.onChange(formatDate(date, 'YYYY-MM-DD'));
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = {};
    if (nextProps.input && nextProps.input.value) {
      const newValue = new Date(nextProps.input.value);
      if (newValue !== prevState.startDate) {
        state.startDate = newValue;
        return state;
      }
    }
    return null;
  }

  render() {
    const { label, placeholder, meta: { touched, error, warning } } = this.props;
    return (
      <div className="text-field-container">
        <div className="text-field-label">{label}</div>
        <div className="input-field position-relative">
          <DatePicker
            className="form-control input-md input-box"
            selected={this.state.startDate}
            dateFormat="yyyy-MM-dd"
            onChange={this.handleChange}
            placeholderText={placeholder}
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          />
          <div className="position-absolute calendar-icon">
            <img alt="calendar-icon" src={calendarIcon} />
          </div>
          {touched && (
            (error && (
              <div className="alert alert-danger alert-field" role="alert">{error}</div>
            )) ||
            (warning && (
              <div className="alert alert-warning alert-field" role="alert">{warning}</div>
            ))
          )}
        </div>
      </div>
    );
  }
}
export default Datepicker;
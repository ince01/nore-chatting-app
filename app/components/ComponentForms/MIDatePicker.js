import "date-fns";
import React, { Component } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";


class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: Date.now()
    };
  }

  handleDateChange = date => {
    this.setState({ selectedDate: date });
    this.props.input.onChange(date)
  };

  render() {
    const { label, input: { name, value } } = this.props;

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id={name}
          label={label}
          value={value || this.selectedDate}
          onChange={this.handleDateChange}
        />
      </MuiPickersUtilsProvider>
    );
  }
}

export default DatePicker;

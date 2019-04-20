const validate = values => {
  const errors = {}
  const validateValues = values.toJS();

  if (!validateValues.password) {
    errors.password = 'Required'
  } else if (validateValues.password.length < 8) {
    // errors.password = 'Must be 8 characters or more'
  }
  if (!validateValues.confirmPassword) {
    errors.confirmPassword = 'Required'
  } else if (validateValues.confirmPassword.length < 8) {
    // errors.password = 'Must be 8 characters or more'
  }
  if (!validateValues.fullName) {
    errors.fullName = 'Required'
  }
  if (!validateValues.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(validateValues.email)) {
    errors.email = 'Invalid email address'
  }
  if (validateValues.password && validateValues.confirmPassword !== validateValues.password) {
    errors.confirmPassword = 'Password not match'
  }
  return errors
}

export default validate
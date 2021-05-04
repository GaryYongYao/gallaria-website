export const validationRequired = (value) => !value

export const validationSame = (value, compare) => value !== compare

export const validationEmail = (email) => {
  const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  return !re.test(String(email).toLowerCase())
}

export const validationPassword = (pass) => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  return !re.test(String(pass))
}

export const removeSpace = (str) => str.replace(' ', '-').replace('+', 'plus')

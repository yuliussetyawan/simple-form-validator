const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

const showError = (input, messages) => {
  // target the form-control class
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = messages
}

const showSucces = input => {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

const validateEmail = input => {
  const re = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/
  // return re.test(String(email).toLowerCase());
  if (input.value.trim().match(re)) {
    showSucces(input)
  } else {
    showError(input, `${getFieldName(input)} is not valid`)
  }
}

const checkRequired = inputArr => {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`)
    } else {
      showSucces(input)
    }
  })
}

const checkPasswordMatch = (pass1, pass2) => {
    if (pass1.value !== pass2.value){
        showError(pass2, "The password is not match");
    }

}

const checkLength = (input, min, max) => {
  if (input.value.trim().length < min) {
    showError(
      input,
      `${getFieldName(
        input
      )} must be at least ${min} and max ${max} characters length`
    )
  } else if (input.value.trim().length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters `
    )
  } else {
    showSucces(input)
  }
}

// capitalize the first letter
const getFieldName = input => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

form.addEventListener('submit', function (e) {
  e.preventDefault()
  checkRequired([username, email, password, password2])
  checkLength(username, 3, 15)
  checkLength(password, 6, 25)
  validateEmail(email)
  checkPasswordMatch(password, password2)
})

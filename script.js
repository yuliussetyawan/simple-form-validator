const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


const showError = (input, messages) =>{
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = messages;
}

const showSucces = (input) =>{
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
  }


form.addEventListener("submit", (e)=>{
    e.preventDefault();

    if (username.value === ""){
        showError(username, "Username is required");
    }
    else{
        showSucces(username)
    }

    if (email.value === ""){
        showError(email, "Email is required");
    }
    else{
        if (!validateEmail(email.value)){
            showError(email, "Email is incorrect");
        }
        else{
        showSucces(email)
        }
    }

    if (password.value ===  ""){
        showError(password, "Password is required");
    }
    else{
        showSucces(password)
    }

    if (password2.value === ""){
        showError(password2, "Password 2 is required");
    }
    else{
        showSucces(password2)
    }
});


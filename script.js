const phoneInput = document.querySelector("input[name=userphone]")
phoneInput.addEventListener("input", (e) => {
  let phoneNum = e.target.value;
  let phoneArr = phoneNum.split("-");
  if (phoneArr.length !== 3) {
    e.target.classList.add("invalid");
  }
  else if (phoneArr[0].length === 3 && phoneArr[0].match(/[0-9]/)) {
    if (phoneArr[1].length === 3 && phoneArr[0].match(/[0-9]/)) {
      if (phoneArr[2].length === 4 && phoneArr[0].match(/[0-9]/)) {
        e.target.classList.remove("invalid");
        e.target.classList.add("valid");
      }
      else {
        e.target.classList.remove("valid");
        e.target.classList.add("invalid");
      }
    }
  }
})

const firstNameInput = document.querySelector("input[name=userfirstname]")
const lastNameInput = document.querySelector("input[name=userlastname]")
firstNameInput.addEventListener("input", checkName);
lastNameInput.addEventListener("input", checkName);
function checkName(e) {
  let nameInput = e.target;
  let name = e.target.value;
  if (name.match(/[a-zA-Z]/) && !name.match(/[0-9]/)) {
    nameInput.classList.remove("invalid");
    nameInput.classList.add("valid");
  }
  else {
    nameInput.classList.remove("valid");
    nameInput.classList.add("invalid");
  }
}

const emailInput = document.querySelector("input[name=useremail]");
emailInput.addEventListener("input", (e) => {
  let emailArr = e.target.value.split("@");
  if (emailArr.length === 2 && emailArr[0].length !== 0 && emailArr[1].length !== 0) {
    emailInput.classList.remove("invalid");
    emailInput.classList.add("valid");
  }
  else {
    emailInput.classList.remove("valid");
    emailInput.classList.add("invalid");
  }
})

const pwdInput = document.querySelector("input[name=userpassword");
const confPwdInput = document.querySelector("input[name=userconfpwd]");
pwdInput.addEventListener("input", checkPwdMatch);
confPwdInput.addEventListener("input", checkPwdMatch);

function checkPwdMatch(e) {
  let pwd = pwdInput.value;
  let confpwd = confPwdInput.value;
  const noMatch = document.createElement("p");
  noMatch.classList.add("no-match");
  noMatch.textContent = "* Passwords do not match";
  const formCol1 = document.querySelector(".form-col1");
  const noMatchElement = document.querySelector(".no-match");
  if (pwd === confpwd && pwd.length !== 0) {
    pwdInput.classList.remove("invalid");
    pwdInput.classList.add("valid");

    confPwdInput.classList.remove("invalid");
    confPwdInput.classList.add("valid");

    if (formCol1.contains(noMatchElement)) {
      formCol1.removeChild(noMatchElement);
    }
  }
  else {
    pwdInput.classList.remove("valid");
    pwdInput.classList.add("invalid");

    confPwdInput.classList.remove("valid");
    confPwdInput.classList.add("invalid");
    
    if (!formCol1.contains(noMatchElement)) {
      formCol1.appendChild(noMatch);
    }
  }
}
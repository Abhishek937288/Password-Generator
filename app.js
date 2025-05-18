import { generatePassword } from "./generatePassword.js";
const displayEl = document.querySelector(".display");
const copyBtnEl = document.querySelector(".copy-btn");
const rangeDisplayEl = document.querySelector(".range-display");
const generateBtnEl = document.querySelector(".btn");
const optionsEl = document.querySelector(".options");
const errorEl = document.querySelector(".error");

let timeoutId;
const prevState = copyBtnEl.innerHTML;


const options = {
  hasUpperCase: false,
  hasLowerCase: false,
  hasNumbers: false,
  hasSymbol: false,
  length: 6,
};

optionsEl.addEventListener("change", (e) => {
  const { name,value,checked } = e.target;
  console.log(e.target.dataset.projectId)
  if (name == "uppercase") {
    options.hasUpperCase = checked;
  } else if (name == "lowercase") {
    options.hasLowerCase = checked;
  } else if (name == "numbers") {
    options.hasNumbers == checked;
  } else if (name == "symbols") {
    options.hasSymbol == checked;
  }else if(name == "range"){
    options.length == value;
    rangeDisplayEl.textContent = value;
  }
});



copyBtnEl.addEventListener("click", async () => {
  if (!displayEl.value) return;
  try {
    clearTimeout(timeoutId);
    await navigator.clipboard.writeText(displayEl.value);
    copyBtnEl.innerHTML = `&#10003;`;
    timeoutId = setTimeout(() => {
      copyBtnEl.innerHTML = prevState;
    }, 1500);
  } catch (_) {}
});


generateBtnEl.addEventListener("click", () => {
  const password = generatePassword(options);
  if (!password) {
    displayEl.value = "";
    return (errorEl.textContent = "Please select on of the options!");
  }
  displayEl.value = password;
  errorEl.textContent = "";
});





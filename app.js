const displayEl = document.querySelector(".display")
const copyBtnEl  = document.querySelector(".copy-btn");
const rangeDisplayEl  = document.querySelector(".range-display");
const rangeEl = document.querySelector(".range");
const uppercaseEl = document.querySelector("#uppercase")
const lowerCaseEl = document.querySelector("#lowercase")
const numbersEl = document.querySelector("#numbers")
const symbolsEl = document.querySelector("#symbols")
const generateBtnEl = document.querySelector(".btn")
const prevState = copyBtnEl.innerHTML
const errorEl = document.querySelector(".error")

/*


*/

const options = {
  hasUpperCase: false,
  hasLowerCase: false,
  hasNumbers: false,
  hasSymbol: false,
  length: 6,
};

uppercaseEl.addEventListener("change", (e) => {
  const {checked} = e.target;
  options.hasUpperCase = checked
})
lowerCaseEl.addEventListener("change", (e) => {
  const {checked} = e.target;
  options.hasLowerCase = checked
})


numbersEl.addEventListener("change", (e) => {
  const {checked} = e.target;
  options.hasNumbers = checked
})

symbolsEl.addEventListener("change", (e) => {
  const {checked} = e.target;
  options.hasSymbol = checked
});


rangeEl.addEventListener("change", (e) => {
  const {value} = e.target;
  rangeDisplayEl.textContent = value;
  options.length = value;
});


generateBtnEl.addEventListener("click",()=>{
 
 const password = geneatePassword(options)
 if(!password){
  return errorEl.textContent = "Please select on of the options!"
 }

 displayEl.value = password;
 errorEl.textContent = ""
})

let timeoutId;
copyBtnEl.addEventListener("click", async () => {
  if(!displayEl.value) return
  try {
    clearTimeout(timeoutId)
    await navigator.clipboard.writeText(displayEl.value);
    copyBtnEl.innerHTML = `&#10003;`
    timeoutId = setTimeout(()=>{
      copyBtnEl.innerHTML = prevState;
    },1500);
    
  } catch (_) {
  }
});




function geneatePassword({
  hasUpperCase,
  hasLowerCase,
  hasNumbers,
  hasSymbol,
  length,
}) {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "!@$%^&&*";
  
  let selectedChar = "";
  if (hasUpperCase) selectedChar += upperCase;
  if (hasLowerCase) selectedChar += lowerCase;
  if (hasSymbol) selectedChar += symbols;
  if (hasNumbers) selectedChar += numbers;


  if(!selectedChar) return false
  let password = "";
  for (let i = 0; i < length; i++) {
    password += selectedChar[Math.floor(Math.random() * selectedChar.length)];
  }
  return password;
}

// const newPass = geneatePassword({
//   hasUpperCase: true,
//   hasLowerCase: true,
//   hasNumbers: true,
//   hasSymbol: true,
//   length: 6,
// });

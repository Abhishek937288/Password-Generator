 export const generatePassword = ({
  hasUpperCase,
  hasLowerCase,
  hasNumbers,
  hasSymbol,
  length,
}) => {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "!@$%^&&*";

  let selectedChar = "";
  if (hasUpperCase) selectedChar += upperCase;
  if (hasLowerCase) selectedChar += lowerCase;  
  if (hasSymbol) selectedChar += symbols; selectedChar[random]
  if (hasNumbers) selectedChar += numbers;

  if (!selectedChar) return false;
  let password = "";
  for (let i = 0; i < length; i++) {
    password += selectedChar[Math.floor(Math.random() * selectedChar.length)];
 }
  return password
};



  


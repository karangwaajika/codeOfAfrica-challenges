function convertString(str) {

  const newString = str.replaceAll(" ", ""); // remove white space

  if (newString.length % 3 == 0 && newString.length % 5 == 0) { // string length divisible by 3 and 5
    return `
    Reversed String : ${reverseString(newString)} \n 
    ASCII Code : ${convertIntoAsciiCode(newString)}`;
  } else {

    if (newString.length % 3 == 0) {

      return reverseString(newString);

    } else if (newString.length % 5 == 0) {

      return convertIntoAsciiCode(newString);

    } else {

      return "The string length is neither divisible by 3 nor by 5";

    }
  }
}

const reverseString = (str) => {

  const reversedArray = str.split("").reverse(); // convert string into an array then reverse it
  const reversedString = reversedArray.reduce((allChar, item) => allChar + item, "");

  return reversedString;
};

const convertIntoAsciiCode = (str) => { // handle the ASCII code converting 
  
  let codeString = "";
  for (let i = 0; i < str.length; i++) {
    codeString += str[i].charCodeAt(0) + " ";
  }
  return codeString;
};

console.log(convertString("Love Yours"));

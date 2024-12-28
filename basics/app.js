//Writing Reusable code with functions in JS

//1. Password Validator function

/*
    - characters should be more than 8
    - password shouldnt include user name
    - cannot contain spaces
*/

// function passwordValidator(password, username) {
//   if (
//     password.indexOf(" ") === -1 &&
//     password.length >= 8 &&
//     password.indexOf(username) === -1
//   ) {
//     console.log("Matches");
//     console.log("Valid");
//   } else {
//     console.log("Invalid");
//   }
// }

// window.onload = function () {
//   const btn = document.querySelectorAll("button");

//   btn.forEach((b) => {
//     b.addEventListener("click", function () {
//       document.querySelector("h1").style.color = b.dataset.color;
//     });
//   });
// };

window.onload = function () {
  const selected = document.querySelector("select");

  selected.addEventListener("change", function () {
    document.querySelector("h1").style.color = selected.value;
  });

  const btn = document.querySelectorAll("button");

  btn.forEach((b) => {
    b.addEventListener("click", function () {
      document.querySelector("h1").style.color = b.dataset.color;
    });
  });
};

function passwordValidator(password, username) {
  if (password.indexOf(" ") === -1) {
    if (password.length >= 8) {
      if (password.indexOf(username) === -1) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

//1. Calculate average function

/*
    - calculate the average of an array
*/

function average(arr) {
  let total = 0;
  arr.forEach((val) => {
    total += val;
  });
  return total / arr.length;
}
//Recursion functions
function sumAll(num) {
  if (num === 1) {
    return 1;
  }
  return num + sumAll(num - 1);
}

// function callRecur(num) {
//   if (num <= 0) {
//     console.log("we're done");
//     return;
//   }
//   console.log(num);
//   num--;
//   callRecur(num);
// }

//Recursion functions
function sumEven(num) {
  if (num % 2) return "Not Even";
  if (num === 2) return 2;
  return num + sumEven(num - 2);
}

//The pangram functions
/*
  - function That checks weather the string entered has all the characters from a to z
*/

function pangram(sentence) {
  const alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (let char of alpha) {
    if (sentence.toLowerCase().indexOf(char) === -1) {
      return false;
    }
  }
  return true;
}

function add(num1, num2) {
  console.log(num1 + num2);
}

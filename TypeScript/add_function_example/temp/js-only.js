console.log("js only");

const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

const addNumbers = (num1, num2) => {
  return num1 + num2;
};

button.addEventListener("click", () => {
  return console.log(addNumbers(input1.value, input2.value));
});

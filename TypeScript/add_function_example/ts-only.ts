console.log("js only");

const num = 1

const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

const addNumbers = (num1: number, num2: number) => {
  return num1 + num2;
};

button.addEventListener("click", () => {
  return console.log(addNumbers(+input1.value, +input2.value));
});

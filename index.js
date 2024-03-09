const btnElement = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");
resultEl.textContent = "Please enter your age";

function calculateAge() {
  const birthdayVal = birthdayEl.value;
  if (birthdayVal === "") {
    alert("Please enter your birthday");
  }
  const age = getAge(birthdayVal);
  console.log(age);
  resultEl.textContent = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
}

function getAge(val) {
  const currDate = new Date();
  const birthdayDate = new Date(val);
  let age = currDate.getFullYear() - birthdayDate.getFullYear();
  const month = currDate.getMonth() - birthdayDate.getMonth();
  if (
    month < 0 ||
    (month === 0 && currDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  return age;
}

btnElement.addEventListener("click", calculateAge);

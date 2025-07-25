const height = document.getElementById("height");
const weight = document.getElementById("weight");
const resultArea = document.querySelector(".comment");
const resultValue = document.getElementById("result");

function calculate(e) {
  e.preventDefault();

  if (!height.value || !weight.value) {
    alert("Please enter both height and weight!");
    return;
  }

  const h = Number(height.value);
  const w = Number(weight.value);
  const bmi = w / ((h / 100) ** 2);

  let category = "";
  
  if (bmi < 18.5) {
    category = "Underweight";
    emoji = "⚠️";
  } else if (bmi <= 24.9) {
    category = "Healthy";
    emoji = "💪";
  } else if (bmi <= 29.9) {
    category = "Overweight";
    emoji = "⚠️⚠️";
  } else if (bmi <= 34.9) {
    category = "Obese";
    emoji = "❗";
  } else {
    category = "Extremely obese";
    emoji = "❗❗⚠️";
  }
  document.querySelector(".result").style.display = "block";
  resultValue.innerHTML = bmi.toFixed(2);
  resultArea.innerHTML = `You are <span id="comment">${category} ${emoji}</span>`;
  document.getElementById("comment").style.color= "#4f7df9";
  resultArea.style.display = "block";
}
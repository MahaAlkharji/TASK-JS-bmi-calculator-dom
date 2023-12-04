function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let h = height / 100;
  let hh = h ** 2;
  let number = weight / hh;
  let BMI = number.toFixed(2);

  alert(BMI);

  if (BMI < 18.5) {
    alert("Underweight");
  } else if (18.5 <= BMI <= 24.9) {
    alert("Healthy Weight");
  } else if (25.0 <= BMI <= 29.9) {
    alert("Overweight");
  } else if (BMI >= 30.0) {
    alert("Obesity");
  }
}

//Below 18.5	Underweight
//2. 18.5 – 24.9	Healthy Weight
//3. 25.0 – 29.9	Overweight
//4. 30.0 and Above	Obesity
//2. show the BMI state in an alert

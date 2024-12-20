// DOM elements
const mathInput = document.getElementById("mathGrade");
const englishInput = document.getElementById("englishGrade");
const submitButton = document.getElementById("submitGrades");
const gradeTableBody = document.getElementById("gradeTableBody");
const mathColumnAverage = document.getElementById("mathColumnAverage");
const englishColumnAverage = document.getElementById("englishColumnAverage");
const overallAverage = document.getElementById("overallAverage");

// Data storage
let grades = [];

// Add event listener to submit button
submitButton.addEventListener("click", () => {
  const mathGrade = parseFloat(mathInput.value);
  const englishGrade = parseFloat(englishInput.value);

  if (isNaN(mathGrade) || isNaN(englishGrade)) {
    alert("Please enter valid grades for both subjects.");
    return;
  }

  // Add grades to the data array
  grades.push({ math: mathGrade, english: englishGrade });

  // Clear inputs
  mathInput.value = "";
  englishInput.value = "";

  // Update the table
  updateTable();
});

function updateTable() {
  // Clear table body
  gradeTableBody.innerHTML = "";

  let mathTotal = 0;
  let englishTotal = 0;
  let overallTotal = 0;

  grades.forEach((grade, index) => {
    const average = ((grade.math + grade.english) / 2).toFixed(2);

    // Add row to the table
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${grade.math}</td>
      <td>${grade.english}</td>
      <td>${average}</td>
    `;
    gradeTableBody.appendChild(row);

    // Update totals
    mathTotal += grade.math;
    englishTotal += grade.english;
    overallTotal += parseFloat(average);
  });

  // Update column averages
  const rowCount = grades.length;
  mathColumnAverage.textContent = rowCount ? (mathTotal / rowCount).toFixed(2) : "0";
  englishColumnAverage.textContent = rowCount ? (englishTotal / rowCount).toFixed(2) : "0";

  // Update overall average
  overallAverage.textContent = rowCount ? (overallTotal / rowCount).toFixed(2) : "0";
}
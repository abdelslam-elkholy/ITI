"use strict";

const fetchFaculties = async () => {
  try {
    let facultySelect = document.getElementById("facultySelect");
    const data = await fetch("http://localhost:3000/api/faculty");
    const res = await data.json();
    const faculties = res.data.faculties;

    console.log(faculties);

    facultySelect.innerHTML = "";

    faculties.forEach((faculty) => {
      let option = document.createElement("option");
      option.value = faculty._id;
      option.textContent = faculty.FacultyName;
      facultySelect.appendChild(option);
    });
  } catch {
    (error) => console.error("Error fetching faculties:", error);
  }
};

const fetchStudents = async () => {
  try {
    const data = await fetch("http://localhost:3000/api/students");
    const res = await data.json();
    const students = res.data.students;
    console.log(students);
    let studentList = "";
    students.forEach((student) => {
      studentList += `<li>${student.FirstName} ${student.LastName} (Faculty: ${student.FacultyName})</li>`;
    });
    document.getElementById("studentList").innerHTML = studentList;
  } catch {
    (error) => console.error("Error fetching students:", error);
  }
};

const fetchAggregations = async () => {
  try {
    const data = await fetch("http://localhost:3000/api/stats");
    const res = await data.json();
    const aggregations = res.data.aggregations;

    console.log(aggregations);

    const grades = document.getElementById("sumFinalMarks");
    aggregations.sumGrades.map((grade) => {
      grades.innerHTML += `<li>${grade.FullName}: ${grade.sumGrades}</li>`;
    });
    document.getElementById("studentCount").textContent =
      aggregations.studentCount;

    let studentsCountInFacultiesList = "";
    for (const faculty of aggregations.studentsCountInFaculties) {
      studentsCountInFacultiesList += `<li>${faculty.Faculty.FacultyName}: ${faculty.count}</li>`;
    }
    document.getElementById("studentsCountInFaculties").innerHTML =
      studentsCountInFacultiesList;

    let studentsWithAvgGradeList = "";
    for (const student of aggregations.studentsWithAvgGrade) {
      studentsWithAvgGradeList += `<li>${student.FullName}: ${student.AvgGrade}</li>`;
    }
    document.getElementById("studentsWithAvgGrade").innerHTML =
      studentsWithAvgGradeList;

    let studentsWithFacultyList = "";
    for (const student of aggregations.studentsWithFaculty) {
      studentsWithFacultyList += `<li>${student.FullName}: FacultyID: ${student.Faculty.FacultyID}, Faculty Name: ${student.Faculty.FacultyName}</li>`;
    }
    document.getElementById("studentsWithFaculty").innerHTML =
      studentsWithFacultyList;
  } catch {
    (error) =>
      console.error("Error fetching aggregations.data.aggregations:", error);
  }
};

const createStudent = () => {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const facultyID = document.getElementById("facultySelect").value;

  const newStudent = {
    FirstName: firstName,
    LastName: lastName,
    FacultyID: facultyID,
    courses: [],
  };

  fetch("http://localhost:3000/api/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newStudent),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("New student added:", data);

      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";

      fetchStudents();
      fetchAggregations();
    })
    .catch((error) => console.error("Error adding student:", error));
};

document
  .getElementById("submitStudentBtn")
  .addEventListener("click", createStudent);

fetchFaculties();
fetchStudents();
fetchAggregations();

"use strict";

document.addEventListener("DOMContentLoaded", function () {
  function fetchFaculties() {
    fetch("http://localhost:3000/api/faculty")
      .then((response) => response.json())
      .then((faculties) => {
        console.log(faculties);

        let facultySelect = document.getElementById("facultySelect");
        facultySelect.innerHTML = "";

        faculties.data.faculties.forEach((faculty) => {
          let option = document.createElement("option");
          option.value = faculty._id;
          option.textContent = faculty.FacultyName;
          facultySelect.appendChild(option);
        });
      })
      .catch((error) => console.error("Error fetching faculties:", error));
  }

  function fetchStudents() {
    fetch("http://localhost:3000/api/students")
      .then((response) => response.json())
      .then((students) => {
        console.log(students);
        let studentList = "";
        students.data.students.forEach((student) => {
          studentList += `<li>${student.FirstName} ${student.LastName} (Faculty: ${Faculty.FacultyName})</li>`;
        });
        document.getElementById("studentList").innerHTML = studentList;
      })
      .catch((error) => console.error("Error fetching students:", error));
  }

  // Function to fetch and display aggregations
  function fetchAggregations() {
    fetch("http://localhost:3000/api/stats")
      .then((response) => response.json())
      .then((aggregations) => {
        document.getElementById("sumFinalMarks").textContent =
          aggregations.sumFinalMarks;
        document.getElementById("studentCount").textContent =
          aggregations.studentCount;

        let studentsCountInFacultiesList = "";
        for (const faculty of aggregations.studentsCountInFaculties) {
          studentsCountInFacultiesList += `<li>${faculty._id}: ${faculty.count}</li>`;
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
      })
      .catch((error) => console.error("Error fetching aggregations:", error));
  }

  // Event listener for the "Add Student" button
  document
    .getElementById("submitStudentBtn")
    .addEventListener("click", function () {
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const facultyID = document.getElementById("facultySelect").value;

      // Create a new student object
      const newStudent = {
        FirstName: firstName,
        LastName: lastName,
        FacultyID: facultyID,
        courses: [],
      };

      // POST request to add the new student
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
          // Clear form fields
          document.getElementById("firstName").value = "";
          document.getElementById("lastName").value = "";

          // Refresh student list and aggregations
          fetchStudents();
          fetchAggregations();
        })
        .catch((error) => console.error("Error adding student:", error));
    });

  // Call the functions to fetch faculties, students, and aggregations
  fetchFaculties();
  fetchStudents();
  fetchAggregations();
});

document.getElementById("getByIdForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    // Get student ID from the input field
    const studentId = document.getElementById("studentId").value;

    // Make API GET request to retrieve student by ID
    fetch(`http://localhost:5077/api/Student/${studentId}`)
    .then(response => {
        if (response.ok) {
            return response.json(); // Parse the JSON response
        } else {
            throw new Error('Student not found'); // Throw an error if student not found
        }
    })
    .then(student => {
        // Display student details in the studentDetails div
        const studentDetailsDiv = document.getElementById("studentDetails");
        studentDetailsDiv.innerHTML = `
            <h2>Student Details</h2>
            <p><strong>Student ID:</strong> ${student.studentId}</p>
            <p><strong>Gender:</strong> ${student.gender}</p>
            <p><strong>Nationality:</strong> ${student.nationalIty}</p>
            <p><strong>Place of Birth:</strong> ${student.placeofBirth}</p>
            <p><strong>Stage ID:</strong> ${student.stageId}</p>
            <p><strong>Grade ID:</strong> ${student.gradeId}</p>
            <p><strong>Section ID:</strong> ${student.sectionId}</p>
            <p><strong>Topic:</strong> ${student.topic}</p>
            <p><strong>Semester:</strong> ${student.semester}</p>
            <p><strong>Relation:</strong> ${student.relation}</p>
            <p><strong>Raised Hands:</strong> ${student.raisedhands}</p>
            <p><strong>Visited Resources:</strong> ${student.visItedResources}</p>
            <p><strong>Announcements View:</strong> ${student.announcementsView}</p>
            <p><strong>Discussion:</strong> ${student.discussion}</p>
            <p><strong>Parent Answering Survey:</strong> ${student.parentAnsweringSurvey}</p>
            <p><strong>Parent School Satisfaction:</strong> ${student.parentschoolSatisfaction}</p>
            <p><strong>Student Absence Days:</strong> ${student.studentAbsenceDays}</p>
            <p><strong>Student Marks:</strong> ${student.studentMarks}</p>
            <p><strong>Class:</strong> ${student.class}</p>
        `;
    })
    .catch(error => {
        // Handle errors here
        const studentDetailsDiv = document.getElementById("studentDetails");
        studentDetailsDiv.innerHTML = `<p>${error.message}</p>`;
    });
});

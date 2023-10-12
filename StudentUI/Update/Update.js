document.addEventListener('DOMContentLoaded', function () {
    const updateForm = document.getElementById('updateForm');
    const submitBtn = document.getElementById('submitBtn');
    const backBtn = document.getElementById('backBtn');

    // Add event listener for form submission
    updateForm.addEventListener('submit', function (event) {
        event.preventDefault();
    // Get form data
    const studentId = document.getElementById("studentId").value;
    const gender = document.getElementById("gender").value;
    const nationality = document.getElementById("nationality").value;
    const placeofBirth = document.getElementById("placeofBirth").value;
    const stageId = document.getElementById("stageId").value;
    const gradeId = document.getElementById("gradeId").value;
    const sectionId = document.getElementById("sectionId").value;
    const topic = document.getElementById("topic").value;
    const semester = document.getElementById("semester").value;
    const relation = document.getElementById("relation").value;
    const raisedhands = parseInt(document.getElementById("raisedhands").value);
    const visitedResources = parseInt(document.getElementById("visitedResources").value);
    const announcementsView = parseInt(document.getElementById("announcementsView").value);
    const discussion = parseInt(document.getElementById("discussion").value);
    const parentAnsweringSurvey = document.getElementById("parentAnsweringSurvey").value;
    const parentSchoolSatisfaction = document.getElementById("parentSchoolSatisfaction").value;
    const studentAbsenceDays = document.getElementById("studentAbsenceDays").value;
    const studentMarks = parseInt(document.getElementById("studentMarks").value);
    const classValue = document.getElementById("class").value;

    // Create an object with the form data
    const updatedStudent = {
        studentId,
        gender,
        nationalIty: nationality,
        placeofBirth,
        stageId,
        gradeId,
        sectionId,
        topic,
        semester,
        relation,
        raisedhands,
        visitedResources,
        announcementsView,
        discussion,
        parentAnsweringSurvey,
        parentSchoolSatisfaction,
        studentAbsenceDays,
        studentMarks,
        class: classValue
    };

    // Make API PUT request to update student
    fetch(`http://localhost:5077/api/Student/Update/${studentId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedStudent)
    })
    .then(response => {
        if (response.ok) {
            // Display confirmation dialog
            const confirmDialog = window.confirm('Student updated successfully! Click OK to go back to Check Student ID page.');
            
            // Handle dialog button actions
            if (confirmDialog) {
                // Redirect to CheckId.html
                window.location.href = 'CheckId.html';
            }
        } else {
            // Handle errors here
            console.error('Error:', response.status);
            // You can show an error message to the user
        }
    })
    .catch(error => {
        // Handle network errors here
        console.error('Error:', error);
        // You can show an error message to the user
    });
});

// Add event listener for back button click
backBtn.addEventListener('click', function () {
    // Redirect to CheckId.html
    window.location.href = 'CheckId.html';
});
});

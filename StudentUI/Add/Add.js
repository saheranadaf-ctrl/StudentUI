document.addEventListener('DOMContentLoaded', function () {
    const addForm = document.getElementById('addForm');

    addForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(addForm);
        const studentData = {};

        formData.forEach(function (value, key) {
            studentData[key] = value;
        });

        // Send a POST request to your API endpoint
        fetch('http://localhost:5077/api/Student/Create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(studentData),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else if (response.status === 409) {
                // Student ID already exists
                throw new Error('Student ID already exists');
            } else {
                // Other error cases
                throw new Error('Student Exist');
            }
        })
        .then(data => {
            console.log('Success:', data);
            // Show success message in a dialog
            const dialogResult = window.confirm('Student added successfully! Click "OK" to add another student or "Cancel" to go home.');

            // Handle dialog button actions
            if (dialogResult) {
                // Reset the form for adding another student
                addForm.reset();
            } else {
                // Redirect to the home page
                window.location.href = '../Home.html';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error, including network issues and HTTP errors
            alert(error.message); // Show error message in an alert
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const checkIdForm = document.getElementById('checkIdForm');

    checkIdForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const studentId = document.getElementById('studentId').value;

        // Perform a check if the student ID exists (you can make a fetch request to your API endpoint)
        // If the student ID exists, redirect to Update.html with the student ID as a query parameter
        // If the student ID does not exist, show an error message or handle it as needed
        // Example:
        // window.location.href = `Update.html?studentId=${studentId}`;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const checkIdForm = document.getElementById('checkIdForm');

    checkIdForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const studentId = document.getElementById('studentId').value;

        // Perform a check if the student ID exists (you can make a fetch request to your API endpoint)
        // For example, assuming you have an API endpoint to check if the student ID exists:
        fetch(`http://localhost:5077/api/Student/${studentId}`)
            .then(response => {
                if (response.ok) {
                    // Student ID exists, redirect to Update.html with the student ID as a query parameter
                    window.location.href = `Update.html?studentId=${studentId}`;
                } else {
                    // Student ID does not exist, show an error message or handle it as needed
                    alert('Student ID does not exist. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle error, including network issues and HTTP errors
            });
    });
});



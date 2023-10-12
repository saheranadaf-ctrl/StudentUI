document.addEventListener('DOMContentLoaded', function () {
    const deleteForm = document.getElementById('deleteForm');
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
    const backBtn = document.getElementById('backBtn');

    // Add event listener for form submission
    deleteForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get student ID from the input field
        const studentId = document.getElementById("studentId").value;

        // Make API request to check if student ID exists
        fetch(`http://localhost:5077/api/Student/${studentId}`)
            .then(response => {
                if (response.ok) {
                    // Student ID exists, ask for confirmation to delete
                    const confirmation = confirm("Are you sure you want to delete this student?");
                    if (confirmation) {
                        // Make API DELETE request to delete student
                        fetch(`http://localhost:5077/api/Student/Delete/${studentId}`, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                        .then(response => {
                            if (response.ok) {
                                // Handle successful deletion here
                                const resetConfirmation = confirm("Student deleted successfully! Click 'OK' to reset the form or 'Cancel' to go to the home page.");
                                if (resetConfirmation) {
                                    // Reset the form
                                    deleteForm.reset();
                                } else {
                                    // Redirect to the home page
                                    window.location.href = '../Home.html';
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
                    } else {
                        // User canceled the deletion
                        console.log('Deletion canceled.');
                    }
                } else {
                    // Student ID does not exist, show an error message
                    alert('Student not found. Please enter a valid student ID.');
                }
            })
            .catch(error => {
                // Handle network errors here
                console.error('Error:', error);
                // You can show an error message to the user
            });
    });
});

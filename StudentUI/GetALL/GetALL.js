const getAllButton = document.getElementById("getAllButton");
const studentsTableContainer = document.getElementById("studentsTableContainer");

getAllButton.addEventListener("click", () => {
    // Fetch all data from API
    fetch("http://localhost:5077/api/Student/GetAll")
        .then(response => {
            // Log the raw response to the console
            console.log("Raw API Response:", response);
            return response.json(); // Parse the JSON response
        })
        .then(students => {
            // Log the parsed data to the console
            console.log("Parsed Data:", students);

            // Create table headers dynamically based on model properties
            const tableHeaders = Object.keys(students[0]);
            const tableHeaderRow = tableHeaders.map(header => `<th>${header}</th>`).join("");
            const tableHeaderHTML = `<tr>${tableHeaderRow}</tr>`;

            // Create table rows with data dynamically
            const tableRowsHTML = students.map(student => {
                const rowData = tableHeaders.map(header => `<td>${student[header]}</td>`).join("");
                return `<tr>${rowData}</tr>`;
            }).join("");

            // Create the complete table HTML
            const tableHTML = `<table>${tableHeaderHTML}${tableRowsHTML}</table>`;

            // Display the table
            studentsTableContainer.innerHTML = tableHTML;
        })
        .catch(error => {
            // Log any errors to the console
            console.error("Error:", error);

            // Handle errors here
            studentsTableContainer.innerHTML = `<p>Error: ${error.message}</p>`;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    var navbarButton = document.querySelector(".navbar-button");

    navbarButton.addEventListener("click", function() {
        navbar.classList.toggle("show");
    });

    document.addEventListener("click", function(event) {
        if (!navbar.contains(event.target) && !navbarButton.contains(event.target)) {
            navbar.classList.remove("show");
        }
    });

    document.getElementById("job-form").addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form data
        const title = document.getElementById("title").value;
        const company = document.getElementById("company").value;
        const location = document.getElementById("location").value;
        const description = document.getElementById("description").value;

        // Create a new job object
        const newJob = {
            title: title,
            company: company,
            location: location,
            description: description
        };

        // Call displayJob to append the new job to the DOM
        displayJob(newJob);

        // Optionally, you can clear the form fields
        document.getElementById("job-form").reset();
    });
});



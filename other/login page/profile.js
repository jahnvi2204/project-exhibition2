document.getElementById("profile-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the selected profile value
    const selectedProfile = document.getElementById("profile").value;

    // Hide all profile divs
    const profileDivs = document.querySelectorAll(".profile");
    profileDivs.forEach(function(div) {
        div.style.display = "none";
    });

    // Show the selected profile div
    document.getElementById(selectedProfile).style.display = "block";
});

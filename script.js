// Form Submission and Success Message
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting to server
    document.getElementById("successMessage").style.display = "block";  // Show success message
    setTimeout(function() {
        document.getElementById("successMessage

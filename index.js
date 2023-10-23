 // Function to display the registration form
    function showRegistrationForm() {
        document.getElementById("registration-form").style.display = "block";
    }

    // Function to display the sign-in form
    function showSignInForm() {
        window.location.href = "signup.html";
     
    }

    // Event listener for the "Book a Ride" button

  
document.querySelector(".cta-button").addEventListener("click", function() {
    // Check if the user is authenticated (you can use cookies, localStorage, or a more secure method)
    if (userIsAuthenticated()) {
        // User is authenticated, proceed to book a ride
        // Add your logic to book a ride here
    } else {
        // User is not authenticated, show the sign-in form
        console.log("Hello"); 
        showSignInForm();
    }
});



    // Function to check if the user is authenticated (you should implement this)
    function userIsAuthenticated() {
        // Implement your authentication check here (e.g., check for a token or user session)
        // Return true if the user is authenticated, false otherwise
        return false;
    }

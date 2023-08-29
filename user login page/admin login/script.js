document.addEventListener("DOMContentLoaded", function () 
{
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) 
    {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        
        if (username && password) 
        {
            alert("Login successful!");
            
            alert("Please enter both username and password.");
        }
    });
});
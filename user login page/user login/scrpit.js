document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // You can add your authentication logic here.
    // For simplicity, we'll just show an alert with the input values.
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    alert(`Username: ${username}\nPassword: ${password}`);
});
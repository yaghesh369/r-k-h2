document.addEventListener("DOMContentLoaded", () => {
    const validUsername = "user123";
    const validPassword = "user2025";

    const loginForm = document.getElementById("login-form");
    const loginMessage = document.getElementById("login-message");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("login-username").value.trim();
        const password = document.getElementById("login-password").value.trim();

        if (username === validUsername && password === validPassword) {
            loginMessage.textContent = "Login successful! Redirecting...";
            loginMessage.style.color = "green";

           
            setTimeout(() => {
                window.location.href = "last.html";
            }, 1500);
        } else {
            loginMessage.textContent = "Wrong credentials. Please try again.";
            loginMessage.style.color = "red";
        }
    });
});
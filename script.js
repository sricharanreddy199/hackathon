// Quotes Array
const quotes = [
    "Believe in yourself and all that you are.",
    "Every day is a second chance.",
    "Push yourself, because no one else will do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Stay positive, work hard, make it happen."
];

// Generate Quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}

// Change Background Color
function changeBackground() {
    const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;
    document.body.style.backgroundColor = randomColor;
}

// Generate Strong Password
function generatePassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < 12; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("password").value = password;
}

// Copy Password
function copyPassword() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(passwordField.value);
    alert("Password copied to clipboard!");
}

// Example JavaScript file containing intentional vulnerabilities
// DO NOT use this code in production. It is for educational purposes only.

// 1. Unsafe user input in eval (Remote Code Execution)
function runUserCode(userInput) {
  // Vulnerable: executes arbitrary JS code from user input
  eval(userInput);
}

// 2. Insecure use of innerHTML (Cross-Site Scripting - XSS)
function setUserContent(elementId, content) {
  document.getElementById(elementId).innerHTML = content; // Vulnerable to XSS
}

// 3. Hardcoded credentials (Information Disclosure)
const DB_PASSWORD = "supersecretpassword";

// 4. Insecure random number generation (Predictable values)
function generateSessionToken() {
  // Vulnerable: Math.random is not cryptographically secure
  return Math.random().toString(36).substring(2);
}

// 5. Insecure redirect (Open Redirect)
function redirectTo(url) {
  window.location = url; // Vulnerable: no validation
}

// Example usage
// These are just for demonstration and should never be run in a real application

// 1. Remote Code Execution
// runUserCode("alert('This is unsafe!')");

// 2. XSS
// setUserContent("output", "<img src=x onerror=alert('XSS')>");

// 3. Information Disclosure
console.log("Database password:", DB_PASSWORD);

// 4. Predictable Session Token
console.log("Session token:", generateSessionToken());

// 5. Open Redirect
// redirectTo("http://malicious.example.com");

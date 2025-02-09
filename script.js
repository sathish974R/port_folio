// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });

});

document.addEventListener("DOMContentLoaded", function () { 
    document.getElementById('recom-btn').addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default action

        // Get input values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value; // Fixed ID

        // Check if fields are empty
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields');
        } else {  
            alert('Thank you for your recommendation!');
            document.getElementById('recommendation-form').reset();
        }   
    });
});


function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}
   
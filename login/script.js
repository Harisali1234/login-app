function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const registrationForm = document.getElementById('registrationForm');

    if (loginForm.style.display === "none") {
        registrationForm.style.display = "none";
        loginForm.style.display = "block";
    } else {
        loginForm.style.display = "none";
        registrationForm.style.display = "block";
    }
}

function login() {
    // Dummy function for demonstration
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    document.getElementById('loginMessage').textContent = `Login attempted with username: ${username}`;
    // Here, you'd typically send this information to a server for verification
}

function register() {
    // Dummy function for demonstration
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    document.getElementById('registerMessage').textContent = `Registration attempted for username: ${username}`;
    // Similarly, you'd send this information to a server to create a new user account
}
// Modify or add to your existing script.js

function login() {
    // Simulate a successful login
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    // Hide login and registration forms
    document.getElementById('loginForm').style.display = "none";
    document.getElementById('registrationForm').style.display = "none";
    
    // Show the blog app
    document.getElementById('blogApp').style.display = "block";
    
    // For demonstration purposes, we'll just print this message
    document.getElementById('loginMessage').textContent = '';
    alert(`Logged in as ${username}`);
}

// Dummy function for adding posts
function addPost() {
    const postContent = document.getElementById('postContent').value.trim();
    if (postContent) {
        const postList = document.getElementById('postList');
        const newPost = document.createElement('div');
        newPost.textContent = postContent;
        postList.appendChild(newPost);
        document.getElementById('postContent').value = ''; // Clear textarea after adding
    } else {
        alert('Please write something in your post!');
    }
}


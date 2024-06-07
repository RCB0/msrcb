import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBNyyp4FGdcPkmjyntkNOTrt_Gg4-zaxJA",
  authDomain: "msrcb-d821e.firebaseapp.com",
  projectId: "msrcb-d821e",
  storageBucket: "msrcb-d821e.appspot.com",
  messagingSenderId: "757348050200",
  appId: "1:757348050200:web:2f99e5bc051b946febea6d",
};

const app = initializeApp(firebaseConfig);

// Get overlay and login dialog elements
const overlay = document.getElementById('overlay');
const loginDialog = document.getElementById('loginDialog');

// Get email and password input elements
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Function to show login dialog
function showLoginDialog() {
  overlay.classList.add('show');
}

// Function to hide login dialog
function hideLoginDialog() {
  overlay.classList.remove('show');
}

// Function to handle login
function login() {
  const email = emailInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Hide login dialog
      hideLoginDialog();
      
      // Display user info
      const user = userCredential.user;
      document.getElementById('userInfo').innerHTML = `Logged in as: ${user.email}`;
      document.getElementById('userInfo').style.display = 'block';
    })
    .catch((error) => {
      // Handle login error
      console.error(error);
    });
}

// Automatically show login dialog on page load
document.addEventListener('DOMContentLoaded', function() {
  showLoginDialog();
});

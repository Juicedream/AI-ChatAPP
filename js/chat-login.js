
let padLock = document.querySelector('.js-lock-sign');
let loginButton = document.querySelector('.js-login-button');
let getStartedButton = document.querySelector('.js-get-started-button');
function showLogin() {
  let loadingScreen = document.getElementById('loadingScreen');
  let getStartedDiv = document.getElementById('js-get-started-div');
  let loginDiv = document.getElementById('js-login-div');

  getStartedDiv.style.display = 'none';
  // Show loading screen
  loadingScreen.style.display = 'block';

  setTimeout(function () {
    loadingScreen.style.display = 'none';

    // hide the get started div
    getStartedDiv.style.display = 'none';
    //show the login div
    loginDiv.style.display = 'block';
  }, 2000);
}

getStartedButton.addEventListener('click', () => {

  showLogin();

});

function getCredentials() {
  let userName = document.querySelector('.js-username').value;
  let passWord = document.querySelector('.js-password').value;
  let message = document.querySelector('.js-message');
  let loadingScreen = document.getElementById('loadingScreen');
    let loginDiv = document.getElementById('js-login-div');
  if ((userName === '' || passWord === '')) {
    message.classList.remove('success');
    message.classList.add('error');
    message.innerHTML = 'Fill in the required fields';
  } else if (userName === 'Admin' && passWord === 'root@123') {
    message.classList.remove('error');
    message.classList.add('success');
    message.innerHTML = 'Login successful!';
    loginDiv.style.display = 'none';
    loadingScreen.style.display = 'block';

    setTimeout(function () {

      loadingScreen.style.display = 'none';
      window.location.href = '/html/chat-room.html';


    }, 4000);

  } else {
    message.classList.remove('success');
    message.classList.add('error');
    message.innerHTML = 'Username or Password incorrect';
  }

}

function passwordVisibility() {
  let passwordInput = document.getElementById('passwordInput');
  let icon = document.querySelector('.js-lock-sign');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    icon.classList.remove('fa-lock');
    icon.classList.add('fa-lock-open');
  } else {
    passwordInput.type = 'password';
    icon.classList.remove('fa-lock-open');
    icon.classList.add('fa-lock');
  }
};


function seePassword() {
  padLock.addEventListener('click', () => {
    passwordVisibility();

  });
};

seePassword();

loginButton.addEventListener('click', () => {

  getCredentials();
});



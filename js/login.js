document.getElementById('login').addEventListener('click', function(){
    // get email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if(userEmail == 'my@email.com' && userPassword == 'nepo'){
        window.location.href='bank.html'
    }
})
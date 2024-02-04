function login(){

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email.endsWith("@gmail.com") && password.length >= 8 && /[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        alert("Login Successful");
    }
    else {
        alert ("Incalid email or password");
    }
}

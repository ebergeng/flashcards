function myFunction() {
    var style = document.createElement('style');
    style.innerHTML = `
    #login_inner {
    transform: rotateY(180deg);
    }

    .login_front .login_wrapper {
        display: none;}
    `;
    document.head.appendChild(style);
}

function myFunction1() {
    var style = document.createElement('style');
    style.innerHTML = `
    #login_inner {
    transform: rotateY(0deg);
    }

    .login_front .login_wrapper {
        display: grid;
    }
    `;
    document.head.appendChild(style);
}


let user = ["Erlend", "1337jalla"]

function singIn() {
    var name = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (name == user[0] && password == user[1]) {
        console.log("hey")
        window.location.replace('home.html');
        
    }
    else {
        console.log("wrong pw or somthing")
    }
}
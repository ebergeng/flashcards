function myFunction() {
    var style = document.createElement('style');
    style.innerHTML = `
    #login_inner {
    transform: rotateY(180deg);
    }

    .login_back {
        backface-visibility: hidden;}
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

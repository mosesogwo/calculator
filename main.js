function add (a, b) {
    return a + b
}

function minus (a, b) {
   return a - b
}

function multiply (a, b) {
    return a * b
}

function divide (a, b) {
    return a / b
}

function operate (a, b, c) {
    if (c == "+") {
        d = (add(Number(a), Number(b)));
    } else if (c == "-") {
        d = (minus(a, b));
    } else if (c == "*") {
        d = (multiply(a, b));
    } else if (c == "/") {
        d =  (divide(a, b));
    }
}


    var digits = document.querySelectorAll(".digit");
    var screen = document.getElementById("display");
    
    digits.forEach(element => {
        element.addEventListener('click', function() {
        console.log(element.innerHTML - 0)
        screen.append(element.innerHTML - 0);
    });
    });


    operator = document.querySelectorAll(".operator");
    operator.forEach(element => {
        element.addEventListener('click', function() {
            a = screen.innerHTML;
            c = element.innerHTML;
            screen.innerHTML = "";
        })
    })

    equal = document.querySelector("#equal")
    equal.addEventListener('click', function() {
        b = screen.innerHTML
        operate (a, b, c);
        screen.innerHTML = d;
    })


    document.querySelector("#clear").addEventListener('click', function() {
        a = 0;
        b = 0;
        c = 0;
        screen.innerHTML = ""
    })
    
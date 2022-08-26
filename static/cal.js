let key = document.getElementsByClassName('pclick');
let key2 = document.getElementsByClassName('twoNoFn');
let key3 = document.getElementsByClassName('OneNoFn');
let number = document.getElementById('number22');
let buffer = document.getElementById('buffer22');
let flag = true;
let n1 = 0, n2 = 0, funcNo = 0;
Array.from(key).forEach((Element) => {
    Element.addEventListener('click', () => {
        x = Element.innerText;
        if (x == 'Clear') {
            number.innerText = '0';
            buffer.innerText = '0';
            flag = true;
        }
        else {
            if (flag) {
                number.innerText = x;
                flag = false;
            }
            else {
                number.innerText += x;
            }
        }
    })
})
Array.from(key2).forEach((Element) => {
    Element.addEventListener('click', () => {
        if (Element.innerText == 'x^y') {
            addfunc('^', 1);
        }
        else if (Element.innerText == '+') {
            addfunc('+', 2);
        }
        else if (Element.innerText == '-') {
            addfunc('-', 3);
        }
        else if (Element.innerText == 'x') {
            addfunc('x', 4);
        }
        else if (Element.innerText == '/') {
            addfunc('/', 5);
        }
        else if (Element.innerText == '=') {
            n2 = JSON.parse(number.innerText);
            if (funcNo == 1) {
                number.innerText = Math.pow(n1, n2);
            }
            else if (funcNo == 2) {
                number.innerText = n1 + n2;
            }
            else if (funcNo == 3) {
                number.innerText = n1 > n2 ? n1 - n2 : n2 - n1;
            }
            else if (funcNo == 4) {
                number.innerText = n1 * n2;
            }
            else if (funcNo == 5) {
                number.innerText = n1 / n2;
            }
            addhistory(buffer.innerText, n2, number.innerText)
            buffer.innerText = '0';
        }
    })
})
function addfunc(str, n) {
    buffer.innerText = number.innerText + `${str}`;
    n1 = JSON.parse(number.innerText);
    number.innerText = '0';
    flag = true;
    funcNo = n;
}
Array.from(key3).forEach((Element) => {
    Element.addEventListener('click', () => {
        if (Element.innerText == 'Sin') {
            n1 = JSON.parse(number.innerText);
            number.innerText = Math.sin(n1);
            flag = true;
        }
        else if (Element.innerText == 'Cos') {
            n1 = JSON.parse(number.innerText);
            number.innerText = Math.cos(n1);
            flag = true;
        }
        else if (Element.innerText == 'log') {
            n1 = JSON.parse(number.innerText);
            number.innerText = Math.log10(n1);
            flag = true;
        }
        else if (Element.innerText == 'ln') {
            n1 = JSON.parse(number.innerText);
            number.innerText = Math.log(n1);
            flag = true;
        }
        else if (Element.innerText == 'sqrt') {
            n1 = JSON.parse(number.innerText);
            number.innerText = Math.sqrt(n1);
            flag = true;
        }
        else if (Element.innerText == 'x2') {
            n1 = JSON.parse(number.innerText);
            number.innerText = n1 * n1;
            flag = true;
        }
        addhistory_OneNoFn(Element.innerText,n1,number.innerText)
    })
})
function addhistory(s1, s2, s3) {
    var Element = document.getElementById('historycontent');
    var stuf = `<div class="historyElement">
                <p> ${s1 + " " + s2 + ' = ' + s3}</p><hr>
                </div>`
    Element.innerHTML += stuf;
}
function addhistory_OneNoFn(s1,s2,s3) {
    var Element = document.getElementById('historycontent');
    var stuf = `<div class="historyElement">
    <p> ${s1 + "(" + s2 + ') = ' + s3}</p><hr>
    </div>`
    Element.innerHTML += stuf;
}
function deletehistory(){
    var Element = document.getElementById('historycontent');
       Element.innerHTML="";
}
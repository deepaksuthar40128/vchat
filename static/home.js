const imagediv = document.getElementById('images')
const subbox = document.getElementById('subbox')
const back = document.getElementById('back')
const next = document.getElementById('next')

let left2 = 0;
function setleft() {
    left2 -= 1051;
    if (left2 < -4204) {
        left2 = 0;
    }
    imagediv.style.left = `${left2}px`;
}

let tttt, s = 0, c = 0;
settie();
function settie() {
    tttt = setInterval(setleft, 5000);
    s = 1;
}
function clearinter() {
    clearInterval(tttt);
    s = 0;
}
imagediv.addEventListener('mouseover', () => {
    subbox.style.boxShadow = '0px 0px 10px 10px #5d595e';
    back.style.left = '4%'
    next.style.left = '89%'
    if (s == 1) {
        clearinter();
    }
});
next.addEventListener('mouseover', () => {
    subbox.style.boxShadow = '0px 0px 10px 10px #5d595e';
    next.style.left = '89%'
    if (s == 1) {
        clearinter();
    }
});
back.addEventListener('mouseover', () => {
    subbox.style.boxShadow = '0px 0px 10px 10px #5d595e';
    back.style.left = '4%'
    if (s == 1) {
        clearinter();
    }
});
imagediv.addEventListener('mouseout', () => {
    subbox.style.boxShadow = 'none';
    back.style.left = '-5%'
    next.style.left = '99%'
    if (s == 0) {
        settie();
    }
})
function backimg() {
    if (left2 == 0) {
    }
    else {
        left2 += 2 * 1051;
    }
    setleft();
}
function nextimg() {
    if (left2 < -4202){}
    else {
        setleft();
    }
}
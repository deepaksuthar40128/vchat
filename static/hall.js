var socket = io();

// const name = prompt('Enter Your Name To Join')
socket.on('sendingvalues', (userkanam) => {
    socket.emit('new-user', userkanam);
    document.getElementById("userinfo").innerText = `${userkanam}`;
})
// console.log(name);
const mszscreen = document.querySelector("#mszs")
const form = document.getElementById('form')
const input = document.getElementById('inputedmsz')
const sidebar = document.getElementById('sidebar')
var notificationcontent = document.getElementById('notificationcontent')
var sidenotification = document.getElementById('sidenotification')
var pera = document.getElementById('pera')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    var message = input.value.trim();
    input.value = '';
    if (message != '') {
        socket.emit('send', message);
        append(`You: ${message}`, 'send');
        let audio = new Audio('send2.wav')
        audio.play();
    }
});


function append(messege, type) {
    const mszelement = document.createElement('div')
    mszelement.innerHTML = messege;
    mszelement.classList.add(type);
    mszelement.id = new Date() - 5;
    mszscreen.append(mszelement);
    document.getElementById(new Date() - 5).scrollIntoView()
}

let idtime = {}; let flag = 0;
function append2(naam, tem) {
    var tile = document.createElement('div');
    tile.innerHTML = `<div class = "userinchatname">${naam}</div><div class = "userinchattime">Joined at  ${new Date(tem).getHours()}:${new Date(tem).getMinutes()}</div>`;
    tile.classList.add('sideelements')
    idtime[flag] = tile.id = flag;
    flag++;
    sidebar.append(tile)
}

function deleteold() {
    for (let i = 0; i < flag; i++) {
        let elementd = document.getElementById(`${i}`);
        // console.log(elementd)
        elementd.remove();
    }
    flag = 0;
}

socket.on('user-joined', (name, tag) => {
    notificationcontent.innerText = `${name} Joined The Chat`
    sidenotification.style.right = '0px'
    setTimeout(hide, 3000)
    let audio = new Audio('join.wav')
    audio.play();
    if (tag == 1) {
        deleteold();
    }
})


let ticket = 0;
socket.on('left-user', (name, tag) => {
    notificationcontent.innerText = `${name} Left The Chat`
    sidenotification.style.right = '0px'
    setTimeout(hide, 3000)
    let audio = new Audio('left.wav')
    audio.play();
    if (tag == 1) {
        deleteold();
    }
})


socket.on('show-msz', (data) => {
    append(`${data.name}: ${data.info}`, "recived");
    let audio = new Audio('recive (2).wav')
    audio.play();
})
function hide() {
    sidenotification.style.right = '-300px'
}

socket.on('erererer', (value, value2) => {
    append2(value, value2);

})

var count =0;
var tttt;
var string;
form.addEventListener('keypress', () => {
    if(count == 0){
         tttt=setInterval(Check, 1000);
         count++;
    }
    function Check(){
        if (input.value.trim() != '') {
            string = 'Typing'
        }
        else {
            string = 'SideMenu'
            clearInterval(tttt);
            count =0;
        }
        socket.emit('Typestatus',string);
    }
})

socket.on('sendingstatus',(whos,typestatus)=>{
    if(typestatus=='Typing'){
        pera.innerText=`${whos}:${typestatus}`
    }
    else{
        pera.innerText=`Welcome`
    }
})


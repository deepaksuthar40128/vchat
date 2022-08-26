let navposition = document.getElementById('nav');
            
             
          
        
        
let tttttt;
let u = 0, y = 0, z = 0, w = 0, e = 0, d = 0, x = 0, idvar = 1;
function reset() {
    e = 0; u = 0; y = 0; z = 0; w = 0; x = new Date();
    clearInterval(ttttt);
    document.getElementById('buttontext').innerHTML = "Start"
    document.getElementById('hourcount').innerHTML = "00";
    document.getElementById('mincount').innerHTML = "00";
    document.getElementById('secondcount').innerHTML = "00";
    document.getElementById('milisecondcount').innerHTML = "00";
}
function stamp() {
   
    
    let stringid = "stampno-" + idvar;
    if (z < 10 && y < 10) {
        document.getElementById(stringid).innerHTML = idvar + "." + "Time Stamp- " + "0" + u + ":0" + y + ":0" + z + ":" + w;
    }
    else if (z < 10 && y >= 10) {
        document.getElementById(stringid).innerHTML = idvar + "." + "Time Stamp- " + "0" + u + ":" + y + ":0" + z + ":" + w;
    }
    else if (y < 10 && z >= 10) {
        document.getElementById(stringid).innerHTML = idvar + "." + "Time Stamp- " + "0" + u + ":0" + y + ":" + z + ":" + w;
    }
    else {
        document.getElementById(stringid).innerHTML = idvar + "." + "Time Stamp- " + "0" + u + ":" + y + ":" + z + ":" + w;

    }
    idvar++;

    if (idvar > 20) {
        idvar = 1;
    }
    let drain = document.getElementById('flush');
    drain.style.display = "Block";
}
function flush() {
    for (let i = 1; i <= 20; i++) {
        let saafid = "stampno-" + i;
        document.getElementById(saafid).innerHTML = "";
        idvar = 1;
        let drain = document.getElementById('flush');
        drain.style.display = "none";
    }
}
function btn() {

    function stopwatch() {
        // d = Date.UTC() - x + e ;
        d = Date.now() - x + e+66600000;

            u = (new Date(d).getHours());
        if (u < 10) {
            document.getElementById('hourcount').innerHTML = "0" + u;
        }
        else {
            document.getElementById('hourcount').innerHTML = u;
        }
   
            y = (new Date(d).getMinutes());
        if (y < 10) {

            document.getElementById('mincount').innerHTML = "0" + y;
        }
        else {
            document.getElementById('mincount').innerHTML = y;

        }
        z = (new Date(d).getSeconds());
        if (z < 10) {

            document.getElementById('secondcount').innerHTML = "0" + z;
        }
        else {

            document.getElementById('secondcount').innerHTML = z;
        }
        w = (new Date(d).getMilliseconds());
        if (w < 10) {

            document.getElementById('milisecondcount').innerHTML = "0" + w;
        }
        else {

            document.getElementById('milisecondcount').innerHTML = w;
        }
    }

    let string = document.getElementById('buttontext').innerHTML
       
    if (string == "Start") {
        x = Date.now();
        // x=Date.UTC();
        ttttt = setInterval(stopwatch, 1);
        document.getElementById('buttontext').innerHTML = "Stop"
      
    }
    else {
        e = d;
        e=e-66600000;
        clearInterval(ttttt);
        document.getElementById('buttontext').innerHTML = "Start";
 
    }
}
'use strict' 
var mensaje = ["Software Developer",
                "Buenos Aires, Argentina.",
                "Freelancer mostly ", 
                "cwalternicolas@gmail.com"]            
var skills = ["Python Java & Javascript"]
var id = ['message','message2','message3','message4']
var time = [30, 40, 80, 110];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function main(){
    var i = 0;
    var j = 0;
    for(i; i<mensaje.length; i++){
        start(mensaje[i], id[i], time[i]);
    }
    await sleep(2000);
    for(j;j<skills.length; j++){
        start(skills[j], id[2], 40);
        await sleep(2000);
    }
}

function start(mensaje, id, time){
    var x = 0;
    var msg = mensaje.split(''); 
    var t = setInterval( 
    function(){ 
    if(x >= msg.length-1)clearInterval(t); 
    document.getElementById(id).innerHTML+=msg[x];
    x++; 
    }, time);  
   
}
window.onload = main;

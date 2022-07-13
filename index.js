// stopwatch
const timer = document.getElementById('stopwatch');
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;
var current,para,element;
var ct = 0;
var i =1;
var check = 0;
//button
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");


btn2.addEventListener('click',function(){
    if(btn2.innerHTML=='Start'){
        check=1;
        if(stoptime == true){
            current = new Date()
            ct = current.toLocaleTimeString([],{hour12:false});
            stoptime = false;
            timerCycle();
            btn1.innerHTML = 'Lap';
            btn2.innerHTML = 'Stop';
            btn2.style.backgroundColor = 'rgb(236, 136, 141)';
            btn2.style.color = 'red';
            btn2.style.fontWeight = 'bold';
            btn2.style.fontSize = '20px';
            btn2.style.border = '1px red solid';
        }
    }
    else if(btn2.innerHTML=='Stop'){
        if(stoptime==false){
            stoptime=true;
        }
        btn1.innerHTML = 'reset';
        btn2.innerHTML = 'Start';
        btn1.style.fontSize = '20px';
    }

    
})

btn1.addEventListener('click',function(){
    if(btn1.innerHTML=='Lap'){
        if(ct==0){
            para.style.display = 'none';
        }
        else if(check==1){
            para = document.createElement("p");
            span1 = document.createElement("span");
            span2 = document.createElement("span");
            span2.style.marginLeft = "30%"
            span1.append("Lap",i);
            para.style.fontSize = '20px';
            para.style.bottomBorder = '10px white';
            para.appendChild(span1);
            span2.append(ct);
            para.appendChild(span2);
            i++;
            element = document.getElementsByClassName('container');
            element[0].appendChild(para);
            check=0;
        }
        
    }
  else if (btn1.innerHTML=='reset'){
    btn1.innerHTML = 'Lap';
    resetTimer();
  }    
})

// timercycle
function timerCycle() {
    if(stoptime==false){
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec+1;
        if(sec==60){
            min = min+1;
            sec = 0;
        }
        if(min==60){
            hr = hr+1;
            min = 0 ;
            sec = 0;
        }
        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }
        if (hr < 10 || hr == 0) {
            hr = '0' + hr;
        }
      
        timer.innerHTML = hr + ':' + min + ':' + sec;
      
        setTimeout("timerCycle()", 1000);
        
    }
}

function resetTimer(){
    timer.innerHTML= "00:00:00";
    stoptime = true;
    hr = 0;
    sec = 0;
    min =0 ;
    
}

var answer = document.getElementById("answer");
var button = document.getElementsByTagName("button");
var da = document.getElementsByTagName("date");
///////////////////////////////////////////////data 
var s=0 , t=0 , d=0 ;
const v=[4 , 5 , 6 , 8, 9 , 10 , 12 ,17,13 , 14, 16 ] , p=[3 , 7 , 11 , 15 ];
////////////////////////////////////////////////////////function add event listener
button[18].addEventListener("click" ,eq);
button[2].addEventListener("click" ,mod);
button[1].addEventListener("click" ,pm);
button[0].addEventListener("click" ,zz);
////////////////////////////////////////////////////////for each
v.forEach(r=>button[r].addEventListener("click",fun));
p.forEach(r=>button[r].addEventListener("click" , fff));
////////////////////////////////////////////////////////functions
function mod (){ t/=100 ; answer.innerHTML=t; }
function zz (){ t=0 ; s=0 ; answer.innerHTML= "" ; }
function pm (){ t*=-1 ; answer.innerHTML=t ; }
function fun (event){
t +=event.target.lastChild.data;
 t*=1.0;
 answer.innerHTML= t ;
}
function fff (event){ 
s=t;
d=event.target.lastChild.data;
answer.innerHTML =d ; 
t=0 ;  }
function eq (){ 
    switch(d){
        case '+': t=t*1+s*1  ; break ; 
        case '-': t=s*1 -t*1   ; break ;
        case 'x': t=s*t  ; break ;
        case '÷': t=s/t ; break ; }
        answer.innerHTML = t ;
    
 }
 console.log(button);

// da.innerHTML=data();
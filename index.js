//Random number

const but=document.getElementById("but");
const lab1=document.getElementById("lab1");
const lab2=document.getElementById("lab2");
const lab3=document.getElementById("lab3");
const min=1;
const max= 6;
let random1;
let random2;
let random3;

but.onclick=function(){
    random1=Math.floor(Math.random()*max)+min;
    random2=Math.floor(Math.random()*max)+min;
    random3=Math.floor(Math.random()*max)+min;
    lab1.textContent=random1;
    lab2.textContent=random2;
    lab3.textContent=random3;
}
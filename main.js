const Bangla=document.querySelector("#Bangla");
const English=document.querySelector("#English");
const Math=document.querySelector("#Math");
const Physics=document.querySelector("#Physics");
const btn=document.querySelector("#btn");
const input=document.querySelectorAll(".inputs");

for(var i=0; i<input.length; i++){
    input[i].addEventListener('input',function(){
       for(var x=0; x<input.length;x++){
        if(input[x].value>100){
           input[x].style.background='red'
        }else{
            input[x].style.background='none' 
        }
       }
    })
}



btn.addEventListener("click",function(){
if(Bangla.value==''|| English.value=='' || Math.value=='' ||Physics.value==''){
    alert('input is not from ')
}else{
    const newBangla=parseInt(Bangla.value);
    const newEnglish=parseInt(English.value);
    const newMath=parseInt(Math.value);
    const newPhysics=parseInt(Physics.value);

    const NewtotalMark=newBangla+newEnglish+newMath+newPhysics;
    const total_Mark=document.querySelector('#total_Mark');
    total_Mark.innerHTML=NewtotalMark;

    const avg_Mark=document.querySelector('#avg_Mark');
    const newAvg=NewtotalMark/4;
    avg_Mark.innerHTML=newAvg

    const grad_Mark=document.querySelector('#grd_Mark');
    grad_Mark.style.backgroundColor='green'
    if( newAvg>=80 && newAvg<100){
        grad_Mark.innerHTML='A+'
    }else if(newAvg>=70 && newAvg<90){
        grad_Mark.innerHTML='A'
    }else if(newAvg>=60 && newAvg<80){
        grad_Mark.innerHTML='A-'
    }else if(newAvg>=50 && newAvg<70){
        grad_Mark.innerHTML='B'
    }else if(newAvg>=40 && newAvg<60){
        grad_Mark.innerHTML='C'
    }else if(newAvg>=33 && newAvg<50){
        grad_Mark.innerHTML='D'
    }else{
        grad_Mark.innerHTML='F' 
    } 
  
    const passFaild=document.querySelector('#pass-faild');
    if(newAvg>=33){
        passFaild.innerHTML="your a pass" 
    }else{
        passFaild.innerHTML="your a faild" 
    }
}

});
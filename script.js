
let skirina=document.getElementById("skirina");
let seven=document.getElementById("_7");
let nine=document.getElementById("_9");
let eight=document.getElementById("_8");
let six=document.getElementById("_6");
let five=document.getElementById("_5");
let four=document.getElementById("_4");
let three=document.getElementById("_3");
let two=document.getElementById("_2");
let one=document.getElementById("_1");
let del=document.getElementById("_del");
let sub=document.getElementById("_-");
let add=document.getElementById("_+");
let div=document.getElementById("_/");
let times=document.getElementById("_*");
let equals=document.getElementById("equals");
let zero=document.getElementById("_0");
let clear=document.getElementById("_c");
let point=document.getElementById("_.");


nine.addEventListener("click",function(){
    skirina.value+=9;
});
eight.addEventListener("click",function(){
    skirina.value+=8;
});

seven.addEventListener("click",function(){
    skirina.value+=7;
});

six.addEventListener("click",function(){
    skirina.value+=6;
});
five.addEventListener("click",function(){
    skirina.value+=5;
});
four.addEventListener("click",function(){
    skirina.value+=4;
});
three.addEventListener("click",function(){
    skirina.value+=3;
});
two.addEventListener("click",function(){
    skirina.value+=2;
});
one.addEventListener("click",function(){
    skirina.value+=1;
});
zero.addEventListener("click",function(){
    skirina.value+=0;
});

add.addEventListener("click",function(){
    skirina.value+="+";
});
sub.addEventListener("click",function(){
    skirina.value+="-";
});
times.addEventListener("click",function(){
    skirina.value+="*";
});
point.addEventListener("click",function(){
    skirina.value+=".";
});

div.addEventListener("click",function(){
    skirina.value+="/";
});


clear.addEventListener("click",function(){
    skirina.value="";
});

del.addEventListener("click",function(){
   skirina.value=skirina.value.substring(0,skirina.value.length-1);
});

equals.addEventListener("click",function(){
   let lastChar =skirina.value.charAt(skirina.value.length-1);
   console.log(lastChar);
   if(lastChar=="-" ||lastChar=="+" ||lastChar=="*" ||lastChar=="/" ||lastChar==""){
       alert(" wa tchbaraklah")
   }else{
    skirina.value=eval(skirina.value);
   }
});






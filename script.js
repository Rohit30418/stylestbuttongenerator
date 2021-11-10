let button=document.querySelector("button");
let widths=document.querySelector(".width");
let tlradius=document.querySelector(".tlradius");
let trradius=document.querySelector(".trradius");
let blradius=document.querySelector(".blradius");
let brradius=document.querySelector(".brradius");
let bgcolors=document.querySelector(".bgcolor");
let shadow=document.querySelector(".shadow");
let txtcolor=document.querySelector(".text-color");
let borderwidth=document.getElementById("border-width");
let bordertype=document.getElementById("border-type");
let bordercolor=document.getElementById("border-color");
let inset=document.querySelector("#inset");

function cngtext(txt){
    button.innerText=txt.value;
}

function cngredius(redius) {
    button.style.borderRadius=`${redius.value}px`;
}

function btnwidth(width) {
    button.style.padding=`${width.value}px`;
    widths.innerHTML=width.value;
}

function bgcolor(bgcolor) {
    button.style.backgroundColor=bgcolor.value;
    bgcolors.innerHTML=bgcolor.value;
}

function textcolor(textcolor) {
    button.style.color=textcolor.value;
    txtcolor.innerHTML=textcolor.value;
}

function topleftredius(para) {
 button.style.borderTopLeftRadius=para.value+"px";
 tlradius.innerHTML=para.value;
}

function toprightredius(para) {
 button.style.borderTopRightRadius=para.value+"px";
 trradius.innerHTML=para.value;
}

function bottomleftredius(para) {
 button.style.webkitBorderBottomLeftRadius=para.value+"px";
 blradius.innerHTML=para.value;
}

function bottomrightredius(para) {
 button.style.webkitBorderBottomRightRadius=para.value+"px";
 brradius.innerHTML=para.value;
 
}




function shadowpro() {
    let shadowx=document.querySelector("#shadowx");
    console.log(shadowx.value);
    let shadowy=document.querySelector("#shadowy");
    let shadowblur=document.querySelector("#shadowblur");
    let shadowspred=document.querySelector("#shadowspread");
    let shadowcolor=document.querySelector("#shadowcolor");

    if(inset.checked){
        button.style.boxShadow=`inset ${shadowx.value}px ${shadowy.value}px ${shadowblur.value}px ${shadowspred.value}px ${shadowcolor.value},inset ${shadowx.value}px ${shadowy.value}px ${shadowblur.value}px ${shadowspred.value}px rgba(0,0,0,0.5)`;
        
        shadow.innerHTML=`inset ${shadowx.value}px ${shadowy.value}px ${shadowblur.value}px ${shadowspred.value}px ${shadowcolor.value},inset ${shadowx.value}px ${shadowy.value}px ${shadowblur.value}px ${shadowspred.value}px rgba(0,0,0,0.5);`;
    }else{
        button.style.boxShadow=`${shadowx.value}px ${shadowy.value}px ${shadowblur.value}px ${shadowspred.value}px ${shadowcolor.value}`;
        shadow.innerHTML=`${shadowx.value}px ${shadowy.value}px ${shadowblur.value}px ${shadowspred.value}px ${shadowcolor.value};`;
    }
   }

function borderpro() {
    button.style.border=`${borderwidth.value}px ${bordertype.value} ${bordercolor.value}`;
}

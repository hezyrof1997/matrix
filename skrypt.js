let los,losSTR,wstawianie,i=0;

let generowanie = document.querySelector("body");


let iloscX = window.screen.availHeight/100
let iloscY = window.screen.availWidth/42



console.log("ilosc komorek w pionie: "+ iloscX)
console.log("ilosc komorek w poziomie: "+ iloscY)

let ilosc = Math.round(iloscX * iloscY);

if(ilosc<100){ilosc+=400}

console.log("ilosc komorek ogólnie: "+ ilosc)


console.log("wysokość x szerokość "+window.screen.availHeight+" x "+window.screen.availWidth)



for(let i=0;i<ilosc;i++){
generowanie.innerHTML+=`<div class='cyfra cyfra${i}' ></div>`;


}


function losowanie(){

    
let fun=()=>{
    los = Math.round(Math.random()*10)


    losSTR = los.toString();
    if (losSTR.length == 2) {
        los-= 10
    }
}
    

    for(let i=0;i<ilosc;i++){

        fun();
    wstawianie = document.querySelector(`.cyfra${i}`).innerHTML=`${los}`;

    }

}



setInterval(losowanie,50)


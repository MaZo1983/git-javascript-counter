//Alapérték felvétele
let count = 0;

//Gombok és egyéb elemek eltárolása
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
//const decrease = document.getElementById("decrease");
//const reset = document.getElementById("reset");
//const increase = document.getElementById("increase");


//Ciklussal végiglépkedek az eltárolt gombokkal amelyeken rajta van a .btn
btns.forEach((btn) => {

    //az összes gomb közül amelyeket bejárom a ciklussal azt kattintom meg amelyik a ciklus futásakor jön a .btn arrayból
    btn.addEventListener("click", (e) => {

        //az éppen aktuálisan megkattintott gombon milyen class van
        const style = e.currentTarget.classList;

        //ha az aktuálisan megkattintott gombok közül tartalmazza a decrease classt, akkor fut le
        if(style.contains("decrease")){

            count--;
        }

        else if(style.contains("increase")){

            count++;
        }

        else{

            count = 0;
        }

        if (count > 0){

            value.style.color="green";
        }
        
        else if (count < 0){

            value.style.color="red";
        }

        else{

            value.style.color="black";
        }

        value.textContent = count;

    

    })

})

//Egyszerű módszer
/* increase.addEventListener("click", ()=>{

    
    count++;
    
    if(count > 0){

        value.style.color = "green";
    }

    value.textContent = count;

})

decrease.addEventListener("click", ()=>{

    
    count--;
    
    if(count < 0){

        value.style.color = "red";
    }

    value.textContent = count;

})

reset.addEventListener("click", ()=>{

    
    count = 0;
    
   

        value.style.color = "black";
  

    value.textContent = count;

}) */


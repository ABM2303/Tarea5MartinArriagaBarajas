var numero=0;

function aguila(){
    numero=1;
    document.querySelector("h2").innerHTML = ("Usted apuesta por Águila.");
}

function sol(){
    numero=0;
    document.querySelector("h2").innerHTML = ("Usted apuesta por Sol")
}

function tirarmoneda(){
        var randomnumber=Math.floor(Math.random()*2);
        var salio;
        if(randomnumber===0){
            salio="Sol";
        }else if(randomnumber===1){
            salio="Águila";
        }
        
        if(numero===randomnumber){
            document.querySelector("h3").innerHTML = ("Salio "+salio+". Usted gano.");
        }else{
            document.querySelector("h3").innerHTML = ("Salio "+salio+". Usted perdió.");
        }
}
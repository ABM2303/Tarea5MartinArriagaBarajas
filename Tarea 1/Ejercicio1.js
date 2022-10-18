let dato1, dato2, num1, num2;
dato1 = window.prompt("Introduce primer número ?", "0");
num1 = parseInt(dato1);
dato2 = window.prompt("Introduce segundo número ?", "0");
num2 = parseInt(dato2);
if(num1>num2){
    document.write(`<br/> <br/> el primer numero (${num1}) es mayor que  el segundo numero (${num2})` );
}else if(num2>num1){
    document.write(`<br/> <br/> el segundo numero (${num2}) es mayor que el primer numero (${num1})` );
}else{
    document.write(`<br/> <br/> Ambos numeros son iguales` );
}


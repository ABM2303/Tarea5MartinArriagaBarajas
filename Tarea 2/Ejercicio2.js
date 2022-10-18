let dato1, dato2, dato3, cal1,cal2,cal3, estado;
dato1 = window.prompt("Ingrese la primer nota: ", "0");
cal1=parseInt(dato1);
dato2 =  window.prompt("Ingrese la segunda nota: ", "0");
cal2 = parseInt(dato2);
dato3 = window.prompt("Ingrese la tercer nota: ", "0");
cal3 = parseInt(dato3);
let media = (cal1+cal2+cal3)/3;
if(media>=5){
    estado="Aprobado"
}else{
    estado="Suspendido"
}
document.write(`<br> </br> La media es: ${media} <br> </br> Su estado es: ${estado}`);

const mayor = (a,b,c)=> {
    if(a>b && a>c){
        return"El numero mayor es: "+  a
    }
    else if(b>a && b>c) {
        return"El numero mayor es: "+  b
    } else {
        return"El numero mayor es: "+  c  + "<br>"
    }
}
const comparar = (a,b,c)=>{
    if (a==b && b==c){
        return document.write("los tres numeros son iguales: " + a, b, c);
    }
    else if (a==b){
        return document.write("este numero se repite dos veces : ", a +" ", b);
    }
    else if (a==c){
        return document.write("este numero se repite dos veces : ", a +" ", c);
    }
    else{
        return document.write("este numero se repite dos veces : ", b +" ", c);
    }

}

const ejemplo = mayor(10,11,10);
document.write(ejemplo)
document.write("<br>")
const ejemplo2 = comparar(10,10,10);
document.write(ejemplo2)
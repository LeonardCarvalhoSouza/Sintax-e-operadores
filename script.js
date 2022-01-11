
function comparador(){
    //declaração das variaveis locais
    let number_1 = parseInt(prompt("Digite o primeiro numero"));
    let number_2 = parseInt(prompt("Digite o segundo numero"));
    let soma = number_1 + number_2;

    if(number_1 == number_2 && soma > 10 && soma < 20){
        alert("Os numeros são iguais, Sua soma é maior que 10 e menor que 20.");
    }else if(number_1 !== number_2 && soma > 10 && soma < 20){
        alert("Os numeros não são iguais, Sua soma é maior que 10 e menor que 20.");
    }else if(number_1 !== number_2 && soma < 10 ){
        alert("Os numeros não são iguais, Sua soma é menor que 10 e menor que 20.");
    }else if(number_1 == number_2 && soma < 10 ){
        alert("Os numeros são iguais, Sua soma é menor que 10 e menor que 20.");
    }else if(number_1 !== number_2 && soma > 20){
        alert("Os numeros não são iguais, Sua soma é maior que 10 e maior que 20.");
    11}else if(number_1 == number_2 && soma > 20){
        alert("Os numeros são iguais, Sua soma é maior que 10 e maior que 20.");
    }
     //variavel local para repetir a função
    let repetir = parseInt(prompt("Digite 1 para calcular novamente e 2 para sair"));

    if(repetir == 1){
        comparador();
    }else{
        alert("Até a proxima!")
    }
}

comparador();



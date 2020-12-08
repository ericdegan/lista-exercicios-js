function Exemplo(){
// document.write("Escrevendo na tela");

    // document.getElementById("menssagem").innerText = "Escrevendo na tela";

    document.getElementById("menssagem").innerHTML = "<b> Escrevendo na Tela </b>";

    document.getElementById("numero").value = "teste";

    console.log(document.getElementById("menssagem").innerHTML);


    let numero = document.getElementById("numero").value;
    console.log(numero);
}

function Trocar(){
    let numero = document.getElementById("numero").value;

    if(numero<20){ //teste
        //resposta verdadeira
        document.getElementById("menssagem").innerText = "Menor que 20";
    
        else if (numero == 20)
        document.getElementById("menssagem").innerText = "Igual a 20";
    }
    else{
        //resposta falsa
        document.getElementById("menssagem").innerText = "Maior que 20";

    }



}
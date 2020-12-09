function Idade()
{
    let numero = document.getElementById("numero").value;

    
    if(numero > 18){ 
        document.getElementById("resultado").innerText = "Maior";
    }
    
    
        else if (numero <= 18){
        document.getElementById("resultado").innerText = "Menor";
        }
}
    

function calcularIMC() {
  var altura;
  var peso;
  var resposta;

  altura = document.getElementById("altura").value;
  peso = document.getElementById("peso").value;

  if(altura != "" && peso != ""){
    resposta = parseFloat(peso / (altura * altura));
    }
    else{
        alert("Informe dados válidos");
    }

    exibeResultado(Math.round(resposta));
  

  }

function exibeResultado(valor){
    document.getElementById("resultado").innerHTML = "Seu IMC é igual " + valor ;

    if(valor <= 24.99 && valor >= 18.99){
        document.getElementById("imc").innerHTML = "Seu Peso esta normal";
      }
      else if(valor <= 29.99 && valor>= 25){
        document.getElementById("imc").innerHTML = "Você esta acima do peso";
      }
      else if(valor <= 34.99 && valor >= 30){
        document.getElementById("imc").innerHTML = "Voce esta em Obesidade Nivel I"
      }
      else{
        document.getElementById("imc").innerHTML = "Voce esta em Obesidade Nivel II"
      }
      
}

 


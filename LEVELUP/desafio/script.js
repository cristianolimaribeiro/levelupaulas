    var primeiroNumero;
    var segundoNumero ;
    var operacao ;
    var resposta ;

function calcular(){
    primeiroNumero = document.getElementById("n1").value;
    segundoNumero = document.getElementById("n2").value;
    operacao = document.getElementById("operacao").value;

    if(primeiroNumero == "" && segundoNumero == "" && operacao == ""){
        alert("Favor preencher os campos para efetuar a operação")
    }
    else if (primeiroNumero == ""){
        alert("Favor preencher o primeiro campo numerico");
    }
    else if(segundoNumero == ""){
        alert("Favor preencher o segundo campo numerico");
    }
    else{
        if(operacao == ""){
            alert("Favor preencher a operação");
        }
        else{
            if(operacao == "+"){
                resposta = parseFloat(primeiroNumero) + parseFloat(segundoNumero);
                document.getElementById("resultado").innerHTML = resposta;
            }
            else if(operacao == "-"){
                resposta = parseFloat(primeiroNumero) - parseFloat(segundoNumero);
                document.getElementById("resultado").innerHTML = resposta;
            }
            else if(operacao == "*"){
                resposta = parseFloat(primeiroNumero) * parseFloat(segundoNumero);
                document.getElementById("resultado").innerHTML = resposta;
            }
            else if(operacao == "/"){
                resposta = parseFloat(primeiroNumero) / parseFloat(segundoNumero);
                document.getElementById("resultado").innerHTML = resposta.toFixed(3);
            }
            else{
                alert("Operação Inválida");
            }
        }
    }

    
}
function limpar(){
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("operacao").value = "";
    document.getElementById("resultado").innerHTML= "";
    
}

    
window.onload = function(){
    RenderizaTabela();
    InicializaMouseOver();
}

function InicializaMouseOver(){
    var tds = document.getElementsByTagName('td');
    for(var i = 0; i < tds.length; i++){
        tds[i].onmouseover = function(){
            this.style.background = "black";
        }
    }
}

function RenderizaTabela(){
    var html = "<table>";
    for(var i = 0; i < 100; i++){
        html += "<tr>"
        for(var j = 0; j < 100; j++){
            html += "<td></td>"
        }
        html += "</tr>"
    }
    html += "</table>"

    document.getElementById('board').innerHTML = html;
}
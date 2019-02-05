window.onload = function(){
    RenderizaTabela();
    InicializaMouseOver();
}

function InicializaMouseOver(){
    const tableID = document.getElementById('table');
    let hasMouseDown = false;

    const tds = document.getElementsByTagName('td');
    for(var i = 0; i < tds.length; i++){        
        tds[i].onmouseover = function(){
            if(hasMouseDown)
                this.style.background = "black";
        }
    }

    tableID.onmousedown = function () {
        hasMouseDown = true;       
    }

    tableID.onmouseup = function () {
        hasMouseDown = false;       
    }
   

    
   
}

function RenderizaTabela(){
    var html = "<table id = table>";
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
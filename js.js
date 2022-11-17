//JavaScript radio ja. A HTML doktor Nemanja html

function kreni(){
    document.getElementById("main").innerHTML = 
    '<div id="ned" class="polje">Ned</div><div id="pon" class="polje">Pon</div><div id="uto" class="polje">Uto</div><div id="sre" class="polje">Sre</div><div id="cet" class="polje">cet</div><div id="pet" class="polje">Pet</div><div id="sub" class="polje">Sub</div>'
 
    let datum = new Date(document.getElementById("godina").value, document.getElementById("mesec").value-1, 1);
    let temp = new Date(datum.getFullYear(), datum.getMonth()+1, 0);
    let dani = temp.getDate();
 
    let pocetak = datum.getDay();
    console.log(datum, dani);
    let tabela = [];
    tabela.length = 42;
 
    for (let i = pocetak; i < dani + pocetak; i++) {
        tabela[i] = i - pocetak + 1;
    }
    console.log(tabela)
 
 
    for (let i = 0; i < 42; i++) {
        if(tabela[i] != null){
            document.getElementById("main").innerHTML += '<div class="polje"><p>' + tabela[i] + '</p></div>';
        }
        else{
            document.getElementById("main").innerHTML += '<div class="polje"><p> </p></div>';
        }
 
    }
 
}
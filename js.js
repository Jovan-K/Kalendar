//JavaScript radio ja. A HTML doktor Nemanja html

function kreni() {
  var today = new Date();

  document.getElementById("main").innerHTML =
    '<div id="ned" class="polje">Ned</div><div id="pon" class="polje">Pon</div><div id="uto" class="polje">Uto</div><div id="sre" class="polje">Sre</div><div id="cet" class="polje">Čet</div><div id="pet" class="polje">Pet</div><div id="sub" class="polje">Sub</div>';

  let datum = new Date(
    document.getElementById("godina").value,
    document.getElementById("mesec").value - 1,
    1
  );
  let temp = new Date(datum.getFullYear(), datum.getMonth() + 1, 0);
  let dani = temp.getDate();
  let danas = today.getDate();
  let pocetak = datum.getDay();
  console.log(datum, dani);
  let tabela = [];
  tabela.length = 42;

  for (let i = pocetak; i < dani + pocetak; i++) {
    tabela[i] = i - pocetak + 1;
  }
  console.log(tabela);
  console.log(danas);

  for (let i = 0; i < 42; i++) {
    if (tabela[i] != null) {
      if (
        tabela[i] == danas &&
        today.getFullYear() == datum.getFullYear() &&
        today.getMonth() == datum.getMonth()
      ) {
        document.getElementById("main").innerHTML +=
          '<div class="polje"><p>' + tabela[i] + "</p></div>";
      } else {
        document.getElementById("main").innerHTML +=
          '<div class="polje"><p>' + tabela[i] + "</p></div>";
      }
    } else {
      document.getElementById("main").innerHTML +=
        '<div class="polje"><p> </p></div>';
    }
  }
}

function load() {
  var today = new Date();

  document.getElementById("main").innerHTML =
    '<div id="ned" class="polje">Ned</div><div id="pon" class="polje">Pon</div><div id="uto" class="polje">Uto</div><div id="sre" class="polje">Sre</div><div id="cet" class="polje">Čet</div><div id="pet" class="polje">Pet</div><div id="sub" class="polje">Sub</div>';

  let datum = new Date(today.getFullYear(), today.getMonth(), 1);
  let temp = new Date(datum.getFullYear(), datum.getMonth() + 1, 0);
  let dani = temp.getDate();
  let danas = today.getDate();
  let pocetak = datum.getDay();
  console.log(datum, dani);
  let tabela = [];
  tabela.length = 42;

  for (let i = pocetak; i < dani + pocetak; i++) {
    tabela[i] = i - pocetak + 1;
  }
  console.log(tabela);
  console.log(danas);

  for (let i = 0; i < 42; i++) {
    if (tabela[i] != null) {
      if (tabela[i] == danas) {
        document.getElementById("main").innerHTML +=
          '<div id="danas"><p>' + tabela[i] + "</p></div>";
      } else {
        document.getElementById("main").innerHTML +=
          '<div class="polje"><p>' + tabela[i] + "</p></div>";
      }
    } else {
      document.getElementById("main").innerHTML +=
        '<div class="polje"><p> </p></div>';
    }
  }
}

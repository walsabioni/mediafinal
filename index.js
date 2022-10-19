function calculate() {
    var abim = document.getElementById("abim").value;
    var bbim = (document.getElementById("bbim").value)*2;
    var cbim = (document.getElementById("cbim").value)*2;
    var dbim = (document.getElementById("dbim").value)*2;
  
    var imc = parseInt(abim) + parseInt(bbim) + parseInt(cbim) + parseInt(dbim);
    var imc = imc;
    var text=""
    if (imc < 47.5) {
      text="Você não atingiu a média nessa matéria :("
    } 
    else if (imc > 47.5) {
      text="Parabéns! Você atingiu a média!"
    }

    var text2= "A soma total das notas foram: "

    var text3= ". O minimo para passar é 47.5"

    console.log(imc)

    document.getElementById("text_area").innerText=text + text2 + imc + text3
  }

function calcular(){ 
  // Variaveis  usadas na página principal
  var N1 = document.getElementById('N1');
  var N2 = document.getElementById('N2');
  var N3 = document.getElementById('N3');
  var N4 =document.getElementById('N4');
  var MF = document.getElementById('MF')

  // Como ela pega e string precisamos converter para números.

  var nota1 = Number(N1.value);
  var nota2 = Number(N2.value);
  var nota3 = Number(N3.value);
  var nota4 = Number(N4.value);

  // No if else foram apresentadas as 8 condições para que o calculo valesse .

  
  if (nota1<0 || nota1>10
    ||nota2<0 || nota2>10
    ||nota3<0 || nota3>10 
    ||nota4<0 || nota4>10 ) {
    alert("Insira uma nota de 0 a 10")

  } else {
      let media =((nota1+nota2+nota3+nota4)/4)
      MF.innerHTML =`<p class="page-subtitle" > MÉDIA F  <input type="text" id ="MF" name="MF" size="2" value="${media}"></p>`;
    //caso as condições fossem válidas o calculo acima era impresso na página.
  }
}
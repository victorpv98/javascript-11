function countNumbers() {
  // Crear el array de números
  var numbers = [
    document.getElementById("number1").value,
    document.getElementById("number2").value,
    document.getElementById("number3").value,
    document.getElementById("number4").value,
    document.getElementById("number5").value,
    document.getElementById("number6").value,
    document.getElementById("number7").value,
    document.getElementById("number8").value,
    document.getElementById("number9").value,
    document.getElementById("number10").value,
  ];

  // Contar cuántos son positivos, negativos y ceros
  var positiveCount = 0;
  var negativeCount = 0;
  var zeroCount = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positiveCount++;
    } else if (numbers[i] < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  }

  // Mostrar el resultado en la página
  document.getElementById("result").innerHTML =
    "Positivos: " +
    positiveCount +
    "<br>Negativos: " +
    negativeCount +
    "<br>Ceros: " +
    zeroCount;
}

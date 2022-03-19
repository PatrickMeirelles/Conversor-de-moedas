function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterBitcoin() {
  var valorElementoBitcoin = document.getElementById("valorBitcoin");
  var valorBitcoin = valorElementoBitcoin.value;
  var valorEmBitcoinNumerico = parseFloat(valorBitcoin);

  var valorFinalBitcoin = valorEmBitcoinNumerico * 0.00000506;
  console.log(valorFinalBitcoin);

  var elementoBitcoinConvertido = document.getElementById(
    "valorConvertidoBitcoin"
  );
  var valorConvertidoBitcoin = "O resultado em Bitcoin é " + valorFinalBitcoin;
  elementoBitcoinConvertido.innerHTML = valorConvertidoBitcoin;
}
//Submit
const form = document.querySelector('#calculo');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('submit');
  const valor = getJurosComposto();
  setResult(getResult(valor));
});

function createP () {
  const p = document.createElement('p');
  return p;
}

function getResult(value) {
  const inputCapital = document.querySelector('#capital');
  const capital = Number(inputCapital.value);

  const rendimento = value - capital;
  const rendimentoPercentual = rendimento / capital * 100;

  return `O valor do montante é R$${value.toFixed(2)} rendimento de R$${rendimento.toFixed(2)}, com o acrescimo de juros igual a ${rendimentoPercentual.toFixed(4)}%`;
}

function getJurosComposto () {
  const inputCapital = document.querySelector('#capital');
  const inputTaxa = document.querySelector('#taxa');
  const inputPrazo = document.querySelector('#prazo');

  const capital = Number(inputCapital.value);
  const taxa = Number(inputTaxa.value);
  const prazo = Number(inputPrazo.value);

  if (!capital || !taxa || !prazo) {
    setResult('Preencha os campos com numeros!');
    return;
  }

  const total = capital * ((1 + taxa / 100) ** prazo);

  return total;
}

function setResult(msg) {
  const result = document.querySelector('#result');
  result.innerHTML = '';
  const p = createP();
  p.innerHTML = msg;
  result.appendChild(p);
}
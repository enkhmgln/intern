// Define the exchange rates
const exchangeRates = {
    USD: 1,
    EURO: 1.22,
    POUND: 1.41,
    WON: 0.0009,
    YEN: 0.009,
    YAN: 0.008
  };
  

  const currencyFromSelect = document.querySelectorAll('.currency')[0];
  const currencyToSelect = document.querySelectorAll('.currency')[1];
  const numberInput = document.getElementById('num');
  const answerInput = document.getElementById('ans');
  const convertButton = document.getElementById('btn');
  

  Object.keys(exchangeRates).forEach(currency => {
    const optionFrom = document.createElement('option');
    optionFrom.value = currency;
    optionFrom.text = currency;
    currencyFromSelect.appendChild(optionFrom);
  
    const optionTo = document.createElement('option');
    optionTo.value = currency;
    optionTo.text = currency;
    currencyToSelect.appendChild(optionTo);
  });
  

  convertButton.addEventListener('click', convertCurrency);
  

  function convertCurrency() {
    const currencyFrom = currencyFromSelect.value;
    const currencyTo = currencyToSelect.value;
    const amount = parseFloat(numberInput.value);

    if (isNaN(amount)) {
      answerInput.value = 'Оролт буруу байна.';
      return;
    }
  
    // Calculate the converted amount
    const convertedAmount = amount * (exchangeRates[currencyTo] / exchangeRates[currencyFrom]);
  
    // Display the converted amount
    answerInput.value = convertedAmount.toFixed(2) + ' ' + currencyTo;
  }
  
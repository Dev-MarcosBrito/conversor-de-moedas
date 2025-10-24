const convertButton = document.querySelector(".convertButton");
const currencySelect = document.querySelector(".toCurrency");
const inputCurrency = document.querySelector(".inputCurrency");

inputCurrency.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "");
  value = (parseFloat(value) / 100).toFixed(2);
  e.target.value = value
    ? value
        .toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })
    : "";
});


function convertValues() {
    const inputCurrency = document.querySelector(".inputCurrency").value;
    const currencyValueToConvert = document.querySelector(".currencyValueToConvert");
    const currencyValueConverted = document.querySelector(".currencyValueConverted");


    const dolarToDay = 5.38;
    const euroToDay = 6.25;
    const libraToDay = 7.30;
    const bitcoinToDay = 134000.00;


    if (currencySelect.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrency / dolarToDay);
    }
    if (currencySelect.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrency / euroToDay);

    }
    if (currencySelect.value === "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrency / libraToDay);
    }
    if (currencySelect.value === "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrency / bitcoinToDay);
    }
    if (currencySelect.value === "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrency);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrency);

};

function changeCurrency () {
    const currencyName = document.getElementById("toCurrencyName");
    const currencyImage = document.getElementById("toCurrencyImage");

    if (currencySelect.value === "dolar") {
        currencyImage.src = "./assets/dolar.png";
    }
    if (currencySelect.value === "euro") {
        currencyImage.src = "./assets/euro.png";
    }
    if (currencySelect.value === "libra") {
        currencyImage.src = "./assets/libra.png";
    }
    if (currencySelect.value === "bitcoin") {
        currencyImage.src = "./assets/bitcoin.png";
    }
    if (currencySelect.value === "real") {
        currencyImage.src = "./assets/real.png";
    }

    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar americano";
    }
    if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro";
    }
    if (currencySelect.value === "libra") {
        currencyName.innerHTML = "Libra";
    }
    if (currencySelect.value === "bitcoin") {
        currencyName.innerHTML = "Bitcoin";
    }
    if (currencySelect.value === "real") {
        currencyName.innerHTML = "Real Brasileiro";
    }

    convertValues();
}


currencySelect.addEventListener ('change', changeCurrency);
convertButton.addEventListener('click', convertValues);
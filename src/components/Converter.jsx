import React, { useEffect, useState } from "react";
import CurrencyRow from "./CurrencyRow";
import "../css/converter.css";

function Converter() {
  const [currencyOptions, setCurrencyOptions] = useState([]);

  const [fromCurrency, setFromCurrency] = useState([]);
  const [toCurrency, setToCurrency] = useState([]);

  const [exchangeRate, setExchangeRate] = useState();

  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  const base_url = "https://api.apilayer.com/exchangerates_data/latest";

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(
        `${base_url}?base=${fromCurrency}&symbols=${toCurrency}`,
        requestOptions
      )
        .then((res) => res.json())
        .then((data) => setExchangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  var myHeaders = new Headers();
  myHeaders.append("apikey", "mKIfcMUqJ5sYJ925ExUrI2FcVUM7Fg1n");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  useEffect(() => {
    fetch("https://api.apilayer.com/exchangerates_data/latest", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
      });
  }, []);

  return (
    <>
      <h1>Converter</h1>
      <p className="paragraph">
        Having troubles checking the prices of our books in different currency?
        We've got you covered! Look for your currency and shop with ease!
      </p>
      <div className="rows">
        <CurrencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
          amount={fromAmount}
          onChangeAmount={handleFromAmountChange}
        />
        <div className="equals">=</div>
        <CurrencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={(e) => setToCurrency(e.target.value)}
          amount={toAmount}
          onChangeAmount={handleToAmountChange}
        />
      </div>
    </>
  );
}

export default Converter;

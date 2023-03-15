import React from "react";

function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount,
  } = props;
  return (
    <div>
      <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
        style={{
          borderColor: "black",
          borderRadius: 5,
          padding: 25,
        }}
      />
      <select
        value={selectedCurrency}
        onChange={onChangeCurrency}
        style={{ marginLeft: 25 }}
      >
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyRow;

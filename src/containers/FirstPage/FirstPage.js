import React from "react";
import { Container, Row } from "react-bootstrap";
import classes from "./FirstPage.module.css";
import Compare from "../../components/Compare";
import { useState } from "react";
import { useEffect } from "react";
import CurrencyRow from './../../components/currencyRow';
import { connect } from "react-redux";

function FirstPage() {




    const BASE_URL = 'https://www.cbr-xml-daily.ru/latest.js'
    const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState();
  const [amountInFromCurrency, setAmountInFromCurrency] = useState();


  let toAmount, fromAmount

  if (amountInFromCurrency) {
      fromAmount = amount
      toAmount = amount * exchangeRate
  }else{
      toAmount = amount
      fromAmount = amount / exchangeRate
  }


  // useSelector(() => props.fetchCurrency())

  useEffect(() => {
    fetch(`${BASE_URL}`)
  .then(res => res.json())
  .then(data => {
      const firstCurrency = Object.keys(data.rates)[10]
    setCurrencyOptions([data.base, ...Object.keys(data.rates)])
    setFromCurrency(data.base);
    setToCurrency(firstCurrency);
    setExchangeRate(data.rates[firstCurrency])

  })

  console.log();
  // 

  }, [])


  useEffect(() => {
      if (fromCurrency != null && toCurrency != null) {
    fetch(`${BASE_URL}`)
      .then(res => res.json())
      .then(data => setExchangeRate(data.rates[toCurrency]))
      }
     
  }, [fromCurrency, toCurrency])


  function handleFromAmountChange(e) {
      setAmount(e.target.value)
      setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e) {
      setAmount(e.target.value)
      setAmountInFromCurrency(false)
  }


  return (
    <div className={classes.FirstPage}>
      <Container fluid className="w-75">
        <Row>
          <h2>Конвертер валют</h2>
          <CurrencyRow
            onChangeCurrency={(e) => setFromCurrency(e.target.value)}
            selectedCurrency={fromCurrency}
            option={currencyOptions.filter((item, idx) => idx === 0)}
            amount={fromAmount}
            onChangeAmount={handleFromAmountChange}
          />
          <Compare />
          <CurrencyRow
            onChangeCurrency={(e) => setToCurrency(e.target.value)}
            selectedCurrency={toCurrency}
            option={currencyOptions}
            amount={toAmount}
            onChangeAmount={handleToAmountChange}
          />
        </Row>
      </Container>
    </div>
  );
}







export default connect() (FirstPage)
import React, { useState, useEffect } from 'react';
import './index.css';
import { BsGraphUpArrow, BsInfoCircle } from "react-icons/bs";
import { SiBitcoinsv } from "react-icons/si";

function BitcoinItems() {
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response.json();
        setCryptoData(data.bpi);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="crypto-container">
      {cryptoData ? (
        <div className='crypto-card-container'>
          <CryptoCard
            name={cryptoData.USD.code}
            symbol={cryptoData.USD.symbol}
            price={cryptoData.USD.rate}
            description={cryptoData.USD.description}
            rate_float={cryptoData.USD.rate_float}
          />
          <CryptoCard
            name={cryptoData.GBP.code}
            symbol={cryptoData.GBP.symbol}
            price={cryptoData.GBP.rate} 
            description={cryptoData.GBP.description}
            rate_float={cryptoData.GBP.rate_float}
          />
          <CryptoCard
            name={cryptoData.EUR.code}
            symbol={cryptoData.EUR.symbol}
            price={cryptoData.EUR.rate} 
            description={cryptoData.EUR.description}
            rate_float={cryptoData.EUR.rate_float}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

function CryptoCard({ name, price, description, rate_float }) {
  return (
    <div className="crypto-card">
      <h2 className='head'><SiBitcoinsv className='btc'/> {name}</h2>
      <p className="description">{description}</p>
      <div className='prices-container'>
        <p className="price">$ {price}</p>
        <p className="price rate-float">$ {rate_float}     <BsGraphUpArrow/></p>
      </div>
      <div className='prices-container'>
        <BsInfoCircle className='info'/>
        <button type='button' className='trade-btn'>Trade</button>
      </div>
    </div>
  );
}

export default BitcoinItems;

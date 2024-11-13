import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [holdings, setHoldings] = useState({});
  const [portfolio, setPortfolio] = useState({});
  const [showPortfolio, setShowPortfolio] = useState(false); // New state to toggle views

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.coincap.io/v2/assets");
      const data = await response.json();
      setCryptoData(data.data);
    } catch (error) {
      console.log("error occurred while fetching", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleHoldingChange = (event, cryptoId, priceUsd) => {
    const value = event.target.value;
    setHoldings((prevHoldings) => ({
      ...prevHoldings,
      [cryptoId]: value,
    }));
    calculatePortfolioValue(cryptoId, value, priceUsd);
  };

  const calculatePortfolioValue = (cryptoId, amount, priceUsd) => {
    const holdingValue = amount * priceUsd;
    setPortfolio((prevPortfolio) => ({
      ...prevPortfolio,
      [cryptoId]: holdingValue,
    }));
  };

  return (
    <div className="App">
      {/* Header with toggle buttons */}
      <header className="header">
        <h1>Cryptocurrency Tracker</h1>
        <div className="header-buttons">
          <button onClick={() => setShowPortfolio(false)}>Dashboard</button>
          <button onClick={() => setShowPortfolio(true)}>Portfolio</button>
        </div>
      </header>
      {!showPortfolio ? (
        <div>
          <h2>Current Prices</h2>
          <ul>
            {cryptoData &&
              cryptoData.map((crypto) => (
                <li key={crypto.id}>
                  <p>
                    {crypto.name}: ${parseFloat(crypto.priceUsd).toFixed(2)}
                  </p>
                  <input
                    type="number"
                    placeholder="Set holding amount"
                    value={holdings[crypto.id] || ""}
                    onChange={(e) =>
                      handleHoldingChange(
                        e,
                        crypto.id,
                        parseFloat(crypto.priceUsd)
                      )
                    }
                  />
                  <div className="button-container">
                    <button>Set Alert for Above</button>
                    <button>Set Alert for Below</button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2 className="portfolio-heading">Your Portfolio</h2>
          <div className="portfolio">
            {Object.keys(portfolio).length > 0 ? (
              Object.entries(portfolio).map(([cryptoId, value]) => {
                const crypto = cryptoData.find((c) => c.id === cryptoId);
                return (
                  <div key={cryptoId} className="portfolio-item">
                    <p>
                      {crypto.name}: ${value.toFixed(2)}
                    </p>
                  </div>
                );
              })
            ) : (
              <p>No holdings added</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

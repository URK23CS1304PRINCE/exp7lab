import React, { useState } from "react";
import "./App.css";

function App() {
  const [income, setIncome] = useState("");
  const [rent, setRent] = useState("");
  const [food, setFood] = useState("");
  const [transport, setTransport] = useState("");
  const [other, setOther] = useState("");
  const [balance, setBalance] = useState(null);

  const handleCalculate = () => {
    const totalExpenses =
      Number(rent) + Number(food) + Number(transport) + Number(other);
    const remaining = Number(income) - totalExpenses;
    setBalance(remaining);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>💰 Budget Calculator App</h1>

        <label>Monthly Income:</label>
        <input
          type="number"
          placeholder="e.g., 3000"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />

        <label>Rent/EMI:</label>
        <input
          type="number"
          placeholder="e.g., 800"
          value={rent}
          onChange={(e) => setRent(e.target.value)}
        />

        <label>Food Expenses:</label>
        <input
          type="number"
          placeholder="e.g., 500"
          value={food}
          onChange={(e) => setFood(e.target.value)}
        />

        <label>Transport Expenses:</label>
        <input
          type="number"
          placeholder="e.g., 150"
          value={transport}
          onChange={(e) => setTransport(e.target.value)}
        />

        <label>Other Expenses:</label>
        <input
          type="number"
          placeholder="e.g., 200"
          value={other}
          onChange={(e) => setOther(e.target.value)}
        />

        <button onClick={handleCalculate}>Calculate Balance</button>

        {balance !== null && (
          <h2>
            Remaining Balance:{" "}
            <span style={{ color: balance >= 0 ? "green" : "red" }}>
              ₹{balance}
            </span>
          </h2>
        )}
      </div>
    </div>
  );
}

export default App;

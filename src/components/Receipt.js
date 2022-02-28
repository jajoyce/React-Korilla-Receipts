import React from "react";

function Receipt({ receipt, togglePaid }) {
  const handleClick = (e) => {
    togglePaid(receipt.id);
  };

  return (
    <div className="receipt">
      <h2>{receipt.person}</h2>
      <h3>{receipt.order.main}</h3>
      <h4>Protein: {receipt.order.protein}</h4>
      <h4>Rice: {receipt.order.rice}</h4>
      <h4>Sauce: {receipt.order.sauce}</h4>
      <h4>Drink: {receipt.order.drink}</h4>
      <h4>Cost: ${receipt.order.cost}</h4>
      <h3 className="click-paid" onClick={handleClick}>
        {receipt.paid ? "PAID" : "NOT PAID"}
      </h3>
      <small>Order # {receipt.id}</small>
    </div>
  );
}

export default Receipt;

import React from "react";

function Receipt({ receipt, togglePaid }) {
  const handleClick = (e) => {
    togglePaid(receipt.id);
  };

  return (
    <div className="receipt">
      <div className="v-middle">
        <h2>{receipt.person}</h2>
        <h3>{receipt.order.main}</h3>
        <small>Order # {receipt.id}</small>
        <hr />
        <h4>
          <small>
            <em>Protein:</em>
          </small>{" "}
          {receipt.order.protein}
        </h4>
        <h4>
          <small>
            <em>Rice:</em>
          </small>{" "}
          {receipt.order.rice ? receipt.order.rice : "None"}
        </h4>
        <h4>
          <small>
            <em>Sauce:</em>
          </small>{" "}
          {receipt.order.sauce ? receipt.order.sauce : "None"}
        </h4>
        <h4>
          <small>
            <em>Drink:</em>
          </small>{" "}
          {receipt.order.drink ? receipt.order.drink : "None"}
        </h4>
        <h4>
          <small>
            <em>Cost:</em>
          </small>{" "}
          ${receipt.order.cost}
        </h4>
        <button className="click-paid" onClick={handleClick}>
          {receipt.paid ? "PAID" : "NOT PAID"}
        </button>
      </div>
    </div>
  );
}

export default Receipt;

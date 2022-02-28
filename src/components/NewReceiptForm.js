import React, { useState } from "react";

function NewReceiptForm({ addReceipt }) {
  const [newReceipt, setNewReceipt] = useState({
    person: "",
    order: {
      main: "",
      protein: "",
      rice: "",
      sauce: "",
      drink: "",
      cost: 0
    },
    paid: false
  });

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    if (key === "person") {
      setNewReceipt((newReceipt) => ({
        ...newReceipt,
        person: value
      }));
    } else {
      setNewReceipt((newReceipt) => ({
        ...newReceipt,
        order: {
          ...newReceipt.order,
          [key]: value
        }
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addReceipt(newReceipt);
  };

  return (
    <div className="new-receipt-form">
      <h2>Add New Order</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="person">Customer Name:</label>
        <br />
        <input
          type="text"
          id="person"
          name="person"
          value={newReceipt.person}
          onChange={handleChange}
          required
        />
        <h4>Order:</h4>
        <label htmlFor="main">Main:</label>
        <br />
        <input
          type="text"
          id="main"
          name="main"
          value={newReceipt.order.main}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="protein">Protein:</label>
        <br />
        <input
          type="text"
          id="protein"
          name="protein"
          value={newReceipt.order.protein}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="rice">Rice:</label>
        <br />
        <input
          type="text"
          id="rice"
          name="rice"
          value={newReceipt.order.rice}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="sauce">Sauce:</label>
        <br />
        <input
          type="text"
          id="sauce"
          name="sauce"
          value={newReceipt.order.sauce}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="drink">Drink:</label>
        <br />
        <input
          type="text"
          id="drink"
          name="drink"
          value={newReceipt.order.drink}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="cost">Cost:</label>
        <br />
        <input
          type="number"
          min="0"
          id="cost"
          name="cost"
          value={newReceipt.order.cost}
          onChange={handleChange}
          required
        />
        <br />
        <input type="submit" value="Submit Order" />
      </form>
    </div>
  );
}

export default NewReceiptForm;

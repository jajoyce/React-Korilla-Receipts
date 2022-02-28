import React, { useEffect, useLayoutEffect, useState } from "react";
import "./styles.css";
import receiptsData from "./receiptData";
import SearchForm from "./components/SearchForm";
import Receipts from "./components/Receipts";
import NewReceiptForm from "./components/NewReceiptForm";
import FilterButtons from "./components/FilterButtons";

export default function App() {
  const [receipts, setReceipts] = useState(receiptsData);
  const [receiptsRendered, setReceiptsRendered] = useState(receipts);
  const [renderCount, setRenderCount] = useState(0);

  useLayoutEffect(() => {
    setReceiptsRendered(() => receipts);
  }, [receipts]);

  useLayoutEffect(() => {
    setReceiptsRendered((receiptsRendered) => receiptsRendered);
  }, [renderCount]);

  const searchReceipts = (searchTerm) => {
    if (searchTerm === "") {
      setReceiptsRendered(() => receipts);
    } else {
      setReceiptsRendered(() =>
        receipts.filter((receipt) =>
          receipt.person.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  };

  const togglePaid = (receiptID) => {
    const index = receipts.findIndex((receipt) => receipt.id === receiptID);
    receipts[index].paid = !receipts[index].paid;
    setReceipts(() => receipts);
    setRenderCount((renderCount) => renderCount + 1);
  };

  const addReceipt = (newReceipt) => {
    const lastReceiptID = receipts[receipts.length - 1].id;
    newReceipt.id = lastReceiptID + 1;
    const newReceiptAssigned = Object.assign({}, newReceipt);
    setReceipts((receipts) => [...receipts, newReceiptAssigned]);
  };

  const filterSortReceipts = (filter) => {
    switch (filter) {
      case "all":
        setReceiptsRendered(() => receipts);
        // setRenderCount((renderCount) => renderCount + 1);
        break;
      case "paid":
        setReceiptsRendered(() => receipts.filter((receipt) => receipt.paid));
        break;
      case "unpaid":
        setReceiptsRendered(() => receipts.filter((receipt) => !receipt.paid));
        break;
      case "alphabet":
        setReceiptsRendered((receiptsRendered) =>
          receiptsRendered.sort((a, b) => {
            let nameA = a.person.toUpperCase();
            let nameB = b.person.toUpperCase();
            if (nameA < nameB) {
              return -1;
            } else if (nameA > nameB) {
              return 1;
            }
            return 0;
          })
        );
        setRenderCount((renderCount) => renderCount + 1);
        break;
      default:
        setReceiptsRendered(receipts);
    }
  };

  return (
    <div className="App">
      <h1>Korilla Receipts</h1>
      <SearchForm searchReceipts={searchReceipts} />
      <FilterButtons filterSortReceipts={filterSortReceipts} />
      <div className="receipts-container">
        <Receipts receipts={receiptsRendered} togglePaid={togglePaid} />
        <NewReceiptForm addReceipt={addReceipt} />
      </div>
    </div>
  );
}

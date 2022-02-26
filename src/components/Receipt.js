import React from "react";

function Receipt({ receipt, key }) {
  return (
    <div>
      <h3>
        {receipt.id}: {receipt.person} -- {receipt.order.main}
      </h3>
    </div>
  );
}

export default Receipt;

import React from "react";

const OrderDetails = ({ params }) => {
  const { id } = params;

  console.log("OrderDetails : ", id);
  return <div>OrderDetails : {id}</div>;
};

export default OrderDetails;

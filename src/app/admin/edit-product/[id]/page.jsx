import React from "react";

const EditProduct = ({ params }) => {
  const { id } = params;

  console.log("EditProduct : ", id);

  return <div>EditProduct : {id}</div>;
};

export default EditProduct;

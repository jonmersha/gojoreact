import React from "react";

const ProductDetail = () => {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/400"
            className="img-fluid"
            alt="Product"
          />
        </div>
        <div className="col-md-6">
          <h1>Fresh Milk</h1>
          <p className="lead">$3.00</p>
          <p>Fresh, organic milk sourced from local farms.</p>
          <h4>Seller Info</h4>
          <p>Local Dairy Co. (4.5/5 ⭐)</p>
          <button className="btn btn-primary">Order Now</button>
          <button className="btn btn-secondary">Chat to Inquire</button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
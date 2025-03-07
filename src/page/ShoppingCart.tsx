import React from "react";

const ShoppingCart = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Shopping Cart</h2>
      <div className="row">
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Fresh Milk</h5>
              <p className="card-text">$3.00</p>
              <input type="number" className="form-control w-25" value="1" min="1" />
              <button className="btn btn-danger mt-2">Remove</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              <p>Subtotal: $3.00</p>
              <p>Delivery: $2.00</p>
              <p>
                <strong>Total: $5.00</strong>
              </p>
              <button className="btn btn-primary w-100">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
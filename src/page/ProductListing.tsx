import React from "react";
import { Link } from "react-router-dom";

const ProductListing = () => {
  return (
    <section className="container my-5">
      <div className="row">
        {/* Sidebar Filters */}
        <div className="col-md-3">
          <h3>Filters</h3>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select className="form-select" id="category">
              <option>All</option>
              <option>Milk & Dairy</option>
              <option>Vegetables</option>
              <option>Fast Foods & Snacks</option>
              <option>Coffee & Tea</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="col-md-9">
          <div className="row">
            {/* Product 1 */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="Product 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Fresh Milk</h5>
                  <p className="card-text">$3.00</p>
                  <Link to="/product-detail" className="btn btn-primary">
                    Order Now
                  </Link>
                  <button className="btn btn-secondary">Inquire</button>
                </div>
              </div>
            </div>
            {/* Add more products here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
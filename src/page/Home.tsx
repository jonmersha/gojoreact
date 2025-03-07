import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1>Welcome to Edible Marketplace</h1>
          <p>Discover delicious homemade products near you.</p>
          <div className="mt-4">
            <input
              type="text"
              className="form-control w-50 mx-auto"
              placeholder="Search for products..."
            />
            <Link to="/product-listing" className="btn btn-light mt-3">
              Browse Products
            </Link>
            <Link to="/seller-registration" className="btn btn-outline-light mt-3">
              Sell Your Products
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row">
          {/* Product 1 */}
          <div className="col-md-4 mb-4">
            <div className="card product-card">
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
      </section>
    </div>
  );
};

export default Home;
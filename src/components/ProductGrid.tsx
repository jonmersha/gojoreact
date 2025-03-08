import React from "react";
import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-3 mb-4">
          <div className="card">
            <img
              src='../img/kolo.png'
              className="card-img-top"
              alt={product.name}
              style={{ height: "150px", width: "100%", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">ብር {product.price.toFixed(2)}</p>
              <Link to={`/product-detail/${product.id}`} className="btn btn-primary">
                አሁን ይዘዙ
              </Link>
              <button className="btn btn-secondary mt-2">ጠይቅ</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
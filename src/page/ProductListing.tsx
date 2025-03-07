import React, { useState } from "react";

const ProductListing = () => {
  // Sample Ethiopian product data with placeholder images
  const products = [
    {
      id: 1,
      name: "ወተት",
      category: "የቤት ምግቦች",
      price: 30.0,
      image: "https://via.placeholder.com/150?text=ወተት",
    },
    {
      id: 2,
      name: "ኡርጎ",
      category: "የቤት ምግቦች",
      price: 50.0,
      image: "https://via.placeholder.com/150?text=ኡርጎ",
    },
    {
      id: 3,
      name: "ክብ",
      category: "የቤት ምግቦች",
      price: 25.0,
      image: "https://via.placeholder.com/150?text=ክብ",
    },
    {
      id: 4,
      name: "ሽሮ",
      category: "የቤት ምግቦች",
      price: 40.0,
      image: "https://via.placeholder.com/150?text=ሽሮ",
    },
    {
      id: 5,
      name: "ቆሎ",
      category: "እህሎች",
      price: 15.0,
      image: "https://via.placeholder.com/150?text=ቆሎ",
    },
    {
      id: 6,
      name: "በርበሬ",
      category: "ቅመሞች",
      price: 20.0,
      image: "https://via.placeholder.com/150?text=በርበሬ",
    },
    {
      id: 7,
      name: "ቡላ",
      category: "እህሎች",
      price: 35.0,
      image: "../img/kolo.png",
    },
    {
      id: 8,
      name: "ቲማቲም",
      category: "አትክልቶች",
      price: 10.0,
      image: "https://via.placeholder.com/150?text=ቲማቲም",
    },
    {
      id: 9,
      name: "ድንች",
      category: "አትክልቶች",
      price: 12.0,
      image: "https://via.placeholder.com/150?text=ድንች",
    },
    {
      id: 10,
      name: "ቡና",
      category: "መጠጥ",
      price: 80.0,
      image: "https://via.placeholder.com/150?text=ቡና",
    },
    {
      id: 11,
      name: "ሻይ",
      category: "መጠጥ",
      price: 25.0,
      image: "https://via.placeholder.com/150?text=ሻይ",
    },
  ];

  // State for selected filters
  const [filters, setFilters] = useState({
    "የቤት ምግቦች": false,
    እህሎች: false,
    ቅመሞች: false,
    አትክልቶች: false,
    መጠጥ: false,
  });

  // Handle filter checkbox changes
  const handleFilterChange = (category) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: !prevFilters[category],
    }));
  };

  // Filter products based on selected categories
  const filteredProducts = products.filter((product) => {
    // If no filters are selected, show all products
    if (Object.values(filters).every((value) => !value)) {
      return true;
    }
    // Otherwise, show products that match the selected filters
    return filters[product.category];
  });

  return (
    <section className="container my-5">
      <div className="row">
        {/* Sidebar Filters */}
        <div className="col-md-3">
          <h3>ማጣሪያዎች</h3>
          <div className="list-group">
            {Object.keys(filters).map((category) => (
              <div key={category} className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={category}
                  checked={filters[category]}
                  onChange={() => handleFilterChange(category)}
                />
                <label className="form-check-label" htmlFor={category}>
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="col-md-9">
          <div className="row">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">ብር {product.price.toFixed(2)}</p>
                    <button className="btn btn-primary">አሁን ይዘዙ</button>
                    <button className="btn btn-secondary">ጠይቅ</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
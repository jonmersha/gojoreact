import React from "react";
import { Link } from "react-router-dom";
import ProductListing from "./ProductListing";
import ProductGrid from "../components/ProductGrid";

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "ወተት",
      category: "የቤት ምግቦች",
      price: 30.0,
      image: "",
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
      name: "ሽሮ",
      category: "የቤት ምግቦች",
      price: 40.0,
      image: "https://via.placeholder.com/150?text=ሽሮ",
    },
    {
      id: 4,
      name: "ቡና",
      category: "መጠጥ",
      price: 80.0,
      image: "https://via.placeholder.com/150?text=ቡና",
    },
  ];

  const products = [
    {
      id: 1,
      name: "ወተት",
      category: "የቤት ምግቦች",
      price: 30.0,
      image: "https://picsum.photos/150/150?random=1",
    },
    {
      id: 2,
      name: "ኡርጎ",
      category: "የቤት ምግቦች",
      price: 50.0,
      image: "https://picsum.photos/150/150?random=2",
    },
    {
      id: 3,
      name: "ክብ",
      category: "የቤት ምግቦች",
      price: 25.0,
      image: "https://picsum.photos/150/150?random=3",
    },
    {
      id: 4,
      name: "ሽሮ",
      category: "የቤት ምግቦች",
      price: 40.0,
      image: "https://picsum.photos/150/150?random=4",
    },
    {
      id: 5,
      name: "ቆሎ",
      category: "እህሎች",
      price: 15.0,
      image: "https://picsum.photos/150/150?random=5",
    },
    {
      id: 6,
      name: "በርበሬ",
      category: "ቅመሞች",
      price: 20.0,
      image: "https://picsum.photos/150/150?random=6",
    },
    {
      id: 7,
      name: "ቡላ",
      category: "እህሎች",
      price: 35.0,
      image: "https://picsum.photos/150/150?random=7",
    },
    {
      id: 8,
      name: "ቲማቲም",
      category: "አትክልቶች",
      price: 10.0,
      image: "https://picsum.photos/150/150?random=8",
    },
    {
      id: 9,
      name: "ድንች",
      category: "አትክልቶች",
      price: 12.0,
      image: "https://picsum.photos/150/150?random=9",
    },
    {
      id: 10,
      name: "ቡና",
      category: "መጠጥ",
      price: 80.0,
      image: "https://picsum.photos/150/150?random=10",
    },
    {
      id: 11,
      name: "ሻይ",
      category: "መጠጥ",
      price: 25.0,
      image: "https://picsum.photos/150/150?random=11",
    },
  ];
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
        <section className="container my-5">
        <h2 className="text-center mb-4">የተለዩ ምርቶች</h2>
        <ProductGrid products={featuredProducts} />
      </section>

      {/* Popular Products */}
      <section className="container my-5">
        <h2 className="text-center mb-4">ተወዳጅ ምርቶች</h2>
        <ProductGrid products={products} />
      </section>


        <ProductListing/>
      </section>
    </div>
  );
};

export default Home;
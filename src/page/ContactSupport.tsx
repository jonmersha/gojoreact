import React from "react";

const ContactSupport = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Contact & Support</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>FAQs</h4>
          <p>
            <strong>Q: How do I place an order?</strong>
          </p>
          <p>A: Browse products, add to cart, and proceed to checkout.</p>
        </div>
        <div className="col-md-6">
          <h4>Contact Us</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea className="form-control" id="message" rows="3" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSupport;
import React from "react";

const InquiryChat = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Chat with Seller</h2>
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-body">
              <div
                className="chat-window"
                style={{
                  height: "300px",
                  overflowY: "scroll",
                  border: "1px solid #ddd",
                  padding: "10px",
                }}
              >
                <p>
                  <strong>Seller:</strong> Hi! How can I help you?
                </p>
                <p>
                  <strong>You:</strong> I have a question about Fresh Milk.
                </p>
              </div>
              <textarea
                className="form-control mt-3"
                placeholder="Type your message..."
              ></textarea>
              <button className="btn btn-primary mt-3">Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryChat;
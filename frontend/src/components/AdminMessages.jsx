import { useState, useEffect } from "react";
import axios from "axios";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const getAllMessages = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/contact");
        setMessages(res.data);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      getAllMessages();
    }
  }, []);

  return (
    <div className="container py-4">

      <h2 className="fw-bold mb-4 text-primary text-center">
        Admin Messages
      </h2>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary"></div>
          <p className="mt-3 fw-semibold text-secondary">
            Loading messages...
          </p>
        </div>
      ) : messages.length === 0 ? (
        <div className="alert alert-info text-center fw-semibold">
          No messages found.
        </div>
      ) : (
        <div className="row g-4">

          {messages.map((msg) => (
            <div key={msg._id} className="col-12 col-md-6 col-lg-4">
              <div className="p-3 rounded-4 shadow-sm bg-white h-100">

                <h5 className="fw-bold text-dark mb-1">
                  {msg.name}
                </h5>
                <p className="text-primary fw-semibold mb-2">
                  {msg.email}
                </p>

                <p className="text-secondary" style={{ minHeight: "60px" }}>
                  {msg.message}
                </p>

                <small className="text-muted d-block mt-2">
                  Sent on: {new Date(msg.createdAt).toLocaleString()}
                </small>
                
              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default AdminMessages;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Books.css";

const Books = () => {
  // Sample data
  const books = [
    { id: 1, title: "Introduction to Programming", author: "John Doe", description: "A beginner’s guide to programming." },
    { id: 2, title: "Data Structures & Algorithms", author: "Jane Smith", description: "Deep dive into DSA concepts." }
  ];

  const pastPapers = [
    { id: 1, title: "Computer Science CAT 2023", description: "CS department past CAT paper." },
    { id: 2, title: "Software Engineering Exam 2022", description: "End of semester exam paper." }
  ];

  const researchPapers = [
    { id: 1, title: "AI in Healthcare", author: "Prof. Kamau", description: "Research on AI applications in medicine." },
    { id: 2, title: "Cybersecurity Trends 2024", author: "Dr. Njeri", description: "Study of evolving cybersecurity threats." }
  ];

  const [reviews, setReviews] = useState({});
  const [modalContent, setModalContent] = useState(null);

  // Handle review submission
  const handleReview = (id, text, category) => {
    if (!text.trim()) return;
    const key = `${category}-${id}`;
    setReviews({
      ...reviews,
      [key]: [...(reviews[key] || []), text]
    });
  };

  // Open modal for reading
  const handleRead = (item, category) => {
    setModalContent({ ...item, category });
  };

  // Render reusable card
  const renderCard = (item, category) => {
    const key = `${category}-${item.id}`;
    return (
      <div key={item.id} className="book-card">
        <h3>{item.title}</h3>
        {item.author && <p><strong>Author:</strong> {item.author}</p>}
        <p>{item.description}</p>

        <div className="book-actions">
          <button onClick={() => handleRead(item, category)}>Read Online</button>
          <button>Borrow</button>
        </div>

        <div className="reviews">
          <h4>Reviews:</h4>
          <ul>
            {(reviews[key] || []).map((rev, idx) => (
              <li key={idx}>{rev}</li>
            ))}
          </ul>
          <textarea
            id={`review-${key}`}
            placeholder="Write your review..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleReview(item.id, e.target.value, category);
                e.target.value = "";
              }
            }}
          />
          <button
            onClick={() => {
              const textArea = document.querySelector(`#review-${key}`);
              if (textArea && textArea.value.trim()) {
                handleReview(item.id, textArea.value, category);
                textArea.value = "";
              }
            }}
          >
            Submit Review
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="books-container">
      {/* ✅ Navigation bar */}
      <nav className="books-nav">
        <Link to="/">🏠 Home</Link>
        <Link to="/borrowedbooks">📖 Borrowed Books</Link>
        <Link to="/help">❓ Help</Link>
      </nav>

      <h2>Library Resources</h2>

      <h3>📚 Books</h3>
      <div className="books-list">{books.map(b => renderCard(b, "book"))}</div>

      <h3>📄 Past Papers</h3>
      <div className="books-list">{pastPapers.map(p => renderCard(p, "past"))}</div>

      <h3>📝 Research Papers</h3>
      <div className="books-list">{researchPapers.map(r => renderCard(r, "research"))}</div>

      {modalContent && (
        <div className="modal">
          <div className="modal-content">
            <h2>{modalContent.title}</h2>
            {modalContent.author && <p><strong>Author:</strong> {modalContent.author}</p>}
            <p>{modalContent.description}</p>
            <button onClick={() => setModalContent(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Books;

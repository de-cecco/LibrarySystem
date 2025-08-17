import React from "react";
import { Link } from "react-router-dom";
import "./Help.css";

const Help = () => {
  return (
    <div className="help-container">
      {/* Navigation bar */}
      <nav className="help-nav">
        <Link to="/">🏠 Home</Link>
        <Link to="/books">📚 Books</Link>
        <Link to="/borrowedbooks">📖 BorrowedBooks</Link>
      </nav>

      <h2>❓ Help & Support</h2>
      <p className="intro-text">
        Welcome to the help centre. Here you’ll find answers to common questions
        and information on how to get assistance.
      </p>

      {/* FAQs */}
      <section className="faq-section">
        <h3>Frequently Asked Questions</h3>
        <div className="faq-item">
          <h4>📖 How do I borrow a book?</h4>
          <p>Go to the Books page, select a book and click the “Borrow” button. The book will appear in your Borrowed Books list.</p>
        </div>
        <div className="faq-item">
          <h4>⏳ How long can I keep a borrowed book?</h4>
          <p>Books can be borrowed for a period of 14 days. You’ll receive a reminder when the due date approaches.</p>
        </div>
        <div className="faq-item">
          <h4>💻 Can I read books online?</h4>
          <p>Yes, select “Read Online” to preview or read the material directly in the library system.</p>
        </div>
        <div className="faq-item">
          <h4>📝 Can I leave reviews?</h4>
          <p>Yes, you can leave reviews under each book, past paper, or research paper to share your thoughts.</p>
        </div>
      </section>

      {/* Contact info */}
      <section className="contact-section">
        <h3>📬 Contact Us</h3>
        <p>If you need further assistance, reach out to us:</p>
        <ul>
          <li>Email: <a href="mailto:library@university.ac.ke">library@dkut.ac.ke</a></li>
          <li>Phone: +254 712 345 678</li>
          <li>Location: Batian Dome, Third Floor</li>
        </ul>
      </section>
    </div>
  );
};

export default Help;

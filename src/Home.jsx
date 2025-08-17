import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const sampleBooks = [
    { id: 1, title: "Introduction to Algorithms", author: "Cormen et al.", img: "https://covers.openlibrary.org/b/id/8275261-L.jpg" },
    { id: 2, title: "Clean Code", author: "Robert C. Martin", img: "https://covers.openlibrary.org/b/id/9649016-L.jpg" },
    { id: 3, title: "Artificial Intelligence", author: "Stuart Russell", img: "https://covers.openlibrary.org/b/id/240726-L.jpg" },
  ];

  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <h1>📚 DeKUT Library</h1>
        <p>
          Welcome to your digital library! Browse, borrow, and read books, past papers and research papers wherever and whenever you want.
        </p>
      </header>

      {/* Services */}
      <section className="services">
        <h2>✨ Services We Offer</h2>
        <ul>
          <li>📖 Borrow and read books online</li>
          <li>📚 Access past papers and research papers</li>
          <li>📝 Submit reviews after reading</li>
          
        </ul>
      </section>

      {/* Auth Options */}
      <section className="auth-section">
        <div className="home-card">
          <h2>🔑 Login</h2>
          <p>Already have an account? Access your library dashboard.</p>
          <Link to="/login" className="btn">Go to Login</Link>
        </div>

        <div className="home-card">
          <h2>📝 Sign Up</h2>
          <p>New here? Create your account and start exploring books.</p>
          <Link to="/signUp" className="btn">Create Account</Link>
        </div>
      </section>

      {/* Book Preview */}
      <section className="preview-books">
        <h2>📚 Preview Some Books</h2>
        <p>(Sign in or sign up to borrow, read, or review books)</p>
        <div className="book-grid">
          {sampleBooks.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.img} alt={book.title} />
              <h3>{book.title}</h3>
              <p>👤 {book.author}</p>
              <button className="disabled-btn" disabled>🔒 Restricted</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>© {new Date().getFullYear()} Library System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;

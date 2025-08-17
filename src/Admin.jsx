import { useState } from "react";
import "./Admin.css";

function Admin() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "1984", author: "George Orwell" },
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
  ]);

  const [borrowed, setBorrowed] = useState([
    { id: 1, book: "1984", borrower: "Alice", borrowDate: "2025-08-01", returnDate: "2025-08-20" },
  ]);

  const [newBook, setNewBook] = useState({ title: "", author: "" });

  // ✅ Add new book
  const handleAddBook = (e) => {
    e.preventDefault();
    if (!newBook.title || !newBook.author) return;
    setBooks([...books, { id: books.length + 1, ...newBook }]);
    setNewBook({ title: "", author: "" });
  };

  // ✅ Remove book
  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // ✅ Remove user
  const handleRemoveUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // ✅ Update borrowed book (extend return date)
  const handleUpdateBorrowed = (id) => {
    setBorrowed(
      borrowed.map((b) =>
        b.id === id ? { ...b, returnDate: "2025-09-01" } : b
      )
    );
  };

  return (
    <div className="admin-container">
      <h1>📖 Librarian Dashboard</h1>

      {/* Add Books */}
      <section className="admin-section">
        <h2>Add New Book</h2>
        <form onSubmit={handleAddBook} className="admin-form">
          <input
            type="text"
            placeholder="Book Title"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Author"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          />
          <button type="submit">➕ Add Book</button>
        </form>
      </section>

      {/* Manage Books */}
      <section className="admin-section">
        <h2>Manage Books</h2>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              {book.title} by {book.author}
              <button onClick={() => handleRemoveBook(book.id)}>❌ Remove</button>
            </li>
          ))}
        </ul>
      </section>

      {/* Manage Users */}
      <section className="admin-section">
        <h2>Manage Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
              <button onClick={() => handleRemoveUser(user.id)}>❌ Remove</button>
            </li>
          ))}
        </ul>
      </section>

      {/* Borrowed Books */}
      <section className="admin-section">
        <h2>Borrowed Books</h2>
        <ul>
          {borrowed.map((b) => (
            <li key={b.id}>
              <strong>{b.book}</strong> borrowed by {b.borrower}  
              📅 {b.borrowDate} → {b.returnDate}
              <button onClick={() => handleUpdateBorrowed(b.id)}>✏️ Extend</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Admin;

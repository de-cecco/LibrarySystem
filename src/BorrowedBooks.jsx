import React from "react";
import "./BorrowedBooks.css";

const BorrowedBooks = () => {
  // Dummy borrowed books data
  const borrowedBooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      borrowDate: "2025-08-01",
      returnDate: "2025-08-21",
      status: "Pending",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      borrowDate: "2025-07-10",
      returnDate: "2025-07-30",
      status: "Returned",
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      borrowDate: "2025-08-05",
      returnDate: "2025-08-25",
      status: "Pending",
    },
  ];

  return (
    <div className="borrowed-container">
      <h1>📚 Borrowed Books</h1>
      <p>Here are the books you have borrowed and their return details.</p>

      <table className="borrowed-table">
        <thead>
          <tr>
            <th>Book Title</th>
            <th>Author</th>
            <th>Borrow Date</th>
            <th>Return Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {borrowedBooks.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.borrowDate}</td>
              <td>{book.returnDate}</td>
              <td className={book.status === "Returned" ? "returned" : "pending"}>
                {book.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowedBooks;

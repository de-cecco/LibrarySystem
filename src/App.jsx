import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import "./Login.css";
import SignUp from "./SignUp.jsx";
import Home from "./Home.jsx";
import ForgotPassword from "./ForgotPassword.jsx";
import Books from "./Books.jsx";
import BorrowedBooks from "./BorrowedBooks.jsx";
import Admin from "./Admin.jsx";
import Help from "./Help.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />} />  {/* ✅ register signup */}
        <Route path="/forgotpassword" element={<ForgotPassword />}/>
        <Route path="/books" element={<Books />}/>
        <Route path="/borrowedbooks" element={<BorrowedBooks />}/>
        <Route path="/admin" element={<Admin />}/>
        <Route path="/help" element={<Help />}/>
      </Routes>
    </Router>
  );
}

export default App;

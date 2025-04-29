import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <nav style={styles.nav}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

const styles = {
  nav: {
    position: "sticky",       // Keeps it stuck to the top
    top: 0,                   // Position at the top
    right: 0,
    display: "flex",
    justifyContent: "flex-end", // Aligns items to the right
    gap: "20px",
    padding: "20px",
    backgroundColor: "white",
    zIndex: 1000,              // Keeps it above other elements
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "18px",
  },
};

export default App;
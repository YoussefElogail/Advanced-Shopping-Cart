import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Store from "./components/Store";
import About from "./components/About";
import ShoppingCartProvider from "./context/ChoppingCartContext";
import "./App.css";
function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <main>
        <Container className="mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </main>
    </ShoppingCartProvider>
  );
}

export default App;

import { Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Router from "./components/Router";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

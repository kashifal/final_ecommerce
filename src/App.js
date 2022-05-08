import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Sidebbar from "./components/Sidebbar";
import Overlay from "./components/Overlay";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Sidebbar />
      <Overlay />
      <Header />
      <Logo />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

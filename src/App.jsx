import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Fav from "./Pages/Fav/Fav";
import Details from "./Pages/Details/Details";

function App() {
  return (
    <>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Fav />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

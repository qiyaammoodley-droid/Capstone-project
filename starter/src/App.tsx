import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./home";
import Details from "./Details";
import Booking from "./Booking";
import Confirmation from "./Confirmation";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/item/:id" element={<Details />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
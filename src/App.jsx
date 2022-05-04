import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage, List, SingleHotel } from "./pages";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<SingleHotel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

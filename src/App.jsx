import { Route, Routes } from "react-router-dom";
import Nevbar from "./components/Nevbar/Nevbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
const App = () => {
  return (
    <div className="app">
      <Nevbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Order" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
};

export default App;

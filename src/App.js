import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import Home from "./components/pages/Home";
import AppNavBar from "./components/utils/Navigation/NavigationBar/AppNavBar";
import Product from './components/pages/Product';
import Events from "./components/pages/Events";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppNavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/events" element={<Events />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import Home from "./components/pages/Home";
import AppNavBar from "./components/utils/Navigation/NavigationBar/AppNavBar";
import Product from './components/pages/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppNavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

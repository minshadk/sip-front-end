import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import Home from "./components/pages/Home";
import AppNavBar from "./components/utils/Navigation/NavigationBar/AppNavBar";
import Products from "./components/pages/Products";
import Events from "./components/pages/Events";
import Login from "./components/pages/Login";
import SingUp from "./components/pages/SingUp";
import SideBar from "./components/utils/Navigation/Sidebar/SideBar";
import ProductAdmin from "./components/pages/Admin/ProductAdmin";
import ServiceAdmin from "./components/pages/Admin/ServiceAdmin";
import ProductOrder from "./components/pages/Admin/ProductOrder";
import ServiceRequestAdmin from "./components/pages/Admin/ServiceRequestAdmin";
import DonareAdmin from "./components/pages/Admin/DonareAdmin";
import BloodDonationAdmin from "./components/pages/Admin/BloodDonationAdmin";
import AddProduct from "./components/pages/Admin/AddProduct";
import SingleProductAdmin from "./components/pages/Admin/SingleProductAdmin";
import Product from "./components/pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/" element={<AppNavBar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/products" element={<Products />} />
          <Route path="/events" element={<Events />} />
        </Route>
        {/* <Route path="/" element={<SideBar />}>
          <Route path="/product" element={<ProductAdmin />} />
          <Route path="/productOrder" element={<ProductOrder />} />
          <Route path="/service" element={<ServiceAdmin />} />
          <Route path="/serviceRequest" element={<ServiceRequestAdmin />} />
          <Route
            path="/bloodDonationRequest"
            element={<BloodDonationAdmin />}
          />
          <Route path="/donare" element={<DonareAdmin />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/singleProductAdmin" element={<SingleProductAdmin />} />

        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

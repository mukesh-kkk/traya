import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
// Import your components here
import Login from "./component/login/Login";
import Items from "./component/items/Items";
import Order from "./component/order/Order";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/shop"
          element={
            <>
              <Navbar />
              <Outlet />
            </>
          }
        >
          <Route path="items" element={<Items />} />
          {/* <Route path="orders" element={<Order />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

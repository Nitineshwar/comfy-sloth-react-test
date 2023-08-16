import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar, Sidebar, Footer } from "./components"

import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
  AuthWrapper,
} from "./pages"

// const Button = styled.button`
//   background: green;
//   color: white;
// `;

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar></Navbar>

        <Sidebar></Sidebar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route
            path="checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          ></Route>

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </AuthWrapper>
  )
}

export default App

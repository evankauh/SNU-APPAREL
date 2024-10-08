import "./styles/index.css"
import { Header } from './components/common/Header'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartPage, Home, Layout, ProductDeatils, Shop, Register, Login, About } from './router';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home/>
          </Layout>
        }
      />
      <Route
        path="/shop"
        element={
          <Layout>
            <Shop/>
          </Layout>
        }
      />
      <Route
        path="/product-details/:productId"
        element={
          <Layout>
            <ProductDeatils/>
          </Layout>
        }
      />
      <Route
        path="/cart"
        element={
          <Layout>
            <CartPage/>
          </Layout>
        }
      />
      <Route
        path="/register"
        element={
          <Layout>
            <Register/>
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <Login/>
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About/>
          </Layout>
        }
      />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
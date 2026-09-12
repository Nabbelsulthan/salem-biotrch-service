// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import About from "./components/About/About";
// import Products from "./components/Products/Products";
// import GrowMeg from "./components/GrowMeg/GrowMeg";

// function App() {

//   return (

//     <>
//       <Navbar />

//       <main>

//         <Hero />

//         <About />

//         <Products />

//       </main>


//     </>

//   );

// }


// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

import ProductDetail from "./components/ProductDetail/ProductDetail";

import Contact from "./components/Contact/Contact";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";


function App() {

  return (

    <BrowserRouter>

      {/* Controls scroll position on route changes */}
      <ScrollToTop />

      <Navbar />

      <main>

        <Routes>

          {/* =========================
              HOME
              ========================= */}

          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Products />
                <Contact />
              </>
            }
          />


          {/* =========================
              PRODUCTS
              ========================= */}

          <Route
            path="/products"
            element={
              <Products />
            }
          />


          {/* =========================
              PRODUCT DETAIL
              ========================= */}

          <Route
            path="/products/:slug"
            element={
              <ProductDetail />
            }
          />

        </Routes>

      </main>

      <Footer />

    </BrowserRouter>

  );
}

export default App;
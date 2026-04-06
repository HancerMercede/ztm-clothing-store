import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./routes/Navigation/NavigationBar";
import Home from "./routes/home/Home";
import Authentication from "./routes/authentication/Authentication";
import Shop from "./routes/Shop/Shop";
import CheckOut from "./routes/CheckOut/CheckOut";
import Contact from "./routes/Contact/Contact";
import { ProductDetails } from "./routes/ProductDetails/ProductDetails";

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<NavigationBar />}>
            <Route index element={<Home />} />
            <Route path="shop/*" element={<Shop />} />
            <Route path="contact" element={<Contact />} />
            <Route path="auth" element={<Authentication />} />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="product/:productId" element={<ProductDetails />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

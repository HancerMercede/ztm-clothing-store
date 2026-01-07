import { Route, Routes } from "react-router-dom";
import NavigationBar from "./routes/Navigation/NavigationBar";
import Home from "./routes/home/Home";
import Authentication from "./routes/authentication/Authentication";
import { Shop } from "./routes/Shop/Shop";
import CheckOut from "./routes/CheckOut/CheckOut";
import { Suspense } from "react";

export const Contact = () => {
  return (
    <div>
      <h2>Contact us</h2>
      <span>These are our socials networks: Instagram, Facebook, X </span>
    </div>
  );
};
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
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

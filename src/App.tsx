import { Route, Routes } from "react-router-dom";
import NavigationBar from "./routes/Navigation/NavigationBar";
import Home from "./routes/home/Home";
import Authentication from "./routes/authentication/Authentication";

const Shop = () => {
  return (
    <>
      <h1>I am a Shop page</h1>
    </>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

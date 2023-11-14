import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import { Login } from "./LogIn";
import AuthContext from "./Contexts/AuthContext";
import useLocalStage from "./Hooks/UseLocalStorage";
import { SignIn } from "./SignIn";
import { Products } from "./SignIn/Products";
import { Product } from "./SignIn/Products/Product";

function App() {
  const [auth, setAuth] = useLocalStage("auth", {
    isAuthed: false,
    token: null,
  });
  return (
    <>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home />} />

          {/* <Route path="/profile" element={<Profile />} /> */}
          {/* <Route path="cart" element={<Cart />} /> */}
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Product />} />
        </Routes>
      </AuthContext.Provider>
    </>
  );
}

export default App;

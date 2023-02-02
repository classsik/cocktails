import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import OrderPage from "./pages/OrderPage";
import { useEffect } from "react";

function App() {
  const [authState, setAuthState] = useState({
    authenticated: false,
  });

  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then((response) => response.json())
      .then((cocktails) => setCocktails(cocktails.drinks));
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Header authState={authState} setAuthState={setAuthState} />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                authState={authState}
                cocktails={cocktails}
                setOrder={setOrder}
                order={order}
              />
            }
          />
          <Route
            path="/register"
            element={<RegisterScreen setAuthState={setAuthState} />}
          />
          <Route
            path="/login"
            element={<LoginScreen setAuthState={setAuthState} />}
          />
          <Route
            path="/order"
            element={<OrderPage order={order} setOrder={setOrder} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

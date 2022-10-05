import React from "react";
import "./App.css";
import "../src/components/Main/Main.css";
import NavBar from "./components/NavBar/navBar";
import Title from "./components/Title/Title";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import Main from "./components/Main/Main";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./Context/CartContext";


function App({ texto }) {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <div className="App" id="fondo">
            <Title greeting={texto} />
            <Main/>
            <Routes>
              <Route
                path="/Products"
                element={
                  <div className="bloque">
                    <ItemListContainer texto="Cuurly's Coffee Shop" />
                  </div>
                }
              />
              <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            </Routes>
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

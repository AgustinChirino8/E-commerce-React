import "./App.css";
import "../src/components/Main/Main.css";
import NavBar from "./components/NavBar/navBar";
import Title from "./components/Title/Title";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import Main from "./components/Main/Main";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App({ texto }) {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="bloque">
                <ItemListContainer texto="Cuurly's Coffee Shop" />
              </div>
            }
          />
          <Route
            path="/categoria"
            element={
              <div className="bloque">
                <ItemListContainer texto="Cuurly's Coffee Shop" />
              </div>
            }
          />
          <Route path="/detalle" element={<ItemDetailContainer />} />
        </Routes>
        <div className="App" id="fondo">
          <Title greeting={texto} />
          <Main />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.css";
import "../src/components/Main/Main.css"
import NavBar from "./components/NavBar/navBar";
import Title from "./components/Title/Title";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import Main from "./components/Main/Main";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App({ texto }) {
  return (
    <>
      <NavBar />
      <div className="App" id="fondo">
        <Title greeting={texto} />
        <Main />
        <div className="bloque">
          <ItemListContainer texto="Cuurly's Coffee Shop" />
        </div>
        <ItemDetailContainer />
      </div>
    </>
  );
}

export default App;

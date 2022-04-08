import "./styles/styles.css";
import { useState } from "react";

// Components
import Header from "./components/header";
import Heros from "./components/heros";
import HeroForm from "./components/heroForm";

function App() {
  const [renders, setRenders] = useState({
    addHeroRender: false,
  });
  return (
    <>
      <Header />
      <main>
        <Heros renders={renders} setRenders={setRenders} />
      </main>
      <HeroForm renders={renders} setRenders={setRenders} />
      <footer>
        <p>Juan Camilo Ramírez Rátiva - 20181020089</p>
      </footer>
    </>
  );
}

export default App;

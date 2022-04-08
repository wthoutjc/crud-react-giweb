import { useEffect, useState } from "react";

// Components
import Hero from "./hero";

//Hooks
import useHeros from "../hooks/useHeros";

const Heros = ({ renders, setRenders }) => {
  const [findHero, setFindHero] = useState("");

  const { heros, getHeros, getHero } = useHeros();

  useEffect(() => {
    getHeros();
  }, [getHeros]);

  const handleSearch = () => {
    const id = findHero;
    getHero({ id }).then((res) => console.log(res));
  };

  return (
    <>
      <section className="search">
        <input
          type="text"
          name="hero"
          id="hero"
          onChange={(e) => setFindHero(e.target.value)}
          placeholder="Search an hero..."
        />
        <button id="search-hero" onClick={handleSearch}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <button
          id="add-button"
          onClick={() => setRenders({ ...renders, addHeroRender: true })}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </section>
      <section className="heros-container" id="heros-container">
        {console.log(heros)}
        {heros?.map((data, i) => (
          <Hero key={i} data={data} />
        ))}
      </section>
    </>
  );
};

export default Heros;

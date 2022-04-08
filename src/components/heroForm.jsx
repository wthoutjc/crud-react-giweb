import { useState, useRef } from "react";

import { normalizeString, requestIDHero } from "../services/fetch";
import { globalURL, putSETTINGS } from "../services/fetchSettings";

const HeroForm = ({ renders, setRenders }) => {
  const { addHeroRender } = renders;

  const addHeroForm = useRef();

  const [heroInfo, setHeroInfo] = useState({
    name: null,
    nombre: null,
    edad: null,
    image: null,
  });

  const handleAddHeroForm = (e) => {
    e.preventDefault();
    console.log(heroInfo);
    const { name, nombre, edad, image } = heroInfo;
    if (name && nombre && edad && image) {
      const nameHero = normalizeString(name);
      requestIDHero(`${globalURL}/${nameHero}.json`, putSETTINGS(heroInfo));
    }
  };
  return (
    <>
      {addHeroRender && (
        <div className="add-hero-form" id="add-hero-form" ref={addHeroForm}>
          <form action="" id="hero-form">
            <div className="form-title">
              <h1>Add a new hero</h1>
              <button
                type="button"
                id="close-button"
                onClick={() => setRenders({ ...renders, addHeroRender: false })}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="input-data">
              <span>Hero's name</span>
              <input
                type="text"
                name="add-name"
                id="add-name"
                onChange={(e) =>
                  setHeroInfo({ ...heroInfo, name: e.target.value })
                }
                placeholder="Type hero's name..."
              />
              <span>Person's name</span>
              <input
                type="text"
                name="add-alter-ego"
                id="add-alter-ego"
                onChange={(e) =>
                  setHeroInfo({ ...heroInfo, nombre: e.target.value })
                }
                placeholder="Type the person's name..."
              />
              <span>Age</span>
              <input
                type="text"
                name="add-age"
                id="add-age"
                onChange={(e) =>
                  setHeroInfo({ ...heroInfo, edad: e.target.value })
                }
                placeholder="Type the age..."
              />
              <span>Link image</span>
              <input
                type="text"
                name="add-image"
                id="add-image"
                onChange={(e) =>
                  setHeroInfo({ ...heroInfo, image: e.target.value })
                }
                placeholder="Link image..."
              />
              <button id="add-hero-button" onClick={handleAddHeroForm}>
                ADD <i className="fa-solid fa-arrow-up-from-bracket"></i>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default HeroForm;

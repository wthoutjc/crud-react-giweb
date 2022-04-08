import { useState } from "react";

//Hooks
import useHeros from "../hooks/useHeros";

const UpdateForm = ({ render, setRenders, data }) => {
  const { editHero } = useHeros();

  const [newInfo, setNewInfo] = useState({
    nombre: data[1].nombre,
    edad: data[1].edad,
    image: data[1].image,
  });

  const handleEdit = (e) => {
    e.preventDefault()
    const id = data[0];
    editHero({ id, newInfo });
  };

  return (
    <>
      {render && (
        <div className="edit-hero-form" id="edit-hero-form">
          <form action="" id="hero-form">
            <div className="form-title">
              <h1 id="hero-id">{data[0]}</h1>
              <button
                type="button"
                id="close-button2"
                onClick={() => setRenders(false)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="input-data">
              <span>Person's name</span>
              <input
                type="text"
                name="name-hero"
                id="name-hero"
                defaultValue={data[1].nombre}
                onChange={(e) =>
                  setNewInfo({ ...newInfo, nombre: e.target.value })
                }
                placeholder="Type the person's name..."
              />
              <span>Age</span>
              <input
                type="text"
                name="age-hero"
                id="age-hero"
                defaultValue={data[1].edad}
                onChange={(e) =>
                  setNewInfo({ ...newInfo, edad: e.target.value })
                }
                placeholder="Type the age..."
              />
              <span>Link image</span>
              <input
                type="text"
                name="image-hero"
                id="image-hero"
                defaultValue={data[1].image}
                onChange={(e) =>
                  setNewInfo({ ...newInfo, image: e.target.value })
                }
                placeholder="Link image..."
              />
              <button id="edit-hero" onClick={handleEdit}>
                <i className="fa-solid fa-arrow-up-from-bracket"></i>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default UpdateForm;

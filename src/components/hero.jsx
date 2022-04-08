import { useRef, useState } from "react";
import { normalizeString } from "../services/fetch";

// Components
import UpdateForm from "../components/updateForm";
import DeleteForm from "../components/deleteForm";

const Hero = ({ data }) => {
  const heroCard = useRef();
  const effect1 = useRef();
  const effect2 = useRef();

  const infoButton = useRef();
  const cardInfo = useRef();

  const id = useRef(`card-${normalizeString(data[0])}`);

  const handleEnterEffect = () => {
    effect1.current.style.display = "block";
    effect2.current.style.display = "flex";
    infoButton.current.style.transform = "translateY(0px)";
    infoButton.current.style.transition = "transform 0.4s";
  };

  const handleLeaveEffect = () => {
    effect1.current.style.display = "none";
    effect2.current.style.display = "none";
    infoButton.current.style.transform = "translateY(40px)";
    infoButton.current.style.transition = "transform 0.6s";
    cardInfo.current.style.transform = "translateY(40px)";
  };

  const handleClicEffect = () => {
    infoButton.current.style.transform = "rotate(180deg)";
    cardInfo.current.style.transform = "translateY(0px)";
    cardInfo.current.style.transition = "transform 0.6s";
  };

  const [renderUpdateHero, setRenderUpdateHero] = useState(false);
  const [renderDeleteHero, setRenderDeleteHero] = useState(false);

  return (
    <>
      <UpdateForm
        render={renderUpdateHero}
        setRenders={setRenderUpdateHero}
        data={data}
      />
      <DeleteForm
        render={renderDeleteHero}
        setRenders={setRenderDeleteHero}
        data={data}
      />
      <div
        className="card"
        ref={heroCard}
        onMouseEnter={handleEnterEffect}
        onMouseLeave={handleLeaveEffect}
      >
        <img src={data[1].image} alt="" />
        <div className="effect1" ref={effect1}></div>
        <div className="effect2" ref={effect2}>
          <h3>Hero's name</h3>
          <p>{data[0]}</p>
          <h3>Person's name</h3>
          <p>{data[1].nombre}</p>
          <h3>Age</h3>
          <p>{data[1].edad}</p>
        </div>
        <button
          className="info-button"
          ref={infoButton}
          onClick={handleClicEffect}
        >
          <i className="fa-solid fa-angle-down"></i>
        </button>
        <div className="card-info" ref={cardInfo}>
          <button
            id={`edit-hero-${id}`}
            onClick={() => setRenderUpdateHero(true)}
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button
            id={`delete-hero-${id}`}
            onClick={() => setRenderDeleteHero(true)}
          >
            <i className="fa-solid fa-delete-left"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;

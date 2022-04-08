//Hooks
import useHeros from "../hooks/useHeros";
const DeleteForm = ({ render, setRenders, data }) => {
  const { deleteHero } = useHeros();

  const handleDelete = () => {
    const id = data[0];
    deleteHero({ id });
  };

  return (
    <>
      {render && (
        <div className="delete-hero-form" id="delete-hero-form">
          <form action="" id="hero-form">
            <div className="form-title">
              <h1 id="delete-id">Delete a {data[0]}</h1>
              <button
                type="button"
                id="close-button3"
                onClick={() => setRenders(false)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="are-sure">
              <h1>¿Are you sure?</h1>
            </div>
            <button
              type="button"
              className="delete-button"
              id="delete-button"
              onClick={handleDelete}
            >
              DELETE <i className="fa-solid fa-trash-can"></i>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default DeleteForm;

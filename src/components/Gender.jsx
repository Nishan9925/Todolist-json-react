import "../App.css";
export const Gender = ( { gender } ) => {
  return (
      <div className="gender-container">
        <button className="btn">
          <img src={gender.image} alt={gender.name} />
        </button>
      </div>
  );
};

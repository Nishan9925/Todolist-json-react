import "../App.css";

export const Search = () => {
  return (
    <div className="form-container">
      <form className="form">
        <input className="form-input" type="text" placeholder="Search... "/>
        <button className="form-btn"type="submit">Search</button>
      </form>
    </div>
  );
};

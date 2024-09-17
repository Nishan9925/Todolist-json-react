import axios from "axios";
import "../App.css";

export const Jewelry = ({ jewelry }) => {
  return (
    <>
      <div className="jewelry-data">
        <img className="jewelry-img"src={jewelry.image} alt={jewelry.name} />
        <div className="jewelry-texts">
          <p className="jewelery-texts-name">{jewelry.name}</p>
          <p className="jewelery-texts-price">{jewelry.price} $</p>
        </div>
      </div>
    </>
  );
};

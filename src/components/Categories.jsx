import { Category } from "./Category";
import { Gender } from "./Gender";
import { SubCategory } from "./SubCategory";

export const Categories = ({ categories, gender }) => {
  return (
    <div className="categories">
      <div className="main-categories-container">
        {gender.map((gender) => (
          <Gender key={gender.id} gender={gender} />
        ))}

        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
        <div className="add-category-btn-container">
          <button className="add-category-btn">+</button>
        </div>
      </div>
      <div>
        <SubCategory />
      </div>
    </div>
  );
};

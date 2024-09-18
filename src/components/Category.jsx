export const Category = ( { category } ) => {
    return(
        <div className="category-container">
            <img className="category-img" src={category.image} alt={category.name} />
            <h3 className="category-name">{category.name}</h3>
        </div>
    )
}
import React from 'react';

const FoodCard = ({item}) => {
    const {name, recipe, image}=item;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="Shoes"
                    class="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Add Product</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
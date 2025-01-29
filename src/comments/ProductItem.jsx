
const ProductItem = ({item}) => {
    const {name, recipe,image, price}= item;
    return (
        <div className="flex justify-between gap-x-5 items-center">
            <img src={image} style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" alt="product image" />
            <div>
                <h3 className="font-semibold text-xl">{name}</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-xl text-[#ff0d6a] font-bold">${price}</p>
        </div>
    );
};

export default ProductItem;
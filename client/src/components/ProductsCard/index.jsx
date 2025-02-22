import { PRODUCT_CARD } from "~/constants";
import { BsCartPlus } from "react-icons/bs"; // Cart icon
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "~/redux/ShopSlice";
import { ToastContainer, toast } from "react-toastify";

const ProductsCard = ({ product }) => {
  const { sale } = PRODUCT_CARD;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/product/${product.title.toLowerCase().split(" ").join("")}`, {
      state: { item: product },
    });
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        _id: product._id,
        title: product.title,
        image: product.image,
        price: product.price,
        quantity: 1,
        description: product.description,
      })
    );
    toast.success(`${product.title} added to cart`);
  };

  return (
    <div className="w-[275px] xs:w-[300px] md:w-[95%] border rounded-lg shadow-md p-4 bg-white relative">
      {/* Product Image */}
      <div
        className="w-full h-80 cursor-pointer overflow-hidden rounded-lg"
        onClick={handleDetails}
      >
        <img
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          src={product.image}
          alt={product.title}
        />
      </div>

      {/* Product Details */}
      <div className="mt-4">
        <h2 className="font-titleFont text-lg font-semibold truncate">
          {product.title}
        </h2>
        <p className="text-sm text-gray-500">{product.category}</p>

        <div className="flex items-center justify-between mt-2">
          {/* Price */}
          <div className="flex items-center gap-2">
            {product?.oldPrice && (
              <p className="line-through text-gray-500">{product.oldPrice}</p>
            )}
            <p className="font-semibold text-lg">{product.price}</p>
          </div>

          {/* Add to Cart Icon Button */}
          <button
            className="bg-black text-white p-3 rounded-full flex items-center justify-center hover:bg-gray-800 transition"
            onClick={handleAddToCart}
            title="Add to Cart"
          >
            <BsCartPlus size={22} />
          </button>
        </div>
      </div>

      {/* Sale Badge */}
      {product?.isNew && (
        <p className="absolute top-2 right-2 bg-black text-white text-xs px-3 py-1 rounded-md">
          {sale}
        </p>
      )}

      <ToastContainer position="top-left" autoClose={3000} theme="dark" />
    </div>
  );
};

export default ProductsCard;

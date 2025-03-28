import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { FaShoppingCart, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const Product = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const _id = props.name;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);

  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: props,
      },
    });
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        _id: props._id,
        name: props.name,
        quantity: 1,
        image: props.image,
        price: props.price,
      })
    );
  };

  return (
    <div className="w-full group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden">
        <img 
          src={props.image} 
          alt={props.name} 
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-4">
           
            <button 
              onClick={handleProductDetails}
              className="bg-white p-3 rounded-full text-black hover:bg-gray-100 transition-colors"
              title="Xem chi tiết"
            >
              <FaEye className="text-xl" />
            </button>
            <button 
              className="bg-white p-3 rounded-full text-black hover:bg-gray-100 transition-colors"
              title="Yêu thích"
            >
              <BsSuitHeartFill className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{props.name}</h3>
        <p className="text-primeColor font-semibold text-base">
          {props.price}
        </p>
      </div>
    </div>
  );
};

export default Product;
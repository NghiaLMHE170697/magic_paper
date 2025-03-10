import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo.name}</h2>
      <p className="text-xl font-semibold">
        {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(productInfo.price)}
      </p>
      <p className="text-base text-gray-600">{productInfo.description}</p>

      <p className="font-normal text-sm border border-orange-300 p-4 rounded-lg shadow-md">
        <span className="bg-yellow-400 text-red-600 font-bold px-3 py-1 rounded-md">
          NHÂN VIÊN TƯ VẤN VÀ BÁO GIÁ
        </span>
        <div className="mt-4 space-y-3">
          <div className="flex items-center gap-2">
            <i className="fas fa-phone-alt text-red-600"></i>
            <span className="text-lg font-semibold text-red-600">0867795405</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fab fa-facebook text-blue-600"></i>
            <a href="https://www.facebook.com/profile.php?id=61565637313680" className="text-blue-600 hover:underline">Facebook</a>
          </div>
          <div className="flex items-center gap-2">
            <i className="fab fa-tiktok text-black"></i>
            <a href="https://www.tiktok.com/@magicpaper1720?is_from_webapp=1&sender_device=pc" className="text-black hover:underline">TikTok</a>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-gray-700"></i>
            <span className="text-gray-700">Thạch Thất, Hoà Lạc, Hà Nội</span>
          </div>
        </div>
      </p>

    </div>
  );
};

export default ProductInfo;

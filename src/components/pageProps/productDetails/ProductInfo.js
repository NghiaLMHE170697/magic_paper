import React, { useState } from "react";
import messengerIcon from "../../../assets/images/messenger.png";

const ProductInfo = ({ productInfo = {} }) => {
  console.log(productInfo);

  const [showFullDescription, setShowFullDescription] = useState(false);
  const maxDescriptionLength = 100; // Giới hạn ký tự mô tả trước khi cắt

  return (
    <div className="flex flex-col">
      <div className="font-normal text-sm border border-orange-300 p-4 rounded-lg shadow-md">
        <div className="my-5">
          {/* Tên sản phẩm */}
          <h2 className="text-4xl font-semibold">{productInfo?.name || "Không có tên"}</h2>

          {/* Giá sản phẩm */}
          <div className="mt-2">
            <p className="text-xl font-semibold">
              {productInfo?.price
                ? productInfo?.price
                : "Giá không có sẵn"}
            </p>
          </div>

          {/* Chất liệu */}
          {productInfo?.material && (
            <div className="mt-2">
              <p className="text-base font-bold">
                Chất liệu: <span className="text-base font-normal">{productInfo.material}</span>
              </p>
            </div>
          )}

          {/* Bảo hành */}
          {productInfo?.warranty && (
            <div className="mt-2">
              <p className="text-base font-bold">
                Bảo hành: <span className="text-base font-normal">{productInfo.warranty}</span>
              </p>
            </div>
          )}

          {/* Mô tả sản phẩm */}
          <div className="mt-2">
            <p className="text-base font-normal">
              {productInfo?.description
                ? showFullDescription
                  ? productInfo.description
                  : productInfo.description.slice(0, maxDescriptionLength) + "..."
                : "Không có mô tả"}
            </p>
            {productInfo?.description?.length > maxDescriptionLength && (
              <button
                className="text-blue-500 hover:underline text-sm mt-1"
                onClick={() => setShowFullDescription(!showFullDescription)}
              >
                {showFullDescription ? "Thu gọn" : "Xem thêm"}
              </button>
            )}
          </div>

          {/* Nút Liên hệ */}
          <div className="mt-4">
            <a
              href="http://m.me/61565637313680"
              className="flex items-center justify-center bg-pink-300 text-white text-lg font-bodyFont hover:bg-pink-500 duration-300 font-bold rounded-lg p-4 space-x-2"
            >
              <img src={messengerIcon} alt="Messenger" className="w-6 h-6" />
              <span>Liên hệ ngay để được tư vấn</span>
            </a>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ProductInfo;

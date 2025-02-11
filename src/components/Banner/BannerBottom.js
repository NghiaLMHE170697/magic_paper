import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { CgRedo } from "react-icons/cg";

const BannerBottom = () => {
  return (
    <div>      <h2 className="flex justify-center text-5xl text-red-800 font-semibold">Hãy chọn chúng tôi vì</h2>
       <div className="w-full bg-white border-b-[1px] py-4 border-b-gray-200 px-4">

      <div className="max-w-container mx-auto h-20 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="font-bold font-titleFont w-6 text-center">2</span>
          <p className="text-lightText text-base">Thiết kế đẹp mắt</p>
        </div>
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-xl text-center w-6 ml-1">
            <MdLocalShipping />
          </span>
          <p className="text-lightText text-base">Giao hàng tận nơi </p>
        </div>
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-2xl text-center w-6">
            <CgRedo />
          </span>
          <p className="text-lightText text-base">Tận tình và chu đáo</p>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default BannerBottom;

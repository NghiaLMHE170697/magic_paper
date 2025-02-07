import React, { useState } from "react";
// import { FaPlus } from "react-icons/fa";
import { ImPlus } from "react-icons/im";
import NavTitle from "./NavTitle";
import categoriesData from "../../../../data/database.json";

const Category = () => {
  const [showSubCatOne, setShowSubCatOne] = useState(false);
  const categories = categoriesData.categories;

  return (
    <div className="w-full">
      <NavTitle title="Sắp xếp theo phân loại" icons={false} />
      <div>
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {categories.map(({ id, name }) => (
            <li
              key={id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center justify-between"
            >
              {name}
              <span
                onClick={() => setShowSubCatOne(!showSubCatOne)}
                className="text-[10px] lg:text-xs cursor-pointer text-gray-400 hover:text-primeColor duration-300"
              >
                <ImPlus />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;

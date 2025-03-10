import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = ({data}) => {
  const firstFiveProducts = data.products.slice(11, 15);
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
      {firstFiveProducts.map((product) => (
          <div className="px-2" key={product._id}>
           
            <Product
              _id={product._id}
              image={product.image} // Sửa từ `img` thành `image`
              name={product.name} // Sửa từ `productName` thành `name`
              price={product.price} // Bỏ dấu `đ` vì bạn đã định dạng tiền tệ trong `Product`
              color="Mixed"
              badge={true}
              des={product.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;

import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Brand Story */}
            <div className="space-y-8">
              <div className="border-l-4 border-black pl-6">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  MAGIC PAPER
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Magic Paper ra đời mong muốn nhằm mang lại những thiết kế đẹp,
                  những dấu ấn mang tính cá nhân ở mỗi hình in mà còn ở những
                  thiết kế theo từng yêu cầu của khách hàng. Những thiết kế bắt
                  mắt. sáng tạo và vô cùng cuốn hút ở mỗi sản phẩm chúng mình
                  tạo ra.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Triết Lý Kinh Doanh
                </h3>
                <p className="text-gray-600 leading-loose">
                  Magic Paper luôn hướng đến sự sáng tạo, hiện đại và tiện lợi,
                  mang đến các sản phẩm decal độc đáo, dễ sử dụng, giúp khách
                  hàng thể hiện phong cách một cách nhanh chóng. Chúng tôi cam
                  kết chất lượng và độ tin cậy, đảm bảo từng sản phẩm đều đạt
                  tiêu chuẩn cao, bền đẹp và an toàn cho người dùng. Hơn hết,
                  Magic Paper không chỉ cung cấp sản phẩm, mà còn tập trung vào
                  trải nghiệm khách hàng, mang đến dịch vụ tận tâm, hỗ trợ linh
                  hoạt và giải pháp trang trí tối ưu, giúp khách hàng biến ý
                  tưởng thành hiện thực.
                </p>
              </div>
            </div>

            {/* Right Side - Vision and Values */}
            <div className="space-y-8">
              <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Tầm Nhìn
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Magic Paper hướng đến trở thành nền tảng in ấn trực tuyến hàng
                  đầu, giúp mọi cá nhân và doanh nghiệp tiếp cận dịch vụ in ấn
                  chất lượng cao, sáng tạo và tiện lợi, từ đó nâng tầm trải
                  nghiệm thiết kế và in ấn trong thời đại số.
                </p>
              </div>

              <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Sứ Mệnh
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Sứ mệnh của Magic Paper là mang đến giải pháp thiết kế và in
                  ấn trực tuyến nhanh chóng, tiện lợi với chất lượng cao, giúp
                  cá nhân và doanh nghiệp dễ dàng sở hữu các ấn phẩm chuyên
                  nghiệp, sáng tạo. Chúng tôi cam kết tối ưu trải nghiệm khách
                  hàng thông qua dịch vụ linh hoạt, giá cả hợp lý và công nghệ
                  in tiên tiến, góp phần nâng cao giá trị thương hiệu cho đối
                  tác.
                </p>
              </div>

              <div className="bg-black text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Giá Trị Cốt Lõi</h3>
                <ul className="space-y-3 list-disc pl-5">
                  <li>
                    Trang trí linh hoạt: Dễ dàng làm đẹp không gian, sản phẩm
                    nhanh chóng.
                  </li>
                  <li>
                    Mẫu mã đa dạng: Nhiều màu sắc, kiểu dáng thể hiện cá tính.
                  </li>
                  <li>
                    Dễ sử dụng: Có keo sẵn, chỉ cần bóc và dán, không cần dụng
                    cụ.
                  </li>
                  <li>
                    Thay đổi dễ dàng: Gỡ bỏ mà không làm hỏng bề mặt (với decal
                    tốt).
                  </li>
                  <li>
                    Giá thành rẻ: Tiết kiệm chi phí nhưng vẫn đảm bảo thẩm mỹ.
                  </li>
                  <li>
                    In theo yêu cầu: Thiết kế riêng theo sở thích, thương hiệu.
                  </li>
                  <li>
                    Thân thiện môi trường: Một số loại dùng mực in và vật liệu
                    tái chế.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Link to="/shop">
              <button className="px-10 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300 text-lg font-medium">
                Khám Phá Sản Phẩm
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';

export default function DetailDesc({ product }) {
   console.log(product?.long_desc);
   return (
      <>
         <div className="detail__desc">
            <div className="detail__desc__title">
               <button>description</button>
               <h2>product description</h2>
            </div>

            <div className="detail__desc__content ">
               <p>{product?.long_desc}</p>
            </div>
         </div>
      </>
   );
}

/*

  'Tính năng nổi bật \n' +
    '\n' +
    '• Màn hình Super Retina XDR 6.7 inch với ProMotion cho cảm giác nhanh nhạy hơn (3)\n' +
    '\n' +
    '• Chế độ Điện Ảnh làm tăng thêm độ sâu trường ảnh nông và tự động thay đổi tiêu cự trong video\n' +
    '\n' +
    '• Hệ thống camera chuyên nghiệp Telephoto, Wide và Ultra Wide 12MP; LiDAR Scanner; phạm vi thu phóng quang học 6x; chụp ảnh macro; Phong Cách Nhiếp Ảnh, video ProRes (4), HDR thông minh thế hệ 4, chế độ Ban Đêm, Apple ProRAW, khả năng quay video HDR Dolby Vision 4K\n' +
    '\n' +
    '• Camera trước TrueDepth 12MP với chế độ Ban Đêm và khả năng quay video HDR Dolby Vision 4K\n' +
    '\n' +
    '• Chip A15 Bionic cho hiệu năng thần tốc\n' +
    '\n' +
    '• Thời gian xem video lên đến 28 giờ, thời lượng pin dài nhất từng có trên iPhone (2)\n' +
    '\n' +
    '• Thiết kế bền bỉ với Ceramic Shield\n' +
    '\n' +
    '• Khả năng chống nước đạt chuẩn IP68 đứng đầu thị trường (5)\n' +
    '\n' +
    '• Mạng 5G cho tốc độ tải xuống siêu nhanh, xem video và nghe nhạc trực tuyến chất lượng cao (1)\n' +
    '\n' +
    '• iOS 15 tích hợp nhiều tính năng mới cho phép bạn làm được nhiều việc hơn bao giờ hết với iPhone (6)..'
*/

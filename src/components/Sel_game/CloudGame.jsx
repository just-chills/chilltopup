import React, { useState } from 'react';

const Cloud = ({ image, name, topUpLink, description }) => {
  const [liked, setLiked] = useState(false);
  const [showEffect, setShowEffect] = useState(false);
  const [expanded, setExpanded] = useState(false); // ✅ เพิ่ม state สำหรับขยายรายละเอียด

  // ✅ เช็คว่า image นี้ควร resize หรือไม่
  const zoomImages = [];

  const shouldZoom = zoomImages.includes(image);

  const handleLike = (e) => {
    e.stopPropagation(); // ป้องกันไม่ให้คลิกปุ่มแล้วไปทั้ง card
    setLiked(!liked);
    setShowEffect(true);
    setTimeout(() => setShowEffect(false), 500); // หายไปหลัง 0.5 วิ
  };

  const handleTopUpClick = (e) => {
    e.stopPropagation(); // ป้องกันไม่ให้คลิกปุ่มแล้วไปทั้ง card
    window.location.href = topUpLink;
  };

  const toggleExpand = (e) => {
    e.stopPropagation(); // ป้องกันไม่ให้คลิกแล้วไปทั้ง card
    setExpanded(!expanded);
  };

  return (
<div
    className={`group bg-secondary shadow-lg rounded-lg overflow-hidden flex flex-col justify-between relative cursor-pointer 
                border-2 border-transparent hover:border-primary transition-all duration-300
                ${expanded ? 'h-auto' : 'h-auto'} w-[24rem] self-start p-2 m-4`}
    >
      {/* รูปเกม */}
      <div className='w-full h-full overflow-hidden relative'>
        <img
          src={image}
          alt="preview"
          className={`w-full h-full object-cover transition-transform duration-200 origin-center will-change-transform ${
            shouldZoom ? 'scale-110' : 'scale-100'
          }`}
        />
      </div>

      {/* เนื้อหา */}
      <div className="flex flex-col p-3 space-y-4">
        <h2 className="text-lg font-semibold text-white text-center">{name}</h2>

        <button
          onClick={handleTopUpClick}
          className="mt-2 w-full bg-secondary border-2 border-primary text-white py-2 rounded 
                     transition duration-300 
                     group-hover:bg-primary group-hover:text-black group-hover:border-primary"
        >
          สมัคร
        </button>

        <button
          onClick={toggleExpand}
          className="text-sm text-white hover:text-white transition"
        >
          {expanded ? 'ซ่อนรายละเอียด-' : 'ดูรายละเอียด+'}
        </button>

        {expanded && (
          <div className="bg-black bg-opacity-20 text-white text-sm p-3 rounded mt-4 space-y-3 transition-all duration-300">
            {description || 'รายละเอียดเกมนี้ยังไม่มีข้อมูลเพิ่มเติม'}
          </div>
        )}
      </div>
    </div>
  );
};

const Clouds = [
  {
    id: 1,
    name: 'แพ็กเกจ 149 บาท/เดือน',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/1665370477824.jpeg',
    topUpLink: '/topup/rov',
    description: (
      <div className="pl-5 space-y-2 text-white text-sm">
        <p>บริการเกม พีซี และ คอนโซล รูปแบบคลาวด์เกม บนสมาร์ทโฟน สนุกได้ทุกที่ทุกเวลา สัมผัสกับเกมชั้นนำมากว่า 500+ เกม เฉพาะลูกค้าเอไอเอสเท่านั้น </p>
        <p>เงื่อนไข</p>
        <p>
          <a 
              href="https://www.ais.th/5G/CloudGame/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500"
            >
            https://www.ais.th/5G/CloudGame/
          </a>
        </p>
        <p>(ค่าบริการไม่รวมภาษีมูลค่าเพิ่ม)</p>
      </div>
    ),
  },
];

const CloudGameList = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 pt-6">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 auto-rows-min justify-center">
        {Clouds.map((item) => (
          <Cloud
            key={item.id}
            image={item.image}
            name={item.name}
            topUpLink={item.topUpLink}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CloudGameList;
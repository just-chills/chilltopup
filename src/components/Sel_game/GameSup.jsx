import React, { useState } from 'react';

const Sup = ({ image, name, topUpLink, description }) => {
  const [liked, setLiked] = useState(false);
  const [showEffect, setShowEffect] = useState(false);
  const [expanded, setExpanded] = useState(false); // ✅ เพิ่ม state สำหรับขยายรายละเอียด

  // ✅ เช็คว่า image นี้ควร resize หรือไม่
  const zoomImages = [
    'https://gameon.ais.co.th/api/cms-data-service/product/ca16707f-f566-4673-bbe1-60d807707299-ign-Ragnarok-X-New-Generation-image-640x450.png',
    'https://gameon.ais.co.th/api/cms-data-service/product/88de6a83-82ce-4701-bb1d-665b16ee3ab5-ign-Cookie%205.jpg',
    '',
  ];

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

const Sups = [
  {
    id: 1,
    name: 'บริการ GeForce NOW x AIS',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/16f7a30a-96ec-4efd-9584-904e3582e9d9-ign-GFNxAIS_NewEra_LINE-AIS_FB-AIS_X_1040x1040TH.jpg',
    topUpLink: '/topup/valorant',
    description: (
      <>
      <p>ลูกค้า AIS สามารถใช้บริการผ่านเบอร์มือถือทั้งระบบรายเดือน/เติมเงิน และเบอร์อินเตอร์เน็ต AIS Fibre3 เริ่มต้นเพียง 219 บาท / เดือน</p>
      <div className="flex justify-center items-center">
          <img src="https://gameon.ais.co.th/api/cms-data-service//wysiwyg-assets/d01b0281-1c63-4756-8f4b-164a3dc7e42b-ign-Screenshot%202568-06-16%20at%2017.32.21.png" alt="AIS 5G" className="h-40" />
          <img src="https://gameon.ais.co.th/api/cms-data-service//wysiwyg-assets/dc942eac-8411-4c6d-ab47-d3bbc55b0a32-ign-aisfibre3.jpg" alt="AIS Fibre3" className="h-40" />
        </div>
      <div className='flex justify-center mt-4'>
        <img 
          src="https://gameon.ais.co.th/api/cms-data-service//wysiwyg-assets/285b9794-bc99-43ad-8698-6f5feee8bfd3-ign-GFNxAIS_Wukong_1040x1040TH.jpg" 
          alt="QR Code" 
          className="w-full h-auto rounded-lg" 
        />
      </div>
      <p>สมัครผ่าน AIS วันนี้รับฟรี GeForce NOW แพ็ค Ultimate ราคา 649 บาท เล่นได้ 4 ชั่วโมง!</p>
      <img
        src="https://gameon.ais.co.th/api/cms-data-service//wysiwyg-assets/391ae1ff-06c7-4158-8f3d-00574242fb64-ign-GeForce%20NOW%20PR%20AIS%20Update2-08.jpg"
        alt="Black Myth Wukong"
        className="w-full h-auto rounded-lg mt-4"
      />
      </>
    ),
  },
  {
    id: 2,
    name: 'ค่าบริการ 3 บาท/วัน (เฉพาะลูกค้า AIS)',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/a7bbd5a0-0e3b-419c-acd0-6df7f52352f6-ign-MIXDesign_23067B2CUA-S_AIS-TH-Banner_312x254%20V3.jpg',
    topUpLink: '/topup/rov',
    description: (
      <ul className="list-disc pl-5 space-y-2 text-white text-sm">
        <li>บริการเกมบุฟเฟ่ต์และวีดีโอ เหมาจ่าย มีเกมให้เล่นมากกว่า 1,800 เกม ครอบคลุมทุกแนวตั้งแต่เกมแอ็คชัน, ผจญภัย, ตะลุยด่าน, พัซเซิล แข่งรถ และวางแผน ที่พร้อมให้คุณได้เล่นแบบไม่จำกัด</li>
        <li>สัมผัสประสบการณ์การเล่นเกมแบบดั้งเดิม เน้นการเล่นเกมแบบสบายๆ ไม่มีการเติมเงิน ไม่มีโฆษณา ไม่ถูกขัดจังหวะ พร้อมรับชมวีดีโอสนุกๆ หลากหลายประเภท ทั้งกีฬา, ไลฟ์สไตล์, สัตว์เลี้ยงน่ารัก และอีกมากมาย</li>
        <li>รวมทั้งการ์ตูนที่ชื่นชอบ อย่าง Paw Patrol, The Simpsons, Peppa Pig และ The Smurfs</li>
      </ul>
    ),
  },
];

const GameSupList = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 pt-6">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 auto-rows-min justify-center">
        {Sups.map((item) => (
          <Sup
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

export default GameSupList;
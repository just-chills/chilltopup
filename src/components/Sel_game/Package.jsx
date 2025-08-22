import React, { useState } from 'react';

const Pack = ({ image, name, topUpLink, description, infoBlock, index }) => {
  const [liked, setLiked] = useState(false);
  const [showEffect, setShowEffect] = useState(false);
  const [expanded, setExpanded] = useState(false); // ✅ เพิ่ม state สำหรับขยายรายละเอียด

  // ✅ เช็คว่า image นี้ควร resize หรือไม่
  const zoomImages = [];
  const shouldZoom = zoomImages.includes(image);

  // ✅ ประกาศ isFirst ที่คุณใช้ในปุ่มสมัคร
  const isFirst = index === 1;


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
      className={`group bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between relative cursor-pointer 
                  border-2 border-transparent hover:border-primary transition-all duration-300
                  ${expanded ? 'h-auto' : 'h-auto'} w-[24rem] self-start p-2 m-4`}
    >
      {/* ✅ ข้อความด้านบน */}
      <div className="mb-4">
        <h3 className="text-white text-xl font-bold">
          {name}
        </h3>
      </div>

      {/* ✅ รูปภาพ */}
      <img 
        src={image}  
        alt="Game Booster" 
        className="w-full h-full object-cover rounded-md" 
      />

      {/* ✅ กล่องข้อความ infoBlock ใต้รูป */}
      <div className="bg-black bg-opacity-20 rounded-md p-3 mt-4 space-y-2">
        {infoBlock.map((text, index) => (
          <React.Fragment key={index}>
            <p className="text-center text-white text-base">{text}</p>
            {index < infoBlock.length - 1 && (
              <div className="flex justify-center">
                <hr className="w-2/3 border-t border-white opacity-30" />
              </div>
            )}
          </React.Fragment>
        ))}
      {/* ✅ เส้นคั่นด้านล่างสุด */}
        <div className="flex justify-center">
          <hr className="w-2/3 border-t border-white opacity-30" />
        </div>
      </div>
      
      {/* ปุ่มสมัคร */}
      <button
        onClick={handleTopUpClick}
        className="w-full bg-secondary border-2 border-primary text-white py-2 rounded 
                  transition duration-300 
                  group-hover:bg-primary group-hover:text-black group-hover:border-primary mt-4"
      >
        {isFirst ? '*777*7772#' : 'สมัคร'}
      </button>

      {/* ปุ่มดูรายละเอียด */}
      <br />
      <button
        onClick={toggleExpand}
        className="text-sm text-white underline hover:text-primary transition"
      >
        {expanded ? 'ซ่อนรายละเอียด-' : 'ดูรายละเอียด+'}
      </button>

      {/* รายละเอียดเพิ่มเติม */}
      {expanded && (
        <div className="bg-black bg-opacity-20 text-white text-base p-3 rounded mt-4 space-y-3 transition-all duration-300">
          {description || 'รายละเอียดเกมนี้ยังไม่มีข้อมูลเพิ่มเติม'}
        </div>
      )}
      <br />
    </div>
  );
};

const Packs = [
  {
    id: 1,
    name: 'แพ็คเสริมเน็ต 5G Game Mode 5GB Max Speed',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/21008c61-930f-48b3-a225-cd5ce7a27ed0-ign-AW_Game-Booster_1040x1040.jpg',
    topUpLink: '/topup/valorant',
    infoBlock: [
      'เน็ต 5GB เต็มสปีด สำหรับเล่นเกม 3 ชั่วโมง',
      'นาน 0 วัน 49 บาท'
    ],
    description: (
      <>
      <div className="pl-5 space-y-2 text-white">
        <p>เน้นเน็ตเสถียร เล่นเกมบนมือถือ ลื่นไหล ไม่กระตุก</p>
        <p>สำหรับการเล่นเกมบนมือถือที่ต้องการความเร็วเน็ต 5G ที่เสถียร ต่อเนื่อง ลื่นไหล ไม่สะดุด แม้อยู่ในพื้นที่ที่มีการใช้งานหนาแน่น</p>
        <p>โดยสามารถเล่นเกมสุดฮิตได้เพียบ ถึง 13 เกม ดังนี้</p>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 justify-items-center items-center px-2">
        <img src="https://www.ais.th/content/dam/ais/consumer/content/new-myais/mynetwork-mobile/game-logo/solo.png/jcr%3acontent/renditions/cq5dam.web.1280.1280.png?ch_ck=1723091516000" alt="Solo" />
        <img src="https://www.ais.th/content/dam/ais/consumer/content/new-myais/mynetwork-mobile/game-logo/Ragnarok-M-Eternal-Love).png/jcr%3acontent/renditions/cq5dam.web.1280.1280.png" alt="Ragnarok-M-Eternal-Love" />
        <img src="https://www.ais.th/content/dam/ais/consumer/content/new-myais/mynetwork-mobile/game-logo/PUBG-Mobile.png/jcr%3acontent/renditions/cq5dam.web.1280.1280.png" alt="PUBG-Mobile" />
        <img src="https://www.ais.th/content/dam/ais/consumer/content/new-myais/mynetwork-mobile/game-logo/Pok%c3%a9mon-Unite.png/jcr%3acontent/renditions/cq5dam.web.1280.1280.png" alt="Pokémon-Unite" />
        <img src="https://www.ais.th/content/dam/ais/consumer/content/new-myais/mynetwork-mobile/game-logo/Mobile-Legends-Bang-Bang.png/jcr%3acontent/renditions/cq5dam.web.1280.1280.png" alt="Mobile-Legends-Bang-Bang" />
        <img src="https://www.ais.th/content/dam/ais/consumer/content/new-myais/mynetwork-mobile/game-logo/Speed-Drifters.png/jcr%3acontent/renditions/cq5dam.web.1280.1280.png" alt="Speed-Drifters" />
        <img src="https://www.ais.th/content/dam/ais/consumer/content/new-myais/mynetwork-mobile/game-logo/ROV.png/jcr%3acontent/renditions/cq5dam.web.1280.1280.png" alt="ROV" />
        <img src="https://www.ais.th/content/dam/ais/consumer/content/new-myais/mynetwork-mobile/game-logo/League-of-Legends-Wild-Rift.png/jcr%3acontent/renditions/cq5dam.web.1280.1280.png" alt="League-of-Legends-Wild-Rift" />
        <img src="https://www.ais.th/content/dam/ais/consumer/content/new-myais/mynetwork-mobile/game-logo/Free-Fire.png/jcr%3acontent/renditions/cq5dam.web.1280.1280.png" alt="Free-Fire" />
        <img src="https://www.ais.th/content/dam/ais/consumer/content/new-myais/mynetwork-mobile/game-logo/FIFA-Mobile.png/jcr%3acontent/renditions/cq5dam.web.1280.1280.png" alt="FIFA-Mobile" />
        <img src="https://www.ais.th/content/dam/ais/consumer/content/new-myais/mynetwork-mobile/game-logo/Call-of-Duty-Mobile.png/jcr%3acontent/renditions/cq5dam.web.1280.1280.png" alt="Call-of-Duty-Mobile" />
        <img src="https://www.ais.th/content/dam/ais/consumer/content/new-myais/mynetwork-mobile/game-logo/Ragnarok-X-Next-Generation.png/jcr%3acontent/renditions/cq5dam.web.1280.1280.png" alt="Ragnarok-X-Next-Generation" />
        <img src="https://www.ais.th/content/dam/ais/consumer/content/new-myais/mynetwork-mobile/game-logo/Ragnarok-Origin.png/jcr%3acontent/renditions/cq5dam.web.1280.1280.png" alt="Ragnarok-Origin" />
      </div>
      </>
    ),
  },
    {
    id: 2,
    name: 'เหมา เหมา Games 39 บาท',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/47dfcdc1-0642-4ca3-8589-10a7126891dd-ign-image%20(4).jpeg',
    topUpLink: '/topup/valorant',
    infoBlock: [
      'เน็ตไม่จำกัดเล่น Mobile Legends Bang Bang(MLBB), ROV, Free Fire, PUBGM',
      'Internet ไม่จำกัด ความเร็วสูงสุด 20 Mbps',
      'แถม Mobile Legends Diamonds x20',
      'นาน 1 วัน 39 บาท'
    ],
    description: (
      <>
      <div className="pl-5 space-y-2 text-white">
        <p>แพ็กเสริมเน็ตไม่จำกัดเล่น 3 เกมดัง Mobile legends Bang Bang และ ROV, Free Fire, PUBGM ที่ความเร็ว Internet ไม่จำกัด ความเร็วสูงสุด 20 Mbps แถมฟรี Mobile Legends Diamonds x20</p>
      </div>
      <ol className="list-decimal pl-5 space-y-2 text-white text-sm">
        <li>
          อัตราค่าบริการที่กำหนดเป็นอัตราที่ไม่รวมภาษีมูลค่าเพิ่ม
        </li>
        <li>
          สิทธิ์การใช้งานแพ็กเกจเสริม สามารถใช้งานได้ หลังจากได้รับ SMS ยืนยัน
        </li>
        <li>
          ใช้งานอินเทอร์เน็ตไม่จำกัด ที่ความเร็ว 20Mbps สำหรับเล่นแอปเกม Mobile Legend Bang Bang (MLBB), ROV, FREE FIRE, PUBG Mobile
        </li>
        <li>
          คุณจะได้รับ SMS แจ้งให้กด USSD เพื่อรับโค้ดไอเทมภายใน 48 ชม.หลังจากสมัครแพ็กเกจสำเร็จ 
          <span style={{color: 'red'}}>(กดรับโค้ดไอเทมภายในเวลา 23.59 น. ของวันที่ได้รับ SMS)</span>
        </li>
        <li>
          จำกัดสิทธิ์กดรับโค้ดไอเทม 1 ครั้ง ต่อวัน
        </li>
        <li>
          คุณจะได้รับ SMS แจ้งโค้ดไอเทมทันทีหลังกด USSD รับโค้ดไอเทม
        </li>
        <li>
          คุณสามารถแลกโค้ดไอเทม ภายในวันที่ 31 ธ.ค.2567
        </li>
        <li>
          แลกโค้ดไอเทม เข้าไปที่ 
          <a href="http://www.mobilelegends.com/redeem" className='text-blue-500'>http://www.mobilelegends.com/redeem</a>
        </li>
        <li>
          แอปพลิเคชั่นรองรับระบบปฏิบัติการ Android 4.1 และ iOS 9.0 ขึ้นไป
        </li>
        <li>
          สิทธิ์การใช้งานและอัตราค่าบริการที่กำหนด สำหรับการใช้งานภายในประเทศ และการใช้งานปกติเท่านั้น
        </li>
      </ol>
      </>
    ),
  },
  {
    id: 3,
    name: 'เหมา เหมา Games 109 บาท',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/38211874-6b11-4cd4-9a5a-b4ec4458ce41-ign-image%20(5).jpeg',
    topUpLink: '/topup/valorant',
    infoBlock: [
      'เน็ตไม่จำกัดเล่น Mobile Legends Bang Bang(MLBB), ROV, Free Fire, PUBGM',
      'Internet ไม่จำกัด ความเร็วสูงสุด 20 Mbps',
      'แถม Mobile Legends Diamonds x100',
      'นาน7 วัน 109 บาท'
    ],
    description: (
      <>
      <div className="pl-5 space-y-2 text-white">
        <p>แพ็กเสริมเน็ตไม่จำกัดเล่น 3 เกมดัง Mobile legends Bang Bang และ ROV, Free Fire, PUBGM ที่ความเร็ว Internet ไม่จำกัด ความเร็วสูงสุด 20 Mbps แถมฟรี Mobile Legends Diamonds x100</p>
      </div>
      <ol className="list-decimal pl-5 space-y-2 text-white text-sm">
        <li>
          อัตราค่าบริการที่กำหนดเป็นอัตราที่ไม่รวมภาษีมูลค่าเพิ่ม
        </li>
        <li>
          สิทธิ์การใช้งานแพ็กเกจเสริม สามารถใช้งานได้ หลังจากได้รับ SMS ยืนยัน
        </li>
        <li>
          ใช้งานอินเทอร์เน็ตไม่จำกัด ที่ความเร็ว 20Mbps สำหรับเล่นแอปเกม Mobile Legend Bang Bang (MLBB), ROV, FREE FIRE, PUBG Mobile
        </li>
        <li>
          คุณจะได้รับ SMS แจ้งให้กด USSD เพื่อรับโค้ดไอเทมภายใน 48 ชม.หลังจากสมัครแพ็กเกจสำเร็จ 
          <span style={{color: 'red'}}>(กดรับโค้ดไอเทมภายในเวลา 23.59 น. ของวันที่ได้รับ SMS)</span>
        </li>
        <li>
          จำกัดสิทธิ์กดรับโค้ดไอเทม 1 ครั้ง ต่อวัน
        </li>
        <li>
          คุณจะได้รับ SMS แจ้งโค้ดไอเทมทันทีหลังกด USSD รับโค้ดไอเทม
        </li>
        <li>
          คุณสามารถแลกโค้ดไอเทม ภายในวันที่ 31 ธ.ค.2567
        </li>
        <li>
          แลกโค้ดไอเทม เข้าไปที่ 
          <a href="http://www.mobilelegends.com/redeem" className='text-blue-500'>http://www.mobilelegends.com/redeem</a>
        </li>
        <li>
          แอปพลิเคชั่นรองรับระบบปฏิบัติการ Android 4.1 และ iOS 9.0 ขึ้นไป
        </li>
        <li>
          สิทธิ์การใช้งานและอัตราค่าบริการที่กำหนด สำหรับการใช้งานภายในประเทศ และการใช้งานปกติเท่านั้น
        </li>
      </ol>
      </>
    ),
  },
  {
    id: 4,
    name: 'เหมา เหมา Games 29 บาท',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/72888146-6c57-4453-a858-278a37b731da-ign-90635098_10158853397241554_4516118958822129664_n.jpg',
    topUpLink: '/topup/valorant',
    infoBlock: [
      'เน็ตไม่จำกัดเล่น 14 เกมดัง ความเร็ว 4 Mbps',
      'เน็ตเต็มสปีด 1 GB',
      'นาน 1 วัน 29 บาท'
    ],
    description: (
      <>
      <div className="pl-5 space-y-2 text-white">
        <p>แพ็กเสริมเน็ตไม่จำกัดเล่น 14 เกมดัง ROV, Free Fire, PUBGM, Call of Duty Mobile, Genshin Impact, EA Sports FC Mobile, Pokemon Unite, Speed Drifter, Ragnarok X, Ragnarok M, LOL:Wild Rift, Ragnarok Origin, Mobile legends Bang Bang และ Solo Leveling: Arise ที่ความเร็ว 4 Mbps พร้อมเน็ตเต็มสปีด 1 GB นาน 24 ชม.</p>
        <p>•	อัตราค่าบริการที่กำหนดเป็นอัตราที่ไม่รวมภาษีมูลค่าเพิ่ม </p>
        <p>•	สิทธิ์การใช้งานแพ็กเกจเสริม สามารถใช้งานได้ หลังจากได้รับ SMS ยืนยัน</p>
        <p>•	แอปพลิเคชันรองรับระบบปฏิบัติการ Android 4.1 และ iOS 9.0 ขึ้นไป </p>
        <p>•	สิทธิ์การใช้งานและอัตราค่าบริการที่กำหนด สำหรับการใช้งานภายในประเทศ และการใช้งานปกติเท่านั้น</p>
      </div>
      </>
    ),
  },
  {
    id: 5,
    name: 'เหมา เหมา Games 99 บาท',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/6cb96b71-3db3-4df6-9088-9dcec1941ee3-ign-KV53.jpg',
    topUpLink: '/topup/valorant',
    infoBlock: [
      'เน็ตไม่จำกัดเล่น 14 เกมดัง ความเร็ว 4 Mbps',
      'เน็ตเต็มสปีด 5 GB',
      'นาน 7 วัน 99 บาท'
    ],
    description: (
      <>
      <div className="pl-5 space-y-2 text-white">
        <p>แพ็กเสริมเน็ตไม่จำกัดเล่น 14 เกมดัง ROV, Free Fire, PUBGM, Call of Duty Mobile, Genshin Impact, EA Sports FC Mobile, Pokemon Unite, Speed Drifter, Ragnarok X, Ragnarok M, LOL:Wild Rift, Ragnarok Origin, Mobile legends Bang Bang และ Solo Leveling: Arise ที่ความเร็ว 4 Mbps พร้อมเน็ตเต็มสปีด 5 GB นาน 7 วัน</p>
        <p>•	อัตราค่าบริการที่กำหนดเป็นอัตราที่ไม่รวมภาษีมูลค่าเพิ่ม </p>
        <p>•	สิทธิ์การใช้งานแพ็กเกจเสริม สามารถใช้งานได้ หลังจากได้รับ SMS ยืนยัน</p>
        <p>•	แอปพลิเคชันรองรับระบบปฏิบัติการ Android 4.1 และ iOS 9.0 ขึ้นไป </p>
        <p>•	สิทธิ์การใช้งานและอัตราค่าบริการที่กำหนด สำหรับการใช้งานภายในประเทศ และการใช้งานปกติเท่านั้น</p>
      </div>
      </>
    ),
  },
    {
    id: 6,
    name: 'เหมา เหมา Games 200 บาท',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/c06004cc-0d29-4de7-a5fc-c6c61cbf6875-ign-GO8-XFSaYAAAdtA.jpg',
    topUpLink: '/topup/valorant',
    infoBlock: [
      'เน็ตไม่จำกัดเล่น 14 เกมดัง ความเร็ว 4 Mbps',
      'เน็ตเต็มสปีด 9 GB',
      'นาน 7 วัน 200 บาท'
    ],
    description: (
      <>
      <div className="pl-5 space-y-2 text-white">
        <p>แพ็กเสริมเน็ตไม่จำกัดเล่น 14 เกมดัง ROV, Free Fire, PUBGM, Call of Duty Mobile, Genshin Impact, EA Sports FC Mobile, Pokemon Unite, Speed Drifter, Ragnarok X, Ragnarok M, LOL:Wild Rift, Ragnarok Origin, Mobile legends Bang Bang และ Solo Leveling: Arise ที่ความเร็ว 4 Mbps พร้อมเน็ตเต็มสปีด 9 GB นาน 7 วัน</p>
        <p>•	อัตราค่าบริการที่กำหนดเป็นอัตราที่ไม่รวมภาษีมูลค่าเพิ่ม </p>
        <p>•	สิทธิ์การใช้งานแพ็กเกจเสริม สามารถใช้งานได้ หลังจากได้รับ SMS ยืนยัน</p>
        <p>•	แอปพลิเคชันรองรับระบบปฏิบัติการ Android 4.1 และ iOS 9.0 ขึ้นไป </p>
        <p>•	สิทธิ์การใช้งานและอัตราค่าบริการที่กำหนด สำหรับการใช้งานภายในประเทศ และการใช้งานปกติเท่านั้น</p>
      </div>
      </>
    ),
  },
];
const PackageList = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 pt-6">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 auto-rows-min justify-center">
        {Packs.map((item) => (
          <Pack
            key={item.id}
            image={item.image}
            name={item.name}
            topUpLink={item.topUpLink}
            description={item.description}
            infoBlock={item.infoBlock}
            index={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default PackageList;
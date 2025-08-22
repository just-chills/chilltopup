import React, { useState } from 'react';

const All = ({ image, name, topUpLink }) => {
  const [liked, setLiked] = useState(false);
  const [showEffect, setShowEffect] = useState(false);

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

  return (
    <div  
      onClick={() => window.location.href = topUpLink}
      className="group w-56 bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between relative cursor-pointer 
                 border-2 border-transparent hover:border-primary transition-all duration-200"
    >
      {/* รูปเกม */}
      <div className='w-full h-64 overflow-hidden relative'>
        <img
          src={image}
          alt="preview"
          className={`w-full h-full object-cover transition-transform duration-200 origin-center will-change-transform ${
            shouldZoom ? 'scale-110' : 'scale-100'
          }`}
        />
        {/* ปุ่มหัวใจ */}
        <button
          onClick={handleLike}
          className="absolute bottom-2 right-2 w-8 h-8 flex items-center justify-center z-20"
        >
        {/* วงขาว effect */}
        {showEffect && (
          <span className="absolute inset-0 rounded-full border-2 border-white animate-ping z-10"></span>
        )}

        {/* รูปหัวใจ */}
        <img
          src={liked ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAKvSURBVHjarNVNaFxlFMbx373N1+TLhLSJEWJQooJuihILMiqUot1IdoLBgGiF0kVQUReKG6GLUnWRbqoEBeNXo6I1UqWtVlGrJaDYptQ2CeO4SdI2WCdN0vlKXHhnSMMkLSbP5r4vh/v83/ece88JBhNtlqqvp/1ePIVtaMMVnMVX2I8APejC7ajHBI7hTRxf6hcUAH097bWRQXdkUkrz0TNmZX2AXfgHyiLzG/AN7imvWrT54ZSOzjmNrVn5bOD8nxVOfVtnbLg6Bh2dc+584LKb7kgrK19waarc6e9qnTxSJ58LunFXlIGLwWCiTV9P+wE82tia1fXCefWbciWPNjZcrQAopUuT5Ybe2OTviXL4Eo8E8Xg8jh8qYgu6d0+saH69mpku8/5LrTJzITwUYgds3j6zZnOoa8q5e3uqsH0iRBxu2zJrvdSxpZjC+0LcCo03ZtcN0NBS9Lo5RBbyuWDdAPls0Ssd4gxMjVeuG+BCsqKwHA0xBOdOVK8bYPRETWF5KMQBOPdLjSuXwzWbz8+EzvxYBHwY9g4kR/B1Zi7000eNawb8/EmDzHwo6l0nC0d+BunT39caXUOqxoarjRyrgzSegxB6B5JnowblyFsbTf6Pgk+OVzq8fyOL4EX8UQREkLexL5cJHNzbbGL0+iFT45UO7m2WywTQj75CbHlVn8Wn6dnQ53taJE/Frmn+10iVz/Y0S8+GMIidS+NXAXoHknk8hvey6cDQ681+PVRfuPbVWuT3w3W+eK2lUNR90SzJlxw4y6ZagFfxMoKOzjlbn5xWVbvw36eY2uBof5PEb7EI5RXsLnXDkoAloC68i/qahrxtT09byHO0v8l8agOkom788UoeqwIiyC14Bw8uCx3H40is9v41f93egWQCW/E8LuBitL4/iq2qfwcA2o/lcPMKpuoAAAAASUVORK5CYII=' 
            : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAALHSURBVHjarJVPSBx3HMU/M4qy4mZBexLyGzpCRKx/BqGHsiJIKLug5BbJ0mikEUJPbdEczDFHBcFcUu0at6yHtuQUxw0i5CDklENJAkkIGhbBgMlB4hKi1Xm57ARd1CS4D77wZr7ze2++fOH3LGMMB5HP578HfgbOA2eBD8ALIAfcBizgMnABOAecAV4DD4A/gIeHBI0xGGOQVCspKynQ8XhfrJMwLykmCUmE4jFJjySpUChoampKiURCTU1Nam1tVSqVku/7CoJAQRDI930NDg6qublZruuqp6dH09PT2t3dDU3+k/SNJCxjDPl8/m/g4traGgMDA6yvr3MUkskkALlc7si+67qk02lc1wVYAPosSXFgpVAokEgkjhX/UjQ0NLC0tEQ0GgX40QauAqTT6VOLA2xsbDAzMxM+XrGBOMDCwgLlgu/7If3BkhQAVmNjI3t7e2UxqKysZHV1FSCwgf8BqqqqyjZBdXV1SHds4BlAe3t72QxaWlpC+tIG7gH09fWVzaC3tzeki5ak74An29vbxONxtra2TiVeV1fHysoKtbW1AO224zhPgfvRaJSxsbFT//3IyEgongMe28X3vwI7/f39B8f7aiSTSVKpFMAO8DuADeA4zgvgF4CJiQk8z/tqcc/zmJycxLIsgOvA808GRZNZ4FYkEiGTydDZ2fnF4h0dHWQyGSKRCMCfwFTYs0u+/Q24G4vFyGazdHd3f1a8q6uL+fl5YrEYwD/AtYP9QwaO4+wDl4BsTU0Ns7OzDA8Ph2MfgmVZDA0NMTc3Fy71FpAC9o8MnIMlyZJ0MwyfxcVFtbW1yRgjY4w8z9Py8nJ49weSboQBU1pWaWSWxOcF4C/gzObmJqOjo1RUVDA+Pk59fT3Au+Jt/O9xGicaFE2+Be4ApQt5CPwEvDrpvP25JTqO8wroAUaAN8DbIu8q9k7ExwEAPP9uK0iUcMQAAAAASUVORK5CYII='}
          alt="heart"
          className="w-5 h-5 relative z-20"
        />
        </button>
      </div>
      {/* เนื้อหา */}
      <div className="flex flex-col p-2">
        <h2 className="text-lg font-semibold text-white text-center">{name}</h2>
        <button
          onClick={handleTopUpClick}
          className="mt-2 w-full bg-secondary border-2 border-primary text-white py-2 rounded 
                     transition duration-300 
                     group-hover:bg-primary group-hover:text-black group-hover:border-primary"
        >
          เติมเกม
        </button>
      </div>
    </div>
  );
};


const Alls = [
  {
    id: 1,
    name: 'VALORANT',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/461d6a18-8275-4d53-bb97-7db604144b4f-ign-GameOn-thumbnail_Valorant-5.jpg',
    topUpLink: '/topup/valorant',
  },
  {
    id: 2,
    name: 'TFT: Teamfight Tactics',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/a176adf3-b6c0-4940-b603-8dc356116813-ign-GameOn-thumbnail_TFT-5.jpg',
    topUpLink: '/topup/rov',
  },
  {
    id: 3,
    name: 'Genshin Impact',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/eeffaed8-6f61-41b8-b76a-022ca7ce89bd-ign-genshin%20logo%20new.jpg',
    topUpLink: '/topup/freefire',
  },
  {
    id: 4,
    name: 'League of Legends',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/b72a9aaf-7d25-4c6a-b58c-1aedd77a35c0-ign-GameOn-thumbnail_LoL-5.jpg',
    topUpLink: '/topup/pubg',
  },
  {
    id: 5,
    name: 'Identity V',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/66c67ffc-df77-4180-a061-312a8a571516-ign-identity-v-logo.jpg',
    topUpLink: '/topup/codm',
  },
  {
    id: 6,
    name: 'EA SPORTS FC™ MOBILE 24',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/cea62c2f-3d82-4e41-b6dc-d0973fba3831-ign-240524-FC-mobile-logo.png',
    topUpLink: '/topup/freefire',
  },
  {
    id: 7,
    name: 'Onmyoji Arena',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/e5725b94-c531-4fd6-af57-fa5c257d46bc-ign-Onmyo15-may25-TN.jpg',
    topUpLink: '/topup/pubg',
  },
  {
    id: 8,
    name: 'League of Legends: Wild Rift',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/1615bfcb-15a6-4cd7-94f9-2b1df70baab1-ign-lol%20wr%20logo.jpeg',
    topUpLink: '/topup/codm',
  },
  {
    id: 9,
    name: 'Ragnarok X Next Generation',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/ca16707f-f566-4673-bbe1-60d807707299-ign-Ragnarok-X-New-Generation-image-640x450.png',
    topUpLink: '/topup/freefire',
  },
  {
    id: 10,
    name: 'Eggy Party',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/e01eba68-39b7-42c4-9a95-1773e3971e5e-ign-eggy-party.jpg',
    topUpLink: '/topup/ragnarokx',
  },
  {
    id: 11,
    name: 'Blood of Strike',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/39c6d1fa-a9a4-4e80-8124-f58e3bbcf661-ign-blood%20Icon%201.jpg',
    topUpLink: '/topup/rov',
  },
  {
    id: 12,
    name: 'Razer Gold pin',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/5b84460f-1c93-4f9b-8fde-1e0a05d7ab1f-ign-Razer.jpg',
    topUpLink: '/topup/pubg',
  },
  {
    id: 13,
    name: 'MU ORIGIN 3',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/1670398155684.jpeg',
    topUpLink: '/topup/cod',
  },
  {
    id: 14,
    name: 'Harry Potter: Magic Awakened',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/05b0c664-aa68-4ef8-8ee4-132fd93cdab0-ign-harry%20(1).png',
    topUpLink: '/topup/fifaonline4',
  },
  {
    id: 15,
    name: 'One Punch Man: The Strongest',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/0eb0eedf-bc15-4ff0-b79f-dcb7bbd195e0-ign-TT-rateup1.jpg',
    topUpLink: '/topup/lolwildrift',
  },
  {
    id: 16,
    name: 'LINE Prepaind Card',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/f471df72-0928-41dc-9e7a-00a03784107c-ign-Line.jpg',
    topUpLink: '/topup/aov',
  },
  {
    id: 17,
    name: 'Cookie Card',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/88de6a83-82ce-4701-bb1d-665b16ee3ab5-ign-Cookie%205.jpg',
    topUpLink: '/topup/genshinimpact',
  },
  {
    id: 18,
    name: 'Ragnarok M: Eternal Love',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/1670399156387.jpeg',
    topUpLink: '/topup/identityv',
  },
];

const AllList = () => {
  return (
    <div className="container mx-auto px-4 mt-4">
      {/* Grid แสดงการ์ดเกม */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-4">
        {Alls.map((item) => (
          <All
            key={item.id}
            image={item.image}
            name={item.name}
            topUpLink={item.topUpLink}
          />
        ))}
      </div>
      {/* ✅ ปุ่มไว้ล่วงหน้า */}
      <div className="m-4 mt-4 flex justify-center">
        <button
          className="px-6 py-3 bg-gray-200 text-black rounded-lg hover:bg-gray-300 transition font-semibold"
          onClick={() => alert('จะลิงก์ไปหน้ารวมทั้งหมดในอนาคต')}
        >
        ดูทั้งหมด
        </button>
      </div>
    </div>
  );
};

export default AllList;
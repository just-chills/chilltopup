import React, { useState } from 'react';

const Card = ({ image, name, topUpLink }) => {
  const [liked, setLiked] = useState(false);
  const [showEffect, setShowEffect] = useState(false);

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
        <button
          onClick={handleLike}
          className="absolute bottom-2 right-2 w-8 h-8 flex items-center justify-center z-20"
        >
        {/* วงขาว effect */}
        {showEffect && (
          <span className="absolute inset-0 rounded-full border-2 border-white animate-ping z-10"></span>
        )}

        {/* หัวใจ */}
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
          className="mt-2 w-full bg-black border-2 border-primary text-white py-2 rounded 
                     transition duration-300 
                     group-hover:bg-primary group-hover:text-black group-hover:border-primary"
        >
          เติมเกม
        </button>
      </div>
    </div>
  );
};


const Cards = [
  {
    id: 1,
    name: 'Razer Gold pin',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/5b84460f-1c93-4f9b-8fde-1e0a05d7ab1f-ign-Razer.jpg',
    topUpLink: '/topup/valorant',
  },
  {
    id: 2,
    name: 'LINE Prepaid Card',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/f471df72-0928-41dc-9e7a-00a03784107c-ign-Line.jpg',
    topUpLink: '/topup/rov',
  },
  {
    id: 3,
    name: 'Cookie Card',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/88de6a83-82ce-4701-bb1d-665b16ee3ab5-ign-Cookie%205.jpg',
    topUpLink: '/topup/freefire',
  },
  {
    id: 4,
    name: 'VIU Premium Card',
    image: 'https://gameon.ais.co.th/api/cms-data-service/product/29e2707f-a127-4739-9318-ebbcdbf7c919-ign-VIU.jpg',
    topUpLink: '/topup/pubg',
  },
];

const CardList = () => {
  return (
    <div className="container mx-auto px-4 mt-4">
      {/* Grid แสดงการ์ดเกม */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-4">
        {Cards.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            name={item.name}
            topUpLink={item.topUpLink}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
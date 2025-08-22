import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Hero.css'; // Assuming you have a CSS file for custom styles
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute top-1/2 right-[20%] md:right-[26%] lg:right-[32.45%] transform -translate-y-1/2 z-10 w-10 h-10 bg-black rounded-full flex items-center justify-center cursor-pointer"
      onClick={onClick}>
      <FaChevronRight color="lime" size={18} />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute top-1/2 left-[20%] md:left-[26%] lg:left-[32.45%] transform -translate-y-1/2 z-10 w-10 h-10 bg-black rounded-full flex items-center justify-center cursor-pointer"
      onClick={onClick}>
      <FaChevronLeft color="lime" size={18} />
    </div>
  );
}

export default function App() {
  const settings = {
    dots: true,            // แสดงจุดด้านล่าง
    infinite: true,        // วนลูป
    speed: 2500,            // ความเร็วเลื่อน (ms)
    slidesToShow: 3,       // แสดงกี่ภาพต่อครั้ง
    slidesToScroll: 1,     // เลื่อนทีละกี่ภาพ
    autoplay: true,        // เล่นอัตโนมัติ
    autoplaySpeed: 10000,   // เวลาพักก่อนเลื่อน (ms)
    customPaging: () => (
      <div className="custom-dot"></div>
    ),
    dotsClass: "slick-dots custom-dots", // ใช้ class custom
  };

  return ( <div className='hero-container' style={{padding: '50px 0', position: 'relative' }}> 
    <Slider {...{ ...settings, nextArrow: <NextArrow />, prevArrow: <PrevArrow /> }} > 
      <div> 
        <img src="https://gameon.ais.co.th/api/cms-data-service/banner/2eda8716-3fc5-4340-93dc-45fa2b746a8e-ign-Gameon-Mother_s-day-Hero-Banner-Desktop-01.jpg" alt="Slide 1" /> 
      </div> 
      <div> 
        <img src="https://gameon.ais.co.th/api/cms-data-service/banner/9cfef79c-10cc-4c23-b623-da666d6aaeb8-ign-Gameon-August-01-Hero-Banner-Desktop.jpg" alt="Slide 2" /> 
      </div> 
      <div> 
        <img src="https://gameon.ais.co.th/api/cms-data-service/banner/42a1b57e-845c-4a60-8c97-8b1fff0df286-ign-Game-on-media-myMission-1_1280x640.jpg" alt="Slide 3" /> 
      </div> 
      <div> 
        <img src="https://gameon.ais.co.th/api/cms-data-service/banner/c208fb21-907e-4c85-979b-b529b4642bd0-ign-GFNxAIS_NewEra_Game On.jpg" alt="Slide 4" /> 
      </div> 
      <div> 
        <img src="https://gameon.ais.co.th/api/cms-data-service/banner/72e0e2ac-1e3b-4ee6-b8c4-19d6834a2826-ign-AW_Game-Booster_1280x640.jpg" alt="Slide 5" /> 
      </div> 
    </Slider>
  </div> 
  ); 
}

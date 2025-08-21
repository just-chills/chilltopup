import React, { useEffect, useState } from 'react'


function Flash() {
  // กำหนดเวลานับถอยหลังเริ่มต้น (ตัวอย่าง: 1 ชั่วโมง 23 นาที 45 วินาที)
  const initialSeconds = 216 * 3600 + 59 * 60 + 45;
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  // แปลงวินาทีเป็น ชม. นาที วินาที
  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  // สร้าง chip นับถอยหลัง
  const CountdownChip = () => (
    <span className='bg-[rgb(237,24,70)] border-[rgb(237,24,70)] p-[0_6px] rounded-[16px] text-[#fff] text-[14px] sm:text-[20px] leading-[32px] mx-[6px] truncate'>
      {hours.toString().padStart(2, '0')} : {minutes.toString().padStart(2, '0')} : {seconds.toString().padStart(2, '0')}
    </span>
  );
  return (
    <>
      {/* promotion */}
      <div className=' flex justify-center items-center' style={{ background: 'linear-gradient(0deg, #dfdfdf 5%, #fff 20%, #dfdfdf 97%)'}}>
        {/* img section */}
        <img src="	https://gameon.ais.co.th/assets/_nuxt/img/SALE.91dfc89.png" alt="gameon" className='absolute top-[-200px] left-[12.5vw] width-[10vw] overflow-clip border-none' />
        <img src="https://gameon.ais.co.th/assets/_nuxt/img/3D_geometry.448d7dc.png" alt="gameon" className='absolute top-[-260px] right-[50px] width-[50vw] max-w[762px] overflow-clip border-none' />
        {/* container */}
        <div className='w-full px-[12px] mx-[280px] '>
          {/* header */}
          <div className='text-center pb-4'>
            <h1 className='text-[#000] text-[54px] leading-[54px] font-bold font-DBheavent truncate'>FLASH SALE</h1>
            <div className='flex justify-center'>
              {/* underline */}
              <div className='w-[120px] border-t-[8px] mt-3 border-[#87b201]'></div>
            </div>
          </div>
          <div>
            {/* row */}
            <div className='flex flex-wrap w-full h-full '>
              {/* col */}
              <div className='px-2 py-2 z-[1] sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 w-full h-full  max-w-full '>
                {/* card */}
                <div className='aspect-square overflow-hidden bottom-0 relative rounded-[0px] border-[thin] block max-w-full outline-none decoration-[none] transition-[box-shadow,opacity] break-words whitespace-normal'>
                  {/* thumnail */}
                  <div className='rounded-t-[inherit] overflow-hidden relative flex max-w-full z-0'>
                    {/* responsive sizer */}
                    <div className='pb-[100%] transition-[padding-bottom] ease-[cubic-bezier(0.25,0.8,0.5,1)] duration-[0.2s] delay-0 flex-[1_0_0px]'></div>
                    {/* image */}
                    <div className='z-[-1] absolute top-0 left-0 w-full h-full ' style={{ backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
                      <img src="https://gameon.ais.co.th/api/cms-data-service/product/461d6a18-8275-4d53-bb97-7db604144b4f-ign-GameOn-thumbnail_Valorant-5.jpg" alt="valorant" />
                    </div>
                    {/* responsive_contetnt */}
                    <div className='ml-[-100%] flex-[1_0_0px] max-w-[100%]'></div>
                  </div>
                  {/* overlay */}
                  <div className='z-[5] h-[33.33333%] top-[unset] min-h-[200px] p-[20px] items-start pointer-events-auto absolute rounded-[inherit] flex justify-center left-0 right-0 bottom-0 transition-[all,z-index] ease-cubic-bezier(0.25,0.8,0.5,1) duration-[0.3s,0s] '>
                    {/* overlay_scrim */}
                    <div className='opacity-[0.5] bg-[#000] border-[#000] rounded-[inherit] h-full w-full absolute transition-[inherit] will-change-[opacity] '></div>
                      {/* overlay_content */}
                      <div className='w-full h-full relative  whitespace-normal break-words mt-4'>
                        <div className=' text-[#fff] font-DBheavent text-[18px] sm:text-[22px] leading-[22px] min-h-[28px] flex items-center gap-1 truncate'>
                          <span>SALE NOW</span>
                          {/* chip */}
                          <div>
                            <CountdownChip />
                          </div>
                        </div>
                        {/* card_promotion_title */}
                        <h3 className=' text-[#fff] text-[22px] sm:text-[32px] leading-[34px] sm:leading-[40px] font-DBheavent font-bold overflow-hidden truncate w-full min-h-[28px]' style={{ '-webkit-line-clamp': '2', 'display': '-webkit-box', '-webkit-box-orient': 'vertical' }}>VALORANT</h3>
                        <h4 className='flex text-[#fff] text-[22px] sm:text-[24px] leading-[28px] sm:leading-[36px] font-DBheavent font-bold w-full min-h-[28px]' style={{'unicodeBidi': 'isolate' }}>
                          <span className='line-through decoration-[red] '>฿260</span>
                            <p className='mx-2 items-center inline-flex text-[14px] justify-center relative align-middle transition-[all,visibility] ease-cubic-bezier(0.25,0.8,0.5,1) duration-[0.3s,0s] delay-0' style={{'fontFeatureSettings': 'liga', 'letterSpacing': 'normal', 'lineHeight': '1', 'textIndent': '0', 'userSelect': 'none'}}>{'>'}</p>
                          <span className='text-primary'>฿247</span>
                        </h4>
                        <p className=' text-[#fff] text-[18px] sm:text-[20px] leading-[20px] font-DBheavent mb-0 w-full min-h-[28px] truncate'>1000 VP</p>
                        <div className='flex w-full h-full lg:w-1/2 sm:w-1/2 max-w-full'>
                          <div className='max-w-[50%] flex-[1_1_auto]'>
                            {/* progress bar */}
                            <div className='h-1  border-[#fff] border-solid border-[3px] rounded-[4px] bg-transparent relative overflow-hidden w-full transition-[all] ease-[cubic-bezier(0.4,0,0.6,1)] duration-[0.2s] delay-0'>
                              {/*v-progress-linear_background*/}
                              <div className='opacity-[1] left-[0.7%] w-[99.3%] bg-[#fff] border-[#fff] bottom-0 top-0 absolute transition-[inherit]'></div>
                              {/*v-progress-linear_buffer*/}
                              <div className='h-[inherit] left-0 top-0 absolute transition-[inherit] w-full'></div>
                              {/*v-progress-linear_determinate*/}
                              <div className='w-[0.7%] bg-[rgb(186,255,0)] border-[rgb(186,255,0)] absolute transition-[inherit] h-[inherit] left-0'></div>
                            </div>
                            {/* caption */}
                            <div className='mt-1 text-[#8f8f8f] text-[16px] sm:text-[20px] leading-[22px] font-DBheavent '> 997 LEFT </div>
                            {/* card promotion action */}
                            <div className='z-[6] flex flex-wrap sm:gap-4 gap-2 w-auto items-center justify-end absolute bottom-1 right-[-16px] sm:bottom-2 sm:right-2'>
                              <a href="https://gameon.ais.co.th/games/valorant-pid-633ff5c7077a1c0012aecbf4">
                                <span className='mx-1 sm:mx-2 bg-[rgba(8,8,8,0.5)] border-primary border-[1px] h-8 sm:h-10 w-[50px] sm:min-w-[90px] font-DBheavent text-base sm:text-[22px] text-[12px] leading-[22px] text-[#fff] rounded-[8px] flex items-center justify-center cursor-pointer'>Top Up</span>
                              </a>
                              <button className='bg-white h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] cursor-pointer rounded-full items-center inline-flex font-medium justify-center bg-transparent border-none'>
                                <span className='items-center text-[#fff] flex flex-[1_0_auto] justify-center transition-[opacity]'>
                                  <img className='w-4 h-4 sm:w-6 sm:h-6' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAALHSURBVHjarJVPSBx3HMU/M4qy4mZBexLyGzpCRKx/BqGHsiJIKLug5BbJ0mikEUJPbdEczDFHBcFcUu0at6yHtuQUxw0i5CDklENJAkkIGhbBgMlB4hKi1Xm57ARd1CS4D77wZr7ze2++fOH3LGMMB5HP578HfgbOA2eBD8ALIAfcBizgMnABOAecAV4DD4A/gIeHBI0xGGOQVCspKynQ8XhfrJMwLykmCUmE4jFJjySpUChoampKiURCTU1Nam1tVSqVku/7CoJAQRDI930NDg6qublZruuqp6dH09PT2t3dDU3+k/SNJCxjDPl8/m/g4traGgMDA6yvr3MUkskkALlc7si+67qk02lc1wVYAPosSXFgpVAokEgkjhX/UjQ0NLC0tEQ0GgX40QauAqTT6VOLA2xsbDAzMxM+XrGBOMDCwgLlgu/7If3BkhQAVmNjI3t7e2UxqKysZHV1FSCwgf8BqqqqyjZBdXV1SHds4BlAe3t72QxaWlpC+tIG7gH09fWVzaC3tzeki5ak74An29vbxONxtra2TiVeV1fHysoKtbW1AO224zhPgfvRaJSxsbFT//3IyEgongMe28X3vwI7/f39B8f7aiSTSVKpFMAO8DuADeA4zgvgF4CJiQk8z/tqcc/zmJycxLIsgOvA808GRZNZ4FYkEiGTydDZ2fnF4h0dHWQyGSKRCMCfwFTYs0u+/Q24G4vFyGazdHd3f1a8q6uL+fl5YrEYwD/AtYP9QwaO4+wDl4BsTU0Ns7OzDA8Ph2MfgmVZDA0NMTc3Fy71FpAC9o8MnIMlyZJ0MwyfxcVFtbW1yRgjY4w8z9Py8nJ49weSboQBU1pWaWSWxOcF4C/gzObmJqOjo1RUVDA+Pk59fT3Au+Jt/O9xGicaFE2+Be4ApQt5CPwEvDrpvP25JTqO8wroAUaAN8DbIu8q9k7ExwEAPP9uK0iUcMQAAAAASUVORK5CYII=" alt="gameon" />
                                </span>
                              </button>
                              <button className='ml-2 bg-white h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] cursor-pointer rounded-full items-center align-middle inline-flex font-medium justify-center bg-transparent border-none'>
                                <span>
                                  <img className='w-4 h-4 sm:w-6 sm:h-6' src="//icons.veryicon.com/png/o/miscellaneous/home-ams-icon-library/ic_share.png" alt="gameon" />
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              {/* col-md-6 col-12 */}
              <div className='px-2 pb-0 z-[1] w-full h-full sm:w-1/2'>
                {/* contain-merge */}
                <div className='overflow-hidden bottom-0 relative rounded-[0px] border-[thin] block max-w-full outline-none decoration-[none] transition-[box-shadow,opacity] break-words whitespace-normal'>
                  {/* card */}
                  <div className='mb-2 aspect-[unset] overflow-hidden bg-[#1e1e1e] text-[#fff] rounded-none border-[#1e1e1e] border-[thin] block max-w-100% outline-none transition-[opacity,box-shadow] relative whitespace-normal' >
                    {/* row */}
                    <div className='flex flex-wrap flex-[1_1_auto] w-full'>
                      {/* col col-6 */}
                      <div className='p-0 z-[1] w-[41%] sm:w-1/2'>
                        {/* image responsive */}
                        <div className='text-[#fff] relative overflow-hidden flex-[1_0_auto] w-full flex z-[0] h-full'>
                          {/* responsive_sizer */}
                          <div className='transition-[padding-bottom] ease-[cubic-bezier(0.25,0.8,0.5,1)] duration-[0.2s] delay-0 flex-[1_0_0]'></div>
                          {/* image */}
                          <div className=' ' style={{ backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
                            <img src="https://gameon.ais.co.th/api/cms-data-service/product/cea62c2f-3d82-4e41-b6dc-d0973fba3831-ign-240524-FC-mobile-logo.png" alt="" />
                          </div>
                          {/* responsive_contetnt */}
                          <div className=''></div>
                        </div>
                      </div>
                      {/* col col-6 */}
                      <div className='p-2 z-[1] sm:w-1/2'>
                        {/* promotion-inner */}
                        <div className='w-full h-full relative flex flex-col gap-1 whitespace-normal break-words sm:pl-2'>
                          <div className='text-[#fff] font-DBheavent sm:text-[22px] text-[12px] leading-[28px] h-[16px] sm:min-h-[38px] flex items-center gap-1 truncate'>
                            <span> SALE NOW </span>
                            {/* chip */}
                            <div>
                              <CountdownChip />
                            </div>
                          </div>
                          {/* card-promotion-title */}
                          <div className=''>
                            <h3 className=' text-[#fff] text-[12px] sm:text-[20px] leading-[12px] sm:leading-[30px] font-DBheavent font-bold overflow-hidden truncate w-full h-[18px] sm:min-h-[38px] ' style={{ '-webkit-line-clamp': '2', 'display': '-webkit-box', '-webkit-box-orient': 'vertical' }}> EA SPORTS FC™ MOBILE 24 </h3>
                            <h4 className='flex text-[#fff] text-[12px] sm:text-[22px] leading-[14px] sm:leading-[28px] font-DBheavent font-bold w-full min-h-[12px] sm:min-h-[28px]' style={{'unicodeBidi': 'isolate' }}>
                              <span className='line-through decoration-[red] text-[14px] sm:text-[24px]'>฿179</span>
                                <p className='mx-1 items-center inline-flex text-[10px] sm:text-[14px] justify-center relative align-middle transition-all duration-[0.3s]' style={{'fontFeatureSettings': 'liga', 'letterSpacing': 'normal', 'lineHeight': '1', 'textIndent': '0', 'userSelect': 'none'}}>{'>'}</p>
                              <span className='text-primary text-[14px] sm:text-[24px]'>฿170.05</span>
                            </h4>
                          </div>                          
                          <p className='text-[#fff] text-[12px] sm:text-[18px] sm:leading-[28px] leading-[12px] font-DBheavent mb-0 w-full sm:h-[28px] h-[14px] truncate'> 520 FC POINTS </p>
                          <div className='flex w-full h-1 items-center sm:flex-col sm:items-start'>
                            <div className='w-1/2'>
                              {/* progress bar */}
                              <div className=' border-[#fff] border-solid border-[3px] rounded-[4px] bg-transparent relative overflow-hidden w-full transition-[all] ease-[cubic-bezier(0.4,0,0.6,1)] duration-[0.2s] delay-0'></div>
                            </div>
                              {/* captions */}
                            <div className=' text-[#8f8f8f] text-[12px] sm:text-[20px] leading-[12px] sm:leading-[22px] font-DBheavent ml-2 sm:mt-2 sm:ml-0'> 1000 LEFT </div>
                          </div>                          
                          {/* card_promotion_action */}
                          <div className='z-[6] flex flex-wrap gap-2 w-auto items-center justify-end absolute sm:right-0 sm:bottom-2 bottom-[-2px] right-[-8px]'>
                            <a href="https://gameon.ais.co.th/games/valorant-pid-633ff5c7077a1c0012aecbf4">
                              <span className='mx-2 bg-[rgba(8,8,8,0.5)] border-primary border-[1px] h-6 sm:h-10 min-w-[50px] sm:min-w-[90px] font-DBheavent text-base text-[12px] sm:text-[22px] leading-[22px] text-[#fff] rounded-[8px] flex items-center justify-center cursor-pointer'> Top Up </span>
                            </a>
                            <button className='bg-white h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] cursor-pointer rounded-full items-center inline-flex font-medium justify-center bg-transparent border-none'>
                              <span className='items-center align-middle flex flex-[1_0_auto] justify-center transition-[opacity]'>
                                <img className='w-3 h-3 sm:w-6 sm:h-6' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAALHSURBVHjarJVPSBx3HMU/M4qy4mZBexLyGzpCRKx/BqGHsiJIKLug5BbJ0mikEUJPbdEczDFHBcFcUu0at6yHtuQUxw0i5CDklENJAkkIGhbBgMlB4hKi1Xm57ARd1CS4D77wZr7ze2++fOH3LGMMB5HP578HfgbOA2eBD8ALIAfcBizgMnABOAecAV4DD4A/gIeHBI0xGGOQVCspKynQ8XhfrJMwLykmCUmE4jFJjySpUChoampKiURCTU1Nam1tVSqVku/7CoJAQRDI930NDg6qublZruuqp6dH09PT2t3dDU3+k/SNJCxjDPl8/m/g4traGgMDA6yvr3MUkskkALlc7si+67qk02lc1wVYAPosSXFgpVAokEgkjhX/UjQ0NLC0tEQ0GgX40QauAqTT6VOLA2xsbDAzMxM+XrGBOMDCwgLlgu/7If3BkhQAVmNjI3t7e2UxqKysZHV1FSCwgf8BqqqqyjZBdXV1SHds4BlAe3t72QxaWlpC+tIG7gH09fWVzaC3tzeki5ak74An29vbxONxtra2TiVeV1fHysoKtbW1AO224zhPgfvRaJSxsbFT//3IyEgongMe28X3vwI7/f39B8f7aiSTSVKpFMAO8DuADeA4zgvgF4CJiQk8z/tqcc/zmJycxLIsgOvA808GRZNZ4FYkEiGTydDZ2fnF4h0dHWQyGSKRCMCfwFTYs0u+/Q24G4vFyGazdHd3f1a8q6uL+fl5YrEYwD/AtYP9QwaO4+wDl4BsTU0Ns7OzDA8Ph2MfgmVZDA0NMTc3Fy71FpAC9o8MnIMlyZJ0MwyfxcVFtbW1yRgjY4w8z9Py8nJ49weSboQBU1pWaWSWxOcF4C/gzObmJqOjo1RUVDA+Pk59fT3Au+Jt/O9xGicaFE2+Be4ApQt5CPwEvDrpvP25JTqO8wroAUaAN8DbIu8q9k7ExwEAPP9uK0iUcMQAAAAASUVORK5CYII=" alt="gameon" />
                              </span>
                            </button>
                            <button className='mx-2 bg-white h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] cursor-pointer rounded-full items-center align-middle inline-flex font-medium justify-center bg-transparent border-none'>
                              <span>
                                <img className='w-3 h-3 sm:w-6 sm:h-6 items-center align-middle justify-center' src="//icons.veryicon.com/png/o/miscellaneous/home-ams-icon-library/ic_share.png" alt="gameon" />
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className='mb-2 overflow-hidden bg-[#1e1e1e] text-[#fff] rounded-none border-[#1e1e1e] border-[thin] block max-w-100% outline-none transition-[opacity,box-shadow] relative whitespace-normal'>
                    {/* row */}
                    <div className='flex flex-wrap justify-between h-full w-full'>
                      {/* col col-6 */}
                      <div className='p-2 z-[1] sm:w-1/2 w-[55%]'>
                        {/* promotion_inner */}
                        <div className='w-full h-full relative flex flex-col gap-1 whitespace-normal break-words sm:pl-2'>
                          <div className='text-[#fff] font-DBheavent sm:text-[22px] text-[12px] leading-[16px] h-[16px] sm:min-h-[38px] flex items-center truncate'>
                            <span> SALE NOW </span>
                            <div>
                              <CountdownChip />
                            </div>
                          </div>
                          {/* card_promotion_title */}
                          <h3 className=' text-[#fff] text-[12px] sm:text-[22px] leading-[12px] sm:leading-[30px] font-DBheavent font-bold overflow-hidden truncate w-full h-[14px] sm:min-h-[38px]' style={{ '-webkit-line-clamp': '2', 'display': '-webkit-box', '-webkit-box-orient': 'vertical' }}> Genshin Impact </h3>
                          <h4 className='flex text-[#fff] text-[12px] sm:text-[22px] leading-[12px] sm:leading-[28px] font-DBheavent font-bold w-full h-[14px] sm:min-h-[28px]' style={{'unicodeBidi': 'isolate' }}>
                            <span className='line-through decoration-[red] text-[14px] sm:text-[24px] '>฿153</span>
                              <p className='mx-1 items-center inline-flex text-[10px] sm:text-[14px] justify-center relative align-middle transition-all duration-300' style={{'fontFeatureSettings': 'liga', 'letterSpacing': 'normal', 'lineHeight': '1', 'textIndent': '0', 'userSelect': 'none'}}>{'>'}</p>
                            <span className='text-primary text-[14px] sm:text-[24px]'>฿142.29</span>
                          </h4>
                          <p className='text-[#fff] text-[12px] sm:text-[20px] leading-[12px] sm:leading-[28px] font-DBheavent mb-0 w-full h-[16px] sm:min-h-[28px] truncate'> Blessing of the Welkin Moon </p>
                          <div className='flex w-full h-1 items-center sm:flex-col sm:items-start'>               
                            <div className='w-1/2'>
                              {/* progress bar */}
                              <div className='h-1 border-[#fff] border-solid border-[3px] rounded-[4px] bg-transparent relative overflow-hidden w-full transition-[all] ease-[cubic-bezier(0.4,0,0.6,1)] duration-[0.2s] delay-0'></div>
                            </div>
                              {/* captions */}
                            <div className='text-[#8f8f8f] text-[12px] sm:text-[20px] leading-[14px] sm:leading-[22px] font-DBheavent ml-2 sm:mt-2 sm:ml-0'> 999 LEFT </div>
                          </div>                          
                          {/* card_promotion_action */}
                          <div className='z-[6] flex flex-wrap gap-2 w-auto items-center justify-start absolute sm:left-0 sm:bottom-2 bottom-[-4px] left-[-8px]'>
                            <a href="https://gameon.ais.co.th/games/valorant-pid-633ff5c7077a1c0012aecbf4">
                              <span className='mx-2 bg-[rgba(8,8,8,0.5)] border-primary border-[1px] h-6 sm:h-10 min-w-[50px] sm:min-w-[90px] font-DBheavent text-base text-[12px] sm:text-[22px] leading-[22px] text-[#fff] rounded-[8px] flex items-center justify-center cursor-pointer'> Top Up </span>
                            </a>
                            <button className='bg-white h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] cursor-pointer rounded-full items-center inline-flex font-medium justify-center bg-transparent border-none'>
                              <span className='items-center align-middle flex flex-[1_0_auto] justify-center transition-[opacity]'>
                                <img className='w-3 h-3 sm:w-6 sm:h-6' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAALHSURBVHjarJVPSBx3HMU/M4qy4mZBexLyGzpCRKx/BqGHsiJIKLug5BbJ0mikEUJPbdEczDFHBcFcUu0at6yHtuQUxw0i5CDklENJAkkIGhbBgMlB4hKi1Xm57ARd1CS4D77wZr7ze2++fOH3LGMMB5HP578HfgbOA2eBD8ALIAfcBizgMnABOAecAV4DD4A/gIeHBI0xGGOQVCspKynQ8XhfrJMwLykmCUmE4jFJjySpUChoampKiURCTU1Nam1tVSqVku/7CoJAQRDI930NDg6qublZruuqp6dH09PT2t3dDU3+k/SNJCxjDPl8/m/g4traGgMDA6yvr3MUkskkALlc7si+67qk02lc1wVYAPosSXFgpVAokEgkjhX/UjQ0NLC0tEQ0GgX40QauAqTT6VOLA2xsbDAzMxM+XrGBOMDCwgLlgu/7If3BkhQAVmNjI3t7e2UxqKysZHV1FSCwgf8BqqqqyjZBdXV1SHds4BlAe3t72QxaWlpC+tIG7gH09fWVzaC3tzeki5ak74An29vbxONxtra2TiVeV1fHysoKtbW1AO224zhPgfvRaJSxsbFT//3IyEgongMe28X3vwI7/f39B8f7aiSTSVKpFMAO8DuADeA4zgvgF4CJiQk8z/tqcc/zmJycxLIsgOvA808GRZNZ4FYkEiGTydDZ2fnF4h0dHWQyGSKRCMCfwFTYs0u+/Q24G4vFyGazdHd3f1a8q6uL+fl5YrEYwD/AtYP9QwaO4+wDl4BsTU0Ns7OzDA8Ph2MfgmVZDA0NMTc3Fy71FpAC9o8MnIMlyZJ0MwyfxcVFtbW1yRgjY4w8z9Py8nJ49weSboQBU1pWaWSWxOcF4C/gzObmJqOjo1RUVDA+Pk59fT3Au+Jt/O9xGicaFE2+Be4ApQt5CPwEvDrpvP25JTqO8wroAUaAN8DbIu8q9k7ExwEAPP9uK0iUcMQAAAAASUVORK5CYII=" alt="gameon" />
                              </span>
                            </button>
                            <button className='mx-2 bg-white h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] cursor-pointer rounded-full items-center align-middle inline-flex font-medium justify-center bg-transparent border-none'>
                              <span>
                                <img className='w-3 h-3 sm:w-6 sm:h-6 items-center align-middle justify-center' src="//icons.veryicon.com/png/o/miscellaneous/home-ams-icon-library/ic_share.png" alt="gameon" />
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* col col-6 */}
                      <div className='z-[1] w-[41%] sm:w-1/2'>
                        {/* genshin logo */}
                        <div className='text-[#fff] relative overflow-hidden flex-[1_0_auto] w-full flex z-[0] h-full'>
                          {/* responsive_sizer */}
                          <div className='transition-[padding-bottom] ease-[cubic-bezier(0.25,0.8,0.5,1)] duration-[0.2s] delay-0 flex-[1_0_0]'>
                            <div className='' style={{ backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
                              <img src="https://gameon.ais.co.th/api/cms-data-service/product/eeffaed8-6f61-41b8-b76a-022ca7ce89bd-ign-genshin%20logo%20new.jpg" alt="" />
                            </div>
                          </div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* row */}
            <div className='sm:flex gap-1 w-full h-full'>
              {/* col */}
              <div className='px-2 py-0 sm:pt-2 z-[1] lg:w-1/2 w-full h-full sm:w-1/2 max-w-full'>
                {/* card */}
                <div className='aspect-square overflow-hidden bottom-0 relative rounded-[0px] border-[thin] block max-w-full outline-none decoration-[none] transition-[box-shadow,opacity] break-words whitespace-normal'>
                  {/* thumbnail */}
                  <div className='rounded-t-[inherit] overflow-hidden relative flex max-w-full z-0'>
                    {/* responsive_sizer */}
                    <div className='pb-[100%] transition-[padding-bottom] ease-[cubic-bezier(0.25,0.8,0.5,1)] duration-[0.2s] delay-0 flex-[1_0_0px]'></div>
                    {/* image */}
                    <div className='z-[-1] absolute top-0 left-0 w-full h-full ' style={{ backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
                      <img src="https://gameon.ais.co.th/api/cms-data-service/product/05b0c664-aa68-4ef8-8ee4-132fd93cdab0-ign-harry%20(1).png" alt="" />
                    </div>
                    {/* responsive_content */}
                    <div className='ml-[-100%] flex-[1_0_0px] max-w-[100%]'></div>
                  </div>
                  {/* overlay */}
                  <div className='z-[5] h-[33.33333%] top-[unset] min-h-[200px] p-[20px] items-start pointer-events-auto absolute rounded-[inherit] flex justify-center left-0 right-0 bottom-0 transition-[all,z-index] ease-cubic-bezier(0.25,0.8,0.5,1) duration-[0.3s,0s]'>
                    {/* overlay_scrim */}
                    <div className='opacity-[0.5] bg-[#000] border-[#000] rounded-[inherit] h-full w-full absolute transition-[inherit] will-change-[opacity]'></div>
                    {/* overlay_content */}
                    <div className='w-full h-full relative  whitespace-normal break-words mt-2'>
                      <div className='text-[#fff] font-DBheavent text-[18px] sm:text-[22px] leading-[22px] min-h-[28px] flex items-center gap-1 truncate'>
                        <span> SALE NOW </span>
                        {/* chip */}
                        <div>
                          <CountdownChip />
                        </div>
                      </div>
                      {/* card-promotion-title */}
                      <h3 className='text-[#fff] text-[18px] sm:text-[22px] leading-[38px] font-DBheavent font-bold overflow-hidden truncate w-full min-h-[38px]' style={{ '-webkit-line-clamp': '2', 'display': '-webkit-box', '-webkit-box-orient': 'vertical' }}>Harry Potter: Magic Awakened</h3>
                      <h4 className='flex text-[#fff] text-[18px] sm:text-[22px] leading-[28px] font-DBheavent font-bold w-full min-h-[30px]' style={{'unicodeBidi': 'isolate' }}>
                        <span className='line-through decoration-[red]'>฿179</span>
                          <p className='mx-2 items-center inline-flex text-[12px] sm:text-[14px] justify-center relative align-middle transition-[all,visibility] ease-cubic-bezier(0.25,0.8,0.5,1) duration-[0.3s,0s] delay-0' style={{'fontFeatureSettings': 'liga', 'letterSpacing': 'normal', 'lineHeight': '1', 'textIndent': '0', 'userSelect': 'none'}}>{'>'}</p>
                        <span className='text-primary'>฿148.57</span>
                      </h4>
                      <p className='text-[#fff] text-[16px] sm:text-[20px] leading-[22px] font-DBheavent mb-0 w-full min-h-[28px] truncate'>300 Jewels</p>
                      <div className='flex w-full h-full'>
                        <div className='max-w-[50%] flex-[1_1_auto]'>
                          {/* progress bar */}
                          <div className='h-1 border-[#fff] border-solid border-[3px] rounded-[4px] bg-transparent relative overflow-hidden w-full transition-[all] ease-[cubic-bezier(0.4,0,0.6,1)] duration-[0.2s] delay-0'>
                            {/* v-progress-linear_background */}
                            <div className='opacity-[1] left-[0.7%] w-[99.3%] bg-[#fff] border-[#fff] bottom-0 top-0 absolute transition-[inherit]'></div>
                            {/* v-progress-linear_buffer */}
                            <div className='h-[inherit] left-0 top-0 absolute transition-[inherit] w-full'></div>
                            {/* v-progress-linear_determinate */}
                            <div className='w-[0.7%] bg-[rgb(186,255,0)] border-[rgb(186,255,0)] absolute transition-[inherit] h-[inherit] left-0'></div>
                          </div>
                          {/* captions */}
                          <div className='mt-2 text-[#8f8f8f] text-[16px] sm:text-[20px] leading-[22px] font-DBheavent'> 1000 LEFT </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card_promotion_actions */}
                  <div className='z-[6] flex flex-wrap gap-2 w-auto items-center justify-end absolute bottom-2 right-[4px] sm:bottom-2 sm:right-2'>
                    <a href="https://gameon.ais.co.th/games/valorant-pid-633ff5c7077a1c0012aecbf4">
                      <span className='mx-1 sm:mx-2 bg-[rgba(8,8,8,0.5)] border-primary border-[1px] h-8 w-[50px] sm:w-[60px] font-DBheavent text-base text-[12px] leading-[22px] text-[#fff] rounded-[8px] flex items-center justify-center cursor-pointer'> Top Up </span>
                    </a>
                    <button className='bg-white h-[30px] w-[30px] cursor-pointer rounded-full items-center inline-flex font-medium justify-center bg-transparent border-none'>
                      <span className='items-center align-middle flex flex-[1_0_auto] justify-center transition-[opacity]'>
                        <img className='w-4 h-4' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAALHSURBVHjarJVPSBx3HMU/M4qy4mZBexLyGzpCRKx/BqGHsiJIKLug5BbJ0mikEUJPbdEczDFHBcFcUu0at6yHtuQUxw0i5CDklENJAkkIGhbBgMlB4hKi1Xm57ARd1CS4D77wZr7ze2++fOH3LGMMB5HP578HfgbOA2eBD8ALIAfcBizgMnABOAecAV4DD4A/gIeHBI0xGGOQVCspKynQ8XhfrJMwLykmCUmE4jFJjySpUChoampKiURCTU1Nam1tVSqVku/7CoJAQRDI930NDg6qublZruuqp6dH09PT2t3dDU3+k/SNJCxjDPl8/m/g4traGgMDA6yvr3MUkskkALlc7si+67qk02lc1wVYAPosSXFgpVAokEgkjhX/UjQ0NLC0tEQ0GgX40QauAqTT6VOLA2xsbDAzMxM+XrGBOMDCwgLlgu/7If3BkhQAVmNjI3t7e2UxqKysZHV1FSCwgf8BqqqqyjZBdXV1SHds4BlAe3t72QxaWlpC+tIG7gH09fWVzaC3tzeki5ak74An29vbxONxtra2TiVeV1fHysoKtbW1AO224zhPgfvRaJSxsbFT//3IyEgongMe28X3vwI7/f39B8f7aiSTSVKpFMAO8DuADeA4zgvgF4CJiQk8z/tqcc/zmJycxLIsgOvA808GRZNZ4FYkEiGTydDZ2fnF4h0dHWQyGSKRCMCfwFTYs0u+/Q24G4vFyGazdHd3f1a8q6uL+fl5YrEYwD/AtYP9QwaO4+wDl4BsTU0Ns7OzDA8Ph2MfgmVZDA0NMTc3Fy71FpAC9o8MnIMlyZJ0MwyfxcVFtbW1yRgjY4w8z9Py8nJ49weSboQBU1pWaWSWxOcF4C/gzObmJqOjo1RUVDA+Pk59fT3Au+Jt/O9xGicaFE2+Be4ApQt5CPwEvDrpvP25JTqO8wroAUaAN8DbIu8q9k7ExwEAPP9uK0iUcMQAAAAASUVORK5CYII=" alt="gameon" />
                      </span>
                    </button>
                    <button className='mx-2 bg-white h-[30px] w-[30px] cursor-pointer rounded-full items-center align-middle inline-flex font-medium justify-center bg-transparent border-none'>
                      <span>
                        <img className='w-4 h-4 items-center align-middle justify-center ' src="//icons.veryicon.com/png/o/miscellaneous/home-ams-icon-library/ic_share.png" alt="gameon" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              {/* col-4 */}
              <div className='px-2 py-2 z-[1] lg:w-1/2 w-full h-full sm:w-1/2 max-w-full'>
                {/* card */}
                <div className='aspect-square overflow-hidden bottom-0 relative rounded-[0px] border-[thin] block max-w-full outline-none decoration-[none] transition-[box-shadow,opacity] break-words whitespace-normal'>
                  {/* Onmyo */}
                  <div className='rounded-t-[inherit] overflow-hidden relative flex max-w-full z-0'>
                    {/* responsive_sizer */}
                    <div className='pb-[100%] transition-[padding-bottom] ease-[cubic-bezier(0.25,0.8,0.5,1)] duration-[0.2s] delay-0 flex-[1_0_0px]'></div>
                    {/* image */}
                    <div className='z-[-1] absolute top-0 left-0 w-full h-full ' style={{ backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
                      <img src="https://gameon.ais.co.th/api/cms-data-service/product/e5725b94-c531-4fd6-af57-fa5c257d46bc-ign-Onmyo15-may25-TN.jpg" alt="" />
                    </div>
                    {/* responsive_content */}
                    <div className='ml-[-100%] flex-[1_0_0px] max-w-[100%]'></div>
                  </div>
                  {/* overlay_promotions */}
                  <div className='z-[5] h-[33.33333%] top-[unset] min-h-[200px] p-[20px] items-start pointer-events-auto absolute rounded-[inherit] flex justify-center left-0 right-0 bottom-0 transition-[all,z-index] ease-cubic-bezier(0.25,0.8,0.5,1) duration-[0.3s,0s]'>
                    {/* overlay_scrim */}
                    <div className='opacity-[0.5] bg-[#000] border-[#000] rounded-[inherit] h-full w-full absolute transition-[inherit] will-change-[opacity]'></div>
                    {/* overlay_content */}
                    <div className='w-full h-full relative  whitespace-normal break-words mt-2'>
                      <div className='text-[#fff] font-DBheavent text-[18px] sm:text-[22px] leading-[22px] min-h-[28px] flex items-center gap-1 truncate'>
                        <span> SALE NOW </span>
                        {/* chip */}
                        <div>
                          <CountdownChip />
                        </div>
                      </div>
                      {/* card-promotion-title */}
                      <h3 className='text-[#fff] text-[18px] sm:text-[22px] leading-[38px] font-DBheavent font-bold overflow-hidden truncate w-full min-h-[38px]' style={{ '-webkit-line-clamp': '2', 'display': '-webkit-box', '-webkit-box-orient': 'vertical' }}> Onmyoji Arena </h3>
                      <h4 className='flex text-[#fff] text-[18px] sm:text-[22px] leading-[28px] font-DBheavent font-bold w-full min-h-[30px]' style={{'unicodeBidi': 'isolate' }}>
                        <span className='line-through decoration-[red] '>฿300</span>
                          <p className='mx-2 items-center inline-flex text-[12px] sm:text-[14px] justify-center relative align-middle transition-[all,visibility] ease-cubic-bezier(0.25,0.8,0.5,1) duration-[0.3s,0s] delay-0' style={{'fontFeatureSettings': 'liga', 'letterSpacing': 'normal', 'lineHeight': '1', 'textIndent': '0', 'userSelect': 'none'}}>{'>'}</p>
                        <span className='text-primary'>฿249</span>
                      </h4>
                      <p className='text-[#fff] text-[16px] sm:text-[20px] leading-[22px] font-DBheavent mb-0 w-full min-h-[28px] truncate'>Jade 680</p>
                      <div className='flex w-full h-full'>
                        <div className='max-w-[50%] flex-[1_1_auto]'>
                          {/* progress bar */}
                          <div className='h-1 border-[#fff] border-solid border-[3px] rounded-[4px] bg-transparent relative overflow-hidden w-full transition-[all] ease-[cubic-bezier(0.4,0,0.6,1)] duration-[0.2s] delay-0'>
                            {/* v-progress-linear_background */}
                            <div className='opacity-[1] left-[0.7%] w-[99.3%] bg-[#fff] border-[#fff] bottom-0 top-0 absolute transition-[inherit]'></div>
                            {/* v-progress-linear_buffer */}
                            <div className='h-[inherit] left-0 top-0 absolute transition-[inherit] w-full'></div>
                            {/* v-progress-linear_determinate */}
                            <div className='w-[0.7%] bg-[rgb(186,255,0)] border-[rgb(186,255,0)] absolute transition-[inherit] h-[inherit] left-0'></div>
                          </div>
                          {/* captions */}
                          <div className='mt-2 text-[#8f8f8f] text-[16px] sm:text-[20px] leading-[22px] font-DBheavent'> 1000 LEFT </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card_promotion_action */}
                  <div className='z-[6] flex flex-wrap gap-2 w-auto items-center justify-end absolute bottom-2 right-[4px] sm:bottom-2 sm:right-2'>
                    <a href="https://gameon.ais.co.th/games/valorant-pid-633ff5c7077a1c0012aecbf4">
                      <span className='mx-1 sm:mx-2 bg-[rgba(8,8,8,0.5)] border-primary border-[1px] h-8 w-[50px] sm:w-[60px] font-DBheavent text-base text-[12px] leading-[22px] text-[#fff] rounded-[8px] flex items-center justify-center cursor-pointer'> Top Up </span>
                    </a>
                    <button className='bg-white h-[30px] w-[30px] cursor-pointer rounded-full items-center inline-flex font-medium justify-center bg-transparent border-none'>
                      <span className='items-center align-middle flex flex-[1_0_auto] justify-center transition-[opacity]'>
                        <img className='w-4 h-4' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAALHSURBVHjarJVPSBx3HMU/M4qy4mZBexLyGzpCRKx/BqGHsiJIKLug5BbJ0mikEUJPbdEczDFHBcFcUu0at6yHtuQUxw0i5CDklENJAkkIGhbBgMlB4hKi1Xm57ARd1CS4D77wZr7ze2++fOH3LGMMB5HP578HfgbOA2eBD8ALIAfcBizgMnABOAecAV4DD4A/gIeHBI0xGGOQVCspKynQ8XhfrJMwLykmCUmE4jFJjySpUChoampKiURCTU1Nam1tVSqVku/7CoJAQRDI930NDg6qublZruuqp6dH09PT2t3dDU3+k/SNJCxjDPl8/m/g4traGgMDA6yvr3MUkskkALlc7si+67qk02lc1wVYAPosSXFgpVAokEgkjhX/UjQ0NLC0tEQ0GgX40QauAqTT6VOLA2xsbDAzMxM+XrGBOMDCwgLlgu/7If3BkhQAVmNjI3t7e2UxqKysZHV1FSCwgf8BqqqqyjZBdXV1SHds4BlAe3t72QxaWlpC+tIG7gH09fWVzaC3tzeki5ak74An29vbxONxtra2TiVeV1fHysoKtbW1AO224zhPgfvRaJSxsbFT//3IyEgongMe28X3vwI7/f39B8f7aiSTSVKpFMAO8DuADeA4zgvgF4CJiQk8z/tqcc/zmJycxLIsgOvA808GRZNZ4FYkEiGTydDZ2fnF4h0dHWQyGSKRCMCfwFTYs0u+/Q24G4vFyGazdHd3f1a8q6uL+fl5YrEYwD/AtYP9QwaO4+wDl4BsTU0Ns7OzDA8Ph2MfgmVZDA0NMTc3Fy71FpAC9o8MnIMlyZJ0MwyfxcVFtbW1yRgjY4w8z9Py8nJ49weSboQBU1pWaWSWxOcF4C/gzObmJqOjo1RUVDA+Pk59fT3Au+Jt/O9xGicaFE2+Be4ApQt5CPwEvDrpvP25JTqO8wroAUaAN8DbIu8q9k7ExwEAPP9uK0iUcMQAAAAASUVORK5CYII=" alt="gameon" />
                      </span>
                    </button>
                    <button className='mx-2 bg-white h-[30px] w-[30px] cursor-pointer rounded-full items-center align-middle inline-flex font-medium justify-center bg-transparent border-none'>
                      <span>
                        <img className='w-4 h-4 items-center align-middle justify-center' src="//icons.veryicon.com/png/o/miscellaneous/home-ams-icon-library/ic_share.png" alt="gameon" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              {/* col-4 */}
              <div className='px-2 pb-2 sm:pt-2 z-[1] lg:w-1/2 w-full h-full sm:w-1/2 max-w-full'>
                {/* card */}
                <div className='aspect-square overflow-hidden bottom-0 relative rounded-[0px] border-[thin] block max-w-full outline-none decoration-[none] transition-[box-shadow,opacity] break-words whitespace-normal'>
                  {/* thumnail */}
                  <div className='rounded-t-[inherit] overflow-hidden relative flex max-w-full z-0'>
                    {/* responsive_sizer */}
                    <div className='pb-[100%] transition-[padding-bottom] ease-[cubic-bezier(0.25,0.8,0.5,1)] duration-[0.2s] delay-0 flex-[1_0_0px]'></div>
                    {/* image */}
                    <div className='z-[-1] absolute top-0 left-0 w-full h-full ' style={{ backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
                      <img src="https://gameon.ais.co.th/api/cms-data-service/product/b72a9aaf-7d25-4c6a-b58c-1aedd77a35c0-ign-GameOn-thumbnail_LoL-5.jpg" alt="" />
                    </div>
                    {/* responsive_content */}
                    <div className='ml-[-100%] flex-[1_0_0px] max-w-[100%]'></div>
                  </div>
                  {/* overlay */}
                  <div className='z-[5] h-[33.33333%] top-[unset] min-h-[200px] p-[20px] items-start pointer-events-auto absolute rounded-[inherit] flex justify-center left-0 right-0 bottom-0 transition-[all,z-index] ease-cubic-bezier(0.25,0.8,0.5,1) duration-[0.3s,0s]'>
                    {/* overlay_scrim */}
                    <div className='opacity-[0.5] bg-[#000] border-[#000] rounded-[inherit] h-full w-full absolute transition-[inherit] will-change-[opacity]'></div>
                    {/* overlay_content */}
                    <div className='w-full h-full relative  whitespace-normal break-words mt-2'>
                      <div className='text-[#fff] font-DBheavent text-[18px] sm:text-[22px] leading-[22px] min-h-[28px] flex items-center gap-1 truncate'>
                        <span> SALE NOW </span>
                        {/* chip */}
                        <div>
                          <CountdownChip />
                        </div>
                      </div>
                      <h3 className='text-[#fff] text-[18px] sm:text-[22px] leading-[38px] font-DBheavent font-bold overflow-hidden truncate w-full min-h-[38px]' style={{ '-webkit-line-clamp': '2', 'display': '-webkit-box', '-webkit-box-orient': 'vertical' }}> League of Legends (PC) </h3>
                      <h4 className='flex text-[#fff] text-[18px] sm:text-[22px] leading-[28px] font-DBheavent font-bold w-full min-h-[30px]' style={{'unicodeBidi': 'isolate' }}>
                        <span className='line-through decoration-[red]'>฿290</span>
                          <p className='mx-2 items-center inline-flex text-[12px] sm:text-[14px] justify-center relative align-middle transition-[all,visibility] ease-cubic-bezier(0.25,0.8,0.5,1) duration-[0.3s,0s] delay-0' style={{'fontFeatureSettings': 'liga', 'letterSpacing': 'normal', 'lineHeight': '1', 'textIndent': '0', 'userSelect': 'none'}}>{'>'}</p>
                        <span className='text-primary'>฿275.5</span>
                      </h4>
                      <p className='text-[#fff] text-[16px] sm:text-[20px] leading-[22px] font-DBheavent mb-0 w-full min-h-[28px] truncate'>LoL 1380 RP</p>
                      <div className='flex w-full h-full'>
                        <div className='max-w-[50%] flex-[1_1_auto]'>
                          {/* progress bar */}
                          <div className='h-1 border-[#fff] border-solid border-[3px] rounded-[4px] bg-transparent relative overflow-hidden w-full transition-[all] ease-[cubic-bezier(0.4,0,0.6,1)] duration-[0.2s] delay-0'>
                            {/* v-progress-linear_background */}
                            <div className='opacity-[1] left-[0.7%] w-[99.3%] bg-[#fff] border-[#fff] bottom-0 top-0 absolute transition-[inherit]'></div>
                            {/* v-progress-linear_buffer */}
                            <div className='h-[inherit] left-0 top-0 absolute transition-[inherit] w-full'></div>
                            {/* v-progress-linear_determinate */}
                            <div className='w-[0.7%] bg-[rgb(186,255,0)] border-[rgb(186,255,0)] absolute transition-[inherit] h-[inherit] left-0'></div>
                          </div>
                          {/* captions */}
                          <div className='mt-2 text-[#8f8f8f] text-[16px] sm:text-[20px] leading-[22px] font-DBheavent'> 990 LEFT </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card_promotion_action */}
                  <div className='z-[6] flex flex-wrap gap-2 w-auto items-center justify-end absolute bottom-2 right-[4px] sm:bottom-2 sm:right-2'>
                    <a href="https://gameon.ais.co.th/games/valorant-pid-633ff5c7077a1c0012aecbf4">
                      <span className='mx-1 sm:mx-2 bg-[rgba(8,8,8,0.5)] border-primary border-[1px] h-8 w-[50px] sm:w-[60px] font-DBheavent text-base text-[12px] leading-[22px] text-[#fff] rounded-[8px] flex items-center justify-center cursor-pointer'> Top Up </span>
                    </a>
                    <button className='bg-white h-[30px] w-[30px] cursor-pointer rounded-full items-center inline-flex font-medium justify-center bg-transparent border-none'>
                      <span className='items-center align-middle flex flex-[1_0_auto] justify-center transition-[opacity]'>
                        <img className='w-4 h-4' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAALHSURBVHjarJVPSBx3HMU/M4qy4mZBexLyGzpCRKx/BqGHsiJIKLug5BbJ0mikEUJPbdEczDFHBcFcUu0at6yHtuQUxw0i5CDklENJAkkIGhbBgMlB4hKi1Xm57ARd1CS4D77wZr7ze2++fOH3LGMMB5HP578HfgbOA2eBD8ALIAfcBizgMnABOAecAV4DD4A/gIeHBI0xGGOQVCspKynQ8XhfrJMwLykmCUmE4jFJjySpUChoampKiURCTU1Nam1tVSqVku/7CoJAQRDI930NDg6qublZruuqp6dH09PT2t3dDU3+k/SNJCxjDPl8/m/g4traGgMDA6yvr3MUkskkALlc7si+67qk02lc1wVYAPosSXFgpVAokEgkjhX/UjQ0NLC0tEQ0GgX40QauAqTT6VOLA2xsbDAzMxM+XrGBOMDCwgLlgu/7If3BkhQAVmNjI3t7e2UxqKysZHV1FSCwgf8BqqqqyjZBdXV1SHds4BlAe3t72QxaWlpC+tIG7gH09fWVzaC3tzeki5ak74An29vbxONxtra2TiVeV1fHysoKtbW1AO224zhPgfvRaJSxsbFT//3IyEgongMe28X3vwI7/f39B8f7aiSTSVKpFMAO8DuADeA4zgvgF4CJiQk8z/tqcc/zmJycxLIsgOvA808GRZNZ4FYkEiGTydDZ2fnF4h0dHWQyGSKRCMCfwFTYs0u+/Q24G4vFyGazdHd3f1a8q6uL+fl5YrEYwD/AtYP9QwaO4+wDl4BsTU0Ns7OzDA8Ph2MfgmVZDA0NMTc3Fy71FpAC9o8MnIMlyZJ0MwyfxcVFtbW1yRgjY4w8z9Py8nJ49weSboQBU1pWaWSWxOcF4C/gzObmJqOjo1RUVDA+Pk59fT3Au+Jt/O9xGicaFE2+Be4ApQt5CPwEvDrpvP25JTqO8wroAUaAN8DbIu8q9k7ExwEAPP9uK0iUcMQAAAAASUVORK5CYII=" alt="gameon" />
                      </span>
                    </button>
                    <button className='mx-2 bg-white h-[30px] w-[30px] cursor-pointer rounded-full items-center align-middle inline-flex font-medium justify-center bg-transparent border-none'>
                      <span>
                        <img className='w-4 h-4 items-center align-middle justify-center' src="//icons.veryicon.com/png/o/miscellaneous/home-ams-icon-library/ic_share.png" alt="gameon" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* row */}
            <div className='flex flex-wrap flex-[1_1_auto] h-full w-full'>
              {/* col-12 */}
              <div className='px-2 pb-2 sm:pt-2 z-[1] w-full sm:w-1/2 max-w-full'>
                {/* card */}
                <div className='aspect-[unset] overflow-hidden bg-[#1e1e1e] text-[#fff] rounded-none border-[#1e1e1e] border-[thin] block max-w-100% outline-none transition-[opacity,box-shadow] relative whitespace-normal'>
                  {/* row */}
                  <div className='flex flex-wrap flex-[1_1_auto] h-full w-full'>
                    {/* col-6 */}
                    <div className='p-0 z-[1] w-[41%] sm:w-1/2'>
                      {/* image responsive */}
                      <div className='text-[#fff] relative overflow-hidden flex-[1_0_auto] w-full flex z-[0] h-full'>
                        {/* image */}
                        <div className=''>
                          <img src="https://gameon.ais.co.th/api/cms-data-service/product/e01eba68-39b7-42c4-9a95-1773e3971e5e-ign-eggy-party.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    {/* col-6 */}
                    <div className='p-2 z-[1] sm:w-1/2'>
                      {/* promotion_inner */}
                      <div className='w-full h-full relative flex flex-col gap-1 whitespace-normal break-words sm:pl-2'>
                        <div className='text-[#fff] font-DBheavent sm:text-[22px] text-[12px] leading-[28px] h-[16px] sm:min-h-[38px] flex items-center gap-1'>
                          <span> SALE NOW </span>
                          {/* chip */}
                          <div>
                            <div>
                              <CountdownChip />
                            </div>
                          </div>
                        </div>
                        {/* card-promotion-title */}   
                        <div className=''>
                          <h3 className='text-[#fff] text-[12px] sm:text-[22px] leading-[12px] sm:leading-[30px] font-DBheavent font-bold overflow-hidden truncate w-full h-[14px] sm:min-h-[38px] ' style={{ '-webkit-line-clamp': '2', 'display': '-webkit-box', '-webkit-box-orient': 'vertical' }}> Eggy Party </h3>
                          <h4 className='flex text-[#fff] text-[12px] sm:text-[22px] leading-[16px] sm:leading-[28px] font-DBheavent font-bold w-full h-[16px] sm:min-h-[28px]' style={{'unicodeBidi': 'isolate' }}>
                            <span className='line-through decoration-[red] text-[14px] sm:text-[24px]'>฿60</span>
                              <p className='mx-1 items-center inline-flex text-[10px] sm:text-[14px] justify-center relative align-middle transition-all duration-300' style={{'fontFeatureSettings': 'liga', 'letterSpacing': 'normal', 'lineHeight': '1', 'textIndent': '0', 'userSelect': 'none'}}>{'>'}</p>
                            <span className='text-primary text-[14px] sm:text-[24px]'>฿49.8</span>
                          </h4>                        
                        </div>                   
                        <p className='text-[#fff] text-[14px] sm:text-[20px] leading-[14px] sm:leading-[20px] [ font-DBheavent mb-0 w-full h-[16px] sm:h-[24px] truncate'>120 eggy coins</p>
                        <div className='flex w-full h-2 items-center sm:flex-col sm:items-start'>
                          <div className='w-1/2'>
                            {/* progress bar */}
                            <div className=' border-[#fff] border-solid border-[3px] rounded-[4px] bg-transparent relative overflow-hidden w-full transition-all duration-200'></div>
                          </div>
                            {/* captions */}
                          <div className=' text-[#8f8f8f] text-[12px] sm:text-[20px] leading-[14px] sm:leading-[22px] font-DBheavent ml-2 sm:mt-2 sm:ml-0'> 1000 LEFT </div>
                        </div>
                        {/* card_promotion_action */}
                        <div className='z-[6] flex flex-wrap gap-2 w-auto items-center justify-end absolute sm:right-0 sm:bottom-2 bottom-[-2px] right-[-8px]'>
                          <a href="https://gameon.ais.co.th/games/valorant-pid-633ff5c7077a1c0012aecbf4">
                            <span className='mx-2 bg-[rgba(8,8,8,0.5)] border-primary border-[1px] h-6 sm:h-10 min-w-[50px] sm:min-w-[90px] font-DBheavent text-base text-[12px] sm:text-[22px] leading-[22px] text-[#fff] rounded-[8px] flex items-center justify-center cursor-pointer'> Top Up </span>
                          </a>
                          <button className='bg-white h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] cursor-pointer rounded-full items-center inline-flex font-medium justify-center bg-transparent border-none'>
                            <span className='items-center align-middle flex flex-[1_0_auto] justify-center transition-[opacity]'>
                              <img className='w-3 h-3 sm:w-6 sm:h-6'  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAALHSURBVHjarJVPSBx3HMU/M4qy4mZBexLyGzpCRKx/BqGHsiJIKLug5BbJ0mikEUJPbdEczDFHBcFcUu0at6yHtuQUxw0i5CDklENJAkkIGhbBgMlB4hKi1Xm57ARd1CS4D77wZr7ze2++fOH3LGMMB5HP578HfgbOA2eBD8ALIAfcBizgMnABOAecAV4DD4A/gIeHBI0xGGOQVCspKynQ8XhfrJMwLykmCUmE4jFJjySpUChoampKiURCTU1Nam1tVSqVku/7CoJAQRDI930NDg6qublZruuqp6dH09PT2t3dDU3+k/SNJCxjDPl8/m/g4traGgMDA6yvr3MUkskkALlc7si+67qk02lc1wVYAPosSXFgpVAokEgkjhX/UjQ0NLC0tEQ0GgX40QauAqTT6VOLA2xsbDAzMxM+XrGBOMDCwgLlgu/7If3BkhQAVmNjI3t7e2UxqKysZHV1FSCwgf8BqqqqyjZBdXV1SHds4BlAe3t72QxaWlpC+tIG7gH09fWVzaC3tzeki5ak74An29vbxONxtra2TiVeV1fHysoKtbW1AO224zhPgfvRaJSxsbFT//3IyEgongMe28X3vwI7/f39B8f7aiSTSVKpFMAO8DuADeA4zgvgF4CJiQk8z/tqcc/zmJycxLIsgOvA808GRZNZ4FYkEiGTydDZ2fnF4h0dHWQyGSKRCMCfwFTYs0u+/Q24G4vFyGazdHd3f1a8q6uL+fl5YrEYwD/AtYP9QwaO4+wDl4BsTU0Ns7OzDA8Ph2MfgmVZDA0NMTc3Fy71FpAC9o8MnIMlyZJ0MwyfxcVFtbW1yRgjY4w8z9Py8nJ49weSboQBU1pWaWSWxOcF4C/gzObmJqOjo1RUVDA+Pk59fT3Au+Jt/O9xGicaFE2+Be4ApQt5CPwEvDrpvP25JTqO8wroAUaAN8DbIu8q9k7ExwEAPP9uK0iUcMQAAAAASUVORK5CYII=" alt="gameon" />
                            </span>
                          </button>
                          <button className='mx-2 bg-white h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] cursor-pointer rounded-full items-center align-middle inline-flex font-medium justify-center bg-transparent border-none'>
                            <span>
                              <img className='w-3 h-3 sm:w-6 sm:h-6 items-center align-middle justify-center' src="//icons.veryicon.com/png/o/miscellaneous/home-ams-icon-library/ic_share.png" alt="gameon" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* col-12 */}
              <div className='px-2 pb-2 sm:pt-2 z-[1] w-full sm:w-1/2 '>
                {/* card */}
                <div className='mb-2 overflow-hidden bg-[#1e1e1e] text-[#fff] rounded-none border-[#1e1e1e] border-[thin] block outline-none transition-[opacity,box-shadow] relative whitespace-normal'>
                  {/* row */}
                  <div className='flex flex-wrap justify-between h-full w-full'>
                    {/* col-6 */}
                    <div className='p-2 z-[1] sm:w-1/2'>
                      {/* promotion_inner */}
                      <div className='w-full h-full relative flex flex-col gap-1 whitespace-normal break-words sm:pl-2'>
                        <div className='text-[#fff] font-DBheavent sm:text-[22px] text-[12px] leading-[18px] h-[18px] sm:min-h-[38px] flex items-center gap-1 truncate'>
                          <span> SALE NOW </span>
                          {/* chip */}
                          <div>
                           <CountdownChip/>
                          </div>
                        </div>
                        <div className=''>
                          <h3 className='text-[#fff] text-[12px] sm:text-[22px] leading-[12px] sm:leading-[30px]  font-DBheavent font-bold overflow-hidden truncate w-full h-[16px] sm:min-h-[38px]' style={{ '-webkit-line-clamp': '2', 'display': '-webkit-box', '-webkit-box-orient': 'vertical' }}> TFT: Teamfight Tactics </h3>
                          <h4 className='flex text-[#fff] text-[10px] sm:text-[22px] leading-[14px] sm:leading-[28px] font-DBheavent font-bold w-full h-[14px] sm:min-h-[28px]' style={{'unicodeBidi': 'isolate' }}>
                            <span className='line-through decoration-[red] text-[14px] sm:text-[24px]'>฿290</span>
                              <p className='mx-1 items-center inline-flex text-[10px] sm:text-[14px] justify-center relative align-middle transition-all duration-300' style={{'fontFeatureSettings': 'liga', 'letterSpacing': 'normal', 'lineHeight': '1', 'textIndent': '0', 'userSelect': 'none'}}>{'>'}</p>
                            <span className='text-primary text-[14px] sm:text-[24px]'>฿275.5</span>
                          </h4>                        
                        </div>
                        <p className='text-[#fff] text-[14px] sm:text-[20px] leading-[12px] sm:leading-[28px] font-DBheavent mb-0 w-full h-[16px] sm:min-h-[28px] truncate'>1380 TFT Coins</p>
                        <div className='flex w-full h-1 items-center sm:flex-col sm:items-start'>
                          <div className='w-1/2'>
                            {/* progress bar */}
                            <div className='h-1 border-[#fff] border-solid border-[3px] rounded-[4px] bg-transparent relative overflow-hidden w-full transition-[all] ease-[cubic-bezier(0.4,0,0.6,1)] duration-[0.2s] delay-0'></div>
                          </div>
                            {/* captions */}
                            <div className='text-[#8f8f8f] text-[12px] sm:text-[20px] leading-[14px] sm:leading-[22px] font-DBheavent ml-2 sm:mt-2 sm:ml-0'> 998 LEFT </div>
                        </div>                        
                        {/* card_promotion_action */}
                        <div className='z-[6] flex flex-wrap gap-2 w-auto items-center justify-start absolute sm:left-0 sm:bottom-2 bottom-[-4px] left-[-8px]'>
                          <a href="https://gameon.ais.co.th/games/valorant-pid-633ff5c7077a1c0012aecbf4">
                            <span className='mx-2 bg-[rgba(8,8,8,0.5)] border-primary border-[1px] h-6 sm:h-10 min-w-[50px] sm:min-w-[90px] font-DBheavent text-base text-[12px] sm:text-[22px] leading-[22px] text-[#fff] rounded-[8px] flex items-center justify-center cursor-pointer'> Top Up </span>
                          </a>
                          <button className='bg-white h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] cursor-pointer rounded-full items-center inline-flex font-medium justify-center bg-transparent border-none'>
                            <span className='items-center align-middle flex flex-[1_0_auto] justify-center transition-[opacity]'>
                              <img className='w-3 h-3 sm:w-6 sm:h-6' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAALHSURBVHjarJVPSBx3HMU/M4qy4mZBexLyGzpCRKx/BqGHsiJIKLug5BbJ0mikEUJPbdEczDFHBcFcUu0at6yHtuQUxw0i5CDklENJAkkIGhbBgMlB4hKi1Xm57ARd1CS4D77wZr7ze2++fOH3LGMMB5HP578HfgbOA2eBD8ALIAfcBizgMnABOAecAV4DD4A/gIeHBI0xGGOQVCspKynQ8XhfrJMwLykmCUmE4jFJjySpUChoampKiURCTU1Nam1tVSqVku/7CoJAQRDI930NDg6qublZruuqp6dH09PT2t3dDU3+k/SNJCxjDPl8/m/g4traGgMDA6yvr3MUkskkALlc7si+67qk02lc1wVYAPosSXFgpVAokEgkjhX/UjQ0NLC0tEQ0GgX40QauAqTT6VOLA2xsbDAzMxM+XrGBOMDCwgLlgu/7If3BkhQAVmNjI3t7e2UxqKysZHV1FSCwgf8BqqqqyjZBdXV1SHds4BlAe3t72QxaWlpC+tIG7gH09fWVzaC3tzeki5ak74An29vbxONxtra2TiVeV1fHysoKtbW1AO224zhPgfvRaJSxsbFT//3IyEgongMe28X3vwI7/f39B8f7aiSTSVKpFMAO8DuADeA4zgvgF4CJiQk8z/tqcc/zmJycxLIsgOvA808GRZNZ4FYkEiGTydDZ2fnF4h0dHWQyGSKRCMCfwFTYs0u+/Q24G4vFyGazdHd3f1a8q6uL+fl5YrEYwD/AtYP9QwaO4+wDl4BsTU0Ns7OzDA8Ph2MfgmVZDA0NMTc3Fy71FpAC9o8MnIMlyZJ0MwyfxcVFtbW1yRgjY4w8z9Py8nJ49weSboQBU1pWaWSWxOcF4C/gzObmJqOjo1RUVDA+Pk59fT3Au+Jt/O9xGicaFE2+Be4ApQt5CPwEvDrpvP25JTqO8wroAUaAN8DbIu8q9k7ExwEAPP9uK0iUcMQAAAAASUVORK5CYII=" alt="gameon" />
                            </span>
                          </button>
                          <button className='mx-2 bg-white h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] cursor-pointer rounded-full items-center align-middle inline-flex font-medium justify-center bg-transparent border-none'>
                            <span>
                              <img className='w-3 h-3 sm:w-6 sm:h-6 items-center align-middle justify-center' src="//icons.veryicon.com/png/o/miscellaneous/home-ams-icon-library/ic_share.png" alt="gameon" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* col-6 */}
                    <div className='z-[1] w-[41%] sm:w-1/2'>
                      {/* thumnail */}
                      <div className='text-[#fff] relative overflow-hidden flex-[1_0_auto] max-w-full flex z-[0] h-full'>
                          <div className='' style={{ backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
                            <img src="https://gameon.ais.co.th/api/cms-data-service/product/a176adf3-b6c0-4940-b603-8dc356116813-ign-GameOn-thumbnail_TFT-5.jpg" alt="" />
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Flash
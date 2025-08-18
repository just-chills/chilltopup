import React from 'react'

function Flash() {
  return (
    <>
      {/* promotion */}
      <div className='container flex justify-center items-center'>
        {/* img section */}
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        {/* container */}
        <div className='w-full px-[12px] mx-[280px] '>
          {/* header */}
          <div className="text-center pb-4">
            <h1 className='text-[#000] text-[70px] leading-[72px] font-bold'>FLASH SALE</h1>
            <div className='flex justify-center'>
              {/* underline */}
              <div className='w-[180px] border-[6px] mt-3 border-primary'></div>
            </div>
          </div>
          <div>
            {/* row */}
            <div className='flex gap-3 mb-4'>
              {/* col */}
              <div className='bg-[#D9D9D9]'>
                {/* card */}
                <div>
                  {/* thumnail */}
                  <div>
                    {/* responsive sizer */}
                    <div>

                    </div>
                    {/* image */}
                    <div className='w-[664px]'>
                      <img src="https://gameon.ais.co.th/api/cms-data-service/product/461d6a18-8275-4d53-bb97-7db604144b4f-ign-GameOn-thumbnail_Valorant-5.jpg" alt="" />
                    </div>
                    {/* responsive_contetnt */}
                    <div></div>
                  </div>
                  {/* overlay */}
                  <div>
                    {/* overlay_scrim */}
                    <div></div>
                      {/* overlay_content */}
                      <div>
                        <div className='flex text-[#fff] text-[22px] leading-[22px] font-heavent font-bold'>
                          <span>SALE NOW</span>
                          {/* chip */}
                          <span className='ml-2'>
                            {/* chip_content */}
                            <span>
                              <p>93</p>
                            </span>
                          </span>
                          " : "
                          {/* chip */}
                          <span>
                            {/* chip_content */}
                            <span>
                              <p>54</p>
                            </span>
                          </span> 
                          " : "
                          {/* chip */}
                          <span>
                            {/* chip_content */}
                            <span>
                              <p>23</p>
                            </span>
                          </span>
                        </div>
                        {/* card_promotion_title */}
                        <h3 className='text-[#fff] text-[36px] leading-[36px] font-heavent font-bold'>VALORANT</h3>
                        <h4 className='flex text-[#fff] text-[32px] leading-[32px] font-heavent font-bold'>
                          <span>฿260</span>
                            <p>{'>'}</p>
                          <span className='text-primary'>฿247</span>
                        </h4>
                        <p className='text-[#fff] text-[24px] leading-[26px] font-heavent font-bold'>1000 VP</p>
                        <div>
                          <div>
                            {/* progress bar */}
                            <div>
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                            <div className='text-[#fff] text-[20px] leading-[40px] font-heavent font-bold'> 997 LEFT </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                {/* card promotion action */}
                <div>
                  <a href="">
                    <span className='mx-2 text-[#fff] text-[22px] leading-[22px] font-heavent font-bold'> Top Up </span>
                  </a>
                  <button className='mx-2'>
                    <span>
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAALHSURBVHjarJVPSBx3HMU/M4qy4mZBexLyGzpCRKx/BqGHsiJIKLug5BbJ0mikEUJPbdEczDFHBcFcUu0at6yHtuQUxw0i5CDklENJAkkIGhbBgMlB4hKi1Xm57ARd1CS4D77wZr7ze2++fOH3LGMMB5HP578HfgbOA2eBD8ALIAfcBizgMnABOAecAV4DD4A/gIeHBI0xGGOQVCspKynQ8XhfrJMwLykmCUmE4jFJjySpUChoampKiURCTU1Nam1tVSqVku/7CoJAQRDI930NDg6qublZruuqp6dH09PT2t3dDU3+k/SNJCxjDPl8/m/g4traGgMDA6yvr3MUkskkALlc7si+67qk02lc1wVYAPosSXFgpVAokEgkjhX/UjQ0NLC0tEQ0GgX40QauAqTT6VOLA2xsbDAzMxM+XrGBOMDCwgLlgu/7If3BkhQAVmNjI3t7e2UxqKysZHV1FSCwgf8BqqqqyjZBdXV1SHds4BlAe3t72QxaWlpC+tIG7gH09fWVzaC3tzeki5ak74An29vbxONxtra2TiVeV1fHysoKtbW1AO224zhPgfvRaJSxsbFT//3IyEgongMe28X3vwI7/f39B8f7aiSTSVKpFMAO8DuADeA4zgvgF4CJiQk8z/tqcc/zmJycxLIsgOvA808GRZNZ4FYkEiGTydDZ2fnF4h0dHWQyGSKRCMCfwFTYs0u+/Q24G4vFyGazdHd3f1a8q6uL+fl5YrEYwD/AtYP9QwaO4+wDl4BsTU0Ns7OzDA8Ph2MfgmVZDA0NMTc3Fy71FpAC9o8MnIMlyZJ0MwyfxcVFtbW1yRgjY4w8z9Py8nJ49weSboQBU1pWaWSWxOcF4C/gzObmJqOjo1RUVDA+Pk59fT3Au+Jt/O9xGicaFE2+Be4ApQt5CPwEvDrpvP25JTqO8wroAUaAN8DbIu8q9k7ExwEAPP9uK0iUcMQAAAAASUVORK5CYII=" alt="gameon" />
                    </span>
                  </button>
                  <button className='mx-2'>
                    <span>
                      <img className='w-9 h-9' src="//icons.veryicon.com/png/o/miscellaneous/home-ams-icon-library/ic_share.png" alt="gameon" />
                    </span>
                  </button>
                </div>
              </div>
              {/* col-md-6 col-12 */}
              <div>
                {/* contain-merge */}
                <div className='grid gap-4'>
                  {/* card */}
                  <div>
                    {/* row */}
                    <div className='flex gap-4'>
                      {/* col col-6 */}
                      <div>
                        {/* image responsive */}
                        <div>
                          {/* responsive_sizer */}
                          <div></div>
                          {/* image */}
                          <div className='w-[332px]'>
                            <img src="https://gameon.ais.co.th/api/cms-data-service/product/cea62c2f-3d82-4e41-b6dc-d0973fba3831-ign-240524-FC-mobile-logo.png" alt="" />
                          </div>
                          {/* responsive_contetnt */}
                          <div></div>
                        </div>
                      </div>
                      {/* col col-6 */}
                      <div className='bg-[#D9D9D9]'>
                        {/* promotion-inner */}
                        <div >
                          <div className='flex text-[#fff] text-[22px] leading-[22px] font-heavent font-bold'>
                            <span> SALE NOW </span>
                            {/* chip */}
                            <span className='ml-2'>
                              {/* chip_content */}
                              <span>
                                <p>82</p>
                              </span>
                            </span>
                            " - "
                            {/* chip */}
                            <span>
                              {/* chip_content */}
                              <span>
                                <p>08</p>
                              </span>
                            </span>
                            " - "
                            {/* chip */}
                            <span>
                              {/* chip_content */}
                              <span>
                                <p>42</p>
                              </span>
                            </span>
                          </div>
                          {/* card-promotion-title */}
                          <h3 className='text-[#fff] text-[36px] leading-[36px] font-heavent font-bold'> EA SPORTS FC™ MOBILE 24 </h3>
                          <h4 className='flex text-[#fff] text-[32px] leading-[32px] font-heavent font-bold'>
                            <span>฿179</span>
                              <p>{'>'}</p>
                            <span className='text-primary'>฿170.05</span>
                          </h4>
                          <p className='text-[#fff] text-[24px] leading-[26px] font-heavent font-bold'> 520 FC POINTS </p>
                          <div>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                          {/* captions */}
                          <div className='text-[#fff] text-[20px] leading-[40px] font-heavent font-bold'> 1000 LEFT </div>
                          {/* card_promotion_action */}
                          <div>
                            <a href="">
                              <span className='mx-2 text-[#fff] text-[22px] leading-[22px] font-heavent font-bold'> Top Up </span>
                            </a>
                            <button className='mx-2'>
                              <span>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAALHSURBVHjarJVPSBx3HMU/M4qy4mZBexLyGzpCRKx/BqGHsiJIKLug5BbJ0mikEUJPbdEczDFHBcFcUu0at6yHtuQUxw0i5CDklENJAkkIGhbBgMlB4hKi1Xm57ARd1CS4D77wZr7ze2++fOH3LGMMB5HP578HfgbOA2eBD8ALIAfcBizgMnABOAecAV4DD4A/gIeHBI0xGGOQVCspKynQ8XhfrJMwLykmCUmE4jFJjySpUChoampKiURCTU1Nam1tVSqVku/7CoJAQRDI930NDg6qublZruuqp6dH09PT2t3dDU3+k/SNJCxjDPl8/m/g4traGgMDA6yvr3MUkskkALlc7si+67qk02lc1wVYAPosSXFgpVAokEgkjhX/UjQ0NLC0tEQ0GgX40QauAqTT6VOLA2xsbDAzMxM+XrGBOMDCwgLlgu/7If3BkhQAVmNjI3t7e2UxqKysZHV1FSCwgf8BqqqqyjZBdXV1SHds4BlAe3t72QxaWlpC+tIG7gH09fWVzaC3tzeki5ak74An29vbxONxtra2TiVeV1fHysoKtbW1AO224zhPgfvRaJSxsbFT//3IyEgongMe28X3vwI7/f39B8f7aiSTSVKpFMAO8DuADeA4zgvgF4CJiQk8z/tqcc/zmJycxLIsgOvA808GRZNZ4FYkEiGTydDZ2fnF4h0dHWQyGSKRCMCfwFTYs0u+/Q24G4vFyGazdHd3f1a8q6uL+fl5YrEYwD/AtYP9QwaO4+wDl4BsTU0Ns7OzDA8Ph2MfgmVZDA0NMTc3Fy71FpAC9o8MnIMlyZJ0MwyfxcVFtbW1yRgjY4w8z9Py8nJ49weSboQBU1pWaWSWxOcF4C/gzObmJqOjo1RUVDA+Pk59fT3Au+Jt/O9xGicaFE2+Be4ApQt5CPwEvDrpvP25JTqO8wroAUaAN8DbIu8q9k7ExwEAPP9uK0iUcMQAAAAASUVORK5CYII=" alt="gameon" />
                              </span>
                            </button>
                            <button className='mx-2'>
                              <span>
                                <img className='w-9 h-9' src="//icons.veryicon.com/png/o/miscellaneous/home-ams-icon-library/ic_share.png" alt="gameon" />
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div>
                    {/* row */}
                    <div className='flex gap-4 '>
                      {/* col col-6 */}
                      <div className='bg-[#d9d9d9]'>
                        {/* promotion_inner */}
                        <div >
                          <div className='flex text-[#fff] text-[22px] leading-[22px] font-heavent font-bold'>
                            <span> SALE NOW </span>
                            <span className='ml-2'>
                              <span>
                                <p>81</p>
                              </span>
                            </span>
                            " : "
                            <span>
                              <span>
                                <p>53</p>
                              </span>
                            </span>
                            - " : "<span>
                              <span>
                                <p>31</p>
                              </span>
                            </span>
                          </div>
                          {/* card_promotion_title */}
                          <h3 className='text-[#fff] text-[36px] leading-[36px] font-heavent font-bold'> Genshin Impact </h3>
                          <h4 className='flex text-[#fff] text-[32px] leading-[32px] font-heavent font-bold'>
                            <span>฿153</span>
                              <p>{'>'}</p>
                            <span className='text-primary'>฿142.29</span>
                          </h4>
                          <p className='text-[#fff] text-[24px] leading-[26px] font-heavent font-bold'> Blessing of the Welkin Moon </p>
                          {/* progress bar */}
                          <div>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                          {/* captions */}
                          <div className='text-[#fff] text-[20px] leading-[40px] font-heavent font-bold'> 999 LEFT </div>
                          {/* card_promotion_action */}
                          <div>
                            <a href="">
                              <span className='mx-2 text-[#fff] text-[22px] leading-[22px] font-heavent font-bold'> Top Up </span>
                            </a>
                            <button className='mx-2'>
                              <span>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAALHSURBVHjarJVPSBx3HMU/M4qy4mZBexLyGzpCRKx/BqGHsiJIKLug5BbJ0mikEUJPbdEczDFHBcFcUu0at6yHtuQUxw0i5CDklENJAkkIGhbBgMlB4hKi1Xm57ARd1CS4D77wZr7ze2++fOH3LGMMB5HP578HfgbOA2eBD8ALIAfcBizgMnABOAecAV4DD4A/gIeHBI0xGGOQVCspKynQ8XhfrJMwLykmCUmE4jFJjySpUChoampKiURCTU1Nam1tVSqVku/7CoJAQRDI930NDg6qublZruuqp6dH09PT2t3dDU3+k/SNJCxjDPl8/m/g4traGgMDA6yvr3MUkskkALlc7si+67qk02lc1wVYAPosSXFgpVAokEgkjhX/UjQ0NLC0tEQ0GgX40QauAqTT6VOLA2xsbDAzMxM+XrGBOMDCwgLlgu/7If3BkhQAVmNjI3t7e2UxqKysZHV1FSCwgf8BqqqqyjZBdXV1SHds4BlAe3t72QxaWlpC+tIG7gH09fWVzaC3tzeki5ak74An29vbxONxtra2TiVeV1fHysoKtbW1AO224zhPgfvRaJSxsbFT//3IyEgongMe28X3vwI7/f39B8f7aiSTSVKpFMAO8DuADeA4zgvgF4CJiQk8z/tqcc/zmJycxLIsgOvA808GRZNZ4FYkEiGTydDZ2fnF4h0dHWQyGSKRCMCfwFTYs0u+/Q24G4vFyGazdHd3f1a8q6uL+fl5YrEYwD/AtYP9QwaO4+wDl4BsTU0Ns7OzDA8Ph2MfgmVZDA0NMTc3Fy71FpAC9o8MnIMlyZJ0MwyfxcVFtbW1yRgjY4w8z9Py8nJ49weSboQBU1pWaWSWxOcF4C/gzObmJqOjo1RUVDA+Pk59fT3Au+Jt/O9xGicaFE2+Be4ApQt5CPwEvDrpvP25JTqO8wroAUaAN8DbIu8q9k7ExwEAPP9uK0iUcMQAAAAASUVORK5CYII=" alt="gameon" />
                              </span>
                            </button>
                            <button className='mx-2'>
                              <span>
                                <img className='w-9 h-9' src="//icons.veryicon.com/png/o/miscellaneous/home-ams-icon-library/ic_share.png" alt="gameon" />
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* col col-6 */}
                      <div>
                        {/* genshin logo */}
                        <div>
                          <div></div>
                          <div className='w-[332px]'>
                            <img src="https://gameon.ais.co.th/api/cms-data-service/product/eeffaed8-6f61-41b8-b76a-022ca7ce89bd-ign-genshin%20logo%20new.jpg" alt="" />
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
            <div className='flex gap-4'>
              {/* col */}
              <div className='bg-[#d9d9d9]'>
                {/* card */}
                <div >
                  {/* harry */}
                  <div>
                    <div></div>
                    <div className='w-[440px]'>
                      <img src="https://gameon.ais.co.th/api/cms-data-service/product/05b0c664-aa68-4ef8-8ee4-132fd93cdab0-ign-harry%20(1).png" alt="" />
                    </div>
                    <div></div>
                  </div>
                  {/* overlay_promotions */}
                  <div >
                    {/* overlay_scrim */}
                    <div></div>
                    {/* overlay_content */}
                    <div>
                      <div className='flex text-[#fff] text-[22px] leading-[22px] font-heavent font-bold'>
                        <span> SALE NOW </span>
                        {/* chip */}
                        <span className='ml-2'>
                          {/* chip_content */}
                          <span>
                            <p>81</p>
                          </span>
                        </span>
                        " : "
                        {/* chip */}
                        <span>
                          {/* chip_content */}
                          <span>
                            <p>17</p>
                          </span>
                        </span>
                        " : "
                        {/* chip */}
                        <span>
                          {/* chip_content */}
                          <span>
                            <p>10</p>
                          </span>
                        </span>
                      </div>
                      <h3 className='text-[#fff] text-[36px] leading-[36px] font-heavent font-bold'>Harry Potter: Magic Awakened</h3>
                      <h4 className='flex text-[#fff] text-[32px] leading-[32px] font-heavent font-bold'>
                        <span>฿179</span>
                          <p>{'>'}</p>
                        <span className='text-primary'>฿148.57</span>
                      </h4>
                      <p className='text-[#fff] text-[24px] leading-[26px] font-heavent font-bold'>300 Jewels</p>
                      <div>
                        <div>
                          {/* progress bar */}
                          <div>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                          <div className='text-[#fff] text-[20px] leading-[40px] font-heavent font-bold'> 1000 LEFT </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div>
                    <a href="">
                      <span className='mx-2 text-[#fff] text-[22px] leading-[22px] font-heavent font-bold'> Top Up </span>
                    </a>
                    <button className='mx-2'>
                      <span>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAALHSURBVHjarJVPSBx3HMU/M4qy4mZBexLyGzpCRKx/BqGHsiJIKLug5BbJ0mikEUJPbdEczDFHBcFcUu0at6yHtuQUxw0i5CDklENJAkkIGhbBgMlB4hKi1Xm57ARd1CS4D77wZr7ze2++fOH3LGMMB5HP578HfgbOA2eBD8ALIAfcBizgMnABOAecAV4DD4A/gIeHBI0xGGOQVCspKynQ8XhfrJMwLykmCUmE4jFJjySpUChoampKiURCTU1Nam1tVSqVku/7CoJAQRDI930NDg6qublZruuqp6dH09PT2t3dDU3+k/SNJCxjDPl8/m/g4traGgMDA6yvr3MUkskkALlc7si+67qk02lc1wVYAPosSXFgpVAokEgkjhX/UjQ0NLC0tEQ0GgX40QauAqTT6VOLA2xsbDAzMxM+XrGBOMDCwgLlgu/7If3BkhQAVmNjI3t7e2UxqKysZHV1FSCwgf8BqqqqyjZBdXV1SHds4BlAe3t72QxaWlpC+tIG7gH09fWVzaC3tzeki5ak74An29vbxONxtra2TiVeV1fHysoKtbW1AO224zhPgfvRaJSxsbFT//3IyEgongMe28X3vwI7/f39B8f7aiSTSVKpFMAO8DuADeA4zgvgF4CJiQk8z/tqcc/zmJycxLIsgOvA808GRZNZ4FYkEiGTydDZ2fnF4h0dHWQyGSKRCMCfwFTYs0u+/Q24G4vFyGazdHd3f1a8q6uL+fl5YrEYwD/AtYP9QwaO4+wDl4BsTU0Ns7OzDA8Ph2MfgmVZDA0NMTc3Fy71FpAC9o8MnIMlyZJ0MwyfxcVFtbW1yRgjY4w8z9Py8nJ49weSboQBU1pWaWSWxOcF4C/gzObmJqOjo1RUVDA+Pk59fT3Au+Jt/O9xGicaFE2+Be4ApQt5CPwEvDrpvP25JTqO8wroAUaAN8DbIu8q9k7ExwEAPP9uK0iUcMQAAAAASUVORK5CYII=" alt="gameon" />
                      </span>
                    </button>
                    <button className='mx-2'>
                      <span>
                        <img className='w-9 h-9' src="//icons.veryicon.com/png/o/miscellaneous/home-ams-icon-library/ic_share.png" alt="gameon" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              {/* col-4 */}
              <div className='bg-[#d9d9d9]'>
                {/* card */}
                <div >
                  {/* Onmyo */}
                  <div>
                    <div></div>
                    <div className='w-[440px]'>
                      <img src="https://gameon.ais.co.th/api/cms-data-service/product/e5725b94-c531-4fd6-af57-fa5c257d46bc-ign-Onmyo15-may25-TN.jpg" alt="" />
                    </div>
                    <div></div>
                  </div>
                  {/* overlay_promotions */}
                  <div>
                    {/* overlay_scrim */}
                    <div></div>
                    {/* overlay_content */}
                    <div>
                      <div className='flex text-[#fff] text-[22px] leading-[22px] font-heavent font-bold'>
                        <span> SALE NOW </span>
                        {/* chip */}
                        <span className='ml-2'>
                          {/* chip_content */}
                          <span>
                            <p>80</p>
                          </span>
                        </span>
                        " : "
                        {/* chip */}
                        <span>
                          {/* chip_content */}
                          <span>
                            <p>58</p>
                          </span>
                        </span>
                        " : "
                        {/* chip */}
                        <span>
                          {/* chip_content */}
                          <span>
                            <p>40</p>
                          </span>
                        </span>
                      </div>
                      <h3 className='text-[#fff] text-[36px] leading-[36px] font-heavent font-bold'> Onmyoji Arena </h3>
                      <h4 className='flex text-[#fff] text-[32px] leading-[32px] font-heavent font-bold'>
                        <span>฿300</span>
                          <p>{'>'}</p>
                        <span className='text-primary'>฿249</span>
                      </h4>
                      <p className='text-[#fff] text-[24px] leading-[26px] font-heavent font-bold'>Jade 680</p>
                      <div>
                        <div>
                          {/* progress bar */}
                          <div>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                          {/* captions */}
                          <div className='text-[#fff] text-[20px] leading-[40px] font-heavent font-bold'> 1000 LEFT </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card_promotion_action */}
                  <div>
                    <a href="">
                      <span className='mx-2 text-[#fff] text-[22px] leading-[22px] font-heavent font-bold'> Top Up </span>
                    </a>
                    <button className='mx-2'>
                      <span>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAALHSURBVHjarJVPSBx3HMU/M4qy4mZBexLyGzpCRKx/BqGHsiJIKLug5BbJ0mikEUJPbdEczDFHBcFcUu0at6yHtuQUxw0i5CDklENJAkkIGhbBgMlB4hKi1Xm57ARd1CS4D77wZr7ze2++fOH3LGMMB5HP578HfgbOA2eBD8ALIAfcBizgMnABOAecAV4DD4A/gIeHBI0xGGOQVCspKynQ8XhfrJMwLykmCUmE4jFJjySpUChoampKiURCTU1Nam1tVSqVku/7CoJAQRDI930NDg6qublZruuqp6dH09PT2t3dDU3+k/SNJCxjDPl8/m/g4traGgMDA6yvr3MUkskkALlc7si+67qk02lc1wVYAPosSXFgpVAokEgkjhX/UjQ0NLC0tEQ0GgX40QauAqTT6VOLA2xsbDAzMxM+XrGBOMDCwgLlgu/7If3BkhQAVmNjI3t7e2UxqKysZHV1FSCwgf8BqqqqyjZBdXV1SHds4BlAe3t72QxaWlpC+tIG7gH09fWVzaC3tzeki5ak74An29vbxONxtra2TiVeV1fHysoKtbW1AO224zhPgfvRaJSxsbFT//3IyEgongMe28X3vwI7/f39B8f7aiSTSVKpFMAO8DuADeA4zgvgF4CJiQk8z/tqcc/zmJycxLIsgOvA808GRZNZ4FYkEiGTydDZ2fnF4h0dHWQyGSKRCMCfwFTYs0u+/Q24G4vFyGazdHd3f1a8q6uL+fl5YrEYwD/AtYP9QwaO4+wDl4BsTU0Ns7OzDA8Ph2MfgmVZDA0NMTc3Fy71FpAC9o8MnIMlyZJ0MwyfxcVFtbW1yRgjY4w8z9Py8nJ49weSboQBU1pWaWSWxOcF4C/gzObmJqOjo1RUVDA+Pk59fT3Au+Jt/O9xGicaFE2+Be4ApQt5CPwEvDrpvP25JTqO8wroAUaAN8DbIu8q9k7ExwEAPP9uK0iUcMQAAAAASUVORK5CYII=" alt="gameon" />
                      </span>
                    </button>
                    <button className='mx-2'>
                      <span>
                        <img className='w-9 h-9' src="//icons.veryicon.com/png/o/miscellaneous/home-ams-icon-library/ic_share.png" alt="gameon" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              {/* col-4 */}
              <div className='bg-[#d9d9d9]'>
                {/* card */}
                <div >
                  {/* thumnail */}
                  <div>
                    <div></div>
                    <div className='w-[440px]'>
                      <img src="https://gameon.ais.co.th/api/cms-data-service/product/b72a9aaf-7d25-4c6a-b58c-1aedd77a35c0-ign-GameOn-thumbnail_LoL-5.jpg" alt="" />
                    </div>
                    <div></div>
                  </div>
                  {/* overlay */}
                  <div>
                    {/* overlay_scrim */}
                    <div></div>
                    {/* overlay_content */}
                    <div>
                      <div className='flex text-[#fff] text-[22px] leading-[22px] font-heavent font-bold'>
                        <span> SALE NOW </span>
                        {/* chip */}
                        <span className='ml-2'>
                          {/* chip_content */}
                          <span>
                            <p>80</p>
                          </span>
                        </span>
                        " : "
                        {/* chip */}
                        <span>
                          {/* chip_content */}
                          <span>
                            <p>49</p>
                          </span>
                        </span>
                        " : "
                        {/* chip */}
                        <span>
                          {/* chip_content */}
                          <span>
                            <p>20</p>
                          </span>
                        </span>
                      </div>
                      <h3 className='text-[#fff] text-[36px] leading-[36px] font-heavent font-bold'> League of Legends (PC) </h3>
                      <h4 className='flex text-[#fff] text-[32px] leading-[32px] font-heavent font-bold'>
                        <span>฿290</span>
                          <p>{'>'}</p>
                        <span className='text-primary'>฿275.5</span>
                      </h4>
                      <p className='text-[#fff] text-[24px] leading-[26px] font-heavent font-bold'>LoL - 1380RP</p>
                      <div>
                        <div>
                          {/* progress bar */}
                          <div>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                          {/* captions */}
                          <div className='text-[#fff] text-[20px] leading-[40px] font-heavent font-bold'> 990 LEFT </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card_promotion_action */}
                  <div>
                    <a href="">
                      <span className='mx-2 text-[#fff] text-[22px] leading-[22px] font-heavent font-bold'> Top Up </span>
                    </a>
                    <button className='mx-2'>
                      <span>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAALHSURBVHjarJVPSBx3HMU/M4qy4mZBexLyGzpCRKx/BqGHsiJIKLug5BbJ0mikEUJPbdEczDFHBcFcUu0at6yHtuQUxw0i5CDklENJAkkIGhbBgMlB4hKi1Xm57ARd1CS4D77wZr7ze2++fOH3LGMMB5HP578HfgbOA2eBD8ALIAfcBizgMnABOAecAV4DD4A/gIeHBI0xGGOQVCspKynQ8XhfrJMwLykmCUmE4jFJjySpUChoampKiURCTU1Nam1tVSqVku/7CoJAQRDI930NDg6qublZruuqp6dH09PT2t3dDU3+k/SNJCxjDPl8/m/g4traGgMDA6yvr3MUkskkALlc7si+67qk02lc1wVYAPosSXFgpVAokEgkjhX/UjQ0NLC0tEQ0GgX40QauAqTT6VOLA2xsbDAzMxM+XrGBOMDCwgLlgu/7If3BkhQAVmNjI3t7e2UxqKysZHV1FSCwgf8BqqqqyjZBdXV1SHds4BlAe3t72QxaWlpC+tIG7gH09fWVzaC3tzeki5ak74An29vbxONxtra2TiVeV1fHysoKtbW1AO224zhPgfvRaJSxsbFT//3IyEgongMe28X3vwI7/f39B8f7aiSTSVKpFMAO8DuADeA4zgvgF4CJiQk8z/tqcc/zmJycxLIsgOvA808GRZNZ4FYkEiGTydDZ2fnF4h0dHWQyGSKRCMCfwFTYs0u+/Q24G4vFyGazdHd3f1a8q6uL+fl5YrEYwD/AtYP9QwaO4+wDl4BsTU0Ns7OzDA8Ph2MfgmVZDA0NMTc3Fy71FpAC9o8MnIMlyZJ0MwyfxcVFtbW1yRgjY4w8z9Py8nJ49weSboQBU1pWaWSWxOcF4C/gzObmJqOjo1RUVDA+Pk59fT3Au+Jt/O9xGicaFE2+Be4ApQt5CPwEvDrpvP25JTqO8wroAUaAN8DbIu8q9k7ExwEAPP9uK0iUcMQAAAAASUVORK5CYII=" alt="gameon" />
                      </span>
                    </button>
                    <button className='mx-2'>
                      <span>
                        <img className='w-9 h-9' src="//icons.veryicon.com/png/o/miscellaneous/home-ams-icon-library/ic_share.png" alt="gameon" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* row */}
            <div className='flex gap-4 mt-4'>
              {/* col-12 */}
              <div className='bg-[#d9d9d9]'>
                {/* card */}
                <div >
                  <div className='flex gap-4'>
                    {/* col-6 */}
                    <div>
                      <div>
                        <div></div>
                        <div className='w-[332px]'>
                          <img src="https://gameon.ais.co.th/api/cms-data-service/product/e01eba68-39b7-42c4-9a95-1773e3971e5e-ign-eggy-party.jpg" alt="" />
                        </div>
                        <div></div>
                      </div>
                    </div>
                    {/* col-6 */}
                    <div>
                      {/* promotion_inner */}
                      <div>
                        <div className='flex text-[#fff] text-[22px] leading-[22px] font-heavent font-bold'>
                          <span> SALE NOW </span>
                          {/* chip */}
                          <span className='ml-2'>
                            {/* chip_content */}
                            <span>
                              <p>80</p>
                            </span>
                          </span>
                          " : "
                          {/* chip */}
                          <span>
                            {/* chip_content */}
                            <span>
                              <p>36</p>
                            </span>
                          </span>
                          " : "
                          {/* chip */}
                          <span>
                            {/* chip_content */}
                            <span>
                              <p>08</p>
                            </span>
                          </span>
                        </div>
                        <h3 className='text-[#fff] text-[36px] leading-[36px] font-heavent font-bold'> Eggy Party </h3>
                        <h4 className='flex text-[#fff] text-[32px] leading-[32px] font-heavent font-bold'>
                          <span>฿60</span>
                            <p>{'>'}</p>
                          <span className='text-primary'>฿49.8</span>
                        </h4>
                        <p className='text-[#fff] text-[24px] leading-[26px] font-heavent font-bold'>120 eggy coins</p>
                        {/* progress bar */}
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      {/* captions */}
                      <div className='text-[#fff] text-[20px] leading-[40px] font-heavent font-bold'> 1000 LEF </div>
                      {/* card_promotion_action */}
                      <div>
                        <a href="">
                          <span className='mx-2 text-[#fff] text-[22px] leading-[22px] font-heavent font-bold'> Top Up </span>
                        </a>
                        <button className='mx-2'>
                          <span>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAALHSURBVHjarJVPSBx3HMU/M4qy4mZBexLyGzpCRKx/BqGHsiJIKLug5BbJ0mikEUJPbdEczDFHBcFcUu0at6yHtuQUxw0i5CDklENJAkkIGhbBgMlB4hKi1Xm57ARd1CS4D77wZr7ze2++fOH3LGMMB5HP578HfgbOA2eBD8ALIAfcBizgMnABOAecAV4DD4A/gIeHBI0xGGOQVCspKynQ8XhfrJMwLykmCUmE4jFJjySpUChoampKiURCTU1Nam1tVSqVku/7CoJAQRDI930NDg6qublZruuqp6dH09PT2t3dDU3+k/SNJCxjDPl8/m/g4traGgMDA6yvr3MUkskkALlc7si+67qk02lc1wVYAPosSXFgpVAokEgkjhX/UjQ0NLC0tEQ0GgX40QauAqTT6VOLA2xsbDAzMxM+XrGBOMDCwgLlgu/7If3BkhQAVmNjI3t7e2UxqKysZHV1FSCwgf8BqqqqyjZBdXV1SHds4BlAe3t72QxaWlpC+tIG7gH09fWVzaC3tzeki5ak74An29vbxONxtra2TiVeV1fHysoKtbW1AO224zhPgfvRaJSxsbFT//3IyEgongMe28X3vwI7/f39B8f7aiSTSVKpFMAO8DuADeA4zgvgF4CJiQk8z/tqcc/zmJycxLIsgOvA808GRZNZ4FYkEiGTydDZ2fnF4h0dHWQyGSKRCMCfwFTYs0u+/Q24G4vFyGazdHd3f1a8q6uL+fl5YrEYwD/AtYP9QwaO4+wDl4BsTU0Ns7OzDA8Ph2MfgmVZDA0NMTc3Fy71FpAC9o8MnIMlyZJ0MwyfxcVFtbW1yRgjY4w8z9Py8nJ49weSboQBU1pWaWSWxOcF4C/gzObmJqOjo1RUVDA+Pk59fT3Au+Jt/O9xGicaFE2+Be4ApQt5CPwEvDrpvP25JTqO8wroAUaAN8DbIu8q9k7ExwEAPP9uK0iUcMQAAAAASUVORK5CYII=" alt="gameon" />
                          </span>
                        </button>
                        <button className='mx-2'>
                          <span>
                            <img className='w-9 h-9' src="//icons.veryicon.com/png/o/miscellaneous/home-ams-icon-library/ic_share.png" alt="gameon" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* col-12 */}
              <div className='bg-[#d9d9d9]'>
                {/* card */}
                <div >
                  {/* row */}
                  <div>
                    {/* col-6 */}
                    <div>
                      {/* promotion_inner */}
                      <div>
                        <div className='flex text-[#fff] text-[22px] leading-[22px] font-heavent font-bold'>
                          <span> SALE NOW </span>
                          {/* chip */}
                          <span className='ml-2'>
                            {/* chip_content */}
                            <span>
                              <p>78</p>
                            </span>
                          </span>
                          " : "
                          {/* chip */}
                          <span>
                            {/* chip_content */}
                            <span>
                              <p>49</p>
                            </span>
                          </span>
                          " : "
                          {/* chip */}
                          <span>
                            {/* chip_content */}
                            <span>
                              <p>78</p>
                            </span>
                          </span>
                        </div>
                        <h3 className='text-[#fff] text-[36px] leading-[36px] font-heavent font-bold'> TFT: Teamfight Tactics </h3>
                        <h4 className='flex text-[#fff] text-[32px] leading-[32px] font-heavent font-bold'>
                          <span>฿290</span>
                            <p>{'>'}</p>
                          <span className='text-primary'>฿275.5</span>
                        </h4>
                        <p className='text-[#fff] text-[24px] leading-[26px] font-heavent font-bold'>1380 TFT Coins</p>
                        {/* progress bar */}
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      {/* captions */}
                      <div className='text-[#fff] text-[20px] leading-[40px] font-heavent font-bold'> 998 LEFT </div>
                      {/* card_promotion_action */}
                      <div>
                        <a href="">
                          <span className='mx-2 text-[#fff] text-[22px] leading-[22px] font-heavent font-bold'> Top Up </span>
                        </a>
                        <button className='mx-2'>
                          <span>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAALHSURBVHjarJVPSBx3HMU/M4qy4mZBexLyGzpCRKx/BqGHsiJIKLug5BbJ0mikEUJPbdEczDFHBcFcUu0at6yHtuQUxw0i5CDklENJAkkIGhbBgMlB4hKi1Xm57ARd1CS4D77wZr7ze2++fOH3LGMMB5HP578HfgbOA2eBD8ALIAfcBizgMnABOAecAV4DD4A/gIeHBI0xGGOQVCspKynQ8XhfrJMwLykmCUmE4jFJjySpUChoampKiURCTU1Nam1tVSqVku/7CoJAQRDI930NDg6qublZruuqp6dH09PT2t3dDU3+k/SNJCxjDPl8/m/g4traGgMDA6yvr3MUkskkALlc7si+67qk02lc1wVYAPosSXFgpVAokEgkjhX/UjQ0NLC0tEQ0GgX40QauAqTT6VOLA2xsbDAzMxM+XrGBOMDCwgLlgu/7If3BkhQAVmNjI3t7e2UxqKysZHV1FSCwgf8BqqqqyjZBdXV1SHds4BlAe3t72QxaWlpC+tIG7gH09fWVzaC3tzeki5ak74An29vbxONxtra2TiVeV1fHysoKtbW1AO224zhPgfvRaJSxsbFT//3IyEgongMe28X3vwI7/f39B8f7aiSTSVKpFMAO8DuADeA4zgvgF4CJiQk8z/tqcc/zmJycxLIsgOvA808GRZNZ4FYkEiGTydDZ2fnF4h0dHWQyGSKRCMCfwFTYs0u+/Q24G4vFyGazdHd3f1a8q6uL+fl5YrEYwD/AtYP9QwaO4+wDl4BsTU0Ns7OzDA8Ph2MfgmVZDA0NMTc3Fy71FpAC9o8MnIMlyZJ0MwyfxcVFtbW1yRgjY4w8z9Py8nJ49weSboQBU1pWaWSWxOcF4C/gzObmJqOjo1RUVDA+Pk59fT3Au+Jt/O9xGicaFE2+Be4ApQt5CPwEvDrpvP25JTqO8wroAUaAN8DbIu8q9k7ExwEAPP9uK0iUcMQAAAAASUVORK5CYII=" alt="gameon" />
                          </span>
                        </button>
                        <button className='mx-2'>
                          <span>
                            <img className='w-9 h-9' src="//icons.veryicon.com/png/o/miscellaneous/home-ams-icon-library/ic_share.png" alt="gameon" />
                          </span>
                        </button>
                      </div>
                    </div>
                    {/* col-6 */}
                    <div>
                      {/* thumnail */}
                      <div>
                        <div></div>
                        <div className='w-[332px]'>
                          <img src="https://gameon.ais.co.th/api/cms-data-service/product/a176adf3-b6c0-4940-b603-8dc356116813-ign-GameOn-thumbnail_TFT-5.jpg" alt="" />
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
      </div>
    </>
  )
}

export default Flash
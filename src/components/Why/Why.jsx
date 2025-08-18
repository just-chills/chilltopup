import React from 'react'

function Why() {

    const cols = [
        {
            id: 1,
            urlImage: 'https://gameon.ais.co.th/assets/_nuxt/img/why1.7cb2e9d.png',
            title: 'Quick and Easy',
            description: 'Instantly get your top up when payment is complete'
        },
        {
            id: 2,
            urlImage: 'https://gameon.ais.co.th/assets/_nuxt/img/why2.16e4220.png',
            title: 'Selection of Game Titles',
            description: 'Top game titles you can choose'
        },
        {
            id: 3,
            urlImage: 'https://gameon.ais.co.th/assets/_nuxt/img/why3.204400b.png',
            title: 'Sensational Promotion',
            description: 'Enjoy our special discount and benefits'
        },
        {
            id: 4,
            urlImage: 'https://gameon.ais.co.th/assets/_nuxt/img/why4.22780ee.png',
            title: 'Variety of Payment Methods',
            description: 'Wide coverage of payment channels for our convenience'
        }
    ];

    return (
        <>
            {/* container-content */}
            <section className='bg-[url("https://gameon.ais.co.th/assets/_nuxt/img/why-bg.eb74ad0.png")] bg-[#fff] bg-cover'>
                {/* container container-what-if */}
                <div className='min-[1264px]:max-w-1185px min-[960px]:max-w-900px w-full p-[12px] mx-auto max-w-[1184px] pt-0'>
                    {/* container-content */}
                    <section className='max-w-[1180px] m-auto mb-[20px]'>
                        {/* spacer */}
                        <div className='grow'></div>
                        {/* row */}
                        <div className='justify-center flex flex-wrap m-[-12px]'>
                            {/* col-12 */}
                            <div className='z-[1] min-[1264px]:flex-[0_0_100%] min-[1264px]:w-full flex-[0_0_100%] w-full'>
                                {/* what-if-card */}
                                <div className='items-center flex justify-center text-center flex-wrap text-[1.25rem] font-medium
                                tracking-[-0.1em] leading-[2rem] p-[16px] break-words '>
                                    <h2 className='font-DBheavent text-[40px] leading-[60px] font-[700]'>
                                        {/* what-if-title-1 */}
                                        <span className='text-[#87b201]'>
                                            WHY TOP UP GAMES WITH
                                        </span>
                                        {/* what-if-title-2 */}
                                        <span className='block text-[#444] whitespace-nowrap'>
                                            GAME ON ?
                                        </span>
                                    </h2>
                                </div>
                                {/* d-flex */}
                                <div className='justify-center flex'>
                                    {/* underline */}
                                    <div className='border-t-[8px] border-[#87b201] border-solid border-[1px] w-[96px]'></div>
                                </div>
                            </div>
                            {/* col-12 */}
                            <div className='z-[1] min-[1264px]:flex-[0_0_100%] min-[1264px]:w-full] flex-[0_0_100%] w-full'>
                                <div></div>
                            </div>
                        </div>
                        {/* row */}
                        <div className='mt-[12px] justify-center flex flex-wrap flex-[1_1_auto] m-[-12px]'>
                            {cols.map( col => (
                                <>
                                    {/* col-12 */}
                                    <div key={col.id}
                                    className='z-[1] min-[600px]:flex-[0_0_25%] min-[600px]:max-w-[25%] flex-[0_0_100%] max-w-full
                                    p-[12px]'>
                                        {/* card-what-if */}
                                        <div className='rounded text-[#fff] mx-auto border-solid  bg-transparent
                                        block max-w-full outline-none no-underline transition-[box-shadow,opacity] break-words
                                        relative whitespace-normal'>
                                            {/* row */}
                                            <div className='rounded-br-[inherit] rounded-bl-[inherit] rounded-tl-[inherit] rounded-tr-[inherit]
                                            justify-center flex flex-wrap flex-[1_1_auto] m-[-12px]'>
                                                {/* col-4 */}
                                                <div className='self-center z-[1] min-[600px]:flex-[0_0_100%] min-[600px]:max-w-full w-full p-[12px]'>
                                                    {/* card-actions */}
                                                    <div className='items-center justify-center flex p-[8px]'>
                                                        {/* what-if-image */}
                                                        <img className='border-none w-[140px] h-[140px]' src={col.urlImage} alt="gameon" />
                                                    </div>
                                                </div>
                                                {/* col-8 */}
                                                <div className='self-center z-[1] min-[600px]:flex-[0_0_100%] min-[600px]:max-w-full w-full
                                                p-[12px]'>
                                                    {/* card-details */}
                                                    <div className='text-center flex justify-center py-[4px] px-[12px] items-center flex-wrap
                                                    text-[1.25rem] font-medium tracking-[-0.05em] leading-[2rem] break-words'>
                                                        <h3 className='font-DBheavent font-[700] text-[24.7px] leading-[36px] text-[#87b201]'>
                                                            {col.title}
                                                        </h3>
                                                    </div>
                                                    {/* card-details */}
                                                    <div className='text-center flex justify-center py-[4px] px-[12px] items-center flex-wrap
                                                    text-[1.25rem] font-medium tracking-[-0.05em] leading-[2rem] break-words'>
                                                        {/* card-description */}
                                                        <span className='text-[18px] leading-[26px] font-[700] font-DBheavent text-[#444]'>
                                                            {col.description}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                        {/* spacer */}
                        <div></div>
                        {/* spacer */}
                        <div></div>
                    </section>
                </div>
            </section>
        </>
    )
};

export default Why
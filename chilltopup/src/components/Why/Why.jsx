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
            urlImage: '',
            title: '',
            description: ''
        },
        {
            id: 3,
            urlImage: '',
            title: '',
            description: ''
        },
        {
            id: 4,
            urlImage: '',
            title: '',
            description: ''
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
                                    <h2 className='font-DBheavent text-[40px] leading-[60px] font-black'>
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
                                    <div key={col.id}>
                                        {/* card-what-if */}
                                        <div>
                                            {/* row */}
                                            <div>
                                                {/* col-4 */}
                                                <div>
                                                    {/* card-actions */}
                                                    <div>
                                                        {/* what-if-image */}
                                                        <img src={col.urlImage} alt="gameon" />
                                                    </div>
                                                </div>
                                                {/* col-8 */}
                                                <div>
                                                    {/* card-details */}
                                                    <div>
                                                        <h3>{col.title}</h3>
                                                    </div>
                                                    {/* card-details */}
                                                    <div>
                                                        {/* card-description */}
                                                        <span>
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
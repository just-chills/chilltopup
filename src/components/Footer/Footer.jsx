import React from 'react'

function Footer() {

const Footers = [
    {
        id: 1,
        url: 'https://gameon.ais.co.th/en/services',
        title: 'Service'
    },
    {
        id: 2,
        url: 'https://gameon.ais.co.th/en/contact',
        title: 'Contact/FAQ'
    },
    {
        id: 3,
        url: 'https://gameon.ais.co.th/en/terms',
        title: 'Terms&Conditions'
    }
]

    return (
        <>
            <footer className='left-0 right-0 bottom-0 bg-[#0e0e0e] border-[#0e0e0e]
            shadow-[0_0_0_0_rgba(0,0,0,.2),0_0_0_0_rgba(0,0,0,.14),0_0_0_0_rgba(0,0,0,.12)]
            w-full rounded-0 text-[#fff] text-center z-[3] items-center flex
            flex-initial flex-wrap py-[6px] px-[16px] duration-200 transition-[background-color,left,right] ease-in-out'>
                <div className='text-center pb-0 flex-[0_0_100%] max-w-full w-full p-[12px]'>
                    {Footers.map( footer => (
                        <a  className='text-[#1976d2] cursor-pointer bg-transparent no-underline hover:outline-none'
                            key={footer.id} 
                            href={footer.url}>
                            <span className='text-[18px] leading-[26px] font-[700] font-DBheavent
                            inline-block py-[12px] px-[42px] border-[1px] border-solid border-transparent
                            text-[#fff] hover:border-0 hover:border-b-[3px] hover:border-[#b8e50a] hover:border-solid'>
                                {footer.title}
                            </span>
                        </a>
                    ))}
                    <a  className='text-[#1976d2] cursor-pointer bg-transparent no-underline hover:outline-none'
                        target='_blank'
                        href="https://www.ais.th/en/about-us/terms-and-legal/privacy-notice'">
                        <span className='text-[18px] leading-[26px] font-[700] font-DBheavent
                            inline-block py-[12px] px-[42px] border-[1px] border-solid border-transparent
                            text-[#fff] hover:border-0 hover:border-b-[3px] hover:border-[#b8e50a] hover:border-solid'>
                                Privacy Notice
                        </span>
                    </a>
                </div>
                <div className='text-center pt-[8px] flex-[0_0_100%] max-w-full w-full p-[12px]'>
                    <span className='font-DBheavent text-[14px] leading-[22px] pt-[12px] text-[#303030]'>
                        © 2022 ADVANCED INFO SERVICE PLC. ALL RIGHTS RESERVED.
                    </span>
                </div>
            </footer>
        </>
    )
}

export default Footer
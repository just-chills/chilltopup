import React, { useState, useEffect } from 'react';

const ReviewCard = ({ url, imageUrl, title, description, author, stats, onImageLoad }) => (
    <div className='z-[1] w-full p-[8px] min-[960px]:flex-[0 0 33.3333333333%] min-[960px]:max-w-[33.3333333333%]'>
        {/* card-items */}
        <a className='shadow-[0_3px_1px_-2px_(#00000033),_0_2px_2px_0_(#00000024),_0_1px_5px_0_(#0000001F)] rounded
            text-[#fff] border-[#1e1e1e] h-full w-full bg-[#3c3c3c] transition-[width,heigh] duration-300 cursor-pointer border-thin
            block max-w-full outline-0 no-underline break-words relative whitespace-normal hover:shadow-lime hover:rounded'
            href={url}>
            {/* image */}
            <div className='rounded-tl-[inherit] rounded-tr-[inherit] text-white relative overflow-hidden
            flex-[1_0_auto] max-w-full flex z-0'>
                {/* responsive-sizer */}
                <div className='pb-[100%] transition-[padding-bottom] ease-[cubic-bezier(.25,.8,.5,1)]
                duration-200 flex-[1_0_0px]'></div>
                {/* image */}
                <div>
                    <img className='bg-center bg-cover bg-no-repeat z-[-1] absolute top-0 left-0 w-full h-full'
                        src={imageUrl} loading="lazy" onLoad={onImageLoad} onError={onImageLoad} />
                </div>
                {/* responsive-content */}
                <div className='ml-[-100%] flex-[1_0_0px] max-w-full'></div>
            </div>
            {/* card-title */}
            <div className='text-ellipsis line-clamp-2 px-[30px] py-0 mt-6 mb-2 h-[70px]
                items-center flex-wrap text-[1.25rem] font-medium tracking-[0.0125em] leading-8 break-words '>
                {/* text-green */}
                <h3 className='font-DBheavent font-bold text-[21px] leading-[36px] text-[#aadf1d]'>
                    {title}
                </h3>
            </div>
            {/* card-title */}
            <div className='h-[52px] overflow-hidden overflow-ellipsis display-webkit-box line-clamp-2 px-[30px] py-0
            items-center flex-wrap text-xl font-medium tracking-[.0125em] leading-8 break-words'>
                <p className='font-DBheaven text-[15px] leading-[26px] mt-0 font-medium'>
                    {description}
                </p>
            </div>
            {/* card-title */}
            <div className='rounded-bl-[inherit] rounded-br-[inherit] block text-[#a1a1a1] px-[30px] pb-[32px] pt-0
            items-center flex-wrap text-[21px] font-medium tracking-[0.0125em] leading-8 break-words'>
                <p className='font-DBheavent text-[13px] leading-[22px] mb-0 text-[#8f8f8f]'>{author}</p>
                <p className='font-DBheavent text-[13px] leading-[22px] mb-0 text-[#8f8f8f]'>{stats}</p>
            </div>
        </a>
    </div>
);

const ViewMore = ({ urls }) => (
    <a className='py-[0px] px-[8px] min-w-[64px] font-DBheavent text-[18px] cursor-pointer bg-[#e1e1e1] text-[#000]
    border-[0px] shadow-lg items-center inline-flex flex-[0_0_auto] font-medium tracking-[.0892857143em] justify-center
    outline-none relative no-underline indent-[.0892857143em] transition-shadow select-none align-middle
    whitespace-nowrap w-[120px] z-[2] h-[38px] rounded-[5px] '
        href={urls}>
        <span className='items-center text-[18px] flex flex-[1_0_auto] justify-center leading-[normal] relative
        transition-[inherit] font-semibold'>
            View More
        </span>
    </a>
);

const reviewsData = [
    {
        id: 'review-1',
        url: "https://gameon.ais.co.th/en/game-review/cloud-gaming-the-future-of-the-gaming-industry-and-the-arrival-of-geforce-now-pid-6847d53f1d9d3800120dda4b",
        imageUrl: "https://gameon.ais.co.th/api/cms-data-service/game_review/ff1bc826-6515-4bba-b99c-ca1a0b6636a5-ign-Untitled-3%20(2).jpg",
        title: "Cloud Gaming: The Future of the Gaming Industry and the Arrival of GeForce NOW",
        description: "ทำความรู้จักกับ GeForce NOW บริการ Cloud Gaming ที่จะมาเปลี่ยนวิธีการเล่นเกมของคุณให้ไม่เหมือนเดิมอีกต่อไป",
        author: "GMDGameOn01",
        stats: "265 View • 2 MONTH AGO"
    },
    {
        id: 'review-2',
        url: "https://gameon.ais.co.th/en/game-review/%09post-game-talk-how-was-monster-hunter-wilds--pid-67dbb47bbb8ad600122ebea4",
        imageUrl: "https://gameon.ais.co.th/api/cms-data-service/game_review/c88ed33d-c9c9-4212-a882-23a29f2bd176-ign-Untitled-2%20(1).jpg",
        title: "Post-Game Talk: How Was Monster Hunter Wilds ?",
        description: "“Monster Hunter Wilds” วางจำหน่ายมาแล้วกว่า 2 อาทิตย์ นี่เป็นจังหวะเหมาะที่เราจะมา Recap กันหลังเล่นจบ",
        author: "GMDGameOn01",
        stats: "127 View • 4 MONTH AGO"
    },
    {
        id: 'review-3',
        url: "https://gameon.ais.co.th/en/game-review/why-is-secretlab-the-gaming-chair-of-choice-of-gamer-pid-66b30754ff06db00124ea2d0",
        imageUrl: "https://gameon.ais.co.th/api/cms-data-service/game_review/f2e662c5-66a9-478e-814d-b89ad58bdbd7-ign-TITAN%20Evo%20refresher%20album_sub1%20(ergonomic).png",
        title: "Why is Secretlab the gaming chair of choice of gamer",
        description: "เจาะลึกคุณสมบัติทำไม Secretlab จึงเป็นเก้าอี้เกมมิ่งที่ทุกสนามต่างเลือกใช้ ?",
        author: "GMDGameOn01",
        stats: "2K View • 1 YEAR AGO"
    }
];

const guidesData = [
    {
        id: 'guide-1',
        url: "https://gameon.ais.co.th/en/game-guide/new-tips-for-beginner-player-ea-sports-fc-mobile--pid-651fbae630e2b40012938882",
        imageUrl: "https://gameon.ais.co.th/api/cms-data-service/game_review/808d13bc-ae3e-497e-89e5-562ef84b6edd-ign-Untitled-882.jpg",
        title: "New Tips for Beginner Player EA Sports FC Mobile",
        description: "มือใหม่ทำตาม ชีวิตง่ายขึ้นเยอะ !",
        author: "GMDGameOn01",
        stats: "1K View • 1 YEAR AGO"
    },
    {
        id: 'guide-2',
        url: "https://gameon.ais.co.th/en/game-guide/gaming-the-best-4-star-character--pid-65c9ab32c2716a0013eba63f",
        imageUrl: "https://gameon.ais.co.th/api/cms-data-service/game_review/3db37689-93e6-4e66-805a-93b7427ab486-ign-G.jpg",
        title: "Gaming the Best 4 star character",
        description: "หนุ่มนักเชิดสิงโตผู้ใช้ดาบใหญ่ธาตุไฟสุดโหด",
        author: "GMDGameOn01",
        stats: "473 View • 1 YEAR AGO"
    },
    {
        id: 'guide-3',
        url: "https://gameon.ais.co.th/en/game-guide/geo-team-for-genshin-impact-pid-65f80b8bc2716a0013ebed06",
        imageUrl: "https://gameon.ais.co.th/api/cms-data-service/game_review/31a59250-6c28-4719-a584-3c5bc56ed139-ign-C.jpg",
        title: "Geo Team for Genshin Impact",
        description: "Chiori ที่จะเข้ามาเติมเต็มทีมธาตุหิน",
        author: "GMDGameOn01",
        stats: "472 View • 1 YEAR AGO"
    }
];
const updatesData = [
    {
        id: 'update-1',
        url: "https://gameon.ais.co.th/en/game-update/call-of-duty-x-godzilla-x-kong-shimo--skar-king-pid-661620d9d9bb79001258b23e",
        imageUrl: "https://gameon.ais.co.th/api/cms-data-service/game_review/d5210ff6-30b4-4c37-87bc-97b2188d827f-ign-2.jpg",
        title: "Call of Duty x Godzilla x KONG Shimo & Skar King",
        description: "สองความดัง โคจรมาเจอกัน พร้อม Bundle พิเศษ!",
        author: "GMDGameOn01",
        stats: "467 View • 1 YEAR AGO"
    },
    {
        id: 'update-2',
        url: "https://gameon.ais.co.th/en/game-update/identity-v-s28-update-31-aug-2023-pid-64e853f7d8b9bd0012a5fea1",
        imageUrl: "https://gameon.ais.co.th/api/cms-data-service/game_review/f782846f-09ac-413e-bba9-e5a27229d882-ign-18-GD-WEB-AND-SOCIAL%20(1).jpg",
        title: "Identity V S28 Update 31 Aug 2023",
        description: "การอัปเดตใหม่ของ Identity V กำลังจะมาถึงกับ S28 ในช่วงสิ้นเดือนนี้",
        author: "GMDGameOn01",
        stats: "503 View • 1 YEAR AGO"
    },
    {
        id: 'update-3',
        url: "https://gameon.ais.co.th/en/game-update/genshin-impact-version-45-event--pid-65f7d9d386e0a900126ecb9c",
        imageUrl: "https://gameon.ais.co.th/api/cms-data-service/game_review/91943f9a-595d-4c67-b212-045eef5b060d-ign-C4.jpg",
        title: "Genshin Impact Version 4.5 Event",
        description: "กิจกรรมดี ๆ รับ Primogem ฟรี ๆ จำนวนมาก กลับมาอีกครั้ง มีอะไรน่าสนใจบ้าง ตามมาดูกันเลย !",
        author: "GMDGameOn01",
        stats: "340 View • 1 YEAR AGO"
    }
];
const viewMoreLinks = {
    reviews: "https://gameon.ais.co.th/en/game-review",
    guides: "https://gameon.ais.co.th/en/game-guide",
    updates: "https://gameon.ais.co.th/en/game-update"
};

const dataMap = {
    reviews: reviewsData,
    guides: guidesData,
    updates: updatesData,
};

function New() {
    const [activeTab, setActiveTab] = useState('reviews');
    const [isLoading, setIsLoading] = useState(false);
    const [loadedImages, setLoadedImages] = useState(0);

    const handleTabClick = (tabId) => {
        if (activeTab !== tabId) {
            setLoadedImages(0);
            setIsLoading(true);
            setActiveTab(tabId);
        }
    };

    const handleImageLoad = () => {
        setLoadedImages(prev => prev + 1);
    };

    useEffect(() => {
        const currentData = dataMap[activeTab];
        if (loadedImages >= currentData.length) {
            setIsLoading(false);
        }
    }, [loadedImages, activeTab]);


    const tabs = [
        {
            id: 'reviews',
            title: 'Game Reviews',
            icon: 'https://gameon.ais.co.th/assets/_nuxt/img/review_ic.1032bab.png',
            activeIcon: 'https://gameon.ais.co.th/assets/_nuxt/img/review_ic_on.92c94e2.png'
        },
        {
            id: 'guides',
            title: 'Game Guides',
            icon: 'https://gameon.ais.co.th/assets/_nuxt/img/game_guide_ic.bebe220.png',
            activeIcon: 'https://gameon.ais.co.th/assets/_nuxt/img/game_guide_ic_on.e9cc092.png'
        },
        {
            id: 'updates',
            title: 'Game Updates',
            icon: 'https://gameon.ais.co.th/assets/_nuxt/img/game_update_ic.2af38e4.png',
            activeIcon: 'https://gameon.ais.co.th/assets/_nuxt/img/game_update_ic_on.030da47.png'
        }
    ];

    const renderContent = () => {
        const currentData = dataMap[activeTab];
        return currentData.map((card) => <ReviewCard key={card.id} {...card} onImageLoad={handleImageLoad} />);
    };

    const renderContent2 = () => {
        const viewMoreUrl = viewMoreLinks[activeTab];
        return (
            <div className='min-[960px]:mb-[16px] min-[960px]:mt-[40px] justify-center items-center flex p-[8px]'>
                <ViewMore urls={viewMoreUrl} />
            </div>
        );
    };

    return (
        <>
            {/* container */}
            <div className='max-w-[1360px] w-full p-3 pt-0 mx-auto relative'>
                {isLoading && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-20 rounded-lg">
                        <img src="https://gameon.ais.co.th/assets/_nuxt/img/Rolling.c39284a.gif" alt="Loading..." className="w-16 h-16" />
                        <p className="text-primary mt-2">loading ..</p>
                    </div>
                )}
                <div>
                    {/* dialog */}
                    <div className='hidden'></div>
                    {/* container */}
                    <div className='max-w-[1360px] w-full p-3 pt-0 mx-auto'>
                        <section className='mb-0 mt-8'>
                            {/* data */}
                            <div>
                                {/* tabs */}
                                <div className='flex-auto w-full p-0 z-10'>
                                    {/* tablist */}
                                    <div className='h-[84px] bg-transparent flex-initial relative w-full
                                    ease-[cubic-bezier(0.25,0.8,0.5,1)] 
                                    duration-300 flex rounded-[inherit]'>
                                        {/* slide-group-wrapper */}
                                        <div className='cursor-auto [contain:content] flex flex-auto
                                        overflow-hidden '>
                                            {/* slide-group-content */}
                                            <div className='flex-none flex relative ease-[cubic-bezier(0.25,0.8,0.5,1)]
                                            whitespace-nowrap duration-300 cursor-auto'>
                                                {tabs.map(tab => (
                                                    <div
                                                        key={tab.id}
                                                        className={`mr-[44px] whitespace-normal m-[unset] p-[unset] items-center 
                                                        flex flex-initial text-sm font-medium justify-center tracking[.0892857143em] leading-[normal] 
                                                        min-w-[90px] max-w-[360px] outline-none relative text-center no-underline normal-case transition-none
                                                        select-none z-0 ${activeTab === tab.id ? 'cursor-default' : 'cursor-pointer'}`}
                                                        onClick={() => handleTabClick(tab.id)}
                                                    >
                                                        {/* list-item */}
                                                        <div className={`w-[186px] h-[84px] rounded-md border-[1px] border-[#606060] 
                                                        items-center flex flex-[1_1_100%] tracking-[normal] min-h-12 outline-none outline-offset-0  outline-0 
                                                        px-[0px] py-[16px] relative no-underline 
                                                        ${activeTab === tab.id
                                                                ? 'bg-primary text-[#000]'
                                                                : 'bg-transparent text-white hover:bg-[hsla(0,0%,100%,.1)] focus:bg-[hsla(0,0%,100%,.1)]'
                                                            }`}
                                                        >
                                                            {/* list-item-icon */}
                                                            <div className='mr-0 self-center ml-[24px] inline-flex min-w-[24px] mx-[0px] my-[16px]'>
                                                                <img className='w-auto h-[52px] max-w-[60px] max-h-[52px] p-0 z-10 border-none'
                                                                    src={activeTab === tab.id ? tab.activeIcon : tab.icon} alt="gameon" />
                                                            </div>
                                                            {/* list-item-content */}
                                                            <div className='items-center self-center flex flex-wrap flex-[1_1] overflow-hidden py-[12px] px-[0px]'>
                                                                {/* list-item-title */}
                                                                <div className={`pl-[12px] text-left text-[22px] leading-[1.2] self-center flex-[1_1_100%]
                                                                overflow-hidden ${activeTab === tab.id ? 'text-[#000]' : ''}`}> {tab.title} </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                {/* review-container */}
                <section className='z-10 p-0 m-0 bg-no-repeat '>
                    {/* row container-review */}
                    <div className='flex flex-wrap p-4 flex-auto m-[-12px]'>
                        {renderContent()}
                    </div>
                    {/* card-action */}
                    {renderContent2()}
                </section>
            </div>
        </>
    )
}

export default New;
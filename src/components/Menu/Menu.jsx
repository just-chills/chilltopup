import React, { useState } from 'react';

const MenuItem = ({
  iconSrc,
  iconSrcActive,
  title,
  subtitle,
  isActive,
  onClick,
  isGridIcon,
  customBg,
}) => {
  const activeBg = customBg?.active || 'bg-primary';
  const inactiveBg = customBg?.inactive || 'bg-gray-800';
  const borderColor = isActive ? 'border-primary' : 'border-transparent';

  const gridBoxBg = isActive ? 'bg-primary' : 'bg-secondary';
  const gridCheckColor = isActive ? 'text-secondary' : 'text-primary';

  return (
    <div
      onClick={onClick}
      className={`flex items-center w-64 h-20 rounded-lg shadow cursor-pointer px-4 transition-colors duration-200 border
        ${isActive
          ? `${activeBg} text-black ${borderColor}`
          : `${inactiveBg} text-white hover:border-primary ${borderColor}`}`}
    >
      <div className="w-10 h-10 mr-4 flex items-center justify-center">
        {isGridIcon ? (
          <div className="grid grid-cols-2 gap-1 w-full h-full">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`${gridBoxBg} w-full h-full flex items-center justify-center`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-4 stroke-current ${gridCheckColor}`}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            ))}
          </div>
        ) : (
          <img
            src={isActive && iconSrcActive ? iconSrcActive : iconSrc}
            alt={title}
            className="w-10 h-10 object-contain"
          />
        )}
      </div>

      <div className="flex flex-col justify-center">
        <div className="text-sm font-semibold font-kanit">{title}</div>
        {subtitle && (
          <div className="text-sm font-semibold font-kanit">{subtitle}</div>
        )}
      </div>
    </div>
  );
};

const Menu = ({ onSelect }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuItems = [
    { key: 'ALL', title: 'ทั้งหมด', iconSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAALNSURBVHja7NhfiFRlGMfxz8yOrs4RDf+seIggKqQgCm8C3Qv1woNBeBGslhEUkZDIEl1sXdhNCKWo4K0ohglSUSpiOxcVXWhdSSUhoQRFO4RBknoK/NN44btwWHbccc47aLIPDDzngfnxPe/zvO/zPqcyOlbfiVfRp5xdwus4EZ4HcRALSur+h88ro2P1lng2irXB/xAvxxKu4p+IoJcLfh5R90oVNyIKXm/jl7VW1f/E7nvQU/i6BzxXcXyysukG9BuswHAPQJdlaf7cZBux2gXkSjyAzyJDDmZp/lOjmezCvE5Bv8PT+LYQOxkg5+AsHu0SaDlemxjL0vxko5nswZuT/anWRmwefgiiP4cXGsQSfI+BEiu3EPswHyNYk6X56UYz2TvJC0y5oo/jj7B6S/FYgDtXEhKOYQt2YFGA/Oh2kFPV6GKcLzyfRRKpHvfgFbQC5Mayx9Ni/Bl+8yNvnv34tRPI29XoxJrqlT003ZnuJmg9ol69jV/W+quoRBS8VPAvRtSdWcOzeAkzwrW/28xcxLZC7H30h3O3jO51HK2MjtXvau1laX5/baYansGGSKnfjb9CLMFbU6W+0Uw6Sf3xGr6M2BoHsCn4I9gaSXc49vG0pOA/GHNorOJKzLG2jV/W/p1uofcS6I0eMbVigV7DI1jdA8iRcGT+XRb0Gp7ALxiKDPlBlubb8VRovR2Bngu9utjfLgfI8ziMzV0CbcMnE2LvZWn+dqOZrMNpzOoU9ALewZOF2DjkCawvsXI7Qja+GE93lubvNprJEI7c6SiyAofCPLMqXAV/D5BrS6b4NywLt7ahLM0/bjST9SFLXc1ML4YVfyE8H4kACXPxIx5GR5CdDHcbwjHUwrrIk8AZfIo3Yk2hG/XGBjqFnJ5CewUaE7avjV/WKtWIl2ZufTct7u5YNqeGA3g+gthVtz4njttBrMHsCNpf3RwATluewpGlOAQAAAAASUVORK5CYII=',
       iconSrcActive: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAJySURBVHja7NdNiI1RHMfxz9wZJmMyExpNSYmVkrKRmsWwsFCyUGNqbFAWykrYT+SlUHYS0XhL8lLT2JESe6JQygp5GXPNUPPisTm3nm5z733Mc25emn893f9z7nl+59tzzvM/59eAk9iFRvmiiD0YCvddGMCinLo/cRuSiNe91ACXYmoX8F28+JbKxyLqjhYwFVFwskKeN5KCfyT+e9DHeFAHnnEMTrdsmmYg9hDdWI2nkUHX4jm+oi3PGy1BtuNWZMiuAHmqHDJdqMvr1hOsCVNcansU+rfiXYV6dzWle6ZCn/XYPU1btWeKlUBfpAZ8idch78SHKoU5C+iW8P8BfArTDeeq6FYETfA+vL1SdGC0xg6SBTTBvtCnIfxerqFbFbQEW4rPGba6rKAJdmaETFCs9TEtwcdwLYz88VzAW/Rl6ZylPC2uYx1fNrsz/UnQloh6LRXyvNFcSJWIGFFM5cMRdec2YTN2YE449s90ZoZxJNV2DM2h/ubRncRdsxE5GrAOvZGm/jS+hLb52B9p6gdl2L9/5zqbGqQ/tguNWUY6U/nSmKaxEN5oNFtbIc8bP2a30L8JdKpOTEks0AmswMY6QB4KR8+RvKATWIU36IkMeRwngqlszupCX+FoWY0tYmV45noOK3IYN8ra+sMzW3/XM5Ws8fJUW6kuDuX0TG1lOgfDfc9Mzd2VINCNDRkgs4KOhDUutXy253Wh11ID34noQsfCGSALZIJiLXPXG8pQEtZPTCfwDDexN5YL7atTvezICjnrQusFGhO2sUKe+4BfCCfxWNGeyhdE1G1twkVsiyA2jvOp+wFswrwI2vd/DQBYB5I7wNq3vgAAAABJRU5ErkJggg==' },
    { key: 'GAME', title: 'เติมเงิน', subtitle: 'เกม', iconSrc: 'https://gameon.ais.co.th/assets/_nuxt/img/game-top-up.5c9e78d.png',
       iconSrcActive: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAmCAYAAABgUQN4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAANtSURBVHja3JlPSBdREMc/br/CNLQySi0lKiQzBKkMIgs6RIciMYxOkdE/6FCd7BIdyoNJp6hAOtUhjP5BkphkYEQmRAmSaV4KSiLFoCKzcrvMwvba/e17u/vzT18Y+P3ezsybeTsz783bNMyxASgHlsj/D0A38BgYIzrSgAqgDCgAZgDvgRfAQ5XZtm3iQDXwALB9qBs4DRSF1F8A1AJdSeZ4AtSozvmRDhYB95NM6EWXgFxNp+YA9cBvA/2dwMqozq0Chgwdc+grcCBA/24J6zD6fwGbkjmXlmTixUA/kBExnAeAR8AIYAHjQJbkVUkM6VJm2/ZLU6HXIVd0omkEmGkSlucn2eBXwDMD/lu6zq2YZMfceVoiqaEjV6HjXIemskGgFxiN0bF6D3uWSp4GyQ4EOVeuacQVKQ4AOUB7TM6t9kmTHk35KrdzlqKkTrPY9MlqAgxLRYwD833GszTlz/o9KDRY4QZF9m5Mb67Nw669Ck8dsB044bMHr/cKy3MBE7tPEOoK3ZDx8RgcvAdsBtYCJ9WiocybC3xSeJq8nBtMMuE1UZQvB+Ysj3BaAuRJAehNQRVt9om4Mwrfd2ffc7A2QPE2w9w5nALnGnzmOuLBW+0uKLs02hATROlD7gBrZL+tdY1X+vBv9Rj762W0BazaVSn5C4TSFWXZMp4DLAxoW5JRi4ehe1zPL0t/5+CY3wnHCcvZcoIPmviHNKNjwCGPjX9MeH5GCL2NPm/nrYvng7RgQXm9PAGsAzI1wmWW67f65uYCM2PY5774jH9z/c4TCsIaS2LbFB+V/0MxbeL7PMaKgOIQugotzVVQ4T4mZUiexYHjUv0clAKtIXUtA2gMmR+9UjhGUlD238kRL4qO1oTrFssUK0kdCmLQkWdFcG6qY55lcEs13ZBpaW4D0xEJSzbd/xHjCal22REV9cvR6WsMRqUDW+Q6PQpGkTv+KCX3VIpWPmpn8cbdaIahCykOrdoItnUifVIY4dsTlDsXQ9rXZMlpwBQdQNUEOXcUuBlCrg9gh+GKdE1S9Ws2tHM/0mTqXuw8V1qfiUaLgXMlJkLtrovYyUSThq097gui4gDmxim2Qdeh8d0A5QLmG/9+HqqZoieQSuX6waGDfh8fS4Gd0nwOA9edqjNFkS/dey7wGWixbfup8/DPAC6pteNDCHdwAAAAAElFTkSuQmCC' },
    { key: 'CARD', title: 'บัตรเติม', subtitle: 'เกม', iconSrc: 'https://gameon.ais.co.th/assets/_nuxt/img/game-voucher.c6345b0.png',
       iconSrcActive: 'https://gameon.ais.co.th/assets/_nuxt/img/game-voucher-on.434fd22.png' },
    { key: 'PACKAGE', title: 'แพ็กเกจเกม', iconSrc: 'https://gameon.ais.co.th/assets/_nuxt/img/game-package.b95a7d4.png',
       iconSrcActive: 'https://gameon.ais.co.th/assets/_nuxt/img/game-package-on.4cd99e2.png' },
    { key: 'GAMESUP', title: 'Game', subtitle: 'Subscription',iconSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAK/SURBVHjazNddiFVVFAfw33HGRu5kkIbKzSIm0hcdRtQcGkIq6kY41ENBOQqDIArOk6kQ2YMfoL0nRExFIn1ApA+iN8gQwQIJKuypZEr0jmImmnPNUcFe1sDhgnPn3Htk5v+y1t777LX/Z+2191o7KVcK3RjE4yYPFzCQlCuFi5hr8nF92hQhAu3TMDKBD8t4CS/g6+i7hTX4Mtpn0IezuIPV6MHLOD6BNapJuVL4FzPH+eiHMJrGr+hEEosdxadYh8PowvyaOWfwZL1tqodjIQfwGz7BoxF0UttcCNmWmrsd74V+vt5CEyGzCQvwAZ7FQ5iN6zU20raSkLuxK/QZeZCZhZM4iA68Ht5aEOMPhpwX8iZaQn8TH4W+OQ8yL2IFFmF99J1MjX8TMbMv2k/hv9CX4bXQf8+DzCoMxSIb8QjWxtgeVPAKvgq5EMMxvgVzQh+st1BSrhRG0F7nuz9wKMj3R8yM4Z/wVEd4T1wX+3EZ0/EcuuusMZKUK4W7TVxUV/Ej/o5T9TQebtRYa/xVTwNzD0eAVlN9LeGR1Q3YO92KXuxEMcPEa3HBwcr4mZ8jkPtiPEuauYTdSblSaCafvBqxNIZ+fJbFQKlYzXSaxsPWmva2Zow1S6Y2+G9NJpnRqUSmFg9MJTJDkcs+xgE8Ef0b8EXcyOPeM3liThRSi6Pdic8jbYwlzha8H4VaG46k00Ezi38XRrPg+yjYtkf7W/SWitXbeW/TRPBMigiU8HyjMfMu3miCzIx71EyZySyL6i1vj442QubDkOfux/5lIVPE0ppTeHeyyHTVPEfH6t08kGQlk37svYXlWJKnU7KQ+Qm3Q9+BU/F+ygPVrGRuxKvxfuCXRk7T21Fk54kTpWJ1uBEyI1F0X8mRzNZmsvafccTz8NDeUrF6qtms/VfcxkfwWAPz78Sj7p105/8DAFf8jmyDpRnYAAAAAElFTkSuQmCC',
       iconSrcActive: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAJsSURBVHjazNhLiM1RHAfwzx0GYeNRNMKYYmVBnmUhyaPZsKC8yqNkYyWhsEHN1oYQFiKSUIQyihA7EQuPlBB5lGfMJNfmZ/r371733v//jplfnc7vnP855/c9v9c551/ATBzGGD1Hb7CxgLcYoefpawFFvYN+N+BbFQOvYD7m4kz0dWIVTkX7GVbiBX5hBWZhIa5XIeM7fAntlCu3S0y8n9DowuCPRvsiXpWY86yCnC8NVSC+FvVGPAyho8LpJPxtYNT9E3N3YGfwr6qxVSXNfMSEGDskzFTE4+hbG+3T0b6K1yXk3K2HZoaGqc6hBUtCW38BDo56ZNQ/0Sf4ZTgU/KZKgqoBMw8zMBHroy/pR2dxGfuiPR4/gp+KxcE/qYeZ9qbGD8fz+NaW+tb6D6c/X8lMhQjtQRUAP43FGrAGwxLfPobwltCeWPMYPqARcyLT/4u+5U16n3AH7yOqpoeTZ6ZbFdRXrlwoodE+OJFxvQeF2MkuNNWwgc9YF/zsyLT3wpFhf43n3TvsyXueLErtbnWtCxSLxa6Sl9ImfpQHTENOMOntdOZZLC+Yjt4EJk39ehOY53GWHcFxNEf/BpzE5u68nbWnHPgmHiRzB7alxmyNuXPRWs9oas+Q3K5hd6J9BY09BeZHib4FWUN7O5bm2MCAMnemmsFMjbRdb8fvyALmQNQvuyMaagHThCnB9y2Tgf8bmEmp5+jf+249qFArmORjbzmmYXIPKKXrXdSZ8eJUqbRmyTMHuwlMUxYwg+O+W08gN/IcB+PiRVAvMNPznk3NddJQW/KgLOSIgLG4hNEZ5v6Kv2Vbkhr5MwBJj4XFKTklbQAAAABJRU5ErkJggg==' },
    { key: 'CLOUD', title: 'คลาวด์เกม', iconSrc: 'https://gameon.ais.co.th/assets/_nuxt/img/cloud-game.4ecd6d9.png',
       iconSrcActive: 'https://gameon.ais.co.th/assets/_nuxt/img/cloud-game-on.8c5a309.png' },
  ];

  const handleClick = (index, key) => {
    setActiveIndex(index);
    onSelect(key); // ✅ ส่ง key กลับไปให้ Home.jsx
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-4 gap-4 justify-center p-4">
      {menuItems.map((item, index) => (
        <MenuItem
          key={item.key}
          {...item}
          isActive={activeIndex === index}
          onClick={() => handleClick(index, item.key)}
        />
      ))}
    </div>
  );
};

export default Menu;
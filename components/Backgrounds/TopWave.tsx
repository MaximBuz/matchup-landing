const SvgDesign: React.FunctionComponent = () => {
  return (
    <>
      <svg viewBox="0 0 3000 200" height="200" width="3000" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <g transform-origin="center" transform="scale(1, -1) rotate(0)">
          <linearGradient id="linear-gradient-ra">
            <stop offset="0%" stopColor="#F04D61" stopOpacity="100%"></stop>
            <stop offset="100%" stopColor="#F04D61" stopOpacity="100%"></stop>
          </linearGradient>
          <filter id="shadow-r0" x="0" width="100%" y="-20%" height="150%">
            <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#00000061"></feDropShadow>
          </filter>
          <path
            d="M0 0 0,106.32583036397894 C 60.00000000000001,105.23230836571504 180,105.37868809110176 300,100.85822037265946 C 420,96.33775265421718 480,86.18650138067706 600,83.72349177176754 C 720,81.26048216285805 780,87.29634456181279 900,88.54317232811202 C 1020,89.79000009441127 1080,87.6529849910488 1200,89.95763060326378 C 1320,92.26227621547878 1380,97.98067951885363 1500,100.06640038918704 C 1620,102.15212125952046 1680,101.81184227578342 1800,100.38623495493084 C 1920,98.96062763407826 1980,92.57345978015412 2100,92.93836378492415 C 2220,93.30326778969417 2280,101.14537344624598 2400,102.21075497878094 C 2520,103.2761365113159 2580,100.45515560545032 2700,98.26527144759893 C 2820,96.0753872897476 2940,92.66212164113918 3000,91.26133418952425 L3000 200 L0 200Z"
            fill="none"
            strokeLinecap="round"
            filter="url(#shadow-r0)"
            strokeWidth="1"
            style={{
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
              fill: "url('#linear-gradient-ra')",
            }}
          ></path>
          <path
            d="M0 0 0,100.75254627565543 C 60.00000000000001,103.01691070770224 180,109.7383610611161 300,112.07436843588948 C 420,114.4103758106629 480,114.02926334887744 600,112.43258314952254 C 720,110.83590295016765 780,103.68227495377265 900,104.09096743911505 C 1020,104.49965992445748 1080,113.28281825979549 1200,114.47604557623465 C 1320,115.6692728926738 1380,112.50977427810433 1500,110.0571040213108 C 1620,107.60443376451731 1680,100.84303088237846 1800,102.21269429226716 C 1920,103.5823577021559 1980,113.62523771872122 2100,116.90542107075453 C 2220,120.18560442278783 2280,120.35508575439457 2400,118.61361105243365 C 2520,116.87213635047277 2580,112.8169729344547 2700,108.19804756095012 C 2820,103.57912218744555 2940,98.05479686011871 3000,95.51898418491085 L3000 200 L0 200Z"
            fill="none"
            strokeLinecap="round"
            filter="url(#shadow-r0)"
            strokeWidth="1"
            style={{
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
              fill: "url('#linear-gradient-ra')",
            }}
          ></path>
        </g>
      </svg>
    </>
  );
};

export default SvgDesign;

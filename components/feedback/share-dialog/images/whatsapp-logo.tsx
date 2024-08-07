import { SVGAttributes, forwardRef } from 'react';

export type Props = SVGAttributes<SVGElement>;

export const WhatsAppLogo = forwardRef<SVGSVGElement, Props>((props, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 700 725"
    {...props}
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="74"
        y1="763.5"
        x2="51.5"
        y2="742.5"
        gradientTransform="translate(-1248 19201.2) scale(25 -25)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#5bd066" />
        <stop offset="1" stopColor="#27b43e" />
      </linearGradient>
    </defs>
    <path
      fill="#bfc8d0"
      strokeWidth="0"
      d="M350,725c193.3,0,350-156.7,350-350S543.3,25,350,25,0,181.7,0,375s16.5,121.7,45.5,172.6L0,725l182.9-42.4c49.7,27,106.6,42.4,167.1,42.4ZM350,671.2c163.6,0,296.2-132.6,296.2-296.2S513.6,78.8,350,78.8,53.8,211.4,53.8,375s19.8,121.7,53.4,169.8l-26.5,99.5,101.2-25.3c47.7,32.9,105.6,52.2,168,52.2Z"
    />
    <path
      fill="url(#linear-gradient)"
      strokeWidth="0"
      d="M650,350c0,165.7-134.3,300-300,300s-121.8-19.5-170.2-52.9l-102.5,25.6,26.9-100.8c-34.1-48.7-54.1-108-54.1-172,0-165.7,134.3-300,300-300s300,134.3,300,300Z"
    />
    <path
      fill="#fff"
      strokeWidth="0"
      fillRule="evenodd"
      d="M350,700c193.3,0,350-156.7,350-350S543.3,0,350,0,0,156.7,0,350s16.5,121.7,45.5,172.6L0,700l182.9-42.4c49.7,27,106.6,42.4,167.1,42.4ZM350,646.2c163.6,0,296.2-132.6,296.2-296.2S513.6,53.8,350,53.8,53.8,186.4,53.8,350s19.8,121.7,53.4,169.8l-26.5,99.5,101.2-25.3c47.7,32.9,105.6,52.2,168,52.2Z"
    />
    <path
      fill="#fff"
      strokeWidth="0"
      d="M262.5,187.5c-8.3-16.7-21.1-15.2-34-15.2-23,0-59,27.6-59,79s18.6,88.2,81.1,157.2c60.3,66.5,139.6,101,205.4,99.8,65.8-1.2,79.4-57.8,79.4-76.9s-5.3-12.7-8.9-13.9c-22.4-10.8-63.8-30.8-73.2-34.6-9.4-3.8-14.3,1.3-17.4,4.1-8.5,8.1-25.5,32.1-31.2,37.5-5.8,5.4-14.4,2.7-18,.6-13.2-5.3-49.1-21.3-77.7-49-35.4-34.3-37.4-46.1-44.1-56.6-5.3-8.4-1.4-13.5.5-15.8,7.6-8.8,18.1-22.4,22.9-29.1,4.7-6.7,1-17-1.3-23.4-9.7-27.4-17.8-50.4-24.5-63.8Z"
    />
  </svg>
));

WhatsAppLogo.displayName = 'WhatsAppLogo';

export default WhatsAppLogo;
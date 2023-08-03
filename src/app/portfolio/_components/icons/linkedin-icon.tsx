import React, { FunctionComponent } from 'react';

export type LinkedinIconProps = {
  // no props
} & React.SVGAttributes<SVGElement>;

const LinkedinIcon: FunctionComponent<LinkedinIconProps> = (props) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M18.5299 0.000139829H1.5901C1.39968 -0.00250476 1.2106 0.0323869 1.03367 0.102822C0.856737 0.173257 0.695412 0.277857 0.558908 0.410646C0.422405 0.543436 0.313396 0.701814 0.238107 0.876737C0.162819 1.05166 0.122726 1.2397 0.120117 1.43012V18.5699C0.122726 18.7603 0.162819 18.9483 0.238107 19.1233C0.313396 19.2982 0.422405 19.4566 0.558908 19.5894C0.695412 19.7221 0.856737 19.8267 1.03367 19.8972C1.2106 19.9676 1.39968 20.0025 1.5901 19.9999H18.5299C18.7203 20.0025 18.9094 19.9676 19.0863 19.8972C19.2632 19.8267 19.4245 19.7221 19.561 19.5894C19.6975 19.4566 19.8066 19.2982 19.8818 19.1233C19.9571 18.9483 19.9972 18.7603 19.9998 18.5699V1.43012C19.9972 1.2397 19.9571 1.05166 19.8818 0.876737C19.8066 0.701814 19.6975 0.543436 19.561 0.410646C19.4245 0.277857 19.2632 0.173257 19.0863 0.102822C18.9094 0.0323869 18.7203 -0.00250476 18.5299 0.000139829ZM6.15003 16.7399H3.15007V7.74003H6.15003V16.7399ZM4.65005 6.48005C4.44519 6.48005 4.24234 6.4397 4.05308 6.3613C3.86381 6.28291 3.69184 6.168 3.54698 6.02314C3.40212 5.87828 3.28722 5.70631 3.20882 5.51705C3.13043 5.32778 3.09008 5.12493 3.09008 4.92007C3.09008 4.71521 3.13043 4.51236 3.20882 4.32309C3.28722 4.13383 3.40212 3.96186 3.54698 3.817C3.69184 3.67214 3.86381 3.55724 4.05308 3.47884C4.24234 3.40044 4.44519 3.36009 4.65005 3.36009C4.86975 3.33518 5.09222 3.35695 5.30292 3.42398C5.51361 3.491 5.70778 3.60178 5.87269 3.74905C6.03761 3.89632 6.16956 4.07676 6.2599 4.27856C6.35025 4.48036 6.39695 4.69897 6.39695 4.92007C6.39695 5.14117 6.35025 5.35978 6.2599 5.56158C6.16956 5.76338 6.03761 5.94382 5.87269 6.09109C5.70778 6.23836 5.51361 6.34914 5.30292 6.41617C5.09222 6.48319 4.86975 6.50496 4.65005 6.48005ZM16.9699 16.7399H13.9699V11.91C13.9699 10.7 13.5399 9.91 12.4499 9.91C12.1126 9.91247 11.7841 10.0183 11.5088 10.2132C11.2334 10.4081 11.0244 10.6827 10.91 11C10.8317 11.235 10.7978 11.4826 10.81 11.73V16.7299H7.81001C7.81001 16.7299 7.81001 8.55002 7.81001 7.73003H10.81V9.00001C11.0825 8.52713 11.4789 8.13755 11.9564 7.87323C12.4339 7.60892 12.9745 7.47989 13.5199 7.50003C15.5199 7.50003 16.9699 8.79002 16.9699 11.56V16.7399Z'
        fill='#64748B'
      />
    </svg>
  );
};

export default LinkedinIcon;
import React, { FunctionComponent } from 'react';

interface Props extends React.SVGAttributes<SVGElement> {
  // no props
}

const Logo: FunctionComponent<Props> = (props) => {
  return (
    <svg
      width='64'
      height='64'
      viewBox='0 0 64 64'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect width='64' height='64' rx='32' fill='#1E293B' />
      <path
        d='M26.9141 42V21.375H32.3633C33.5039 21.375 34.4062 21.6289 35.0703 22.1367C35.7422 22.6445 36.2227 23.3672 36.5117 24.3047C36.8008 25.2422 36.9453 26.3594 36.9453 27.6562C36.9453 28.9062 36.8242 29.9961 36.582 30.9258C36.3398 31.8477 35.9062 32.5625 35.2812 33.0703C34.6641 33.5781 33.7852 33.832 32.6445 33.832H30.9688V42H26.9141ZM30.9688 30.1289H31.2031C31.9688 30.1289 32.4375 29.9141 32.6094 29.4844C32.7812 29.0547 32.8672 28.4219 32.8672 27.5859C32.8672 26.8047 32.7812 26.2031 32.6094 25.7812C32.4453 25.3516 32.0508 25.1367 31.4258 25.1367H30.9688V30.1289Z'
        fill='#F8FAFC'
      />
    </svg>
  );
};

export default Logo;

import * as React from 'react';

const BackIcon = ({ width = 25, height = 24, fill = 'white', ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.53333 3.6C6.03627 3.6 5.63333 4.00294 5.63333 4.5C5.63333 4.99706 6.03627 5.4 6.53333 5.4V3.6ZM6.53333 5.4H16.6667V3.6H6.53333V5.4ZM21.1 9.83333V10.9H22.9V9.83333H21.1ZM16.6667 15.3333H6.53333V17.1333H16.6667V15.3333ZM21.1 10.9C21.1 13.3485 19.1151 15.3333 16.6667 15.3333V17.1333C20.1092 17.1333 22.9 14.3426 22.9 10.9H21.1ZM16.6667 5.4C19.1151 5.4 21.1 7.38487 21.1 9.83333H22.9C22.9 6.39076 20.1092 3.6 16.6667 3.6V5.4Z"
      fill={fill}
    />
    <path d="M3 16.2333L10.2 12.5383L10.2 19.9284L3 16.2333Z" fill="white" />
  </svg>
);
export default BackIcon;

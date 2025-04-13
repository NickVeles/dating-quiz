import React from "react";

interface IconProps {
  className?: string;
}

export const ChevronLeft: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  );
};

export const Circle: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
};

export const Heart: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
    </svg>
  );
};

export const BrokenHeart: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m 13.316406,4.7910156 -0.898437,2.234375 2,4.9746094 -2,4.974609 0.974609,2.423828 C 15.918942,17.721452 21,13.675354 21,8.25 c 0,-2.485 -2.0985,-4.5 -4.6875,-4.5 -1.139568,0 -2.183565,0.3916973 -2.996094,1.0410156 z"
        style={{
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          stroke: '#000000',
          fill: '#000000',
          fillOpacity: 1,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M 10.539063,19.353516 9.5820313,16.974609 11.582031,12 9.5820313,7.0253906 10.529297,4.671875 C 9.7406425,4.0937535 8.7565954,3.75 7.6875,3.75 5.1005,3.75 3,5.765 3,8.25 c 0,5.378951 4.9915198,9.40074 7.539063,11.103516 z"
        style={{
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          stroke: '#000000',
          fill: '#000000',
          fillOpacity: 1,
          strokeOpacity: 1,
        }}
      />
    </svg>
  );
};

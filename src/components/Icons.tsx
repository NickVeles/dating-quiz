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
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
      d="M 7.6875 3 C 4.7135 3 2.25 5.322 2.25 8.25 C 2.25 12.174 4.6872812 15.360813 6.9882812 17.507812 A 25.18 25.18 0 0 0 10.835938 20.421875 L 9.2539062 16.703125 L 11.253906 12 L 9.2539062 7.296875 L 10.699219 3.8984375 A 5.5 5.5 0 0 0 7.6875 3 z M 16.3125 3 A 5.5 5.5 0 0 0 14.435547 3.3261719 L 12.746094 7.296875 L 14.746094 12 L 12.746094 16.703125 L 14.076172 19.832031 A 25.175 25.175 0 0 0 17.011719 17.505859 C 19.312719 15.360859 21.75 12.175 21.75 8.25 C 21.75 5.322 19.2855 3 16.3125 3 z"
      />
    </svg>
  );
};

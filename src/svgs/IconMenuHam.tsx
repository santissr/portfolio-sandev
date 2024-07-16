import { type ReactElement } from 'react';

interface IconMenuHambM {
  size: string;
  color: string;
  className?: string;
  onClick?: () => void;
}

export const IconMenuHamb = ({
                               size,
                               color,
                               className, onClick,

                             }: IconMenuHambM): ReactElement => {
  return (
    <svg onClick={onClick}
         className={className}
         xmlns="http://www.w3.org/2000/svg"
         width={size}
         height={size}
         viewBox="0 0 16 16"
         fill="none"
    >
      <g clipPath="url(#clip0_4300_16646)">
        <path
          d="M14.9141 7.41406H1.08594C0.762324 7.41406 0.5 7.67639 0.5 8C0.5 8.32361 0.762324 8.58594 1.08594 8.58594H14.9141C15.2377 8.58594 15.5 8.32361 15.5 8C15.5 7.67639 15.2377 7.41406 14.9141 7.41406Z"
          fill={color}
        />
        <path
          d="M14.9141 2.72656H1.08594C0.762324 2.72656 0.5 2.98889 0.5 3.3125C0.5 3.63611 0.762324 3.89844 1.08594 3.89844H14.9141C15.2377 3.89844 15.5 3.63611 15.5 3.3125C15.5 2.98889 15.2377 2.72656 14.9141 2.72656Z"
          fill={color}
        />
        <path
          d="M14.9141 12.1016H1.08594C0.762324 12.1016 0.5 12.3639 0.5 12.6875C0.5 13.0111 0.762324 13.2734 1.08594 13.2734H14.9141C15.2377 13.2734 15.5 13.0111 15.5 12.6875C15.5 12.3639 15.2377 12.1016 14.9141 12.1016Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_4300_16646">
          <rect width="16" height="16" fill="white" transform="translate(0.5 0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};

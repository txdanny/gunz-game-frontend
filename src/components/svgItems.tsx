import { FC } from "react";

interface IconProps {
  color?: string;
  className?: string;
  subClassName?: string;
}

export const ArrowDown: FC<IconProps> = ({
  className = "",
  subClassName = "",
}) => {
  return (
    <svg
      width="9"
      height="6"
      viewBox="0 0 9 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.85156 1.5L4.92849 4.5L8.00541 1.5"
        className={subClassName}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const UserIcon: FC<IconProps> = ({ color, className }) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : ""}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5471 12.0471C13.8725 12.0471 16.5682 9.35138 16.5682 6.02601C16.5682 2.70063 13.8725 0.00488281 10.5471 0.00488281C7.22171 0.00488281 4.52596 2.70063 4.52596 6.02601C4.52596 9.35138 7.22171 12.0471 10.5471 12.0471ZM8.98185 13.4922C8.98185 13.4922 6.21197 13.9739 3.92411 15.2986C3.52672 15.5287 3.20033 15.7125 2.92562 15.8672C1.61876 16.6032 1.48131 16.6806 0.431857 17.9479V18.9112C0.400882 19.8177 0.698614 19.9914 1.51566 19.995C1.51566 19.995 18.2594 19.9853 19.2178 19.995C20.1761 20.0048 20.4047 19.7372 20.422 18.9112C20.4393 18.0853 20.422 17.9479 20.422 17.9479C20.422 17.9479 19.8201 16.6232 17.5319 15.2986C15.2437 13.9739 12.3537 13.4922 12.3537 13.4922H8.98185Z"
        fill={color ? color : "#717477"}
      />
    </svg>
  );
};

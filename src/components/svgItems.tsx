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

export const HamburgerIcon: FC<IconProps> = () => {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2H1C0.447716 2 0 1.55228 0 1ZM0 6C0 5.44772 0.447715 5 1 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H1C0.447716 7 0 6.55228 0 6ZM1 12C0.447716 12 0 11.5523 0 11C0 10.4477 0.447715 10 1 10H17C17.5523 10 18 10.4477 18 11C18 11.5523 17.5523 12 17 12H1Z"
        fill="#1F1F1F"
      />
    </svg>
  );
};

export const CloseIcon: FC<IconProps> = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.03245 0.348714C1.5675 -0.116238 0.813666 -0.116238 0.348715 0.348714C-0.116237 0.813666 -0.116239 1.5675 0.348713 2.03245L6.36971 8.05345L0.497717 13.9254C0.0327654 14.3904 0.0327655 15.1442 0.497717 15.6092C0.962669 16.0741 1.7165 16.0741 2.18146 15.6092L8.05345 9.73719L13.8186 15.5024C14.2836 15.9673 15.0374 15.9673 15.5024 15.5024C15.9673 15.0374 15.9673 14.2836 15.5024 13.8186L9.73719 8.05345L15.6514 2.13926C16.1163 1.6743 16.1163 0.920468 15.6514 0.455516C15.1864 -0.00943562 14.4326 -0.00943702 13.9676 0.455515L8.05345 6.36971L2.03245 0.348714Z"
        fill="white"
      />
    </svg>
  );
};

export const LeaderBoardTabIcon: FC<IconProps> = ({ color, className }) => {
  return (
    <svg
      width="18"
      height="53"
      viewBox="0 0 18 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : ""}
    >
      <path d="M18 53L4.63341e-06 -1.57361e-06L0 53L18 53Z" fill={color} />
    </svg>
  );
};

export const LeaderBoardLeftTabIcon: FC<IconProps> = ({ color, className }) => {
  return (
    <svg
      width="18"
      height="53"
      viewBox="0 0 18 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : ""}
    >
      <path d="M0 53L18 -1.57361e-06L18 53L0 53Z" fill={color} />
    </svg>
  );
};

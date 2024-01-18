import Link from "next/link";
import { FC } from "react";

interface ButtonProps {
  url: string;
  title?: string;
}

const BackButton: FC<ButtonProps> = ({
  url,
  title = "back to lealldlllerboard",
}) => {
  return (
    <div className="breadcrumbs">
      <Link href={url}>
        <div className="">{title}</div>
      </Link>
    </div>
  );
};

export default BackButton;

import { FC, ReactNode } from "react";
import Header from "../header";

interface PageProps {
  children?: ReactNode;
}

const MainPageLayout: FC<PageProps> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default MainPageLayout;

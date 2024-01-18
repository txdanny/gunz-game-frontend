import { FC, ReactNode } from "react";
import Header from "../header";
import Footer from "../footer";

interface PageProps {
  children?: ReactNode;
}

const MainPageLayout: FC<PageProps> = ({ children }) => {
  return (
    <main className="main-page">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default MainPageLayout;

import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import * as Styled from "./Layout.styled";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Styled.Main component="main">{children}</Styled.Main>
      <Footer />
    </>
  );
};

export default Layout;

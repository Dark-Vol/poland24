import BlockTitle from "@components/BlockTitle";
import Breadcrumbs from "@components/Breadcrumbs";

import * as Styled from "./Page.styled";

type PageLayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
  return (
    <Styled.Wrapper>
      <Breadcrumbs />
      {title && <BlockTitle title={title} />}
      {children}
    </Styled.Wrapper>
  );
};

export default PageLayout;

import { HtmlHTMLAttributes } from "react";
import * as Styled from "./BlockTitle.styled";

type BlockTitleProps = {
  title: string;
  subtitle?: string;
} & HtmlHTMLAttributes<HTMLDivElement>;

const BlockTitle: React.FC<BlockTitleProps> = ({
  title,
  subtitle,
  ...props
}) => {
  return (
    <Styled.Container {...props}>
      <Styled.Divider />
      <Styled.Text>
        <Styled.Title>{title}</Styled.Title>
        {subtitle && <Styled.Subtitle>{subtitle}</Styled.Subtitle>}
      </Styled.Text>
    </Styled.Container>
  );
};

export default BlockTitle;

import * as Styled from "./Title.styled";

type TitleProps = {
  title: string;
};

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Divider />
    </Styled.Wrapper>
  );
};

export default Title;

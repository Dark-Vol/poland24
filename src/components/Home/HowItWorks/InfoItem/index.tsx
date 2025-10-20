import * as Styled from "./InfoItem.styled";

type InfoItemProps = {
  index: number | string;
  title: string;
  text: string;
};

const InfoItem: React.FC<InfoItemProps> = ({ index, title, text }) => {
  return (
    <Styled.Container>
      <Styled.Head>
        <Styled.Number>{index}</Styled.Number>
        <Styled.Title>{title}</Styled.Title>
      </Styled.Head>
      <Styled.Text>{text}</Styled.Text>
    </Styled.Container>
  );
};

export default InfoItem;

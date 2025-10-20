import * as Styled from "./Error.styled";

type ErrorProps = {
  statusCode: number;
};

const Error: React.FC<ErrorProps> = ({ statusCode }) => {
  return (
    <Styled.Wrapper>
      <Styled.StatusCode>{statusCode}</Styled.StatusCode>
      <Styled.Description>
        Потрібно авторизуватись, щоб переглянути сторінку
      </Styled.Description>
    </Styled.Wrapper>
  );
};

export default Error;

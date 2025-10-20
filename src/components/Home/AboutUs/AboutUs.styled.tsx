import theme from "@theme/index";
import styled from "styled-components";
import CustomButton from "@components/UI/buttons";

export const Container = styled.section`
  padding: 32px 16px;

  ${theme.breakpoints.up("lg")} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 1290px;
    margin: auto;
    padding: 0;
    padding-top: 64px;
  }
`;

export const Description = styled.p`
  margin-top: 24px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0;

  ${theme.breakpoints.up("md")} {
    margin-top: 75px;
    font-size: 24px;
    max-width: 590px;
    line-height: 33.6px;
  }
`;

export const Button = styled(CustomButton)`
  margin-top: 24px;

  ${theme.breakpoints.up("md")} {
    margin-top: 65px;
    margin-bottom: 10px;
  }
`;

export const Video = styled.div`
  border-radius: 16px;
  position: relative;
  margin-top: 24px;
  background-image: url("/images/map.png");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  aspect-ratio: 16/9;

  ${theme.breakpoints.up("md")} {
    margin-top: 0;
  }
`;

export const VideoBackdrop = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: #0000007a;
`;

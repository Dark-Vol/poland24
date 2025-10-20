import styled from "styled-components";

export const Aside = styled.ul`
  width: 100%;
  max-width: 248px;
  background: #fff;
  border-radius: 8px;
  max-height: 756px;
  overflow: hidden;
  padding: 8px;

  ul {
    &::-webkit-scrollbar {
      width: 0.3em;
    }
  }
`;

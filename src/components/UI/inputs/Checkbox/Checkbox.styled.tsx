import styled from "styled-components";

export const Label = styled.label<{ $error: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  color: ${({ $error }) => ($error ? "#fbcece" : "#2d2d2de5")};
  cursor: pointer;
  letter-spacing: 0;
  text-align: left;
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  margin: 0;
  padding: 0;
  accent-color: #ed2e2e;
`;

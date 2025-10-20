import styled from "styled-components";

export const Label = styled.label<{ $fullWidth: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 14px;
  font-weight: 600;
  gap: 4px;
  transition: 0.1s;
  ${({ $fullWidth }) => $fullWidth && "width: 100%;"}
  position: relative;
`;

export const TextField = styled(({ textArea, ...props }) =>
  textArea ? (
    <textarea style={{ height: "100%" }} {...props} />
  ) : (
    <input {...props} />
  )
)<{
  $fullWidth: boolean;
  $size: "small" | "large";
  $error: boolean;
  textArea: boolean;
}>`
  @keyframes colorChange {
    0% {
      background-color: #fbcece;
    }
    50% {
      background-color: #e29a9a;
    }
    100% {
      background-color: #fbcece;
    }
  }

  border: 1px solid ${({ $error }) => ($error ? "#ff5959" : "#bdbdbd")};
  outline: none;
  ${({ $error }) =>
    $error && "animation: colorChange 3s infinite; color: #fff;"}

  background: #f2f2f2;
  border-radius: 8px;
  padding: ${({ $size }) => ($size === "small" ? "14px" : "25px")};
  font-size: 16px;
  line-height: 22px;
  ${({ $fullWidth }) => $fullWidth && "width: 100%;"}

  &::placeholder {
    ${({ $error }) => $error && "color: #fff;"}
  }

  &:focus {
    border: 1px solid #fbcece;
  }

  &[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
    margin: 0;
  }
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ErrorText = styled.span`
  font-size: 12px;
  color: #ff5959;
  font-weight: 400;
`;

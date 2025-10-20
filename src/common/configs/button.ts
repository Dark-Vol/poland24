import type ButtonConfig from "src/types/button";

export const buttonConfig: ButtonConfig = {
  variant: {
    primary: {
      initial: { background: "#EA0C0C", color: "#FFFFFF" },
      active: { background: "#BB0A0A", color: "#FFFFFF" },
      hover: { background: "#EA0C0C", color: "#FFFFFF", outline: "#FBCECE" },
      disabled: { background: "#FBCECE", color: "#FFFFFF" },
    },
    secondary: {
      initial: { background: "#95A4AA", color: "#FFFFFF" },
      active: { background: "#596266", color: "#FFFFFF" },
      hover: { background: "#F2F2F2", color: "#2D2D2D99", outline: "#EAEDEE" },
      disabled: { background: "#EAEDEE", color: "#FFFFFF" },
    },
    subtle: {
      initial: { background: "none", color: "#2D2D2D" },
      active: { background: "#BB0A0A", color: "#FFFFFF" },
      hover: { background: "none", color: "#2D2D2D", outline: "#FBCECE" },
      disabled: { background: "#EAEDEE", color: "#EAEDEE" },
    },
    text: {
      initial: { background: "none", color: "#2d2d2d" },
      active: { background: "none", color: "#596266" },
      hover: { background: "none", color: "#2D2D2D", outline: "#EAEDEE" },
      disabled: { background: "none", color: "#EAEDEE" },
    },
    green: {
      initial: { background: "#00BA88", color: "#FFFFFF" },
      active: { background: "#00956d", color: "#FFFFFF" },
      hover: { background: "#007051", color: "#FFFFFF", outline: "#EAEDEE" },
      disabled: { background: "#004a36", color: "#FFFFFF" },
    },
  },
  size: {
    large: {
      padding: "24px 32px",
      fontSize: "20px",
      outline: "8px",
      borderRadius: "10px",
      height: "56px",
    },
    medium: {
      padding: "14px 24px",
      fontSize: "14px",
      outline: "4px",
      borderRadius: "8px",
      height: "40px",
    },
    small: {
      padding: "8px 16px",
      fontSize: "14px",
      outline: "6px",
      borderRadius: "6px",
      height: "20px",
    },
  },
};

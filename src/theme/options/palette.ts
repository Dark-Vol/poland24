import { common } from "@mui/material/colors";

declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    yellow: string;
  }

  interface Palette {
    support: {
      main: string;
      light: string;
      dark: string;
      darker: string;
    };
  }
}

const palette = {
  primary: {
    main: "#EA0C0C",
    contrastText: common.white,
  },
  support: {
    main: "#eee",
    light: "#c8cdcd",
    dark: "#999",
    darker: "#555e61",
  },
  common: {
    ...common,
    yellow: "#ffcd00",
  },
  secondary: {
    main: "#001e28",
    light: "#0f2d37",
    dark: "#00141e",
    contrastText: common.white,
  },
  background: {
    default: "#eee",
    paper: common.white,
  },
  text: {
    primary: "#00141e",
    secondary: "#555e61",
    disabled: "#c8cdcd",
  },
};

export default palette;

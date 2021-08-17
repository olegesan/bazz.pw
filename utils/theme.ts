import {
  extendTheme,
  ThemeConfig,
  color,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { mode } from "@chakra-ui/theme-tools";
/*
sets default color mode theme
*/
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

/*
 * update colors
 */ const colors = {
  dark: {
    font: "#F7FAFC",
    bg: "#2D3748",
  },
  light: {
    font: "#2D3748",
    bg: "#F7FAFC",
  },
};

/*
update default html tags for mdx files
*/
const styles = {
  global: (props: any) => ({
    ".mdx": {
      h1: {
        fontSize: "3xl",
        mb: 4,
      },
      h2: {
        fontSize: "xl",
        mb: 3,
      },
      h3: { fontSize: "lg", mb: 2 },
      p: {
        fontsize: "sm",
        lineHeight: "1.4",
      },
    },
    body: {
      color: mode("#2D3748", "#F7FAFC")(props),
      bg: mode("#F7FAFC", "#2D3748")(props),
    },
  }),
};

const theme = extendTheme({
  config,
  styles,
  colors,
});

export default theme;

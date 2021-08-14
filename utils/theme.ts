import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import React from "react";
/*
sets default color mode theme
*/
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

/*
update default html tags for mdx files
*/
const styles = {
  global: {
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
  },
};
const theme = extendTheme({
  config,
  styles,
});

export default theme;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import MDXWrapper from "../components/mdxWrapper";
import { Text } from "@chakra-ui/react";
import theme from "../utils/theme";

const components = { MDXWrapper, Text };

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  );
}

export default MyApp;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import MDXWrapper from "../components/mdxWrapper";
import { Text, Image } from "@chakra-ui/react";
import theme from "../utils/theme";
import NavBar from "../components/navbar";

const components = { MDXWrapper, Text, Image };

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MDXProvider components={components}>
        <NavBar />
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  );
}

export default MyApp;

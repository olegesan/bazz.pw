import Document, {
  DocumentContext,
  Html,
  NextScript,
  Main,
  Head,
} from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../utils/theme";

class MyDocument extends Document {
  //   static async getInitialProps(ctx: DocumentContext) {
  //     const initialProps = await Document.getInitialProps(ctx);

  //     return initialProps;
  //   }
  render() {
    return (
      <Html>
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Stack } from "@mui/material";
// import { ChakraProvider } from "@chakra-ui/react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        {/* Your other head elements (stylesheets, scripts, etc.) go here */}
      </Head>

      <body>
        <Stack>
          {/* <ChakraProvider> */}
          <Main />
          {/* </ChakraProvider> */}
        </Stack>
        <NextScript />
      </body>
    </Html>
  );
}

// theme.js or theme.ts

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "poppins, sans-serif", // Change 'Your-Font-Name' to the actual font name
    heading: "poppins, serif", // You can specify different fonts for body and heading
  },
});

export default theme;

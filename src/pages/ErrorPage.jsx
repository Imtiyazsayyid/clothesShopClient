import { Text } from "@chakra-ui/react";
import React from "react";

const ErrorPage = () => {
  return (
    <div>
      <Text color={"red"} textAlign={"center"} marginTop={10}>
        This route does not exist.
      </Text>
    </div>
  );
};

export default ErrorPage;

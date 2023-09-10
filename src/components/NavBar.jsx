import React from "react";
import { Box, Image, Link as ChakraLink, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Box
      height={"60px"}
      borderBottom={"4px"}
      borderBottomColor={"teal"}
      display={"flex"}
    >
      <Box height={"100%"} width={"20%"}>
        <Image
          height={"100%"}
          objectFit={"cover"}
          src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
        />
      </Box>
      <Box
        width={"60%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={10}
      >
        <ChakraLink _hover={{ color: "teal" }}>
          <Link to={"/"}>Home</Link>
        </ChakraLink>
        <ChakraLink _hover={{ color: "teal" }}>
          <Link to={"/products"}>Products</Link>
        </ChakraLink>
        <ChakraLink _hover={{ color: "teal" }}>
          <Link to={"/about"}>About</Link>
        </ChakraLink>
        <ChakraLink _hover={{ color: "teal" }}>
          <Link to={"/contact"}>Contact</Link>
        </ChakraLink>
      </Box>
      <Box
        height={"100%"}
        width={"20%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
      >
        <Button colorScheme="teal" as={Link} to={"/login"}>
          Log In
        </Button>
        <Button colorScheme="teal" as={Link} to={"/signup"}>
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default NavBar;

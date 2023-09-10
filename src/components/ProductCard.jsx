import { Box, Button, Image, Text } from "@chakra-ui/react";

const ProductCard = () => {
  return (
    <Box
      height={"500px"}
      width={"400px"}
      boxShadow={"0 0 2px 2px rgba(0, 0, 0, 0.15)"}
    >
      <Image
        height={"70%"}
        width={"100%"}
        objectFit={"cover"}
        src="https://img.fruugo.com/product/8/53/575512538_max.jpg"
      />
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        padding={4}
      >
        <Text fontSize="xl" fontWeight={"bold"} marginBottom={1}>
          Rocky Road
        </Text>
        <Text fontSize={"xs"} marginBottom={4}>
          Rs. 1299
        </Text>
        <Button width={"80%"} colorScheme="teal">
          Add To Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;

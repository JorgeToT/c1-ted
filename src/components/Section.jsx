import { Box, Image, Flex } from "@chakra-ui/react";
const Section = () => {
  return (
    <Flex justifyContent={"center"} mt="20px">
      <Box boxSize="6xl" height={"fit-content"}>
        <Image src="./img/Section.png" alt="TED" />
      </Box>
    </Flex>
  );
};

export default Section;

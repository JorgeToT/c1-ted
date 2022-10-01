import { FiSearch } from "react-icons/fi";
import {
  Flex,
  Text,
  Heading,
  Divider,
  Button,
  Grid,
  useDisclosure,
  ScaleFade,
} from "@chakra-ui/react";

const Header = (props) => {
  const isOpen = useDisclosure();

  return (
    <ScaleFade in={isOpen}>
      <Flex justifyContent={"space-between"}>
        <Flex direction={"row"} alignItems="center">
          <Heading color={"red"} fontWeight="extrabold" fontSize={"6xl"}>
            TED
          </Heading>
          <Text color={"gray.600"} fontWeight="light" fontSize={"4xl"} ml="6px">
            Ideas worth spreading
          </Text>
          <Text color={"red"} mb="20px" fontSize={"3xl"}>
            *
          </Text>
        </Flex>
        <Flex alignItems={"center"}>
          <Text color={"red"} fontSize="2xs">
            *
          </Text>
          <Text
            fontSize={"2xs"}
            fontWeight="light"
            fontStyle={"italic"}
            pl="5px"
          >
            A new one every day. Handpicked.
          </Text>
        </Flex>
      </Flex>
      <Flex justifyContent={"space-between"} alignItems="center" wrap={"wrap"}>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <Text fontSize={"14px"} align="center">
            Watch
          </Text>
          <Text fontSize={"14px"} align="center">
            Read
          </Text>
          <Text fontSize={"14px"} align="center">
            Attend
          </Text>
          <Text fontSize={"14px"} align="center">
            Participate
          </Text>
          <Text fontSize={"14px"} align="center">
            About
          </Text>
        </Grid>
        <Flex justifyContent={"space-between"} alignItems="center">
          <Button
            width={"300px"}
            mr="15px"
            bg={"whiteAlpha.400"}
            border="ActiveBorder"
            onClick={() => props.setView("Search")}
          >
            <Flex
              alignItems={"center"}
              justifyContent="space-between"
              width={"100%"}
            >
              <Text fontSize={"14px"}>Search...</Text>
              <FiSearch />
            </Flex>
          </Button>
          <Text fontSize={"10px"} width="50px">
            Log in
          </Text>
          <Text fontSize={"10px"} width="50px">
            Sign up
          </Text>
        </Flex>
      </Flex>
      <Divider borderBottomWidth={"2px"} mt="4px" />
    </ScaleFade>
  );
};

export default Header;

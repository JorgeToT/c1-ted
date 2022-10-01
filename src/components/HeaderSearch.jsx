import {
  Grid,
  Flex,
  Heading,
  Text,
  Divider,
  useDisclosure,
  ScaleFade,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

const HeaderSearch = () => {
  const isOpen = useDisclosure();
  return (
    <ScaleFade in={isOpen}>
      <Flex justifyContent={"space-between"} alignItems="center" wrap={"wrap"}>
        <Flex direction={"row"} alignItems="center">
          <Heading color={"red"} fontWeight="extrabold" fontSize={"3xl"}>
            TED
          </Heading>
          <Text color={"gray.600"} fontWeight="light" fontSize={"xl"} ml="6px">
            Ideas worth spreading
          </Text>
        </Flex>
        <Grid templateColumns="repeat(7, 1fr)" gap={6} alignContent="center">
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
          <Text fontSize={"14px"} align="center">
            Log in
          </Text>
          <FiSearch size={"22px"} />
        </Grid>
      </Flex>
      <Divider borderBottomWidth={"2px"} mt="4px" />
    </ScaleFade>
  );
};

export default HeaderSearch;

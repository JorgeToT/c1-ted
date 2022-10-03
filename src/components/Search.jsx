import { Box, Button, Flex } from "@chakra-ui/react";
import { FiX } from "react-icons/fi";
import { SearchBox, Hits, Configure } from "react-instantsearch-hooks-web";
import BoxOfData from "./BoxOfData";
import GridSection from "./Grid";
import "../index.css";

const Search = (props) => {
  return (
    <Box>
      <Configure hitsPerPage={6} />
      <Flex alignItems={"center"}>
        <SearchBox
          placeholder="Search for Talks, Speakers..."
          submitIconComponent={() => null}
          resetIconComponent={() => null}
          className="MyCustomSearchBox"
        />
        <Button
          bg={"whiteAlpha.400"}
          onClick={() => props.setView("Main")}
          height={"fit-content"}
          _hover={{ bg: "whiteAlpha.500" }}
        >
          <FiX color="#666" size={"150px"} strokeWidth="0.2px" />
        </Button>
      </Flex>
      <GridSection />
    </Box>
  );
};

export default Search;

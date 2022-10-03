import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { FiX } from "react-icons/fi";
import { SearchBox, Hits, Highlight } from "react-instantsearch-hooks-web";

function Hit({ hit }) {
  return (
    <Box>
      <Image src={hit.image_url} alt={hit.name} />
      <h1>
        <Highlight attribute="name" hit={hit} />
      </h1>
      <p>
        <Highlight attribute="description" hit={hit} />
      </p>
    </Box>
  );
}

const Search = (props) => {
  return (
    <Box>
      <Flex alignItems={"center"}>
        <SearchBox style={{ fontSize: "65px" }} />
        <Button
          bg={"whiteAlpha.400"}
          onClick={() => props.setView("Main")}
          height={"fit-content"}
          _hover={{ bg: "whiteAlpha.500" }}
        >
          <FiX color="#555" size={"150px"} strokeWidth="0.2px" />
        </Button>
      </Flex>

      <Hits hitComponent={Hit} />
    </Box>
  );
};

export default Search;

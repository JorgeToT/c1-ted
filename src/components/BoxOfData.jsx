import { Highlight } from "react-instantsearch-hooks-web";
import { Box, Image, Text } from "@chakra-ui/react";

const BoxOfData = ({ hit }) => {
  return (
    <Box>
      <Image src={hit.image_url} alt={hit.name} />
      <Box>
        <Text>
          <Highlight attribute="name" hit={hit} />
        </Text>
        <Text>
          <Highlight attribute="description" hit={hit} />
        </Text>
      </Box>
    </Box>
  );
};

export default BoxOfData;

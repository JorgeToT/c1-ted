import { Grid, GridItem } from "@chakra-ui/react";
import { Hits } from "react-instantsearch-hooks-web";
import BoxOfData from "./BoxOfData";
const GridSection = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={2} h={"600px"} w={750} mb={50}>
      <GridItem rowSpan={2} colSpan={2} bg="tomato">
        <Hits hitComponent={BoxOfData} />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1} bg="tomato"></GridItem>
      <GridItem rowSpan={1} colSpan={1} bg="tomato"></GridItem>
      <GridItem rowSpan={1} colSpan={1} bg="tomato"></GridItem>
      <GridItem rowSpan={1} colSpan={1} bg="tomato"></GridItem>
      <GridItem rowSpan={1} colSpan={1} bg="tomato"></GridItem>
    </Grid>
  );
};

export default GridSection;

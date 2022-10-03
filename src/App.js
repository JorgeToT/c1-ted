import Main from "./layouts/Main";
import { Container } from "@chakra-ui/react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-hooks-web";

const searchClient = algoliasearch(
  "PPU6WMWQH8",
  "858fda70f43857ae42d4fbf410eadc3e"
);

function App() {
  return (
    <InstantSearch searchClient={searchClient} indexName="dev_main">
      <Container maxW={"container.xl"}>
        <Main />
      </Container>
    </InstantSearch>
  );
}

export default App;

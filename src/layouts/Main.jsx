import Header from "../components/Header";
import HeaderSearch from "../components/HeaderSearch";
import Search from "../components/Search";
import Section from "../components/Section";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

const Main = () => {
  const [view, setView] = useState("Main");
  return (
    <Box>
      {view === "Main" ? (
        <Box>
          <Header setView={setView} />
          <Section />
        </Box>
      ) : (
        <Box>
          <HeaderSearch />
          <Search setView={setView} />
        </Box>
      )}
    </Box>
  );
};

export default Main;

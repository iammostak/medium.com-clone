import { Box, Container, Flex } from "@chakra-ui/react";
import SideBar from "../../components/Sidebar/Sidebar";

function Home() {
   return (
      <Container as={Flex} maxW={"container"} p={0} m={0}>
         <SideBar route="home" />
         <Box w={"93.8%"}>home!</Box>
      </Container>
   );
}

export default Home;

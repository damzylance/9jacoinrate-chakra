import React from "react";
import { Box, Container, Text, Flex } from "@chakra-ui/react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";

function Navbar() {
  return (
    <Box py={"30px"} color={"green.600"} boxShadow={"0 0 10px rgb(0 0 0 / 7%)"}>
      <Container
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        maxWidth={["100%", "100%", "80%"]}
      >
        <Flex gap={"30px"} alignItems={"center"}>
          <Box>
            <Text fontSize={"2xl"} color={"green.600"}>
              <span style={{ fontWeight: "900" }}>9ja</span>CoinRate
            </Text>
          </Box>
          <Flex gap={"20px"}>
            <Text>Home</Text>
            <Text>Exchanges</Text>
            <Text>Bounties</Text>
          </Flex>
        </Flex>
        <Flex alignItems={"center"} gap="20px">
          <Box>
            <BsSunFill size={"20px"} />
          </Box>
          <Box padding={"0.6rem"} borderRadius="full" bg={"green.600"}>
            <Text color={"gray.100"}>Get Updates</Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Navbar;

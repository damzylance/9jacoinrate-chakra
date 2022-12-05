import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  Flex,
  Box,
  Text,
  Container,
} from "@chakra-ui/react";
import "./Modal.css";
import Convertcard from "./Convertcard";
import { useState } from "react";
function Modal({ closeModal, isOpen, name, rates }) {
  const [activeId, setActiveId] = useState(0);
  const [exchange, setExchange] = useState("");
  const [exchangeRate, setExchangeRate] = useState(0);
  const switchTab = (e, rate) => {
    const parent = e.target.parentNode;
    console.log(parent);
    for (let i = 0; i < parent.children.length; i++) {
      const element = parent.children[i];
      if (element === e.target) {
        element.classList.add("isActive");
        element.classList.remove("notActive");
        setExchangeRate(rate);

        setActiveId(i);
      } else {
        element.classList.remove("isActive");
        element.classList.add("notActive");
      }
    }
  };
  return (
    <Drawer onClose={closeModal} isOpen={isOpen} size={"md"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{name}</DrawerHeader>
        <DrawerBody>
          <Box>
            <Flex
              gap={"20px"}
              wrap={"wrap"}
              justifyContent={"space-evenly"}
              mx="auto"
            >
              {rates
                .sort((r1, r2) =>
                  r1.rate < r2.rate ? 1 : r1.rate > r2.rate ? -1 : 0
                )
                .map((exchangeRate, index) => {
                  let bg = "";

                  let className = "notActive";
                  return (
                    <Text
                      textAlign={"center"}
                      width={"100px"}
                      bg={bg}
                      py={"0.2rem"}
                      borderRadius={"full"}
                      cursor={"pointer"}
                      onClick={(e) => switchTab(e, exchangeRate.rate)}
                      fontSize={"lg"}
                      className={index === 0 ? "isActive" : className}
                    >
                      {exchangeRate.exchange}
                    </Text>
                  );
                })}
            </Flex>
            <Container my={"2rem"}>
              <Text>
                {name}/NGN Rate: {exchangeRate}{" "}
              </Text>
              <Convertcard coin={name} />
              <Flex justifyContent={"center"} my={"2rem"}>
                <Box
                  width={"40px"}
                  bg={"rgb(245, 245, 245)"}
                  borderRadius="full"
                  textAlign={"center"}
                  padding="2"
                  cursor={"pointer"}
                  sx={{ _hover: { background: "green.300", color: "#fff" } }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7.5 3h3v18.5l-7-7h4V3zM16.5 21h-3V2.5l7 7h-4V21z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Box>
              </Flex>
              <Convertcard coin={"NGN"} />
            </Container>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
export default Modal;

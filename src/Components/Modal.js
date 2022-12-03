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
} from "@chakra-ui/react";
function Modal({ closeModal, isOpen, name, rates }) {
  return (
    <Drawer onClose={closeModal} isOpen={isOpen} size={"md"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{name}</DrawerHeader>
        <DrawerBody>
          <Flex gap={"20px"} justifyContent={"space-evenly"} mx="auto">
            {rates
              .sort((r1, r2) =>
                r1.rate < r2.rate ? 1 : r1.rate > r2.rate ? -1 : 0
              )
              .map(({ exchange, rate }, index) => {
                let bg = "";
                let color = "gray.700";

                if (index === 0) {
                  bg = "green.500";
                  color = "gray.100";
                }

                return (
                  <Flex
                    key={index}
                    flexDir={"column"}
                    alignItems={"center"}
                    width={"fit-content"}
                    gap={"0.2rem"}
                  >
                    <Box
                      textAlign={"center"}
                      width={"100px"}
                      border={"1px solid green"}
                      color={color}
                      bg={bg}
                      borderRadius={"base"}
                    >
                      <Text fontSize={"sm"}>
                        N{rate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </Text>
                    </Box>
                    <Text fontSize={"sm"}>{exchange}</Text>
                  </Flex>
                );
              })}
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
export default Modal;

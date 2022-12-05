import { Flex, Input, Text, Tag } from "@chakra-ui/react";

function Convertcard(props) {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      p={"0.5rem 1rem"}
      border={"0.1px solid green"}
      borderRadius={"md"}
      bg={"rgb(245, 245, 245)"}
      cursor={"pointer"}
    >
      <Flex flexDir={"column"} gap="20px">
        <Text fontSize={"sm"}>I want to buy</Text>
        <Input
          border={"none"}
          boxShadow={"none"}
          type={"number"}
          pl={0}
          fontSize={"2xl"}
          placeholder={"0.00"}
        />
      </Flex>
      <Tag size={"lg"} color={"#fff"} bg="green.600" borderRadius={"full"}>
        {props.coin}
      </Tag>
    </Flex>
  );
}

export default Convertcard;

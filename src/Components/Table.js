import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Tag,
  Icon,
  Container,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import Modal from "./Modal";
const data = [
  {
    name: "Bitcoin",
    rates: [
      { exchange: "Binance", rate: 12000000 },
      { exchange: "Remitano", rate: 12000400 },
      { exchange: "Kucoin", rate: 12000800 },
      { exchange: "Bitmama", rate: 12000000 },
    ],
  },
  {
    name: "Ethereum",
    rates: [
      { exchange: "Binance", rate: 1200000 },
      { exchange: "Remitano", rate: 1200040 },
      { exchange: "Kucoin", rate: 1200000 },
      { exchange: "Bitmama", rate: 1200000 },
    ],
  },
  {
    name: "USDT",
    rates: [
      { exchange: "Binance", rate: 760 },
      { exchange: "Remitano", rate: 750 },
      { exchange: "Kucoin", rate: 760 },
      { exchange: "Bitmama", rate: 762 },
    ],
  },
  {
    name: "BUSD",
    rates: [
      { exchange: "Binance", rate: 760 },
      { exchange: "Remitano", rate: 750 },
      { exchange: "Kucoin", rate: 760 },
      { exchange: "Bitmama", rate: 762 },
    ],
  },
  {
    name: "BNB",
    rates: [
      { exchange: "Binance", rate: 760 },
      { exchange: "Remitano", rate: 750 },
      { exchange: "Kucoin", rate: 760 },
      { exchange: "Bitmama", rate: 762 },
    ],
  },
];

function MarketTable() {
  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((response) => {
        console.log(response);
        //   setTimeout(() => {
        //     const body = response.data;
        //     let $ = load(body);
        //     let footer = $("#tour-offer-price > p");
        //     console.log(footer.length);
        //   }, 10000);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Container maxWidth={["100%", "100%", "80%"]} mt="5rem">
      <Table variant={"simple"} overflow="scroll">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th textAlign={"center"}>Price</Th>
            <Th textAlign={"center"}>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          <DataRow />
        </Tbody>
      </Table>
    </Container>
  );
}

function DataRow() {
  const [coinData, setCoinData] = useState({
    name: "Bitcoin",
    rates: [
      { exchange: "Binance", rate: 12000000 },
      { exchange: "Remitano", rate: 12000400 },
      { exchange: "Kucoin", rate: 12000800 },
      { exchange: "Bitmama", rate: 12000000 },
    ],
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = (coinData) => {
    onOpen();
    setCoinData(coinData);
    console.log(coinData);
  };
  return (
    <>
      {data.map(({ name, rates }, index) => {
        return (
          <Tr key={index}>
            <Td>
              <Flex>
                <Text fontWeight={500}>{name}</Text>
              </Flex>
            </Td>
            <Td align="center">
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
                            N
                            {rate
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </Text>
                        </Box>
                        <Text fontSize={"sm"}>{exchange}</Text>
                      </Flex>
                    );
                  })}
              </Flex>
            </Td>
            <Td>
              <Box width={"fit-content"} mx="auto">
                <Button
                  onClick={() => handleClick({ name, rates })}
                  color={"gray.100"}
                  size={"sm"}
                  bg={"green.600"}
                  borderRadius={"full"}
                >
                  Trade {name}
                </Button>
              </Box>
            </Td>
          </Tr>
        );
      })}
      <Modal
        closeModal={onClose}
        isOpen={isOpen}
        name={coinData.name}
        rates={coinData.rates}
      />
    </>
  );
}
export default MarketTable;

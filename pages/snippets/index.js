import React from "react";
import Head from "next/head";
import Image from "next/image";
import style from "../../styles/Home.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Tag,
  TagLeftIcon,
} from "@chakra-ui/react";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";

export const getServerSideProps = async () => {
  // ** fetch data using api/snippets
  const resp = await fetch("http://localhost:3000/api/snippets");
  const data = await resp.json();
  // ** fetch data directly from firestore
  // const resp = await db.collection("gitSnippets").get();
  // const data = resp.docs.map((snap) => ({
  // id: snap.id,
  // ...snap.data(),
  // }));
  return {
    props: {
      snippets: data,
      /* snippets: data */
    },
  };
};

const Snippets = ({ snippets }) => {
  const [list, setList] = useState([...snippets]);
  const [listToFilter, setListToFilter] = useState([...snippets]);
  const [searchInput, setSearchInput] = useState("");
  console.log(list);

  // ** click on tag to filter by lang
  const clickOnTag = (e) => {
    const searchValue = e.target.innerText;
    const currentList = [...list];
    const matchingItems = currentList.filter((item) =>
      // ** toString() method is necessary to startWith() to work
      item.lang.toString().startsWith(searchValue)
    );
    setListToFilter(matchingItems);

    console.log(searchValue);
  };
  // ** clicking on snippet tags filter list out
  const clikOnSnippetTag = (e) => {
    // gets tag text excl # tag
    const searchedTag = e.target.innerText.slice(1);
    const currentList = [...list];
    // ** filter list on base what is in the tag
    const showList = currentList.filter((item) =>
      // check if tags array includes clicked #tag
      item.tags.includes(searchedTag)
    );
    setListToFilter(showList);
    /* const showList = currentList.map((item) =>
      item.tags.includes(searchedTag) ? item : null
    ); */
    console.log(showList);
  };
  // ** Filter snippets with input value
  const filterSnippets = (e) => {
    // const searchValue = e.target.value;
    setSearchInput(e.target.value);
    const currentList = [...list];
    const matchingItems = currentList.filter((item) =>
      // ** toString() method is necessary to startWith() to work
      item.description.toString().startsWith(searchInput)
    );

    setListToFilter(matchingItems);
    // console.log(matchingItems);
  };
  // console.log(list);
  const showAllLanguages = () => {
    setListToFilter([...snippets]);
  };
  return (
    <Center>
      <Head>
        <title>Create electronics blog | Projects</title>
        <link rel="icon" href="/ic.png" />
        <meta name="keywords" content="elctronics snippets" />
      </Head>
      <main className={style.main}>
        <Image src="/ic_1.png" width={64} height={64} />
        <Flex justify="flex-start" align="start" width="90vw">
          <HStack>
            <Button variant="ghost" onClick={showAllLanguages}>
              All
            </Button>
            <Button variant="ghost" onClick={clickOnTag}>
              JavaScript
            </Button>
            <Button variant="ghost" onClick={clickOnTag}>
              CSS
            </Button>
            <Button variant="ghost" onClick={clickOnTag}>
              React
            </Button>
            <Button variant="ghost" onClick={clickOnTag}>
              Git
            </Button>
          </HStack>
        </Flex>
        <Box
          as="h1"
          fontSize="2rem"
          borderRadius="lg"
          // p="10px"
          marginBottom="40px"
          color="gray.600"
        >
          Snippets
        </Box>
        <InputGroup width="60%" m="10px">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            placeholder="tap to filter"
            variant="filled"
            onChange={filterSnippets}
            value={searchInput}
          />
        </InputGroup>
        {/* <Container centerContent="true"></Container> */}
        <SimpleGrid columns={2} spacing="10px" minChildWidth="320px">
          {listToFilter.map((snippet) => (
            <Box
              key={snippet.id}
              p="6"
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              className={style.Box}
              bg="gray.100"
            >
              <Badge colorScheme="purple" variant="solid">
                {snippet.lang}
              </Badge>
              <Link href={`/snippets/${snippet.id}`}>
                <a>
                  <h3>{`${snippet.description.slice(0, 40)} ...`}</h3>
                </a>
              </Link>
              {snippet.tags.map((tag) => (
                <Tag
                  onClick={clikOnSnippetTag}
                  colorScheme="yellow"
                  variant="outline"
                  size="sm"
                  m="1"
                  key={tag}
                  sx={{
                    "@media (max-width: 360px)": {
                      display: "none",
                    },
                    cursor: "pointer",
                  }}
                >
                  {`#${tag}`}
                </Tag>
              ))}
            </Box>
          ))}
        </SimpleGrid>
      </main>
    </Center>
  );
};

export default Snippets;

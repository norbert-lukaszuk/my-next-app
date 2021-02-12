import React from "react";
import Head from "next/head";
import Image from "next/image";
import style from "../../styles/Home.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Badge,
  Box,
  Center,
  color,
  Container,
  Flex,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

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
  return { props: { projects: data } };
};

const Projects = ({ projects }) => {
  const [list, setList] = useState([...projects]);
  const [listToFilter, setListToFilter] = useState([...projects]);
  // ?? destructuring problem
  const filterSnippets = (e) => {
    const searchValue = e.target.value;
    const currentList = [...list];
    const matchingItems = currentList.filter((item) =>
      // ** toString() method is necessary to startWith() to work
      item.description.toString().startsWith(searchValue)
    );

    setListToFilter(matchingItems);
    console.log(matchingItems);
  };
  console.log(list);
  return (
    <Center>
      <Head>
        <title>Create electronics blog | Projects</title>
        <link rel="icon" href="/ic.png" />
        <meta name="keywords" content="elctronics projects" />
      </Head>
      <main className={style.main}>
        <Image src="/ic_1.png" width={128} height={128} />
        <InputGroup width="60%">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            placeholder="tap to filter"
            variant="filled"
            onChange={filterSnippets}
          />
        </InputGroup>
        <Container centerContent="true">
          <h1>Snippets</h1>
        </Container>
        <Grid templateColumns="repeat(2, 1fr)" gridGap="10px">
          {listToFilter.map((project) => (
            <Box
              p="6"
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              className={style.Box}
              bg="gray.100"
            >
              <Badge colorScheme="purple" variant="solid">
                GIT
              </Badge>
              <Link key={project.id} href={`/projects/${project.id}`}>
                <a>
                  <h3>{project.description}</h3>
                </a>
              </Link>
            </Box>
          ))}
        </Grid>
      </main>
    </Center>
  );
};

export default Projects;

import React from "react";
import Head from "next/head";
import { Box, Code } from "@chakra-ui/react";

export const getStaticPaths = async () => {
  const resp = await fetch("http://localhost:3000/api/snippets");
  const data = await resp.json();
  const snippets = data.map((snippet) => ({
    params: { id: snippet.id },
  }));

  return { paths: snippets, fallback: false };
};
export const getStaticProps = async (context) => {
  const resp = await fetch(
    `http://localhost:3000/api/snippets/${context.params.id}`
  );
  const created = resp.created.toDate();
  const data = await resp.json();
  return { props: { snippet: { ...data } } };
};
const Project = ({ snippet }) => {
  console.log(snippet.created);
  return (
    <>
      <Head>
        <title>Create electronics blog | Project</title>
        <link rel="icon" href="/ic.png" />
      </Head>
      <Box m="15px" bg="gray.100" p={10}>
        <Code colorScheme="pink" children={snippet.lang} p="5px"></Code>
        <Code colorScheme="cyan" children={snippet.code} p="5px"></Code>
      </Box>
    </>
  );
};

export default Project;

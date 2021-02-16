import React from "react";
import Head from "next/head";
import { Box, Code } from "@chakra-ui/react";
export const getStaticPaths = async () => {
  const resp = await fetch("http://localhost:3000/api/snippets");
  const data = await resp.json();
  // const snap = await db.collection("jsSnippets").get();
  const snippets = data.map((snippet) => ({
    params: { id: snippet.id },
  }));

  console.log(snippets);
  return { paths: snippets, fallback: false };
};
export const getStaticProps = async (context) => {
  const resp = await fetch(
    `http://localhost:3000/api/snippets/${context.params.id}`
  );

  const data = await resp.json();
  console.log(data);
  // const snap = await db.collection("jsSnippets").doc(context.params.id).get();

  // const snippet = { id: snap.id, ...snap.data() };
  // return { props: { projects: snippet } };
  return { props: { projects: { ...data } } };
};
const Project = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Create electronics blog | Project</title>
        <link rel="icon" href="/ic.png" />
      </Head>
      <Box m="15px" bg="gray.100" p={10}>
        <Code colorScheme="pink" children={projects.id} p="5px"></Code>
        <Code colorScheme="cyan" children={projects.code} p="5px"></Code>
      </Box>
    </>
  );
};

export default Project;

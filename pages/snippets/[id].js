import React from "react";
import { useEffect } from "react";
import Head from "next/head";
import { Box, Code, Container } from "@chakra-ui/react";
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "../../node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css";

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
  // const created = resp.created.toDate();
  const data = await resp.json();
  return { props: { snippet: { ...data } } };
};
const Project = ({ snippet }) => {
  console.log(new Date(snippet.date).toISOString().slice(0, 10));
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <Head>
        <title>Create electronics blog | Project</title>
        <link rel="icon" href="/ic.png" />
      </Head>
      {/* <Box m="15px" bg="gray.100" p={10}>
          <Code
            colorScheme="teal"
            children={new Date(snippet.date).toISOString().slice(0, 10)}
            p="5px"
          ></Code>
          <Code colorScheme="pink" children={snippet.lang} p="5px"></Code>
          <Code colorScheme="cyan" children={snippet.code} p="5px"></Code>
        </Box> */}
      <pre className="line-numbers">
        <code className={`language-${snippet.lang.toLowerCase()}`}>
          <p> {snippet.code}</p>
        </code>
      </pre>
    </>
  );
};

export default Project;

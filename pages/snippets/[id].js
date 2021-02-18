import React from "react";
import { useEffect } from "react";
import Head from "next/head";
import { Box, Code, Container } from "@chakra-ui/react";
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "../../node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";
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
  Prism.plugins.NormalizeWhitespace.setDefaults({
    "remove-trailing": true,
    "remove-indent": true,
    "left-trim": true,
    "right-trim": true,
    "break-lines": 40,
    "remove-initial-line-feed": true,
    // "tabs-to-spaces": 4,
    // "spaces-to-tabs": 4,
  });
  return (
    <>
      <Head>
        <title>Create electronics blog | Project</title>
        <link rel="icon" href="/ic.png" />
      </Head>
      <Box m="15px" bg="gray.100" p={10}>
        <Code
          colorScheme="teal"
          children={new Date(snippet.date).toISOString().slice(0, 10)}
          p="5px"
        ></Code>
        <Code colorScheme="pink" children={snippet.lang} p="5px"></Code>
        <pre className="line-numbers">
          <code className={`language-${snippet.lang.toLowerCase()}`}>
            <p> {snippet.code}</p>
          </code>
        </pre>
      </Box>
    </>
  );
};

export default Project;

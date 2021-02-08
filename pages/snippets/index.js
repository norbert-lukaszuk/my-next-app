import React from "react";
import Head from "next/head";
import fire from "../../config/fire-config";
import { useEffect } from "react";
const Snippets = () => {
  useEffect(() => {
    fire
      .firestore()
      .collection("gitSnippets")
      .onSnapshot((snap) => {
        const snippets = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(snippets);
        return snippets;
      });
  }, []);
  return (
    <div>
      <Head>
        <title>Create electronics blog | Code snippets</title>
        <link rel="icon" href="/ic.png" />
        <meta name="keywords" content="code snippets" />
      </Head>
      <h3>{}</h3>
    </div>
  );
};

export default Snippets;
export const getStaticProps = async () => {
  const snippets = await fire
    .firestore()
    .collection("gitSnippets")
    .onSnapshot((snap) => {
      const snippets = snap.docs.map((doc) => ({
        ...doc.data(),
      }));
      return snippets;
    });
  console.log(snippets);
  return { props: {} };
};

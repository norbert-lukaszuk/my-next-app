import React from "react";
import Head from "next/head";
import fire from "../../config/fire-config";
import db from "../../utils/db";
import { useEffect } from "react";
const Snippets = ({ snippets }) => {
  console.log(snippets);
  return (
    <div>
      <Head>
        <title>Create electronics blog | Code snippets</title>
        <link rel="icon" href="/ic.png" />
        <meta name="keywords" content="code snippets" />
      </Head>
      <h3>
        {snippets.map((snip) => (
          <p key={snip.id}>{snip.id}</p>
        ))}
      </h3>
    </div>
  );
};

export default Snippets;
export const getStaticProps = async () => {
  const snap = await db.collection("gitSnippets").get();
  const snippets = [];
  snap.forEach((doc) => {
    snippets.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return { props: { snippets } };
};

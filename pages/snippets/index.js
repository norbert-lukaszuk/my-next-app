import React from "react";
import Head from "next/head";
import fire from "../../config/fire-config";
import db from "../../utils/db";
import { useEffect } from "react";
import Link from "next/link";
const Snippets = ({ snippets }) => {
  console.log(snippets);
  return (
    <div>
      <Head>
        <title>Create electronics blog | Code snippets</title>
        <link rel="icon" href="/ic.png" />
        <meta name="keywords" content="code snippets" />
      </Head>
      {snippets.map((snip) => (
        <Link key={snip.id} href={`/snippets/${snip.id}`}>
          <h3>{snip.description}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Snippets;
export const getStaticProps = async () => {
  const snap = await db.collection("jsSnippets").get();
  const snippets = [];
  snap.forEach((doc) => {
    snippets.push({
      id: doc.id.toString(),
      ...doc.data(),
    });
  });
  return { props: { snippets } };
};

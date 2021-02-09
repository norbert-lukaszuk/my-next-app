import React from "react";
import Head from "next/head";
import db from "../../utils/db";
export const getStaticPaths = async () => {
  const snap = await db.collection("gitSnippets").get();
  const snippets = [];
  snap.forEach((doc) => {
    snippets.push({
      params: { id: doc.id },
    });
  });

  console.log(snippets);
  return { paths: snippets, fallback: false };
};
export const getStaticProps = async (context) => {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
  const data = await resp.json();
  return { props: { projects: data } };
};
const Project = ({ projects }) => {
  return (
    <div>
      <Head>
        <title>Create electronics blog | Project</title>
        <link rel="icon" href="/ic.png" />
      </Head>
      <h2>{projects.name}</h2>
      <h2>{projects.username}</h2>
      <h3>{projects.email}</h3>
    </div>
  );
};

export default Project;

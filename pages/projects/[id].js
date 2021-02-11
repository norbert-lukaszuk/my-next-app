import React from "react";
import Head from "next/head";
// import db from "../../utils/db";
export const getStaticPaths = async () => {
  const resp = await fetch("http://localhost:3000/api/snippets");
  const data = await resp.json();
  // const snap = await db.collection("jsSnippets").get();
  const snippets = data.map((snippet) => ({
    params: { id: snippet.id },
  }));
  // const snippets = [];
  // snap.forEach((doc) => {
  //   snippets.push({
  //     params: { id: doc.id },
  //   });
  // });

  console.log(snippets);
  return { paths: snippets, fallback: false };
};
export const getStaticProps = async (context) => {
  const resp = await fetch(
    `http://localhost:3000/api/snippets/${context.params.id}`
  );
  const data = await resp.json();
  const snippet = { ...data };
  // const snap = await db.collection("jsSnippets").doc(context.params.id).get();

  // const snippet = { id: snap.id, ...snap.data() };
  return { props: { projects: snippet } };
};
const Project = ({ projects }) => {
  return (
    <div>
      <Head>
        <title>Create electronics blog | Project</title>
        <link rel="icon" href="/ic.png" />
      </Head>
      <h2>{projects.id}</h2>
      <h2>{projects.description}</h2>
      <h3>{projects.code}</h3>
    </div>
  );
};

export default Project;

import React from "react";
// import db from "../../utils/db";

function Snippet({ projects }) {
  return <div>{/* <h3>{projects.description}</h3> */}</div>;
}

export default Snippet;

export const getStaticPaths = async () => {
  const snap = await fetch("http://localhost:3000/api/snippets");
  const snippets = await snap.json();

  const ids = snippets.map((snippet) => snippet.id);
  // const snap = await db.collection("jsSnippets").get();
  const paths = snippets.map((snippet) => {
    return {
      params: {
        id: snippet.id.toString(),
      },
    };
  });
  // const paths = [
  //   {
  //     params: {
  //       id: "PQHiKpXpMxR9wpWfN0na",
  //     },
  //   },
  // ];
  // snap.forEach((path) => {
  //   paths.push({ params: { id: path.id.toString() } });
  // });
  // console.log(paths);
  return { paths: paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const snap = await fetch(
    `http://localhost:3000/api/snippets/${context.params.id}`
  );
  const data = snap.json();
  const snippet = { id: data.id };
  return { props: { projects: snippet } };
};

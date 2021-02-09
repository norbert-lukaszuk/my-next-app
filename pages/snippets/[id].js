import React from "react";
import db from "../../utils/db";

function Snippet({ projects }) {
  return (
    <div>
      <h3>{projects.description}</h3>
    </div>
  );
}

export default Snippet;

export const getStaticPaths = async () => {
  const snap = await db.collection("jsSnippets").get();
  const paths = [];
  snap.forEach((path) => {
    paths.push({ params: { id: path.id.toString() } });
  });
  console.log(paths);
  return { paths: paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const snap = await db.collection("jsSnippets").doc(context.params.id).get();

  const snippet = { id: snap.id, ...snap.data() };
  return { props: { projects: snippet } };
};

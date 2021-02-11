import React from "react";

function Snippet({ snippet }) {
  return (
    <div>
      <h3>{snippet.description}</h3>
      <h3>{snippet.code}</h3>
    </div>
  );
}

export default Snippet;

export const getStaticPaths = async () => {
  const snap = await fetch("http://localhost:3000/api/snippets");
  const snippets = await snap.json();

  const ids = snippets.map((snippet) => snippet.id);
  const paths = snippets.map((snippet) => {
    return {
      params: {
        id: snippet.id.toString(),
      },
    };
  });

  return { paths: paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const snap = await fetch(
    `http://localhost:3000/api/snippets/${context.params.id}`
  );
  const data = await snap.json();
  console.log(data);
  return { props: { snippet: data } };
};

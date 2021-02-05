import React from "react";
import Head from "next/head";

export const getStaticPaths = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await resp.json();

  const paths = data.map((project) => {
    console.log(project.id.toString());
    return {
      params: { id: project.id.toString() },
    };
  });
  return { paths: paths, fallback: false };
};
const Project = () => {
  return (
    <div>
      <Head>
        <title>Create electronics blog | Project</title>
        <link rel="icon" href="/ic.png" />
      </Head>
      <h3>This is project</h3>
    </div>
  );
};

export default Project;

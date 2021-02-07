import React from "react";
import Head from "next/head";

// export const getStaticPaths = async () => {
//   const resp = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await resp.json();

//   const paths = data.map((project) => {
//     console.log(project.id.toString());
//     return {
//       params: { id: project.id.toString() },
//     };
//   });
//   console.log(paths);
//   return { paths: paths, fallback: false };
// };
// export const getStaticProps = async (context) => {
//   const resp = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${context.params.id}`
//   );
//   const data = await resp.json();
//   return { props: { projects: data } };
// };
export const getServerSideProps = async (context) => {
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

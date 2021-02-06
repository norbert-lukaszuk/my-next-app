import React from "react";
import Head from "next/head";
import Image from "next/image";
import style from "../../styles/Home.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();
  return { props: { projects: data } };
};

const Projects = ({ projects }) => {
  console.log(projects);
  return (
    <div>
      <Head>
        <title>Create electronics blog | Projects</title>
        <link rel="icon" href="/ic.png" />
        <meta name="keywords" content="elctronics projects" />
      </Head>
      <main className={style.main}>
        <Image src="/ic_1.png" width={128} height={128} />
        <h1>My projects</h1>
        {projects.map((project) => (
          <Link key={project.id} href={"/projects/" + project.id}>
            <a className={style.single}>
              <h3>{project.name}</h3>
            </a>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default Projects;
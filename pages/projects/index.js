import React from "react";
import Head from "next/head";
import Image from "next/image";
import style from "../../styles/Home.module.css";
import Link from "next/link";
// import fire from "../../config/fire-config";
import { useState, useEffect } from "react";
// import db from "../../utils/db";

export const getServerSideProps = async () => {
  // ** fetch data using api/snippets
  const resp = await fetch("http://localhost:3000/api/snippets");
  const data = await resp.json();
  // ** fetch data directly from firestore
  // const resp = await db.collection("gitSnippets").get();
  // const data = resp.docs.map((snap) => ({
  // id: snap.id,
  // ...snap.data(),
  // }));
  return { props: { projects: data } };
};

const Projects = ({ projects }) => {
  const [list, setList] = useState([...projects]);
  // ?? destructuring problem
  const filterSnippets = (e) => {
    const searchValue = e.target.value;
    const currentList = [...list];
    const matchingItems = currentList.filter((item) =>
      item.startsWith(searchValue)
    );
    setList(matchingItems);
  };
  console.log(list);
  return (
    <div>
      <Head>
        <title>Create electronics blog | Projects</title>
        <link rel="icon" href="/ic.png" />
        <meta name="keywords" content="elctronics projects" />
      </Head>
      <main className={style.main}>
        <Image src="/ic_1.png" width={128} height={128} />
        <input type="text" onChange={filterSnippets} />
        <h1>My projects</h1>
        {/* {list.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <a className={style.single}>
              <h3>{project.description}</h3>
            </a>
          </Link>
        ))} */}
      </main>
    </div>
  );
};

export default Projects;

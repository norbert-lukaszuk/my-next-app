import React from "react";
import Head from "next/head";
import { useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
const Snippets = ({ snippets }) => {
  console.log(snippets);
  return (
    <div>
      <Head>
        <title>Create electronics blog | Code snippets</title>
        <link rel="icon" href="/ic.png" />
        <meta name="keywords" content="code snippets" />
      </Head>
      <div className={styles.grid}>
        {snippets.map((snip) => (
          <Link key={snip.id} href={`/snippets/${snip.id}`}>
            <a className={styles.card}>
              <h3>{snip.description}</h3>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Snippets;
export const getStaticProps = async () => {
  // const snap = await db.collection("jsSnippets").get();
  const snap = await fetch("http://localhost:3000/api/snippets");
  const snippets = await snap.json();
  // snap.forEach((doc) => {
  //   snippets.push({
  //     id: doc.id.toString(),
  //     ...doc.data(),
  //   });
  // });
  return { props: { snippets } };
};

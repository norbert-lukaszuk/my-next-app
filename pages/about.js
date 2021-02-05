import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function about() {
  return (
    <>
      <Head>
        <title>Create electronics blog | About</title>
        <link rel="icon" href="/ic.png" />
        <meta name="keywords" content="elctronics" />
      </Head>
      <Image className={styles.image} src="/ic_1.png" width={75} height={75} />
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque sunt
        recusandae rem. Odio minima ea veritatis doloribus quidem provident?
        Quos debitis officiis aut laudantium. Assumenda delectus architecto
        autem molestiae eligendi.
      </div>
    </>
  );
}

export default about;

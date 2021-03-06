import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create electronics blog | Home</title>
        <link rel="icon" href="/ic.png" />
      </Head>
      <main className={styles.main}>
        <Image src="/ic_1.png" width={128} height={128} />
        <div className={styles.grid}>
          <Link href="/about">
            <a className={styles.card}>
              <h3>About &rarr;</h3>
              <p>Find some useful information about us</p>
            </a>
          </Link>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}

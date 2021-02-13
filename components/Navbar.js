import Link from "next/link";
import Image from "next/image";
import React from "react";
import style from "../styles/Home.module.css";
const Navbar = () => {
  return (
    <div>
      {/* <Image src="/ic_1.png" width={50} height={50} /> */}
      <nav>
        <Link href="/" className={style.navLink}>
          <a>Home</a>
        </Link>
        <Link href="/snippets" className={style.navLink}>
          <a>Snippets</a>
        </Link>
        <Link href="/login/" className={style.navLink}>
          <a>Login</a>
        </Link>
        <Link href="/about" className={style.navLink}>
          <a>About</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

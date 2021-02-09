import Link from "next/link";
import Image from "next/image";
import React from "react";
const Navbar = () => {
  return (
    <div>
      <Image src="/ic_1.png" width={50} height={50} />
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/projects/">
          <a>Projects</a>
        </Link>
        <Link href="/snippets/">
          <a>Snippets</a>
        </Link>
        <Link href="/login/">
          <a>login</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

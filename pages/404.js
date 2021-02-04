import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
const NotFound = () => {
  // store useRouter in variable to use it later
  const router = useRouter();
  //   useEffect to redirect user to homepage automatically after 404 page loads
  useEffect(() => {
    //   set 2 sec. wait time before redirect
    setTimeout(() => router.push("/"), 2000);
  }, []);
  return (
    <div className="notFound">
      <h1>Opps...</h1>
      <h2>Page not found :</h2>
      <p>
        Go back to{" "}
        <Link href="/">
          <a> Homepage </a>
        </Link>{" "}
      </p>
    </div>
  );
};

export default NotFound;

import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <p>Back to home</p>
        </Link>
      </h2>
    </>
  );
}

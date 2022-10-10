import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children, title, showNavbar }) => {
  return (
    <div>
      <Head>
        <title>{title || "Pretest PrivyID Frontend"}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {showNavbar && <Navbar />}
      <div>{children}</div>
    </div>
  );
};

export default Layout;

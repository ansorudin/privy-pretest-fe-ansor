import React from "react";
import Head from "next/head";

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title || "Pretest PrivyID Frontend"}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{children}</div>
    </div>
  );
};

export default Layout;

import React from "react";
import Layout from "../components/Layout";
import Homepage from "../components/pages/HomePage";

const HomePage = () => {
  return (
    <Layout title="Pretest PrivyID - Profile" showNavbar={true}>
      <Homepage />
    </Layout>
  );
};

export default HomePage;

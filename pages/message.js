import React from "react";
import Layout from "../components/Layout";
import MessagePage from "../components/pages/Message";

const Message = () => {
  return (
    <Layout title="Pretest PrivyID - Message" showNavbar={true}>
      <MessagePage />
    </Layout>
  );
};

export default Message;

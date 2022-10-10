import Cookies from "js-cookie";
import React, { useCallback, useEffect, useState } from "react";
import CardMessage from "./components/CardMessage";
import axios from "../../../lib/axios";

const MessagePage = () => {
  const userId = Cookies.get("userId");
  const [dataMessage, setDataMessage] = useState([]);
  const getMessageData = useCallback(async () => {
    try {
      const res = await axios.get(`/api/v1/message/${userId}`);

      setDataMessage(res.data.data.chat);
    } catch (error) {
      console.log(error);
    }
  }, [userId]);

  useEffect(() => {
    getMessageData();
  }, [getMessageData]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto flex h-full flex-col py-24 px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl underline text-primary-blue mb-5">Message</h3>
        {dataMessage?.map((item) => (
          <CardMessage
            key={item.id}
            senderImage={item?.user_sender?.user_picture?.picture?.url}
            senderName={item?.user_sender?.name}
            createdAt={item?.created_at}
            message={item?.message}
          />
        ))}
      </div>
    </div>
  );
};

export default MessagePage;

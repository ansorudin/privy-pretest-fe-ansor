import Cookies from "js-cookie";
import React, { useCallback, useEffect, useState } from "react";
import FormDataUser from "./components/FormDataUser";
import SectionAvatarPhoto from "./components/SectionAvatarPhoto";
import SectionCoverPhoto from "./components/SectionCoverPhoto";
import SectionGalleryImage from "./components/SectionGalleryImage";
import axios from "../../../lib/axios";

const Homepage = () => {
  const [dataUser, setDataUser] = useState({});
  const getDataUser = useCallback(async () => {
    try {
      const res = await axios.get(`/api/v1/profile/me`);
      setDataUser(res.data.data.user);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getDataUser();
  }, [getDataUser]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto flex h-full flex-col py-28 px-4 sm:px-6 lg:px-8">
        <SectionCoverPhoto dataUser={dataUser} callback={() => getDataUser()} />
        <SectionAvatarPhoto
          dataUser={dataUser}
          callback={() => getDataUser()}
        />
        <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-4 p-3">
          <SectionGalleryImage
            dataUser={dataUser}
            callback={() => getDataUser()}
          />
          <FormDataUser data={dataUser} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;

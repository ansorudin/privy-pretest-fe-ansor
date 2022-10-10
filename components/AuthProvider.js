import { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const AuthProvider = ({ children }) => {
  const router = useRouter();
  const authenticated = Cookies.get("accessToken");

  const backToLogin = useCallback(() => {
    if (!router.pathname.match("auth")) {
      if (!authenticated) {
        setTimeout(() => {
          router.push("/auth/login");
        }, 400);
      }
    }
  }, [authenticated, router]);

  useEffect(() => {
    backToLogin();
  }, [backToLogin]);

  return <>{children}</>;
};

export default AuthProvider;

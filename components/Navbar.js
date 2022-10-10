/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import { useOutside } from "../hooks/useOutside";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import axios from "../lib/axios";
import Cookies from "js-cookie";
import { useSnackbar } from "react-simple-snackbar";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openSnackbar] = useSnackbar();
  const router = useRouter();
  const wrapperRef = useRef(null);
  useOutside({ ref: wrapperRef, callbacks: () => setDropdownOpen(false) });

  const accessToken = Cookies.get("accessToken");

  const handleLogout = async () => {
    try {
      const formData = new FormData();
      formData.append("access_token", accessToken);
      formData.append("confirm", 1);
      await axios.post("/api/v1/oauth/revoke", formData);

      router.push("/auth/login");
      Cookies.remove("accessToken");
    } catch (error) {
      console.log(error);
      openSnackbar("Logout Failed: check console");
    }
  };

  return (
    <nav
      ref={wrapperRef}
      className=" bg-warmGray-400 py-4 text-primary-white fixed w-screen z-50"
    >
      <div className="container mx-auto px-8 flex justify-end relative">
        <div className="flex items-center gap-5">
          <Link href="/message">
            <img
              src="/assets/icons/mail.svg"
              alt="menu"
              className="h-8 cursor-pointer hover:scale-105 transition-all"
            />
          </Link>
          <img
            onClick={() => setDropdownOpen(!dropdownOpen)}
            src="/assets/icons/hamburger-menu.svg"
            alt="menu"
            className="h-8 cursor-pointer hover:scale-105 transition-all"
          />
        </div>
        <div
          className={`${
            dropdownOpen ? "h-20 border py-2" : "h-0 py-0"
          } bg-primary-white text-primary-black absolute w-36 
          rounded transition-all flex flex-col items-center overflow-hidden z-50 top-10`}
        >
          <p className="text-sm py-1 text-center hover:bg-slate-100 w-full cursor-pointer">
            <Link href="/">Home</Link>
          </p>
          <p
            onClick={handleLogout}
            className="text-sm py-1 text-center hover:bg-slate-100 w-full cursor-pointer"
          >
            Logout
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

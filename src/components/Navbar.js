import { IconButton, Button } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const pages = ["Home", "FlashCard", " Contact", "FAQ"];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const OpenDr = () => {
    setOpen(!open);
  };
  return (
    <div>
      <nav class="bg-white border-gray-200 ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img src="./Component 40.png" class="h-8" alt=" Logo" />
          <div className="md:hidden">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={OpenDr}
            >
              <MenuIcon />
            </IconButton>
          </div>

          <div class="hidden w-full md:block md:w-auto">
            <ul class="items-center font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
              {pages.map((page) => {
                return <li>{page}</li>;
              })}
              <button  className="capitalize text-white rounded-3xl p-2 px-6 bg-gradient-to-b from-[#06286E] to-[#164EC0] ">
                login
              </button>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className={
          open
            ? "block  "
            : `z-50 w-64 h-[100vh] hidden shadow-md ease-in duration-700 `
        }
      >
        <div className="pl-60">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={OpenDr}
          >
            <CloseIcon />
          </IconButton>
        </div>

        <ul class="font-medium p-4 mt-4 rtl:space-x-reverse  ">
          {pages.map((page) => {
            return <li>{page}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

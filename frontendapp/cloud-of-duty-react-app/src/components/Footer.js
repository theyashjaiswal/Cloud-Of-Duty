import React, { Component } from "react";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="text-center text-capitalize mt-3 p-2 bg-dark text-light">
        Special Thanks to{" "}
        <a href="https://github.com/deezer/spleeter">Spleeter - MIT LICENSE</a>
      </footer>
    </>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../atoms/Logo";
import Saldo from "../../atoms/Saldo";

export default function Navbar() {
  return (
    <section className="w-11/12 xl:w-8/12 mx-auto mt-8 flex justify-between">
      <div className="lg:w-6/12 flex items-center gap-x-10">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="flex items-center">
        <Saldo />
      </div>
    </section>
  );
}

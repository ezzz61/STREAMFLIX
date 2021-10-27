import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Saldo from "./Saldo";

export default function Navbar() {
  return (
    <section className="flex justify-between">
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

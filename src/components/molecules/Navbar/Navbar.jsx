import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../atoms/Logo";
import Saldo from "../../atoms/Saldo";
import { useSelector } from "react-redux";
import { numberFormatter } from "../../../utils/numberFormatter";

export default function Navbar() {
  const walletNominals = useSelector((state) => state.user.wallet);
  const formattedWallet = numberFormatter(walletNominals);
  return (
    <section className="w-11/12 xl:w-8/12 mx-auto mt-8 flex justify-between">
      <div className="lg:w-6/12 flex items-center gap-x-10">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="flex items-center">
        <Saldo nominals={formattedWallet} />
      </div>
    </section>
  );
}

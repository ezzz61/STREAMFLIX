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
      <div className="flex justify-center flex-col-reverse md:flex md:flex-row items-center">
        <div className="bg-gray-600 md:bg-gray-900 w-full md:w-auto px-2 py-1 mt-2 md:mt-0">
          <Link to="/collections" className="text-white lg:pr-4 ">
            My Collections
          </Link>
        </div>
        <Saldo nominals={formattedWallet} />
      </div>
    </section>
  );
}

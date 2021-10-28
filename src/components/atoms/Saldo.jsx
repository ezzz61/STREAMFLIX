import React from "react";
import walletIcon from "../../assets/icons/wallet.svg";

export default function Saldo({ nominals }) {
  return (
    <div className="bg-gray-800 py-1 px-2 lg:py-2 lg:px-4 rounded-sm flex gap-x-3">
      <img src={walletIcon} alt="wallet icon" />
      <span className="text-white lg:text-lg">Rp {nominals}</span>
    </div>
  );
}

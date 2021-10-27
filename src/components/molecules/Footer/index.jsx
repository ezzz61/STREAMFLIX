import React from "react";
import Logo from "../../atoms/Logo";

export default function Footer() {
  return (
    <footer className="mt-24 py-8 bg-gray-700">
      <div className="w-11/12 lg:w-8/12 mx-auto">
        <Logo />
        <p className="text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, eveniet aperiam! Tempora, necessitatibus dolorem non
          minima quis voluptatum culpa fuga saepe dicta molestiae quidem. Autem obcaecati maiores quas repellendus dolorum.
        </p>
      </div>
    </footer>
  );
}

import React from "react";
type Props = {
  title?: string;
};
function Header({ title }: Props) {
  return (
    <header className="text-2xl py-3 text-white font-bold text-center bg-teal-900">
      {title}
    </header>
  );
}

export default Header;

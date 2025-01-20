"use client";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

function Header() {
  const location = usePathname();
  console.log(location);

  const linkActiveStyling = "p-2 hover:border-t-4 hover:border-b-4 hover:rounded-md"

  return (
    <header className="bg-[#03556B] h-[220px] p-4 flex flex-col items-center">
      <div className="mb-8">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <nav>
        <ul className="flex flex-rowitems-center gap-3">
        <li className={`${location.includes("about")? "border-b-4 rounded-sm": ""} ${linkActiveStyling}`}>
            <Link href="/about">About App</Link>
          </li>
          <li className={`${location.includes("contactme")? "border-b-4 rounded-sm": ""} ${linkActiveStyling}`}>
            <Link href="/contactme">Contact me</Link>
          </li>
          <li className={`${location.includes("alyeqeencalculator")? "border-b-4 rounded-sm": ""} ${linkActiveStyling}`}>
            <Link href="/alyeqeencalculator">Al-Yeqeen Calculator</Link>
          </li>
          <li className={`${location.includes("alyeqeencurrencyconverter")? "border-b-4 rounded-sm": ""} ${linkActiveStyling}`}>
            <Link href="/alyeqeencurrencyconverter">Al-Yeqeen Currency Converter</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <Link href="/">
      <header className="flex items-center my-12 cursor-pointer">
        <Image src="/logo.svg" alt="logo" height={61} width={61} />
        <p className="flex ml-4 text-3xl">
          <span className="font-bold md:hidden mr-2">EJ</span>
          <span className="font-bold hidden md:block mr-2">Encode Justice</span>
          Colombia
        </p>
      </header>
    </Link>
  );
};

export default Header;

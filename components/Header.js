import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center my-12">
      <Image src="/logo.svg" alt="logo" height={61} width={61} />
      <p className="flex ml-4 text-3xl">
        <span className="font-bold md:hidden mr-2">EJ</span>
        <span className="font-bold hidden md:block mr-2">Encode Justice</span>
        Colombia
      </p>
    </header>
  );
};

export default Header;

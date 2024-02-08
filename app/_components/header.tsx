interface HeaderProps {
  type?: "primary" | "secondary";
}

const Header = ({ type = "primary" }: HeaderProps) => {
  return type === "primary" ? (
    <div className="text-stroke-white flex h-12 justify-center overflow-clip border-b border-quarternary font-primary text-[19vw] leading-none text-transparent sm:h-16 md:h-20 xl:h-24 bg-dark z-10 w-full">
      <span className="relative top-0 opacity-30 xl:-top-8">DESIGNATHON</span>
    </div>
  ) : (
    <div className="text-stroke-white flex h-24 justify-center overflow-clip border-b border-quarternary font-primary text-[304px] leading-none text-transparent w-full">
      <span className="relative bottom-40 opacity-30">DESIGNATHON</span>
    </div>
  );
};

export default Header;

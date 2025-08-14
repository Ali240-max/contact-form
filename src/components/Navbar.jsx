function Navbar() {
  return (
    <div className="text-white flex items-center justify-center gap-15 text-lg font-semibold pt-10 mb-20 max-sm:gap-5 ">
      <span className="cursor-pointer hover:text-primary transition duration-300">
        HOME
      </span>
      <span className="cursor-pointer hover:text-primary transition duration-300">
        BLOG
      </span>
      <span className="cursor-pointer hover:text-primary transition duration-300">
        ABOUT
      </span>
      <span className="cursor-pointer text-primary hover:text-primary transition duration-300">
        CONTACT
      </span>
    </div>
  );
}

export default Navbar;

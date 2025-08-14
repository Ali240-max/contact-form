function Button({ children }) {
  return (
    <button className="text-secondary px-4 py-3 bg-primary text-md tracking-wide rounded-xl font-semibold w-33 cursor-pointer uppercase mt-5 mb-10 focus:outline-none">
      {children}
    </button>
  );
}

export default Button;

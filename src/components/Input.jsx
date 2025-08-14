function Input({ children }) {
  return (
    <input
      className="text-white px-4 py-3 bg-white/20 text-sm tracking-wide focus:outline-none rounded-lg w-55 max-hate:w-40 max-sm:w-80 placeholder:text-stone-300"
      type="text"
      placeholder={children}
    />
  );
}

export default Input;

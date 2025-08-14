function TextArea() {
  return (
    <textarea
      type="text"
      placeholder="Message..."
      className="text-secondary placeholder:text-secondary px-4 py-3  bg-secondary/20 text-sm tracking-wide rounded-lg w-115 h-40 focus:outline-none max-sm:w-70 "
    ></textarea>
  );
}

export default TextArea;

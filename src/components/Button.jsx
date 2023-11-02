function Button({ type, children, className, onClick }) {
  const baseClass = "hover:bg-gray-300 duration-500";

  const roundClass = "w-10 h-10 flex items-center justify-center rounded-full";
  const roundBgClass =
    "w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 ml-3";
  const searchClass =
    "rounded-r-full border border-gray-300 border-l-0 h-10 w-16 bg-gray-200 inline-flex items-center justify-center flex-shrink-0";
  const filterClass = "h-8 px-3 bg-gray-200 my-3 mr-3  rounded-xl";

  const variantClass =
    type === "round"
      ? roundClass
      : type === "filter"
      ? filterClass
      : type === "search"
      ? searchClass
      : type === "roundBg"
      ? roundBgClass
      : "";

  const buttonClass = `${baseClass} ${variantClass} ${className} $`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

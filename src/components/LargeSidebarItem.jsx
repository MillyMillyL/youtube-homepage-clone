function LargeSidebarItem({ Icon, title, url }) {
  return (
    <a
      href={url}
      className="hover:bg-gray-300 duration-500 w-full p-3 rounded-xl flex gap-4 justify-start items-center"
    >
      {typeof Icon === "string" ? (
        <img src={Icon} alt={title} className="w-6 h-6 rounded-full" />
      ) : (
        <Icon className="w-6 h-6" />
      )}

      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>
    </a>
  );
}

export default LargeSidebarItem;

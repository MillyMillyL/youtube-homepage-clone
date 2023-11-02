function SmallSidebarItem({ Icon, title, url }) {
  return (
    <a
      href={url}
      className="hover:bg-gray-300 duration-500 w-full p-4 rounded-xl flex flex-col justify-center items-center"
    >
      <Icon className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </a>
  );
}

export default SmallSidebarItem;

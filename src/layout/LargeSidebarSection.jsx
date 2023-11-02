import { Children, useState } from "react";
import Button from "../components/Button";
import { HiChevronDown } from "react-icons/hi2";
import { HiChevronUp } from "react-icons/hi2";

function LargeSidebarSection({ title, children, visibleItemCount }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = Children.toArray(children).flat();
  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, visibleItemCount);
  const showExpandButton = childrenArray.length > visibleItemCount;
  const ButtonIcon = isExpanded ? HiChevronUp : HiChevronDown;
  return (
    <div>
      {title && <div className="ml-4 mt-4 text-lg mb-1 font-bold">{title}</div>}
      {visibleChildren}
      {showExpandButton && (
        <Button
          onClick={() => setIsExpanded((e) => !e)}
          className="hover:bg-gray-300 duration-500 w-full p-3 rounded-xl flex gap-4 justify-start items-center"
        >
          <ButtonIcon className="w-6 h-6" />
          <div>{isExpanded ? "Show Less" : "Show More"}</div>
        </Button>
      )}
    </div>
  );
}

export default LargeSidebarSection;

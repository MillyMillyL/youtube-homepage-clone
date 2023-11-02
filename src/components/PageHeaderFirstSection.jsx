import { HiBars3 } from "react-icons/hi2";
import Button from "./Button";
import { useSidebarContext } from "../context/SidebarContext";

function PageHeaderFirstSection({ showFullwidthSearch }) {
  const { toggle } = useSidebarContext();
  return (
    <div
      className={`bg-white gap-4 items-center flex-shrink-0 ${
        showFullwidthSearch ? " hidden md:flex" : "flex"
      }`}
    >
      <Button onClick={toggle} type="round">
        <HiBars3 />
      </Button>
      <a href="/" className="inline-block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="256"
          height="20"
          viewBox="0 0 256 180"
          className="inline-block"
        >
          <path
            fill="red"
            d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"
          />
          <path fill="#FFF" d="m102.421 128.06l66.328-38.418l-66.328-38.418z" />
        </svg>
        <span className="font-bold text-xl align-middle"> YouTube</span>
      </a>
    </div>
  );
}

export default PageHeaderFirstSection;

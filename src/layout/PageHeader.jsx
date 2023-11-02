import { HiBars3 } from "react-icons/hi2";
import Button from "../components/Button";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { GoSearch } from "react-icons/go";
import { AiFillAudio } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";
import PageHeaderFirstSection from "../components/PageHeaderFirstSection";

function PageHeader() {
  const [showFullwidthSearch, setShowFullwidthSearch] = useState(false);

  return (
    <header className="flex justify-between gap-10 lg:gap-20 items-center py-4">
      <PageHeaderFirstSection showFullwidthSearch={showFullwidthSearch} />
      <form
        className={`gap-4 flex-grow justify-center ${
          showFullwidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
        {showFullwidthSearch && (
          <Button
            type="round"
            className="md:hidden"
            onClick={() => setShowFullwidthSearch(false)}
          >
            <AiOutlineArrowLeft />
          </Button>
        )}

        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            className="border-gray-300 border shadow-inner shadow-gray-300 rounded-l-full py-1 px-4 w-full focus:border-blue-500 outline-none"
            placeholder="Search"
          />
          <Button type="search">
            <GoSearch />
          </Button>
        </div>
        <Button type="roundBg" className="flex-shrink-0">
          <AiFillAudio />
        </Button>
      </form>
      <div
        className={`${
          showFullwidthSearch ? "hidden md:flex" : "flex"
        } flex-shrink-0 gap-2`}
      >
        <Button
          type="round"
          className="md:hidden"
          onClick={() => setShowFullwidthSearch(true)}
        >
          <GoSearch />
        </Button>
        <Button type="round" className="md:hidden">
          <AiFillAudio />
        </Button>
        <Button type="round">
          <HiOutlinePlusCircle />
        </Button>
        <Button type="round">
          <HiOutlineBellAlert />
        </Button>
        <Button type="round">
          <AiOutlineUser />
        </Button>
      </div>
    </header>
  );
}

export default PageHeader;

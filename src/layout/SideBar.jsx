import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineBulb } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { BsFire } from "react-icons/bs";
import { BsTrophy } from "react-icons/bs";
import { BsCollectionPlay } from "react-icons/bs";
import { CgPlayList } from "react-icons/cg";
import { GoHistory } from "react-icons/go";
import { GrGamepad } from "react-icons/gr";
import { HiMiniHome } from "react-icons/hi2";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlinePodcasts } from "react-icons/md";
import { SiShortcut } from "react-icons/si";
import { TbHanger2 } from "react-icons/tb";

import SmallSidebarItem from "../components/SmallSidebarItem";
import LargeSidebarSection from "./LargeSidebarSection";
import LargeSidebarItem from "../components/LargeSidebarItem";
import { playlists, subscriptions } from "../data/sidebar";
import { useSidebarContext } from "../context/SidebarContext";
import PageHeaderFirstSection from "../components/PageHeaderFirstSection";

function SideBar() {
  const { isLargeOpen, isSmallOpen, close } = useSidebarContext();

  return (
    <>
      <aside
        className={`sticky top-0 overflow-y-auto scrollbar-hidden  flex flex-col mb-1 ${
          isLargeOpen ? "lg:hidden" : "lg:flex"
        }`}
      >
        <SmallSidebarItem Icon={HiMiniHome} url="/" title="Home" />
        <SmallSidebarItem Icon={SiShortcut} url="/shorts" title="Shorts" />
        <SmallSidebarItem
          Icon={MdSubscriptions}
          url="/subscriptions"
          title="Subscriptions"
        />
        <SmallSidebarItem Icon={BsCollectionPlay} url="/library" title="You" />
      </aside>
      {isSmallOpen && (
        <div
          onClick={close}
          className="lg:hidden fixed inset-0 z-[999] bg-gray-400 opacity-50"
        />
      )}
      <aside
        className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4  flex-col gap-2 px-2 ${
          isLargeOpen ? "lg:flex" : "lg:hidden"
        } ${isSmallOpen ? "flex z-[999] bg-white max-h-screen" : "hidden"}`}
      >
        <div className="lg:hidden pt-2 pb-4 px-2 sticky top-0 bg-white">
          <PageHeaderFirstSection />
        </div>
        <LargeSidebarSection>
          <LargeSidebarItem url="/" title="Home" Icon={HiMiniHome} />
          <LargeSidebarItem Icon={SiShortcut} url="/shorts" title="Shorts" />
          <LargeSidebarItem
            Icon={MdSubscriptions}
            url="/subscriptions"
            title="Subscriptions"
          />
          <hr />
        </LargeSidebarSection>
        <LargeSidebarSection title="You" visibleItemCount={3}>
          <LargeSidebarItem Icon={GoHistory} url="/history" title="History" />
          <LargeSidebarItem
            Icon={MdOutlineWatchLater}
            url="/watch-later"
            title="Watch Later"
          />
          <LargeSidebarItem
            Icon={AiOutlineLike}
            url="/liked-videos"
            title="Liked Videos"
          />
          <LargeSidebarItem
            Icon={GoHistory}
            url="/history"
            title="Liked Videos"
          />
          <hr />
        </LargeSidebarSection>
        <LargeSidebarSection title="Playlists" visibleItemCount={5}>
          {playlists.map((list) => (
            <LargeSidebarItem
              key={list.id}
              Icon={CgPlayList}
              title={list.name}
            />
          ))}
        </LargeSidebarSection>
        <LargeSidebarSection title="Subscriptions" visibleItemCount={5}>
          {subscriptions.map((sub) => (
            <LargeSidebarItem
              key={sub.id}
              Icon={sub.imgUrl}
              title={sub.channelName}
              url="#"
            />
          ))}
          <hr />
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title="Explore">
          <LargeSidebarItem title="Trending" url="/trending" Icon={BsFire} />
          <LargeSidebarItem
            title="Shopping"
            url="/shopping"
            Icon={AiOutlineShoppingCart}
          />
          <LargeSidebarItem title="Movies" url="/movies" Icon={BiMoviePlay} />
          <LargeSidebarItem title="Gmaing" url="/gmaing" Icon={GrGamepad} />
          <LargeSidebarItem title="Sports" url="/sports" Icon={BsTrophy} />
          <LargeSidebarItem
            title="Learning"
            url="/learning"
            Icon={AiOutlineBulb}
          />
          <LargeSidebarItem
            title="Fashion & Beauty"
            url="/fashion-beauty"
            Icon={TbHanger2}
          />
          <LargeSidebarItem
            title="Podcasts"
            url="/podcasts"
            Icon={MdOutlinePodcasts}
          />
        </LargeSidebarSection>
      </aside>
    </>
  );
}

export default SideBar;

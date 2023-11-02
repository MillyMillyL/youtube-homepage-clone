import { useState } from "react";

import MainFilters from "./layout/MainFilters";
import PageHeader from "./layout/PageHeader";
import SideBar from "./layout/SideBar";
import VideoGridItem from "./components/VideoGridItem";
import { categories, videos } from "./data/home";
import { SidebarProvider } from "./context/SidebarContext";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <SidebarProvider>
      <div className="h-screen flex flex-col px-8 py-2">
        <PageHeader />
        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <SideBar />
          <div className="overflow-x-hidden px-8 pb-4">
            <div className="sticky top-0 z-10 pb-4 ">
              <MainFilters
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              {videos.map((video) => (
                <VideoGridItem key={video.id} {...video} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default App;

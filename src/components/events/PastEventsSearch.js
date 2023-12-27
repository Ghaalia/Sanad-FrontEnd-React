import { Search } from "lucide-react";
import React from "react";

const PastEventsSearch = ({ onSearch }) => {
  const handleSearch = (event) => {
    const query = event.target.value;
    onSearch(query);
  };
  return (
    <div className="text-white w-full h-[40px] md:h-[50px] flex items-center  bg-white bg-opacity-30 p-2 rounded-full">
      <input
        type="text"
        id="search"
        className=" text-white w-full h-full bg-transparent px-4 focus:outline-none "
        placeholder="Search Past Events"
        onChange={handleSearch}
      />
      <span>
        <Search
          color="white"
          size={28}
          strokeWidth={2}
          className="bg-RedMain p-1 rounded-full"
        />
      </span>
    </div>
  );
};

export default PastEventsSearch;

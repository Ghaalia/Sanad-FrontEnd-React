import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCategoryById } from "../../api/category";

const CategoryItemId = ({ categoryID }) => {
  const { data: category, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: () => getCategoryById(categoryID),
  });
  return (
    <div
      className={`min-w-fit text-sm font-medium text-RedMain border-solid border-RedMain border-[2px] rounded-full py-1 px-3 
        
      `}
    >
      <h6>{category?.category_name}</h6>
    </div>
  );
};

export default CategoryItemId;

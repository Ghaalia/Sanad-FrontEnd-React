import React from "react";

const CategoryItem = ({ category, selectedCategory, setSelectedCategory }) => {
  console.log(category);
  const handleCategoryClick = () => {
    // Toggle the selected category
    if (selectedCategory === category._id) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category._id);
    }
  };

  const isGrayscale = selectedCategory && selectedCategory !== category._id;
  return (
    <div
      onClick={handleCategoryClick}
      className={`min-w-fit text-sm font-medium text-RedMain border-solid border-RedMain border-[2px] rounded-full py-1 px-3 ${
        isGrayscale ? "grayscale" : ""
      }`}
    >
      <h6>{category?.category_name}</h6>
    </div>
  );
};

export default CategoryItem;

// import React from "react";

// const CategoryItem = ({ category, selectedCategory, setSelectedCategory }) => {
//   const handleCategoryClick = () => {
//     // Toggle the selected category
//     if (selectedCategory === category._id) {
//       setSelectedCategory("");
//     } else {
//       setSelectedCategory(category._id);
//     }
//   };

//   const isGrayscale = selectedCategory && selectedCategory !== category._id;
//   return (
//     <div
//       onClick={handleCategoryClick}
//       className={`min-w-fit text-sm font-medium text-RedMain border-solid border-RedMain border-[2px] rounded-full py-1 px-3 ${
//         isGrayscale ? "grayscale" : ""
//       }`}
//     >
//       <h6>{category.category_name}</h6>
//     </div>
//   );
// };

// export default CategoryItem;

import React from "react";

const SkeletonLoader = ({
  width = "w-full",
  height = "h-4",
  borderRadius = "rounded-md",
}) => {
  return (
    <div
      className={`bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse ${width} ${height} ${borderRadius}`}></div>
  );
};

export default SkeletonLoader;

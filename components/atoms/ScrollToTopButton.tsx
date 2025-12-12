// "use client";

// import { useEffect, useState } from "react";

// export function ScrollToTopButton() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     function handleScroll() {
//       setIsVisible(window.scrollY > 0);
//     }

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   function scrollToTop() {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }

//   return (
//     <button
//       onClick={scrollToTop}
//       className={`text-light-fog hover:text-light-violet
//             dark:text-dark-shadow dark:hover:text-dark-lavender
//         z-50 p-1 fixed sm:bottom-4 bottom-1 sm:right-4 right-1 transition-all duration-200 rounded-full hover:scale-125  ${
//           isVisible ? "opacity-100 " : "opacity-0 cursor-default"
//         }`}
//     >
//       <FiArrowUpCircle
//         className={`w-12 h-12 rounded-full
//               fill-light-snow hover:fill-light-fog
//               dark:fill-dark-onyx dark:hover:fill-dark-midnight
//           `}
//         strokeWidth={1.5}
//       />
//     </button>
//   );
// }

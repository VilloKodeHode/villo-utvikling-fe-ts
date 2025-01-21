// import { useEffect, useState } from "react";

// export function useTheme() {
//     const [theme, setTheme] = useState<string | null>(null);

//     useEffect(() => {
//         const htmlElement = document.documentElement;
//         setTheme(htmlElement.getAttribute("data-theme"));

//         const observer = new MutationObserver(()=> {
//             setTheme(htmlElement.getAttribute("data-theme"));
//         })

//         observer.observe(htmlElement, {
//             attributes: true,
//             attributeFilter: ["data-theme"],
//         })

//         return () => observer.disconnect();

//     }, []);
// }

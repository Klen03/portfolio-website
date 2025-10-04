// import { useEffect, useState } from "react";

// export default function useScrollSpy(sectionIds) {
//   const [activeId, setActiveId] = useState("");

//   useEffect(() => {
//     const observers = [];

//     sectionIds.forEach((id) => {
//       const element = document.getElementById(id);
//       if (!element) return;

//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               setActiveId(id);
//             }
//           });
//         },
//         { threshold: 0.6 } // 60% of section visible
//       );

//       observer.observe(element);
//       observers.push(observer);
//     });

//     return () => {
//       observers.forEach((observer) => observer.disconnect());
//     };
//   }, [sectionIds]);

//   return activeId;
// }

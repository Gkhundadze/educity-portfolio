
// import "./universal.css"; 






// // იღებს:
// // 1️⃣ sectionTitle - სექციის სახელი (მაგ: "skills" ან "experience")
// // 2️⃣ dataArray - მონაცემთა მასივი (JSON-ის ობიექტები)

// function Universal({ sectionTitle, dataArray }) {
  
//   // 🔹 Safety check - თუ dataArray არ არის მასივი ან ცარიელია
//   if (!Array.isArray(dataArray) || dataArray.length === 0) {
//     return <p>No data available or wrong format</p>
//   }

//   // 🔹 ყველა შესაძლო key მთელ dataset-ში
//   // flatMap - აბრუნებს ყველა ობიექტის key-ს ერთ მასივში
//   // Set - უზრუნველყოფს uniqueness
//   // [...Set(...)] - გარდაქმნის ისევ array-ში
//   const allKeys = [...new Set(dataArray.flatMap(item => Object.keys(item)))];

// console.log(allKeys);


  
//   return (
//     <section>
//       {/* 🔹 სექციის title */}
//       <div className={`title ${sectionTitle}`}> 
//         {/* კლასის სახელი ემთხვევა sectionTitle-ს, CSS-ისთვის */}
//         <h2>
//           My <span>{sectionTitle}</span>
//         </h2>
//       </div>
//       {/* 🔹 მთავარი wrapper სადაც მონაცემებს ვარენდერებთ */}
//       <div className="myskills-wrapper">
//         {/* 🔹 map each item from dataArray */}
//         {dataArray.map((item, index) => {
//           // 🔹 Check: არსებობს თუ არა profileUrl და logoUrl
//           // თუ არსებობს, ეს იქნება link + image
//           const hasLinkImage = item.profileUrl && item.logoUrl;
//           return (
//             <div className="universal-card" key={index}>
//               {/* 🔹 თუ აქვს link + image, მაშინ ავაწყოთ <a><img /></a> */}
//               {hasLinkImage && (
//                 <a
//                   href={item.profileUrl} // 🔹 link URL
//                   target="_blank" // 🔹 ახსნილი ნავიგაცია ახალ tab-ში
//                   rel="noreferrer" // 🔹 უსაფრთხოება (prevent referrer leakage)
//                 >
//                   <img
//                     src={item.logoUrl} // 🔹 image src
//                     alt={`${item.platform || "social"} logo`} 
//                     // 🔹 image alt: გამოიყენება accessibility-სთვის, თუ platform არ არსებობს fallback
//                     width="30" 
//                     // 🔹 ზომა small icon-ისთვის
//                   />
//                 </a>
//               )}
//               {/* 🔹 დანარჩენი ველები, რომლებიც არ არიან profileUrl ან logoUrl */}
//               {allKeys
//                 .filter(key => key !== "profileUrl" && key !== "logoUrl")
//                 .map(key => (
//                   <div key={key}>
//                     {/* 🔹 key name */}
//                     {key === 'iconPath' ? <img src={item[key]} alt={`${item.title} icon`} /> : null}
//                     {/* 🔹 value, fallback "—" თუ undefined ან null */}
//                     <span>{item[key] ?? "—"}</span>
//                   </div>
//                 ))}
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// export default Universal;
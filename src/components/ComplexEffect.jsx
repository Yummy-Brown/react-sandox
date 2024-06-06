// import React, { useState, useEffect } from 'react';

// const ComplexEffect = () => {
//     const [sneakers, setSneakers] = useState ([])
//     const [isLoading, setisLoading] = useState(true);
//     const [isError, setisError] = useState(false);
//     const url = 'https://example-data.draftbit.com/sneakers?_limit=20';
//     const getData = async () => {
//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             // console.log(data);
//             setisLoading(false);
//             setSneakers(data);
//         } catch (error) {
//             console.log(error);
//             setisLoading(false);
//             setisError(true);
//         }
       
//     };
//     useEffect (() => {
//         getData();
//     }, []);
//     if (isLoading) {
//         return <h1>Loading...</h1>
//     }
//     if (isError) {
//         return <h1>Failed to Fetch</h1>
//     }
//   return (
//     <div>
//         <h1>LIST OF SNEAKERS</h1>
//         <div>
//             {
//                 sneakers.map((shoe) => {
//                     const { id, brand, title, retailPrice } = shoe;
//                     return (
//                         <div key = {id}>
//                             <h2>{brand}</h2>
//                             <p>{title}</p>
//                             <p>${retailPrice}</p>
//                             </div>
//                     );
//                 })};
//         </div>
//     </div>
//   )
// }

// export default ComplexEffect
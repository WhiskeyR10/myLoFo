// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const LostPage = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <main className="flex-grow">
//       <div className="container mx-auto mt-8">
//       <h1 className="text-3xl font-bold mb-4 text-center">Submit a Lost Item</h1>

//       <form className="max-w-md mx-auto">
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemName">
//             What was lost?
//           </label>
//           <input
//             type="text"
//             id="itemName"
//             name="itemName"
//             className="border rounded w-full py-2 px-3"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemColor">
//             Color
//           </label>
//           <input
//             type="text"
//             id="itemColor"
//             name="itemColor"
//             className="border rounded w-full py-2 px-3"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemCategory">
//             Category
//           </label>
//           <input
//             type="text"
//             id="itemCategory"
//             name="itemCategory"
//             className="border rounded w-full py-2 px-3"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemBrand">
//             Brand
//           </label>
//           <input
//             type="text"
//             id="itemBrand"
//             name="itemBrand"
//             className="border rounded w-full py-2 px-3"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemDate">
//             Date Lost
//           </label>
//           <input
//             type="date"
//             id="itemDate"
//             name="itemDate"
//             className="border rounded w-full py-2 px-3"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemTime">
//             Time Lost
//           </label>
//           <input
//             type="time"
//             id="itemTime"
//             name="itemTime"
//             className="border rounded w-full py-2 px-3"
//             required
//           />
//         </div>

//         {/* Add more input fields for other item details */}

//         <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemImage">
//                 Upload Image
//               </label>
//               <input type="file" id="itemImage" name="itemImage" accept="image/*" className="py-2" />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="additionalInfo">
//                 Additional Information
//               </label>
//               <textarea
//                 id="additionalInfo"
//                 name="additionalInfo"
//                 rows="4"
//                 className="border rounded w-full py-2 px-3"
//               ></textarea>
//             </div>

//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
//               >
//                 Submit
//               </button>
//         </div>
//       </form>
//     </div></main>
//       <Footer />
//     </div>
//   );
// };

// export default LostPage;

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LostPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto mt-8 mb-5 p-6 bg-white shadow-md rounded-md max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Submit a Lost Item</h1>

          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemName">
                What was lost?
              </label>
              <input
                type="text"
                id="itemName"
                name="itemName"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500" placeholder="Item description"
                required
              />
            </div>

            {/* <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemColor">
                Color
              </label>
              <input
                type="text"
                id="itemColor"
                name="itemColor"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"  placeholder="Select color"
                required
              />
            </div> */}

            {/* Color */}
<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Color
  </label>
  <input
    type="color"
    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
    required
  />
</div>


            {/* Category */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Category
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Category"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemBrand">
                Brand
              </label>
              <input
                type="text"
                id="itemBrand"
                name="itemBrand"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"  placeholder="Brand name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemDate">
                Date Lost
              </label>
              <input
                type="date"
                id="itemDate"
                name="itemDate"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemTime">
                Time Lost
              </label>
              <input
                type="time"
                id="itemTime"
                name="itemTime"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemImage">
                Upload Image
              </label>
              <input type="file" id="itemImage" name="itemImage" accept="image/*" className="py-2" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="additionalInfo">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                rows="4"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LostPage;

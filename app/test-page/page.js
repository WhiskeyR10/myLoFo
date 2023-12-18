'use client'
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ItemReportPage = () => {
  const [showElectronicOptions, setShowElectronicOptions] = useState(false);

  const handleCategoryChange = (event) => {
    // Check if the selected category is 'electronic'
    setShowElectronicOptions(event.target.value === 'electronic');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto mt-8 mb-5 p-6 bg-white shadow-md rounded-md max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Submit an Item Report</h1>

          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemName">
                What was lost/found?
              </label>
              <input
                type="text"
                id="itemName"
                name="itemName"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Item description"
                required
              />
            </div>

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
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemCategory">
                Category
              </label>
              <select
                id="itemCategory"
                name="itemCategory"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                onChange={handleCategoryChange}
                required
              >
                <option value="" disabled selected>
                  Select category
                </option>
                <optgroup label="Electronic">
                  <option value="smartphone">Smartphone</option>
                  <option value="tablet">Tablet</option>
                  <option value="laptop">Laptop</option>
                  <option value="camera">Camera</option>
                  <option value="printer">Printer</option>
                </optgroup>
                <option value="home-appliance">Home Appliance</option>
                <option value="documents">Documents</option>
                {/* Add more options as needed */}
              </select>
            </div>

            {showElectronicOptions && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Subcategory
                </label>
                <select
                  id="electronicSubcategory"
                  name="electronicSubcategory"
                  className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="" disabled selected>
                    Select subcategory
                  </option>
                  <option value="smartphone">Smartphone</option>
                  <option value="tablet">Tablet</option>
                  <option value="laptop">Laptop</option>
                  {/* Add more subcategory options as needed */}
                </select>
              </div>
            )}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemBrand">
                Brand
              </label>
              <input
                type="text"
                id="itemBrand"
                name="itemBrand"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Brand name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemDate">
                Date Lost/Found
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
                Time Lost/Found
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
                placeholder="Additional information about the item"
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

export default ItemReportPage;

import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

const CreateCourseCategory = () => {
  const { data, setData, post, errors } = useForm({
    category_name: '',
    category_status: true,
    category_image: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('course-categories.store'));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Create Course Category</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="category_name" className="block text-gray-700 font-bold mb-2">Category Name</label>
          <input
            type="text"
            id="category_name"
            value={data.category_name}
            onChange={(e) => setData('category_name', e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.category_name && <div className="text-red-500 text-sm mt-2">{errors.category_name}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="category_status" className="block text-gray-700 font-bold mb-2">Category Status</label>
          <select
            id="category_status"
            value={data.category_status}
            onChange={(e) => setData('category_status', e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value={true}>Active</option>
            <option value={false}>Inactive</option>
          </select>
          {errors.category_status && <div className="text-red-500 text-sm mt-2">{errors.category_status}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="category_image" className="block text-gray-700 font-bold mb-2">Category Image</label>
          <input
            type="text"
            id="category_image"
            value={data.category_image}
            onChange={(e) => setData('category_image', e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.category_image && <div className="text-red-500 text-sm mt-2">{errors.category_image}</div>}
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCourseCategory;

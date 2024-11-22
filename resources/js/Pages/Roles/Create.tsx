import React, { useState } from 'react';
import { useForm, Link, usePage } from '@inertiajs/react';

const Create = () => {
  const { permissions } = usePage().props;
  const { data, setData, post, errors } = useForm({
    name: '',
    identity: '',
    permissions: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('roles.store'));
  };

  const handleCheckboxChange = (e) => {
    const value = parseInt(e.target.value);
    if (e.target.checked) {
      setData('permissions', [...data.permissions, value]);
    } else {
      setData('permissions', data.permissions.filter((id) => id !== value));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Create Role</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.name && <div className="text-red-500 text-sm mt-2">{errors.name}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="identity" className="block text-gray-700 font-bold mb-2">Identity</label>
          <input
            type="text"
            id="identity"
            value={data.identity}
            onChange={(e) => setData('identity', e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.identity && <div className="text-red-500 text-sm mt-2">{errors.identity}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="permissions" className="block text-gray-700 font-bold mb-2">Permissions</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {permissions.map((permission) => (
              <div key={permission.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`permission-${permission.id}`}
                  value={permission.id}
                  checked={data.permissions.includes(permission.id)}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor={`permission-${permission.id}`} className="text-gray-700">{permission.name}</label>
              </div>
            ))}
          </div>
          {errors.permissions && <div className="text-red-500 text-sm mt-2">{errors.permissions}</div>}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Role
          </button>
          <Link href={route('roles.index')} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Create;

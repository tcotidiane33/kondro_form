import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const Index = () => {
  const { roles } = usePage().props;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800">Roles</h1>
        <Link href={route('roles.create')} className="btn btn-primary flex items-center space-x-2">
          <FaPlus />
          <span>Create Role</span>
        </Link>
      </div>
      <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-left text-gray-600">Name</th>
            <th className="px-4 py-2 text-left text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id} className="border-b">
              <td className="px-4 py-2">{role.name}</td>
              <td className="px-4 py-2 flex space-x-2">
                <Link href={route('roles.edit', role.id)} className="btn btn-secondary flex items-center space-x-1">
                  <FaEdit />
                  <span>Edit</span>
                </Link>
                <Link href={route('roles.destroy', role.id)} method="delete" className="btn btn-danger flex items-center space-x-1" as="button">
                  <FaTrash />
                  <span>Delete</span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;

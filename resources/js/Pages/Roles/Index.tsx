import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import AdminLayout from '@/Layouts/AdminLayout';

interface Permission {
  id: number;
  name: string;
}

interface Role {
  id: number;
  name: string;
  permissions: Permission[];
}

interface PageProps {
  roles: Role[];
}

const Index = () => {
  const { roles } = usePage<PageProps>().props;

  return (
    <AdminLayout>
        <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-gray-800">Roles</h1>
            <Link href={route('roles.create')} className="btn btn-primary flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            <FaPlus />
            <span>Create Role</span>
            </Link>
        </div>
        <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
            <tr>
                <th className="px-4 py-2 text-left text-gray-600">Name</th>
                <th className="px-4 py-2 text-left text-gray-600 bg-blue-100">Permissions</th>
                <th className="px-4 py-2 text-left text-gray-600">Actions</th>
            </tr>
            </thead>
            <tbody>
            {roles.map((role) => (
                <tr key={role.id} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">{role.name}</td>
                <td className="px-4 py-2 bg-indigo-100">
                    <div className="flex flex-wrap gap-2">
                        {role.permissions && role.permissions.map((permission) => (
                            <span key={permission.id} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                            {permission.name}
                            </span>
                        ))}
                    </div>
                </td>
                <td className="px-4 py-2 flex space-x-2">
                    <Link href={route('roles.edit', role.id)} className="btn btn-secondary flex items-center space-x-1 bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600">
                    <FaEdit />
                    <span>Edit</span>
                    </Link>
                    <Link href={route('roles.destroy', role.id)} method="delete" className="btn btn-danger flex items-center space-x-1 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600" as="button">
                    <FaTrash />
                    <span>Delete</span>
                    </Link>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </AdminLayout>
  );
};

export default Index;

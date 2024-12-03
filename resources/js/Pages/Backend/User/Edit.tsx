import React from 'react';
import { useForm } from '@inertiajs/react';

interface Role {
    id: number;
    name: string;
}

interface User {
    id: number;
    name: string;
    email: string;
    contact?: string;
    role_id: number;
    image?: string;
}

interface EditUserProps {
    user: User;
    roles: Role[];
}

const EditUser: React.FC<EditUserProps> = ({ user, roles }) => {
    const { data, setData, put, errors } = useForm({
        userName: user.name,
        emailAddress: user.email,
        contactNumber: user.contact || '',
        roleId: user.role_id,
        image: null,
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/admin/users/${user.id}`);
    };

    return (
        <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Edit User</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        value={data.userName}
                        onChange={(e) => setData('userName', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                    {errors.userName && <div className="text-red-500">{errors.userName}</div>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        value={data.emailAddress}
                        onChange={(e) => setData('emailAddress', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                    {errors.emailAddress && <div className="text-red-500">{errors.emailAddress}</div>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Contact</label>
                    <input
                        type="text"
                        value={data.contactNumber}
                        onChange={(e) => setData('contactNumber', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                    {errors.contactNumber && <div className="text-red-500">{errors.contactNumber}</div>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Role</label>
                    <select
                        value={data.roleId}
                        onChange={(e) => setData('roleId', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    >
                        {roles.map((role) => (
                            <option key={role.id} value={role.id}>
                                {role.name}
                            </option>
                        ))}
                    </select>
                    {errors.roleId && <div className="text-red-500">{errors.roleId}</div>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                    {errors.password && <div className="text-red-500">{errors.password}</div>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Confirm Password</label>
                    <input
                        type="password"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                    {errors.password_confirmation && <div className="text-red-500">{errors.password_confirmation}</div>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Image</label>
                    <input
                        type="file"
                        onChange={(e) => setData('image', e.target.files[0])}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                    {errors.image && <div className="text-red-500">{errors.image}</div>}
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Save
                </button>
            </form>
        </div>
    );
};

export default EditUser;

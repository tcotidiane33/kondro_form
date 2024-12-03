import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

interface UpdateProfileFormProps {
  user: {
    id: number;
    name: string;
    email: string;
    contact: string;
    role_id: number;
    status: number;
    image: string;
  };
}

const UpdateProfileForm: React.FC<UpdateProfileFormProps> = ({ user }) => {
  const { data, setData, put, errors } = useForm({
    name: user.name,
    email: user.email,
    contact: user.contact,
    role_id: user.role_id,
    status: user.status,
    image: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    put(route('user.update', user.id));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setData('image', files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nom
        </label>
        <input
          id="name"
          type="text"
          value={data.name}
          onChange={(e) => setData('name', e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
        {errors.name && <div className="text-red-500 text-sm mt-2">{errors.name}</div>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={data.email}
          onChange={(e) => setData('email', e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
        {errors.email && <div className="text-red-500 text-sm mt-2">{errors.email}</div>}
      </div>

      <div>
        <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
          Contact
        </label>
        <input
          id="contact"
          type="text"
          value={data.contact}
          onChange={(e) => setData('contact', e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
        {errors.contact && <div className="text-red-500 text-sm mt-2">{errors.contact}</div>}
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Image de profil
        </label>
        <input
          id="image"
          type="file"
          onChange={handleFileChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
        {errors.image && <div className="text-red-500 text-sm mt-2">{errors.image}</div>}
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        Mettre à jour
      </button>
    </form>
  );
};

export default UpdateProfileForm;

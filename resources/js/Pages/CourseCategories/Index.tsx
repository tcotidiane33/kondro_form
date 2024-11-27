import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

const Index = ({ categories }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Liste des catégories de cours</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Nom</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{category.category_name}</td>
                <td className="py-2 px-4 border-b">
                  <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${category.category_status ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                    {category.category_status ? 'Actif' : 'Inactif'}
                  </span>
                </td>
                <td className="py-2 px-4 border-b">
                  <div className="flex space-x-2">
                    <InertiaLink href={route('course-categories.edit', category.id)}>
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Modifier</button>
                    </InertiaLink>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?')) {
                          Inertia.post(route('course-categories.destroy', category.id), {
                            _method: 'delete',
                          });
                        }
                      }}
                    >
                      <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">Supprimer</button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <InertiaLink href={route('course-categories.create')}>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Ajouter une nouvelle catégorie</button>
        </InertiaLink>
      </div>
    </div>
  );
};

export default Index;

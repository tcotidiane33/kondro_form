import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

interface Course {
  id: number;
  title: string;
  course_category_id: number;
  instructor_id: number;
  price: number;
}

interface IndexProps {
  courses: Course[];
}

const Index: React.FC<IndexProps> = ({ courses }) => {
  if (!Array.isArray(courses)) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Liste des cours</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Titre</th>
              <th className="py-2 px-4 border-b">Catégorie</th>
              <th className="py-2 px-4 border-b">Instructeur</th>
              <th className="py-2 px-4 border-b">Prix</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{course.title}</td>
                <td className="py-2 px-4 border-b">{course.course_category_id}</td>
                <td className="py-2 px-4 border-b">{course.instructor_id}</td>
                <td className="py-2 px-4 border-b">{course.price}</td>
                <td className="py-2 px-4 border-b">
                  <div className="flex space-x-2">
                    <InertiaLink href={route('courses.edit', course.id)}>
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Modifier</button>
                    </InertiaLink>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (confirm('Êtes-vous sûr de vouloir supprimer ce cours ?')) {
                          Inertia.post(route('courses.destroy', course.id), {
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
        <InertiaLink href={route('courses.create')}>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Ajouter un nouveau cours</button>
        </InertiaLink>
      </div>
    </div>
  );
};

export default Index;

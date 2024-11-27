import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';

interface Course {
  id: number;
  title: string;
  description: string;
  course_category_id: number;
  instructor_id: number;
  price: number;
  old_price: number;
  subscription_price: number;
  start_from: string;
  duration: string;
  lesson: string;
  difficulty: string;
  course_code: string;
  prerequisites: string;
  thumbnail_video: string;
  tag: string;
  image: string;
  thumbnail_image: string;
}

const Show: React.FC = () => {
  const { course } = usePage().props as { course: Course };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Description</h2>
          <p>{course.description}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Catégorie</h2>
          <p>{course.course_category_id}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Instructeur</h2>
          <p>{course.instructor_id}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Prix</h2>
          <p>{course.price}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Ancien Prix</h2>
          <p>{course.old_price}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Prix d'abonnement</h2>
          <p>{course.subscription_price}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Date de début</h2>
          <p>{course.start_from}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Durée</h2>
          <p>{course.duration}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Leçon</h2>
          <p>{course.lesson}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Difficulté</h2>
          <p>{course.difficulty}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Code du cours</h2>
          <p>{course.course_code}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Prérequis</h2>
          <p>{course.prerequisites}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Vidéo de présentation</h2>
          <p>{course.thumbnail_video}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Tags</h2>
          <p>{course.tag}</p>
        </div>
        {course.image && (
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Image</h2>
            <img src={`/uploads/courses/${course.image}`} alt={course.title} className="w-full h-auto" />
          </div>
        )}
        {course.thumbnail_image && (
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Image miniature</h2>
            <img src={`/uploads/courses/thumbnails/${course.thumbnail_image}`} alt={course.title} className="w-full h-auto" />
          </div>
        )}
        <div className="mt-4">
          <InertiaLink href={route('courses.index')} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Retour à la liste des cours</InertiaLink>
        </div>
      </div>
    </div>
  );
};

export default Show;

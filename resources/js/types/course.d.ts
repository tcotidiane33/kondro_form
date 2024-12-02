// course.d.ts

export interface CourseCategory {
  id: number;
  category_name: string;
  category_status: 1 | 2;
  category_image?: string;

}

export interface Instructor {
  id: number;
  name: string;
  contact: string;
  email: string;
  role_id: number;
  bio?: string;
  title?: string;
  designation?: string;
  image?: string;
  status: 1 | 0;
  password: string;
  language: 'fr' | 'en';

}

export interface Course {
  id: number;
  title: string;
  description?: string;
  course_category_id: number;
  instructor_id: number;
  type: 'free' | 'paid' | 'subscription';
  price: number;
  old_price?: number;
  subscription_price?: number;
  start_from?: string;
  duration?: number;
  lesson?: number;
  prerequisites?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  course_code?: string;
  image?: string;
  thumbnail_image?: string;
  thumbnail_video?: string;
  status: 0 | 1 | 2;
  language: 'fr' | 'en';

  tag?: 'popular' | 'featured' | 'upcoming';

  description: string;
//   image: string;
//   category: string;
//   instructor: string;
  instructor_avatar: string;
  instructor_bio: string;
//   duration: string;
  level: string;
}

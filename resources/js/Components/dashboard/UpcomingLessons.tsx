import { Calendar } from 'lucide-react';

const UpcomingLessons = () => {
  const lessons = [
    {
      id: 1,
      title: "React Hooks Deep Dive",
      course: "Full-Stack Web Development",
      time: "2:00 PM",
      date: "Today"
    },
    {
      id: 2,
      title: "Advanced Routing Protocols",
      course: "CCNP Enterprise",
      time: "10:00 AM",
      date: "Tomorrow"
    },
    {
      id: 3,
      title: "Machine Learning Basics",
      course: "Data Science Fundamentals",
      time: "3:30 PM",
      date: "Mar 20"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Lessons</h2>
      <div className="space-y-4">
        {lessons.map(lesson => (
          <div key={lesson.id} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-150">
            <div className="flex-shrink-0">
              <Calendar className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">{lesson.title}</h3>
              <p className="text-sm text-gray-500">{lesson.course}</p>
              <div className="mt-1 text-xs text-gray-400">
                {lesson.date} at {lesson.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingLessons;
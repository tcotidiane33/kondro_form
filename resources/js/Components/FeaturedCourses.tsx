const FeaturedCourses = () => {
  return (
    <section className="featured-courses py-12 px-6 bg-white text-center">
      <h2 className="text-3xl font-extrabold text-gray-900">Featured Courses</h2>
      <p className="mt-4 text-lg text-gray-700">
        We work exclusively with in-house industry experts to provide aspiring technology leaders with the advanced content they need to take the next step in their technology career, stay up to date on the latest advancements, or achieve a certification. Our courses are a unique blend of in-depth instruction paired with hands-on exercises and quizzes that create a complete and proven training strategy.
      </p>
      <div className="categories mt-10 flex flex-col items-center">
        <ul className="flex space-x-4">
          <li className="text-base font-medium text-gray-500 hover:text-gray-900">Networking</li>
          <li className="text-base font-medium text-gray-500 hover:text-gray-900">Cloud</li>
          <li className="text-base font-medium text-gray-500 hover:text-gray-900">Cyber Security</li>
          <li className="text-base font-medium text-gray-500 hover:text-gray-900">Data Science</li>
        </ul>
        <button className="mt-4 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700">View All Courses</button>
      </div>
      <div className="courses-container mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="course-card p-6 bg-white rounded-lg shadow-md border-r-4 border-indigo-600">
          <div className="course-bg w-full h-48 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: 'url(https://via.placeholder.com/300x200?text=Motion+Design+1)' }}></div>
          <p className="mt-4 text-base font-medium text-gray-500">Networking</p>
          <h3 className="text-xl font-semibold text-gray-900 mt-2">642-611 MPLS Exam Course</h3>
          <p className="mt-2 text-base text-gray-500">Professional</p>
        </div>
        <div className="course-card p-6 bg-white rounded-lg shadow-md border-r-4 border-blue-600">
          <div className="course-bg w-full h-48 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: 'url(https://via.placeholder.com/300x200?text=Motion+Design+2)' }}></div>
          <p className="mt-4 text-base font-medium text-gray-500">Networking</p>
          <h3 className="text-xl font-semibold text-gray-900 mt-2">Advanced Implementation and Optimization</h3>
          <p className="mt-2 text-base text-gray-500">Professional</p>
        </div>
        <div className="course-card p-6 bg-white rounded-lg shadow-md border-r-4 border-green-600">
          <div className="course-bg w-full h-48 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: 'url(https://via.placeholder.com/300x200?text=Motion+Design+3)' }}></div>
          <p className="mt-4 text-base font-medium text-gray-500">Networking</p>
          <h3 className="text-xl font-semibold text-gray-900 mt-2">Applying Data Center ACI Concepts</h3>
          <p className="mt-2 text-base text-gray-500">Professional</p>
        </div>
        <div className="course-card p-6 bg-white rounded-lg shadow-md border-r-4 border-yellow-600">
          <div className="course-bg w-full h-48 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: 'url(https://via.placeholder.com/300x200?text=Motion+Design+4)' }}></div>
          <p className="mt-4 text-base font-medium text-gray-500">Networking</p>
          <h3 className="text-xl font-semibold text-gray-900 mt-2">Applying Data Center Overlay Protocols</h3>
          <p className="mt-2 text-base text-gray-500">Professional</p>
        </div>
        <div className="course-card p-6 bg-white rounded-lg shadow-md border-r-4 border-red-600">
          <div className="course-bg w-full h-48 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: 'url(https://via.placeholder.com/300x200?text=Motion+Design+5)' }}></div>
          <p className="mt-4 text-base font-medium text-gray-500">Networking</p>
          <h3 className="text-xl font-semibold text-gray-900 mt-2">Applying Data Center Switching Protocols</h3>
          <p className="mt-2 text-base text-gray-500">Professional</p>
        </div>
        <div className="course-card p-6 bg-white rounded-lg shadow-md border-r-4 border-purple-600">
          <div className="course-bg w-full h-48 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: 'url(https://via.placeholder.com/300x200?text=Motion+Design+6)' }}></div>
          <p className="mt-4 text-base font-medium text-gray-500">Networking</p>
          <h3 className="text-xl font-semibold text-gray-900 mt-2">Basic Identity Management Using Cisco ISE</h3>
          <p className="mt-2 text-base text-gray-500">Professional</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
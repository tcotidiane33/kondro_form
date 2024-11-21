import c4 from '../assets/images/Container (4).png';
import c5 from '../assets/images/Container (5).png';
import c6 from '../assets/images/Container (6).png';
import c7 from '../assets/images/Container (7).png';
import c8 from '../assets/images/Container (8).png';

const LearningPaths = () => {
    return (
      <section className="learning-paths py-12 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Learning Paths</h2>
        <p className="mt-4 text-lg text-gray-700">INE Learning Paths present topics in a strategic order, ensuring you never overlook crucial information, while naturally building upon lessons already learned. As you work through each Learning Path, you can keep track of your progress and be able pick up exactly where you left off. You'll always have a clear picture of what you've accomplished and what you still have left to conquer.</p>
        <div className="categories mt-10 flex flex-col items-center">
          <ul className="flex space-x-4">
            <li className="text-base font-medium text-gray-500 hover:text-gray-900">Networking</li>
            <li className="text-base font-medium text-gray-500 hover:text-gray-900">Cyber Security</li>
            <li className="text-base font-medium text-gray-500 hover:text-gray-900">Data Science</li>
            <li className="text-base font-medium text-gray-500 hover:text-gray-900">Cloud</li>
            <li className="text-base font-medium text-gray-500 hover:text-gray-900">IT Essentials</li>
          </ul>
          <button className="mt-4 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700">View All Paths</button>
        </div>
        <div className="cards-container mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card p-6 bg-white rounded-lg shadow-md">
            <img src={c4} alt="Networking" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold text-gray-900 mt-4">Networking</h3>
            <p className="mt-2 text-base text-gray-500">CCIE Service Provider v5.0</p>
            <p className="mt-2 text-base text-gray-500">Advanced</p>
          </div>
          <div className="card p-6 bg-white rounded-lg shadow-md">
            <img src={c5} alt="Cyber Security" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold text-gray-900 mt-4">Cyber Security</h3>
            <p className="mt-2 text-base text-gray-500">CCIE Enterprise Infrastructure</p>
            <p className="mt-2 text-base text-gray-500">Advanced</p>
          </div>
          <div className="card p-6 bg-white rounded-lg shadow-md">
            <img src={c6} alt="Data Science" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold text-gray-900 mt-4">Data Science</h3>
            <p className="mt-2 text-base text-gray-500">CCIE Data Center v3.0</p>
            <p className="mt-2 text-base text-gray-500">Advanced</p>
          </div>
          <div className="card p-6 bg-white rounded-lg shadow-md">
            <img src={c7} alt="Cloud" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold text-gray-900 mt-4">Cloud</h3>
            <p className="mt-2 text-base text-gray-500">CCNP Security</p>
            <p className="mt-2 text-base text-gray-500">Professional</p>
          </div>
          <div className="card p-6 bg-white rounded-lg shadow-md">
            <img src={c8} alt="IT Essentials" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold text-gray-900 mt-4">IT Essentials</h3>
            <p className="mt-2 text-base text-gray-500">CCNP Enterprise</p>
            <p className="mt-2 text-base text-gray-500">Professional</p>
          </div>
          <div className="card p-6 bg-white rounded-lg shadow-md">
            <img src={c5} alt="Networking" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold text-gray-900 mt-4">Networking</h3>
            <p className="mt-2 text-base text-gray-500">CCIE Collaboration v3.0</p>
            <p className="mt-2 text-base text-gray-500">Advanced</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default LearningPaths;
import { Link } from 'react-router-dom';
import Image1 from '../assets/images/image 1.png';
import Image2 from '../assets/images/Container (2).png';
import Image3 from '../assets/images/Container (3).png';

const Experts = () => {
  return (
    <section className="expert-section py-12 bg-gray-50 text-center">
      <div className="content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Learn From Industry Experts</h2>
        <hr className="my-4" />
        <p className="mt-4 text-lg text-gray-700">
          When you're looking to tackle your next major project or defend your infrastructure from cyber warfare, you don't want to just trust anyone with a webcam to show you how. At INE, we've hired the world's leading experts in Cloud, Cyber Security, Data Science and Networking so you can simply learn. Let us do the heavy lifting for you.
        </p>
        <button className="mt-6 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700">
          Meet The Team
        </button>
      </div>
      <div className="experts-carousel mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-3/4">
        <div className="expert-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-96">
          <img src={Image1} alt="Adriana Patterson" className="w-full h-2/3 object-cover" />
          <div className="info p-6">
            <h3 className="text-xl font-semibold text-gray-900">Adriana Patterson</h3>
            <hr className="my-2" />
            <p className="text-base text-gray-500">Data Science</p>
            <Link to="/experts/adriana-patterson" className="text-indigo-600 hover:text-indigo-500 mt-4 inline-block">
              Learn More &#8594;
            </Link>
          </div>
        </div>
        <div className="expert-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-96">
          <img src={Image2} alt="Alexis Perrier" className="w-full h-2/3 object-cover" />
          <div className="info p-6">
            <h3 className="text-xl font-semibold text-gray-900">Alexis Perrier</h3>
            <hr className="my-2" />
            <p className="text-base text-gray-500">Data Science</p>
            <Link to="/experts/alexis-perrier" className="text-indigo-600 hover:text-indigo-500 mt-4 inline-block">
              Learn More &#8594;
            </Link>
          </div>
        </div>
        <div className="expert-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-96">
          <img src={Image3} alt="Brian McGohan" className="w-full h-2/3 object-cover" />
          <div className="info p-6">
            <h3 className="text-xl font-semibold text-gray-900">Brian McGohan</h3>
            <hr className="my-2" />
            <p className="text-base text-gray-500">Cybersecurity</p>
            <Link to="/experts/brian-mcgohan" className="text-indigo-600 hover:text-indigo-500 mt-4 inline-block">
              Learn More &#8594;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;
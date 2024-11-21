import ic1 from '../assets/images/ic_networking.png.png';
import ic2 from '../assets/images/ic_cyber-security.png.png';
import ic3 from '../assets/images/ic_data-science.png.png';
import ic4 from '../assets/images/ic_cloud.png.png';

const LearningAreas = () => {
    return (
      <section className="learning-areas py-12 bg-gray-50 text-center">
        <h2 className="text-3xl font-extrabold text-blue-600">Learning Areas</h2>
        <div className="areas mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="area p-6 bg-white rounded-lg shadow-md">
            <img src={ic1} alt="Networking" className="mx-auto mb-4" />
            <p className="area-networking text-indigo-600 text-2xl font-bold">01.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-2">Networking</h3>
            <a href="#" className="arrow text-indigo-600 hover:text-indigo-500 mt-4 inline-block">→</a>
          </div>
          <div className="area p-6 bg-white rounded-lg shadow-md">
            <img src={ic2} alt="Cyber Security" className="mx-auto mb-4" />
            <p className="area-cyber text-indigo-600 text-2xl font-bold">02.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-2">Cyber Security</h3>
            <a href="#" className="arrow text-indigo-600 hover:text-indigo-500 mt-4 inline-block">→</a>
          </div>
          <div className="area p-6 bg-white rounded-lg shadow-md">
            <img src={ic3} alt="Data Science" className="mx-auto mb-4" />
            <p className="area-data text-indigo-600 text-2xl font-bold">03.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-2">Data Science</h3>
            <a href="#" className="arrow text-indigo-600 hover:text-indigo-500 mt-4 inline-block">→</a>
          </div>
          <div className="area p-6 bg-white rounded-lg shadow-md">
            <img src={ic4} alt="Cloud" className="mx-auto mb-4" />
            <p className="area-cloud text-indigo-600 text-2xl font-bold">04.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-2">Cloud</h3>
            <a href="#" className="arrow text-indigo-600 hover:text-indigo-500 mt-4 inline-block">→</a>
          </div>
        </div>
      </section>
    );
  };
  
  export default LearningAreas;
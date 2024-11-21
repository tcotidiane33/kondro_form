import Background from '../assets/images/Container (1).png';

const WhyKDN = () => {
  return (
    <section
      className="why-kdn py-12 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold">Why KDN?</h2>
        <p className="mt-4 text-lg">
          As cybersecurity, networking, and cloud computing increasingly overlap, the need for cross-training and upskilling grows – at every level of a career. KDN offers a comprehensive learning platform that immerses and engages our practitioners in continuous learning throughout their careers.
        </p>
        <div className="features mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="feature p-6 bg-white bg-opacity-75 rounded-lg shadow-md text-gray-900">
            <h3 className="text-xl font-semibold">Content Depth</h3>
            <p className="mt-2">Train on your own time for as little as $39 a month.</p>
          </div>
          <div className="feature p-6 bg-white bg-opacity-75 rounded-lg shadow-md text-gray-900">
            <h3 className="text-xl font-semibold">Expert Instructors</h3>
            <p className="mt-2">Purpose-built curriculum curated to the needs of teams and enterprises. Learn the skills that will drive innovation.</p>
          </div>
          <div className="feature p-6 bg-white bg-opacity-75 rounded-lg shadow-md text-gray-900">
            <h3 className="text-xl font-semibold">Hands-On</h3>
            <p className="mt-2">You can’t improve without doing. Each of our learning paths contains real-world, hands-on scenarios so you can practice what you’ve learned.</p>
          </div>
          <div className="feature p-6 bg-white bg-opacity-75 rounded-lg shadow-md text-gray-900">
            <h3 className="text-xl font-semibold">Career Oriented</h3>
            <p className="mt-2">Certifications and Training focus on real-world technologies so you can apply your knowledge to solve your organization’s needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKDN;
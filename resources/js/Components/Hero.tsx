import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-24 text-center">
      <div className="content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">In-depth Technical Training at a Practical Cost</h1>
        <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Experience an on-demand training platform that puts real-world, practical learning first – regardless of skill level. Learn from expert instructors, dive into immersive labs, and prove your knowledge in Networking, Cybersecurity, and Cloud.
        </p>
        <div className="actions mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <Link to="/start-training" className=" primary bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 border border-transparent rounded-md text-base font-medium md:py-4 md:text-lg md:px-10">
            Start Training
          </Link>
          <Link to="/training-for-teams" className=" secondary ml-6 bg-purple-600 text-white hover:bg-purple-500 px-8 py-3 border border-transparent rounded-md text-base font-medium md:py-4 md:text-lg md:px-10">
            Training for Teams
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
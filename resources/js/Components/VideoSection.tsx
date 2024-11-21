const VideoSection = () => {
  return (
    <section className="video-section bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="video w-full md:w-1/2">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/b12JrM-6DBY?si=GDTL7aRJfArTvklS"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="nail w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:ml-8">
          <h1 className="text-3xl font-extrabold">Nail your next project</h1>
          <p className="mt-4 text-lg">
            Take your Technical training into your own hands and stay engaged with our learn-by-doing platform where you can put your skills to the test with hands-on exercises, quizzes, and labs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
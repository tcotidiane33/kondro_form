const VideoSection = () => {
  return (
    <section className="video-section bg-gradient-to-r from-gray-600 to-white-800 text-white py-12 mb-4 rounded-lg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="video w-full md:w-3/4 lg:w-1/2 relative">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/b12JrM-6DBY?si=GDTL7aRJfArTvklS"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
        <div className="nail w-full md:w-3/4 lg:w-1/2 text-right mt-4">
          <h1 className="text-3xl font-extrabold">Nail your next project</h1>
          <p className="mt-2 text-sm ">
            Take your Technical training into your own hands and stay engaged with our learn-by-doing platform where you can put your skills to the test with hands-on exercises, quizzes, and labs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

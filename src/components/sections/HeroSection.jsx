const HeroSection = () => {
  const handleScrollToCourses = (e) => {
    e.preventDefault();
    const coursesSection = document.querySelector("#courses");
    if (coursesSection) {
      window.scrollTo({
        top: coursesSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="hero-bg min-h-[80vh] flex items-center relative"
    >
      {/* Overlay */}
      <div className="hero-overlay absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-primary/80 uppercase tracking-wider mb-4">
            DISCOVER YOUR STYLE
          </p>

          <h1 className="font-['Space_Grotesk'] text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Explore Vocal Training in Classical and Light Music
          </h1>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Master the art of vocal music through our comprehensive training
            programs. From traditional Carnatic and Hindustani classical to
            contemporary light music and film songs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#courses"
              onClick={handleScrollToCourses}
              className="btn btn-primary px-8 py-4 font-medium whitespace-nowrap text-center"
            >
              Explore Courses
            </a>

            <button className="btn btn-outline px-8 py-4 font-medium whitespace-nowrap">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

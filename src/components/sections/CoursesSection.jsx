import ClassicalMusicCard from "../generated/ClassicalMusicCard";
import LightMusicCard from "../generated/LightMusicCard";
import VoiceCultureCard from "../generated/VoiceCultureCard";
import EarTrainingCard from "../generated/EarTrainingCard";

// Data arrays outside component for optimization

const CoursesSection = () => {
  return (
    <section id="courses" className="py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            OUR PROGRAMS
          </p>
          <h2 className="font-['Space_Grotesk'] text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Course Offerings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our expertly designed programs that cater to every
            musical tradition and skill level
          </p>
        </div>

        {/* Classical Music */}
        <ClassicalMusicCard />

        {/* Light Music */}
        <LightMusicCard />

        {/* Voice Culture */}
        <VoiceCultureCard />

        {/* Ear Training */}
        <EarTrainingCard />
      </div>
    </section>
  );
};

export default CoursesSection;

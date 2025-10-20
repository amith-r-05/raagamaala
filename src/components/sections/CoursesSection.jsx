import {
  RiMusic2Line,
  RiMicLine,
  RiVolumeUpLine,
  RiEqualizerLine,
} from "react-icons/ri";

import ClassicalMusicCard from "../generated/ClassicalMusicCard";
import LightMusicCard from "../generated/LightMusicCard";
import VoiceCultureCard from "../generated/VoiceCultureCard";

// Data arrays outside component for optimization

const EAR_TRAINING_TAGS = [
  "Interval Recognition",
  "Pitch Accuracy",
  "Rhythm Training",
  "Chord Identification",
];

const FREQUENCY_BARS = [8, 12, 16, 20, 16, 12, 8];

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
        <div className="mb-20">
          <div className="section-divider mb-12"></div>
          <div className="mb-8">
            <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-2">
              EAR TRAINING
            </p>
            <h3 className="font-['Space_Grotesk'] text-3xl font-bold text-gray-900">
              Auditory Excellence
            </h3>
          </div>
          <div className="card-texture p-12 rounded-xl shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="font-['Space_Grotesk'] text-2xl font-semibold text-gray-900 mb-4">
                  Master Note Recognition
                </h4>
                <p className="text-gray-600 mb-6 text-lg">
                  Develop your ability to identify notes and intervals across
                  all musical styles—classical, light, and film music. Our
                  comprehensive ear training program enhances your musical
                  perception and accuracy.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {EAR_TRAINING_TAGS.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-2xl text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="px-8 py-4 bg-secondary text-white hover:cursor-pointer rounded-2xl hover:bg-secondary/90 transition-all duration-200 whitespace-nowrap">
                  Start Training
                </button>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <RiEqualizerLine className="text-3xl text-primary" />
                    </div>
                    <div className="flex justify-center space-x-2 mb-4">
                      {(() => {
                        const min = Math.min(...FREQUENCY_BARS);
                        const max = Math.max(...FREQUENCY_BARS);
                        return FREQUENCY_BARS.map((h, idx) => {
                          const intensity =
                            max === min
                              ? 1
                              : 0.3 + 0.7 * ((h - min) / (max - min));
                          return (
                            <div
                              key={idx}
                              className="w-2 rounded-full"
                              style={{
                                height: `${h * 4}px`,
                                backgroundColor: `rgba(67,56,202,${intensity.toFixed(
                                  2
                                )})`,
                              }}
                            ></div>
                          );
                        });
                      })()}
                    </div>
                    <p className="text-sm text-gray-500">
                      Interactive Frequency Visualization
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;

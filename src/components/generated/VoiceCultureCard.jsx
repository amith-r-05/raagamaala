import { RiMusic2Line, RiMicLine, RiVolumeUpLine } from "react-icons/ri";

const VOICE_CULTURE = [
  {
    title: "Carnatic Voice Culture",
    icon: <RiMusic2Line className="text-primary text-2xl" />,
    desc: "Vocal techniques, breathing, tone quality, and resonance tailored to South Indian classical tradition.",
  },
  {
    title: "Hindustani Voice Culture",
    icon: <RiMicLine className="text-primary text-2xl" />,
    desc: "Breathing techniques and vocal control methods specific to North Indian classical music tradition.",
  },
  {
    title: "Western Voice Culture",
    icon: <RiVolumeUpLine className="text-primary text-2xl" />,
    desc: "European vocal techniques focusing on projection, articulation, and classical voice development.",
  },
];

const VoiceCultureCard = () => {
  return (
    <div className="mb-20">
      <div className="section-divider mb-12"></div>
      <div className="mb-8">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
          VOICE CULTURE
        </p>
        <h3 className="font-['Space_Grotesk'] text-3xl font-bold text-gray-900">
          Technical Mastery
        </h3>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {VOICE_CULTURE.map((item, idx) => (
          <div
            key={idx}
            className="card-texture p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h4 className="font-['Space_Grotesk'] text-xl font-semibold text-gray-900 mb-3">
              {item.title}
            </h4>
            <p className="text-gray-600 mb-4">{item.desc}</p>
            <button className="px-6 py-3 bg-primary text-white rounded-2xl hover:cursor-pointer hover:bg-primary/90 transition-all duration-200 whitespace-nowrap">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoiceCultureCard;

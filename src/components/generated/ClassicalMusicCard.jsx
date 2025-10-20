import carnaticClassicalImg from "../../assets/images/classical-music/carnatic_classical_card_img.jpg";
import hindustaniClassicalImg from "../../assets/images/classical-music/hindustani_classical_card_img.jpg";
import westernClassicalImg from "../../assets/images/classical-music/western_classical_card_img.jpg";

const CLASSICAL_COURSES = [
  {
    title: "Carnatic Classical",
    description:
      "Deep theory, historical evolution, and contemporary techniques rooted in South Indian classical tradition.",
    img: carnaticClassicalImg,
  },
  {
    title: "Hindustani Classical",
    description:
      "Raga structure, voice techniques, and performance styles from North Indian classical tradition.",
    img: hindustaniClassicalImg,
  },
  {
    title: "Western Classical",
    description:
      "Notation, voice modulation, and harmonic understanding in European classical tradition.",
    img: westernClassicalImg,
  },
];

const ClassicalMusicCard = () => {
  return (
    <div className="mb-20">
      <div className="section-divider mb-12"></div>
      <div className="mb-8">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
          CLASSICAL MUSIC
        </p>
        <h3 className="font-['Space_Grotesk'] text-3xl font-bold text-gray-900">
          Traditional Excellence
        </h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CLASSICAL_COURSES.map((course, idx) => (
          <div
            key={idx}
            className="card-texture p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h4 className="font-['Space_Grotesk'] text-xl font-semibold text-gray-900 mb-3">
              {course.title}
            </h4>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <button className="w-full px-6 py-3 bg-primary text-white hover:cursor-pointer rounded-2xl hover:bg-primary/90 transition-all duration-200">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassicalMusicCard;

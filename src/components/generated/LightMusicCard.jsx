import carnaticLightImg from "../../assets/images/light-music/carnatic_light_card_img.jpg";
import hindustaniLightImg from "../../assets/images/light-music/hindustani_light_card_img.jpg";
import uttarNaadImg from "../../assets/images/light-music/uttar_naad_card_img.jpg";
import dakshinaNaadaImg from "../../assets/images/light-music/dakshina_naada_card_img.jpg";

const LIGHT_COURSES = [
  {
    title: "Carnatic Light",
    description:
      "Light melody with classical touches from South Indian tradition.",
    img: carnaticLightImg,
  },
  {
    title: "Hindustani Light",
    description:
      "Contemporary melodies rooted in North Indian classical foundation.",
    img: hindustaniLightImg,
  },
  {
    title: "Uttar Naad",
    description:
      "Popular Bollywood melodies and contemporary Indian cinema music.",
    img: uttarNaadImg,
  },
  {
    title: "Dakshina Naada",
    description:
      "Popular South Indian cinema melodies with rich classical touch.",
    img: dakshinaNaadaImg,
  },
];

const LightMusicCard = () => {
  return (
    <div className="mb-20">
      <div className="section-divider mb-12"></div>
      <div className="mb-8">
        <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-2">
          LIGHT MUSIC
        </p>
        <h3 className="font-['Space_Grotesk'] text-3xl font-bold text-gray-900">
          Versatile Expression
        </h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {LIGHT_COURSES.map((course, idx) => (
          <div
            key={idx}
            className="card-texture p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h4 className="font-['Space_Grotesk'] text-lg font-semibold text-gray-900 mb-2">
              {course.title}
            </h4>
            <p className="text-gray-600 text-sm mb-4">{course.description}</p>
            <button className="w-full px-4 py-2 border border-primary text-primary hover:cursor-pointer rounded-2xl hover:bg-primary hover:text-white transition-all duration-200 text-sm">
              Enroll
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LightMusicCard;

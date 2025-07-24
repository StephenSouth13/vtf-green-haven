import { Card, CardContent } from "@/components/ui/card";
import tourismExperience from "@/assets/tourism-experience.jpg";
import musicEvent from "@/assets/music.png";
import workshopImage from "@/assets/2.png"; 
import cafe from "@/assets/cafe.png";
import env from "@/assets/env.png"; // Assuming env is an image related to the environment




const experiences = [
  {

    image: musicEvent,

    title: "Đêm nhạc cuối tuần",
    description: "Trải nghiệm những thanh âm cung bậc cảm xúc"
  },

  {
    image: workshopImage ,




    title: "Workshop Cafe Specialty",
    description: "View chụp hình cực chất",


  },

  {

    image: cafe,



    title: "Coffee Sáng",
    description: "Mùi hương cà phê thơm lừng",


  },

  {

    image: env,
    title: "Không gian xanh",
    description: "Tận hưởng không gian xanh mát, gần gũi với thiên nhiên",
  }
];

const ExperienceGallery = () => {
  return (
    <section className="vtf-section">
      <div className="vtf-container">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="vtf-heading">Ảnh Thực Tế Trải Nghiệm</h2>
          <p className="vtf-subheading">
            Những khoảnh khắc đáng nhớ từ các chuyến đi và hoạt động tại VTF Home
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((experience, index) => (
            <Card 
              key={index} 
              className="vtf-card border-0 overflow-hidden group cursor-pointer"
            >
              <CardContent className="p-0 relative">
                <div className="relative overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                    {experience.title}
                  </h3>
                  <p className="text-sm opacity-90">
                    {experience.description}
                  </p>
                </div>
                
                {/* Hover Overlay 
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-primary font-semibold">Xem Chi Tiết</span>
                  </div>
                </div>*/}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceGallery;

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, TrendingUp, Heart, Sparkles, Target } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Users, number: "50K+", label: "Followers", color: "purple" },
    { icon: Award, number: "100+", label: "Projets réalisés", color: "pink" },
    { icon: TrendingUp, number: "50+", label: "Marques partenaires", color: "indigo" },
    { icon: Heart, number: "98%", label: "Clients satisfaits", color: "rose" }
  ];

  const values = [
    {
      icon: Sparkles,
      title: "Créativité",
      description: "Chaque projet est unique et mérite une approche créative sur-mesure."
    },
    {
      icon: Target,
      title: "Résultats",
      description: "Je mise sur des contenus qui convertissent et génèrent de l'engagement."
    },
    {
      icon: Heart,
      title: "Authenticité",
      description: "Des collaborations sincères pour créer du contenu qui résonne."
    }
  ];

  const getStatColor = (color: string) => {
    switch (color) {
      case "purple": return "text-purple-600 bg-purple-50";
      case "pink": return "text-pink-600 bg-pink-50";
      case "indigo": return "text-indigo-600 bg-indigo-50";
      case "rose": return "text-rose-600 bg-rose-50";
      default: return "text-purple-600 bg-purple-50";
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full text-purple-700 font-medium">
                <Heart className="w-4 h-4" />
                <span>À propos</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Salut, moi c'est
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
                  Army Winner
                </span>
              </h2>
              
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Passionnée par l'univers digital depuis plus de 5 ans, j'ai transformé ma passion 
                  pour la création de contenu en une expertise reconnue dans le domaine de l'influence 
                  et du community management.
                </p>
                <p>
                  Mon parcours m'a menée de créatrice de contenu à entrepreneure digitale, 
                  en passant par collaboratrice de marques prestigieuses. Aujourd'hui, je mets 
                  cette expérience au service de vos projets.
                </p>
                <p>
                  Ma mission ? Vous aider à créer une présence digitale authentique et impactante 
                  qui résonne avec votre audience et génère des résultats concrets.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mes valeurs</h3>
              <div className="space-y-4">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{value.title}</h4>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full font-medium transition-all duration-300 hover:scale-105">
              Travaillons ensemble
            </Button>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Profile Card */}
            <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-0">
              <CardContent className="p-0 text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      AW
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Army Winner</h3>
                <p className="text-purple-600 font-medium mb-4">Créatrice de contenu & Influenceuse</p>
                <div className="flex justify-center space-x-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "Créer du contenu qui inspire et connecte les communautés"
                </p>
              </CardContent>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className={`w-12 h-12 ${getStatColor(stat.color)} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                        <Icon className={`w-6 h-6 ${getStatColor(stat.color).split(' ')[0]}`} />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


import { Button } from "@/components/ui/button";
import { Camera, Users, TrendingUp, Star } from "lucide-react";

const HeroSection = () => {
  const handleReservationClick = () => {
    window.open("https://wa.me/24174559869?text=Bonjour Army Winner, je souhaiterais réserver une session photo/vidéo. Pouvez-vous me donner plus d'informations sur vos services ?", "_blank");
  };

  const handlePortfolioClick = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full text-purple-700 font-medium">
              <Star className="w-4 h-4" />
              <span>Créatrice de contenu #1</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Donnez vie à votre
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
                image digitale
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Je suis Army Winner, créatrice de contenu visuel, community manager et influenceuse. 
              Je vous aide à booster votre présence digitale avec du contenu qui convertit.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 py-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">500K+</div>
                <div className="text-gray-600">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">100+</div>
                <div className="text-gray-600">Projets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">50+</div>
                <div className="text-gray-600">Marques</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleReservationClick}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                Réservez votre session
              </Button>
              <Button 
                variant="outline" 
                onClick={handlePortfolioClick}
                className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg rounded-full font-medium"
              >
                Voir le portfolio
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image with real photo */}
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="/lovable-uploads/44ce81bc-6107-4f20-9f21-d2fa9601b62b.png"
                  alt="Army Winner - Créatrice de contenu"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-pink-600/20"></div>
                
                {/* Floating stats card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Army Winner</h3>
                      <p className="text-gray-600 text-sm">Créatrice de contenu visuel</p>
                    </div>
                    <div className="flex space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-6 mt-3 pt-3 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-sm font-bold text-purple-600">2.3M</div>
                      <div className="text-xs text-gray-500">Vues</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-pink-600">125K</div>
                      <div className="text-xs text-gray-500">Likes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-purple-600">50+</div>
                      <div className="text-xs text-gray-500">Marques</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-200 rounded-full opacity-60 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

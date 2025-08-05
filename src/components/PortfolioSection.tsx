
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, ExternalLink, Play, Image, Video, Zap } from "lucide-react";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleViewAllProjects = () => {
    window.open("https://wa.me/24174559869?text=Bonjour Army Winner, j'aimerais voir tous vos projets et discuter d'une éventuelle collaboration.", "_blank");
  };

  const filters = [
    { id: "all", label: "Tous", icon: Zap },
    { id: "photo", label: "Photos", icon: Image },
    { id: "video", label: "Vidéos", icon: Video },
    { id: "reels", label: "Réels", icon: Play }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Portrait Créatif - Style Moderne",
      category: "photo",
      type: "Photo Portrait",
      image: "/lovable-uploads/44ce81bc-6107-4f20-9f21-d2fa9601b62b.png",
      likes: "125K",
      views: "2.3M"
    },
    {
      id: 2,
      title: "Campagne Beauté - Produit Naturel",
      category: "photo",
      type: "Photo Produit",
      image: "/lovable-uploads/aa5d58bb-0814-4160-91b2-f8216e441e92.png",
      likes: "89K",
      views: "1.8M"
    },
    {
      id: 3,
      title: "Shooting Pride - Message Inclusif",
      category: "photo",
      type: "Photo Événement",
      image: "/lovable-uploads/d096fbca-0233-43fe-86ee-8a97c2d8840e.png",
      likes: "67K",
      views: "950K"
    },
    {
      id: 4,
      title: "Portrait Nature - Lifestyle",
      category: "photo",
      type: "Photo Lifestyle",
      image: "/lovable-uploads/4660981e-14b2-4983-95b8-8d9c9fc5c73b.png",
      likes: "234K",
      views: "3.1M"
    },
    {
      id: 5,
      title: "Session Studio - Équipement Pro",
      category: "video",
      type: "Behind The Scenes",
      image: "/lovable-uploads/17ffb9c1-8fb1-4900-bc87-6d52e884371c.png",
      likes: "156K",
      views: "2.7M"
    },
    {
      id: 6,
      title: "Portrait Corporate - Professionnel",
      category: "photo",
      type: "Photo Corporate",
      image: "/lovable-uploads/1a557806-4507-439f-a1f7-055abba73e53.png",
      likes: "98K",
      views: "1.5M"
    },
    {
      id: 7,
      title: "Shooting Culturel - Patrimoine",
      category: "photo",
      type: "Photo Artistique",
      image: "/lovable-uploads/da8c621c-0f8e-41bd-baf3-059567bfddef.png",
      likes: "298K",
      views: "4.2M"
    }
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full text-purple-700 font-medium mb-4">
            <Eye className="w-4 h-4" />
            <span>Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Mes créations qui
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
              font sensation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez une sélection de mes projets les plus impactants, 
            des campagnes qui ont généré des millions de vues aux collaborations marquantes.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <Button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90"
                    : "border-purple-200 text-purple-600 hover:bg-purple-50"
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {filter.label}
              </Button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {item.views}
                        </span>
                        <span className="flex items-center">
                          ❤️ {item.likes}
                        </span>
                      </div>
                      <Button 
                        size="sm" 
                        onClick={handleViewAllProjects}
                        className="bg-white/20 backdrop-blur-sm border-white/20 text-white hover:bg-white/30"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.type}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-gray-600">
                  <span className="text-sm">{item.type}</span>
                  <div className="flex items-center space-x-2 text-sm">
                    <span>{item.views} vues</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Vous voulez des résultats similaires pour votre marque ?
          </p>
          <Button 
            onClick={handleViewAllProjects}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            Voir tous mes projets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

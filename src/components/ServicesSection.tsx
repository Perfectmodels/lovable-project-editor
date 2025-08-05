
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Users, TrendingUp, Sparkles, DollarSign } from "lucide-react";
import QuoteForm from "./QuoteForm";
import PricingModal from "./PricingModal";

const ServicesSection = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [pricingModalOpen, setPricingModalOpen] = useState(false);

  const handleQuoteRequest = (serviceType: string) => {
    setSelectedService(serviceType);
    setQuoteModalOpen(true);
  };

  const handleCallRequest = () => {
    window.open("https://wa.me/24174559869?text=Bonjour Army Winner, je souhaiterais réserver un appel gratuit pour discuter de mon projet digital.", "_blank");
  };

  const handlePricingRequest = () => {
    setPricingModalOpen(true);
  };

  const services = [
    {
      icon: Camera,
      title: "Création de contenu visuel",
      description: "Shootings photo/vidéo professionnels, création de réels & stories qui marquent",
      features: [
        "Shooting photo & vidéo",
        "Montage créatif",
        "Réels Instagram & TikTok",
        "Stories engageantes"
      ],
      color: "purple",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Gestion complète de vos réseaux sociaux pour une communauté engagée",
      features: [
        "Gestion réseaux sociaux",
        "Calendrier éditorial",
        "Animation communauté",
        "Modération & support"
      ],
      color: "pink",
      gradient: "from-pink-500 to-pink-600"
    },
    {
      icon: TrendingUp,
      title: "Influence & Partenariats",
      description: "Collaborations authentiques pour amplifier votre marque",
      features: [
        "Contenu sponsorisé",
        "Partenariats marques",
        "Événementiel digital",
        "Stratégie d'influence"
      ],
      color: "indigo",
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  const getIconColor = (color: string) => {
    switch (color) {
      case "purple": return "text-purple-600";
      case "pink": return "text-pink-600";
      case "indigo": return "text-indigo-600";
      default: return "text-purple-600";
    }
  };

  const getBgColor = (color: string) => {
    switch (color) {
      case "purple": return "bg-purple-50";
      case "pink": return "bg-pink-50";
      case "indigo": return "bg-indigo-50";
      default: return "bg-purple-50";
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full text-purple-700 font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Mes Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Des solutions créatives pour
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
              votre succès digital
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De la création de contenu viral à la gestion complète de votre présence en ligne, 
            je vous accompagne à chaque étape de votre transformation digitale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${getBgColor(service.color)} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${getIconColor(service.color)}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => handleQuoteRequest(service.title)}
                    className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white rounded-full mt-6 transition-all duration-300 hover:scale-105`}
                  >
                    Demander un devis
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Prêt(e) à transformer votre présence digitale ?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Réservons un appel pour discuter de votre projet et définir la stratégie parfaite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleCallRequest}
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              Réserver un appel gratuit
            </Button>
            <Button 
              onClick={handlePricingRequest}
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <DollarSign className="w-5 h-5" />
              Voir mes tarifs
            </Button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <QuoteForm 
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        serviceType={selectedService}
      />
      
      <PricingModal 
        isOpen={pricingModalOpen}
        onClose={() => setPricingModalOpen(false)}
      />
    </section>
  );
};

export default ServicesSection;

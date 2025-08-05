
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PricingModal = ({ isOpen, onClose }: PricingModalProps) => {
  const handleContactForPricing = () => {
    const message = "Bonjour Army Winner, j'aimerais en savoir plus sur vos tarifs et discuter de mon projet.";
    window.open(`https://wa.me/24174559869?text=${encodeURIComponent(message)}`, "_blank");
  };

  const pricingPlans = [
    {
      title: "Création de contenu",
      description: "Photos et vidéos professionnelles",
      basePrice: "À partir de 50 000",
      currency: "FCFA",
      features: [
        "Shooting photo (1-2h)",
        "5-10 photos retouchées",
        "2-3 réels/stories",
        "Livraison sous 48h"
      ],
      popular: false,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Community Management",
      description: "Gestion complète de vos réseaux",
      basePrice: "À partir de 150 000",
      currency: "FCFA/mois",
      features: [
        "Gestion 2-3 réseaux sociaux",
        "15 publications/mois",
        "Stories quotidiennes",
        "Réponses aux messages",
        "Rapport mensuel"
      ],
      popular: true,
      gradient: "from-pink-500 to-pink-600"
    },
    {
      title: "Influence & Partenariats",
      description: "Collaborations et promotion",
      basePrice: "Sur devis",
      currency: "",
      features: [
        "Contenu sponsorisé",
        "Partenariats marques",
        "Événements digitaux",
        "Stratégie d'influence",
        "Suivi ROI"
      ],
      popular: false,
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center">
          <DialogTitle className="text-3xl font-bold text-gray-900">
            Mes Tarifs
          </DialogTitle>
          <DialogDescription className="text-lg">
            Des tarifs transparents adaptés à vos besoins
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-2 border-pink-500 shadow-lg scale-105' : 'border border-gray-200'}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Populaire
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-gray-900">
                  {plan.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                    {plan.basePrice}
                  </div>
                  {plan.currency && (
                    <div className="text-gray-500 text-sm">{plan.currency}</div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={handleContactForPricing}
                  className={`w-full bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white rounded-full`}
                >
                  Demander un devis
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Besoin d'un devis personnalisé ?
          </h3>
          <p className="text-gray-600 mb-4">
            Chaque projet est unique. Contactez-moi pour un devis adapté à vos besoins spécifiques.
          </p>
          <Button 
            onClick={handleContactForPricing}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full"
          >
            Discutons de votre projet
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PricingModal;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

interface QuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: string;
}

const QuoteForm = ({ isOpen, onClose, serviceType }: QuoteFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `🎯 DEMANDE DE DEVIS - ${serviceType.toUpperCase()}

👤 INFORMATIONS CLIENT :
• Nom : ${formData.name}
• Email : ${formData.email}
• Téléphone : ${formData.phone}
• Entreprise : ${formData.company || "Non renseigné"}

📋 DÉTAILS DU PROJET :
• Service demandé : ${serviceType}
• Type de projet : ${formData.projectType}
• Budget indicatif : ${formData.budget}
• Délai souhaité : ${formData.timeline}

📝 DESCRIPTION :
${formData.description}

Merci de me recontacter pour discuter de ce projet !`;

    const whatsappUrl = `https://wa.me/24174559869?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    // Reset form and close modal
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: ""
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Demande de devis
          </DialogTitle>
          <DialogDescription>
            {serviceType}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Nom complet *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Votre nom"
              />
            </div>
            <div>
              <Label htmlFor="phone">Téléphone *</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="+241..."
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="votre@email.com"
            />
          </div>
          
          <div>
            <Label htmlFor="company">Entreprise</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Nom de votre entreprise"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="projectType">Type de projet</Label>
              <Input
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                placeholder="Ex: Shooting produit"
              />
            </div>
            <div>
              <Label htmlFor="budget">Budget (FCFA)</Label>
              <Input
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                placeholder="Ex: 100 000 FCFA"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="timeline">Délai souhaité</Label>
            <Input
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              placeholder="Ex: Dans 2 semaines"
            />
          </div>
          
          <div>
            <Label htmlFor="description">Description du projet *</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              placeholder="Décrivez votre projet en détail..."
              rows={3}
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Annuler
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Envoyer via WhatsApp
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteForm;

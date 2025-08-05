
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Instagram, MessageCircle, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value: string, field: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Créer le message WhatsApp avec les informations du formulaire
    const whatsappMessage = `Bonjour Army Winner,

Voici ma demande de projet :

👤 Nom: ${formData.name}
📧 Email: ${formData.email}
🎯 Type de projet: ${formData.project}
💰 Budget: ${formData.budget}

📝 Message:
${formData.message}

Pouvez-vous me recontacter pour discuter de ce projet ?`;

    // Ouvrir WhatsApp avec le message pré-rempli
    window.open(`https://wa.me/24174559869?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
    
    toast({
      title: "Message envoyé !",
      description: "Vous allez être redirigé vers WhatsApp pour finaliser l'envoi.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      project: "",
      budget: "",
      message: ""
    });
  };

  const handleQuickCall = () => {
    window.open("https://wa.me/24174559869?text=Bonjour Army Winner, je souhaiterais réserver un appel gratuit de 30 minutes pour discuter de mon projet.", "_blank");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@armywinner.com",
      action: "mailto:hello@armywinner.com"
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@armywinner",
      action: "https://instagram.com/armywinner"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+241 74 55 98 69",
      action: "https://wa.me/24174559869"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full text-purple-700 font-medium mb-4">
            <Send className="w-4 h-4" />
            <span>Contact</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Démarrons votre projet
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
              ensemble
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vous avez un projet en tête ? Parlons-en ! Je vous accompagne de l'idée à la réalisation 
            pour créer du contenu qui fait la différence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Parlez-moi de votre projet
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Nom complet *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Votre nom"
                        required
                        className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="votre@email.com"
                        required
                        className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Type de projet *</label>
                      <Select onValueChange={(value) => handleSelectChange(value, "project")}>
                        <SelectTrigger className="border-gray-300 focus:border-purple-500 focus:ring-purple-500">
                          <SelectValue placeholder="Sélectionnez votre projet" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="content">Création de contenu</SelectItem>
                          <SelectItem value="community">Community Management</SelectItem>
                          <SelectItem value="influence">Partenariat Influence</SelectItem>
                          <SelectItem value="consulting">Consulting Digital</SelectItem>
                          <SelectItem value="other">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Budget estimé</label>
                      <Select onValueChange={(value) => handleSelectChange(value, "budget")}>
                        <SelectTrigger className="border-gray-300 focus:border-purple-500 focus:ring-purple-500">
                          <SelectValue placeholder="Budget approximatif" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1k-5k">1K - 5K €</SelectItem>
                          <SelectItem value="5k-10k">5K - 10K €</SelectItem>
                          <SelectItem value="10k-25k">10K - 25K €</SelectItem>
                          <SelectItem value="25k+">25K+ €</SelectItem>
                          <SelectItem value="discuss">À discuter</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez-moi votre projet, vos objectifs et vos attentes..."
                      rows={6}
                      required
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 text-lg rounded-full font-medium transition-all duration-300 hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer ma demande
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Contact direct
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.action}
                      target={info.action.startsWith('http') ? '_blank' : '_self'}
                      rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{info.title}</div>
                        <div className="text-purple-600">{info.value}</div>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="border-0 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Besoin d'une réponse rapide ?
                </h3>
                <p className="mb-6 opacity-90">
                  Réservez directement un appel de 30 minutes pour discuter de votre projet.
                </p>
                <Button 
                  onClick={handleQuickCall}
                  className="bg-white text-purple-600 hover:bg-gray-100 w-full py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                >
                  Réserver un appel gratuit
                </Button>
              </CardContent>
            </Card>

            {/* Response Time */}
            <div className="text-center p-6 bg-white rounded-xl border border-purple-100">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-bold text-gray-900 mb-1">Réponse garantie</div>
              <div className="text-sm text-gray-600">sous 24h maximum</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

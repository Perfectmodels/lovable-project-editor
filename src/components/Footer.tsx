
import { Instagram, Youtube, Music, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/armywinner", followers: "500K" },
    { name: "TikTok", icon: Music, url: "https://tiktok.com/@armywinner", followers: "200K" },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com/@armywinner", followers: "100K" },
    { name: "Email", icon: Mail, url: "mailto:hello@armywinner.com", followers: "Contact" }
  ];

  const quickLinks = [
    { name: "Accueil", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "À propos", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Création de contenu",
    "Community Management",
    "Partenariats Influence",
    "Consulting Digital"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Army Winner Studio
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Créatrice de contenu visuel, community manager et influenceuse. 
              Je transforme votre présence digitale en succès authentique.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Créé avec</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>à Paris</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-moi</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors duration-200 group"
                  >
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-200">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium">{social.name}</div>
                      <div className="text-xs text-gray-500">{social.followers}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Newsletter */}
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl border border-purple-800/30">
              <h5 className="font-semibold mb-2">Newsletter</h5>
              <p className="text-sm text-gray-400 mb-3">
                Recevez mes tips pour briller en ligne 🌟
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm focus:outline-none focus:border-purple-500"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-r-lg hover:opacity-90 transition-opacity">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 Army Winner Studio. Tous droits réservés.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-purple-400 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-purple-400 transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

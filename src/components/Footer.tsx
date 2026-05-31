import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <span className="text-2xl font-black tracking-tighter text-primary">
              FLEXFIT<span className="text-charcoal">GYM</span>
            </span>
            <p className="text-gray-500 leading-relaxed">
              Empowering our community to lead healthier, stronger lives through expert coaching and premium facilities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-light p-3 rounded-full text-charcoal hover:bg-primary hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-light p-3 rounded-full text-charcoal hover:bg-primary hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-light p-3 rounded-full text-charcoal hover:bg-primary hover:text-white transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-light p-3 rounded-full text-charcoal hover:bg-primary hover:text-white transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-charcoal mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-500 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#programs" className="text-gray-500 hover:text-primary transition-colors">Programs</a></li>
              <li><a href="#pricing" className="text-gray-500 hover:text-primary transition-colors">Membership</a></li>
              <li><a href="#trainers" className="text-gray-500 hover:text-primary transition-colors">Our Trainers</a></li>
              <li><a href="#gallery" className="text-gray-500 hover:text-primary transition-colors">Gym Gallery</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold text-charcoal mb-6 uppercase tracking-wider">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Free Trial</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-charcoal mb-6 uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-500">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>123 Fitness Plaza, Health District, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-500">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span>+1 (555) 000-FITNESS</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-500">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <span>hello@flexfitgym.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center">
            &copy; {currentYear} FlexFit Gym. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

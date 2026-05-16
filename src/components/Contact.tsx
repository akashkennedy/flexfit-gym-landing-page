import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageSquare, Dumbbell } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-charcoal text-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                READY TO START YOUR <br />
                <span className="text-primary">FITNESS JOURNEY?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 max-w-lg">
                Join FlexFit Gym today and take your first step toward a healthier, stronger lifestyle. Your first trial is on us!
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-xl">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Our Location</h4>
                    <p className="text-gray-400">123 Fitness Plaza, Health District, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-xl">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                    <p className="text-gray-400">+1 (555) 000-FITNESS</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-xl">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Gym Timings</h4>
                    <p className="text-gray-400">Mon-Sun: 5:00 AM - 11:00 PM (24/7 for Premium)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 text-charcoal shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-8 text-center uppercase tracking-wider">Book Your Free Trial</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase">Full Name</label>
                  <input type="text" className="w-full bg-light border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase">Email Address</label>
                  <input type="email" className="w-full bg-light border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase">Phone Number</label>
                <input type="tel" className="w-full bg-light border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="+1 (555) 000-0000" />
              </div>
              <button type="submit" className="w-full bg-primary text-white py-5 rounded-xl font-black text-lg shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all transform hover:-translate-y-1 active:scale-95">
                GET FREE TRIAL NOW
              </button>
              
              <div className="flex items-center justify-center pt-4">
                <button type="button" className="flex items-center space-x-2 text-green-600 font-bold hover:text-green-700 transition-colors">
                  <MessageSquare size={20} />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute bottom-0 right-0 opacity-10 -z-0">
        <Dumbbell className="w-[400px] h-[400px] text-white rotate-12 translate-x-1/4 translate-y-1/4" />
      </div>
    </section>
  );
};

export default Contact;

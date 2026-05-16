import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const trainers = [
  {
    name: 'Alex Johnson',
    role: 'Head Strength Coach',
    experience: '10+ Years',
    image: '/trainer1.png',
  },
  {
    name: 'Sarah Smith',
    role: 'Cardio & HIIT Specialist',
    experience: '7+ Years',
    image: '/trainer2.png',
  },
  {
    name: 'Mike Ross',
    role: 'Nutrition & Wellness',
    experience: '5+ Years',
    image: '/trainer1.png', // Reuse or add another
  },
];

const Trainers = () => {
  return (
    <section id="trainers" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-4">MEET OUR EXPERTS</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Our certified trainers are here to guide, motivate, and help you achieve your fitness milestones safely.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-lg">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <div className="flex space-x-4">
                    <a href="#" className="bg-white/20 hover:bg-primary p-2 rounded-full backdrop-blur-md transition-colors">
                      <Instagram size={20} className="text-white" />
                    </a>
                    <a href="#" className="bg-white/20 hover:bg-primary p-2 rounded-full backdrop-blur-md transition-colors">
                      <Twitter size={20} className="text-white" />
                    </a>
                    <a href="#" className="bg-white/20 hover:bg-primary p-2 rounded-full backdrop-blur-md transition-colors">
                      <Linkedin size={20} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-charcoal mb-1">{trainer.name}</h3>
                <p className="text-primary font-semibold mb-2">{trainer.role}</p>
                <p className="text-gray-400 text-sm font-medium">{trainer.experience} Experience</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;

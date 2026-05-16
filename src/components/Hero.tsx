import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>Now Accepting New Members</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-charcoal leading-tight mb-6">
            YOUR FITNESS <br />
            <span className="text-primary">JOURNEY STARTS</span> <br />
            HERE
          </h1>
          
          <p className="text-lg text-gray-600 mb-10 max-w-lg">
            Build strength, improve health, and achieve your goals with expert trainers and a supportive fitness community.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <button className="btn-primary text-lg px-8">
              Book Free Trial
            </button>
            <button className="btn-secondary text-lg px-8">
              View Memberships
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-gray-100">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-charcoal">500+</span>
              <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Members</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-charcoal">15+</span>
              <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Trainers</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-charcoal">24/7</span>
              <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Access</span>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/modern_gym_hero_1778960518634.png" 
              alt="Modern FlexFit Gym Interior" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent"></div>
          </div>
          
          {/* Floating trust badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center space-x-3"
          >
            <div className="bg-primary/10 p-2 rounded-full">
              <CheckCircle2 className="text-primary" size={24} />
            </div>
            <div>
              <p className="font-bold text-charcoal">Certified Gym</p>
              <p className="text-xs text-gray-500">Premium Standards</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-0 opacity-10 pointer-events-none">
        <div className="w-[500px] h-[500px] bg-primary rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Award, Calendar } from 'lucide-react';

const stories = [
  {
    name: 'David Miller',
    result: 'Lost 12kg in 4 months',
    story: 'FlexFit completely changed my lifestyle. The trainers kept me motivated when I wanted to quit.',
    achievement: 'Weight Loss',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=60',
  },
  {
    name: 'Emma Wilson',
    result: 'Gained strength in 8 weeks',
    story: 'I never thought I could lift these weights. The community here is so supportive and encouraging.',
    achievement: 'Strength Gain',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c64b591d?w=800&auto=format&fit=crop&q=60',
  },
];

const SuccessStories = () => {
  return (
    <section className="section-padding bg-light overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-4">SUCCESS STORIES</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Real people, real results. Our members are the heart of FlexFit Gym.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col md:flex-row"
            >
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {story.achievement}
                </div>
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-2 text-primary mb-4">
                  <TrendingUp size={20} />
                  <span className="font-bold uppercase tracking-wide text-sm">{story.result}</span>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">"{story.name}"</h3>
                <p className="text-gray-500 italic mb-6 leading-relaxed">
                  {story.story}
                </p>
                <div className="flex items-center text-gray-400 text-sm">
                  <Award size={16} className="mr-2" />
                  <span>Verified Transformation</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;

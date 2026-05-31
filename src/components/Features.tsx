import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Award, Users, Calendar, Target } from 'lucide-react';

const features = [
  {
    title: 'Certified Trainers',
    description: 'Our trainers are industry-certified professionals dedicated to your success.',
    icon: Award,
  },
  {
    title: 'Affordable Memberships',
    description: 'High-quality fitness doesn\'t have to break the bank. Flexible plans for everyone.',
    icon: ShieldCheck,
  },
  {
    title: 'Modern Equipment',
    description: 'Access state-of-the-art machines and free weights for every workout style.',
    icon: Zap,
  },
  {
    title: 'Friendly Community',
    description: 'Train in a supportive environment where everyone knows your name.',
    icon: Users,
  },
  {
    title: 'Flexible Timings',
    description: 'Open early and late to fit your busy schedule. Workout on your terms.',
    icon: Calendar,
  },
  {
    title: 'Personalized Guidance',
    description: 'Get custom workout plans and nutrition advice tailored to your goals.',
    icon: Target,
  },
];

const Features = () => {
  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-4">WHY JOIN FLEXFIT?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We provide everything you need to reach your fitness peak in a professional and motivating environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-primary/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <feature.icon size={28} className="text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

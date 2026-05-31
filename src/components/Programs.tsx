import { motion } from 'framer-motion';
import { Dumbbell, Activity, User, Layers, Users, Target } from 'lucide-react';

const programs = [
  {
    title: 'Strength Training',
    description: 'Build muscle and increase your power with guided lifting sessions.',
    icon: Dumbbell,
  },
  {
    title: 'Weight Loss Program',
    description: 'Tailored workouts and diet plans to help you shed those extra pounds.',
    icon: Target,
  },
  {
    title: 'Cardio Fitness',
    description: 'High-intensity sessions designed to improve your heart health and stamina.',
    icon: Activity,
  },
  {
    title: 'Personal Training',
    description: 'One-on-one sessions with our expert trainers for maximum results.',
    icon: User,
  },
  {
    title: 'Functional Training',
    description: 'Workouts that improve your everyday movement and overall agility.',
    icon: Layers,
  },
  {
    title: 'Group Classes',
    description: 'Join our community in energetic classes like Yoga, HIIT, and Zumba.',
    icon: Users,
  },
];

const Programs = () => {
  return (
    <section id="programs" className="section-padding bg-light">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-4">OUR PROGRAMS</h2>
            <p className="text-gray-500 max-w-xl">
              From beginners to pro athletes, we have the perfect program to help you reach your peak performance.
            </p>
          </div>
          <button className="btn-secondary whitespace-nowrap">
            View Class Schedule
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-3xl border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start space-x-5">
                <div className="bg-primary/5 p-4 rounded-2xl group-hover:bg-primary transition-colors duration-300">
                  <program.icon size={28} className="text-primary group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">{program.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '999',
    features: [
      'Gym access (6am - 10pm)',
      'Basic cardio equipment',
      'Free weight area',
      'Locker room access',
    ],
    highlight: false,
  },
  {
    name: 'Standard',
    price: '1999',
    features: [
      '24/7 Gym access',
      'All group classes',
      '1 Personal training session',
      'Nutrition consultation',
      'Sauna access',
    ],
    highlight: true,
  },
  {
    name: 'Premium',
    price: '2999',
    features: [
      'All Standard features',
      'Unlimited PT sessions',
      'Customized diet plans',
      'Massage therapy',
      'Guest passes (2/month)',
    ],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-4">MEMBERSHIP PLANS</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Choose the plan that fits your lifestyle and fitness goals. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-3xl border-2 transition-all duration-300 ${
                plan.highlight 
                  ? 'border-primary shadow-2xl scale-105 z-10 bg-white' 
                  : 'border-gray-100 bg-light/50 hover:border-primary/50'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-bold py-1 px-4 rounded-full">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-charcoal mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-black text-charcoal">₹{plan.price}</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <Check size={18} className="text-primary mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                plan.highlight 
                  ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/30' 
                  : 'bg-charcoal text-white hover:bg-black'
              }`}>
                Join Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

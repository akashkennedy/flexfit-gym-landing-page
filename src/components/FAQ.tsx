import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Can beginners join?',
    answer: 'Absolutely! We welcome fitness enthusiasts of all levels. Our trainers will guide you through the basics and help you start your journey safely.',
  },
  {
    question: 'Do you offer free trials?',
    answer: 'Yes, we offer a complimentary 1-day free trial for all new visitors. You can experience our facilities and meet our team before deciding to join.',
  },
  {
    question: 'What are the timings?',
    answer: 'We are open 24/7 for Premium members. Basic and Standard members can access the gym from 5:00 AM to 11:00 PM daily.',
  },
  {
    question: 'Is personal training available?',
    answer: 'Yes, we have certified personal trainers available for one-on-one sessions. You can book them separately or choose a membership plan that includes PT sessions.',
  },
  {
    question: 'Are diet plans included?',
    answer: 'Our Standard and Premium plans include basic nutritional guidance. Personalized, detailed diet plans are part of our Premium membership or can be added separately.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-4">FREQUENTLY ASKED</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Everything you need to know about starting your journey with FlexFit Gym.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-light/50 transition-colors"
              >
                <span className="text-lg font-bold text-charcoal">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-primary" size={24} />
                ) : (
                  <ChevronDown className="text-gray-400" size={24} />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-500 leading-relaxed border-t border-gray-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

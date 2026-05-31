import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'James Rodriguez',
    role: 'Member for 2 years',
    quote: 'The best gym in the area. The equipment is always clean and the trainers actually care about your progress.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=james',
  },
  {
    name: 'Sophia Chen',
    role: 'Member for 6 months',
    quote: 'I love the group classes here! The energy is amazing and I\'ve met so many great friends.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=sophia',
  },
  {
    name: 'Marcus Thorne',
    role: 'Member for 1 year',
    quote: 'State-of-the-art facilities and a very professional atmosphere. Highly recommend for serious training.',
    rating: 4,
    image: 'https://i.pravatar.cc/150?u=marcus',
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-4">MEMBER VOICES</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our community has to say about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-orange-400 fill-orange-400 mr-1" />
                ))}
              </div>
              <Quote className="text-primary/20 mb-4" size={40} />
              <p className="text-gray-600 italic mb-8 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold text-charcoal">{t.name}</h4>
                  <p className="text-xs text-gray-400 font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

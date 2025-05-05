import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, MapPin, Phone, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/contact@amirlehmam.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.name}`,
        })
      });

      if (!response.ok) throw new Error('Failed to send message');
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
      
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <section id="contact" className="section-container bg-section-coral py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-dark-text mb-4">Get In Touch</h2>
          <p className="text-lg text-dark-text/80 max-w-2xl mx-auto">
            Looking for a data science, ML, or quantitative development expert? Let's connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-dark-text/20">
                <img 
                  src="https://i.imgur.com/cxc3SGZ.png" 
                  alt="Amir Lehmam"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-dark-text">Ready to build something amazing?</h3>
                <p className="text-dark-text/80">Let's make it happen!</p>
              </div>
            </div>
            
            <p className="text-dark-text/80 mb-8">
              Whether you're looking for a CTO, data science lead, or quantitative trading expert,
              I'm ready to bring your vision to life with cutting-edge technology and proven expertise.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-dark-text text-white rounded-full p-2">
                  <Mail size={18} />
                </div>
                <a href="mailto:contact@amirlehmam.com" className="text-dark-text hover:underline">
                  contact@amirlehmam.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-dark-text text-white rounded-full p-2">
                  <Phone size={18} />
                </div>
                <a href="tel:+33787323996" className="text-dark-text hover:underline">
                  +33 7 87 32 39 96
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-dark-text text-white rounded-full p-2">
                  <Linkedin size={18} />
                </div>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-dark-text hover:underline">
                  linkedin.com/in/amirlehmam
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-dark-text text-white rounded-full p-2">
                  <Github size={18} />
                </div>
                <a href="https://www.github.com/amirlehmam" target="_blank" rel="noopener noreferrer" className="text-dark-text hover:underline">
                  github.com/amirlehmam
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-dark-text text-white rounded-full p-2">
                  <MapPin size={18} />
                </div>
                <span className="text-dark-text">
                  Paris, France
                </span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-dark-text rounded-2xl p-8"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-white/80 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white/80 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white/80 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-white text-dark-text rounded-full py-3 px-6 font-medium hover:bg-opacity-90 transition-all hover-lift disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'loading' && <Loader2 size={18} className="animate-spin" />}
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-sm mt-2">Message sent successfully!</p>
              )}
              
              {status === 'error' && (
                <p className="text-red-400 text-sm mt-2">{errorMessage}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute top-[10%] right-[10%] -z-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        <div className="w-24 h-24 rounded-full bg-dark-text/20" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-[20%] left-[5%] -z-10"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4, delay: 1 }}
      >
        <div className="w-20 h-20 rounded-lg bg-dark-text/20" />
      </motion.div>
    </section>
  );
};

export default Contact;
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Mail, Phone, MapPin, Clock, ChevronDown, ArrowRight, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSubmittedEmail(formData.email);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to send message');
      }

      // Reset form on success
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitted(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (err) {
      console.error('Submission error:', err);
      setError(err.message || 'Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const faqItems: { question: string; answer: string }[] = [
    {
      question: "What AI safety solutions does Zeex AI offer?",
      answer: "Zeex AI provides cutting-edge AI-powered surveillance solutions that analyze real-time CCTV footage, detect threats, recognize anomalies, and send instant alerts for enhanced security."
    },
    {
      question: "How can I integrate Zeex AI's surveillance technology?",
      answer: "Zeex AI solutions are designed for seamless integration with existing CCTV systems and security infrastructures. We offer cloud-based and edge AI deployment options to suit various requirements."
    },
    {
      question: "Does Zeex AI support cloud and on-premise deployment?",
      answer: "Yes, Zeex AI supports both cloud-based processing on AWS and on-premise AI-powered edge devices, ensuring flexibility based on security and data privacy needs."
    },
    {
      question: "Can Zeex AI solutions be customized for my needs?",
      answer: "Absolutely! Zeex AI offers industry-specific AI models tailored for Home, office, Society, ATMs, banks, retail stores, warehouses, and traffic surveillance. We work closely with clients to meet their unique security challenges."
    },
    {
      question: "What are the technical requirements for integration?",
      answer: "Zeex AI's solutions are compatible with IP-based and analog CCTV systems. They require a stable network connection and, for edge AI devices, sufficient power and processing capabilities."
    }
  ];

  const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    return (
      <section className="py-16 bg-white">
        <div className="container-default">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our products and services
            </p>
          </motion.div>

          <motion.div 
            className="max-w-3xl mx-auto space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-xl border border-gray-200 hover:border-blue-200 transition-all overflow-hidden hover:shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <button 
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-gray-600">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  };

  return (
    <Layout showFooter={false}>
      {/* Hero Section with Navy Blue Background and Animation */}
<section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900 overflow-hidden opacity-0 animate-fadeIn">
  <div className="absolute inset-0 overflow-hidden z-0">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-20"></div>
  </div>
  
  <div className="container-default relative z-10 transform translate-y-4 animate-slideUp">
    <div className="flex flex-col items-center justify-center text-center h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
          Let's <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Connect</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fadeInDelay">
          Our team is ready to help you with any questions about our AI solutions.
        </p>
      </motion.div>
    </div>
  </div>

  {/* Custom Animations Defined Inline */}
  <style>{`
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideUp {
      from { transform: translateY(40px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    .animate-fadeIn {
      animation: fadeIn 1s ease-out forwards;
    }

    .animate-slideUp {
      animation: slideUp 1.2s ease-out forwards;
    }

    .animate-fadeInDelay {
      animation: fadeIn 1s ease-out 0.6s forwards;
    }
  `}</style>
</section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container-default">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Response Time</h4>
                      <p className="text-gray-600">Typically replies within 2 business hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MessageSquare className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Pre-sales Questions?</h4>
                      <p className="text-gray-600">Contact our sales team at admin@zeexai.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center text-center p-8 bg-gray-50 rounded-lg"
                >
                  <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for contacting us. Our team will get back to you shortly at{' '}
                    <span className="font-semibold text-blue-600">{submittedEmail || 'your provided email'}</span>.
                  </p>
                  <p className="text-gray-500 text-sm">
                    For immediate assistance, you can also email us at admin@zeexai.com
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    ></textarea>
                  </div>
                  <button
    type="submit"
    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition-all hover:scale-[1.02] disabled:opacity-70"
    disabled={isLoading}
  >
    {isLoading ? (
      <span className="flex items-center justify-center">
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
      </span>
    ) : (
      'Send Message'
    )}
  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Cards Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-default">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">Get in touch via email for general inquiries</p>
              <a href="mailto:admin@zeexai.com" className="text-blue-600 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
                admin@zeexai.com
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our support team</p>
              <a href="tel:+15551234567" className="text-blue-600 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
                +91 8709221636
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Visit Us</h3>
              <p className="text-gray-600 mb-4">Schedule a visit to our headquarters</p>
              <a href="#map" className="text-blue-600 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
              Nirmaan, CFI, IIT Madras ,Chennai, India 600036
              <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Map Section */}
      <section className="py-16 bg-white">
        <div className="container-default">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Location</span>
            </h2>
            <p className="text-lg text-gray-600">
              Visit our headquarters or connect with our global offices
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200/50">
            <div className="p-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            <div className="h-96 w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6852947612847!2d80.22829580971583!3d12.991969287272374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b1fb87ef8d%3A0xa03b5a54521f8c14!2sSudha%20%26%20Shankar%20Innovation%20Hub!5e0!3m2!1sen!2sin!4v1746269051282!5m2!1sen!2sin" 
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="ZeexAI Office Location"
              ></iframe>
            </div>
            <div className="p-6 bg-gray-50 border-t border-gray-200/50">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h3 className="font-semibold text-gray-900">Zeex AI Workplace</h3>
                  <p className="text-gray-600">Sudha & Shankar Innovation Hub, IIT Madras, Chennai</p>
                </div>
                <a 
                  href="https://maps.app.goo.gl/GZenaQWdHNiBqnhy9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 md:mt-0 inline-flex items-center px-5 py-2.5 bg-white text-gray-900 font-medium rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all"
                >
                  Get Directions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
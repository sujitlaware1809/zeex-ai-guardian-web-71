import React, { useState } from 'react';
import { toast } from '@/components/ui/sonner';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://zeex-website-backend-1.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully!', {
          description: "Thank you for your message. We'll get back to you soon.",
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        const data = await response.json();
        toast.error('Failed to send message.', { description: data.error || 'Please try again later.' });
      }
    } catch (error) {
      toast.error('Failed to send message.', { description: 'Network error. Please try again later.' });
    }
    setIsSubmitting(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      <div>
        <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-gray-600 mb-8">
          Have questions about our AI security solutions? Fill out the form and our team will get back to you shortly.
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-zeex-50 p-3 rounded-full">
              <Phone className="text-zeex-600 h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium mb-1">Phone</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-zeex-50 p-3 rounded-full">
              <Mail className="text-zeex-600 h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium mb-1">Email</h3>
              <p className="text-gray-600">contact@zeex-ai.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-zeex-50 p-3 rounded-full">
              <MapPin className="text-zeex-600 h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium mb-1">Office</h3>
              <p className="text-gray-600">123 AI Boulevard, Tech City, TC 10101</p>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zeex-500 focus:border-transparent"
            placeholder="Your name"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zeex-500 focus:border-transparent"
            placeholder="your.email@example.com"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone (optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zeex-500 focus:border-transparent"
            placeholder="(123) 456-7890"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zeex-500 focus:border-transparent"
            placeholder="Tell us how we can help you..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full flex justify-center items-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

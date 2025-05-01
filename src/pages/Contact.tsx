
import React from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/shared/PageHeader';
import ContactForm from '@/components/shared/ContactForm';

const Contact = () => {
  return (
    <Layout>
      <PageHeader 
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries, demos, or support"
        backgroundImage="https://images.unsplash.com/photo-1616626627486-4c7c642a704d"
      />
      
      <section className="py-16">
        <div className="container-default">
          <ContactForm />
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16">
        <div className="container-default">
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-96">
            {/* Replace with actual map implementation if needed */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1587920103288!5m2!1sen!2s" 
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="ZeexAI Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

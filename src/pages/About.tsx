
import React from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/shared/PageHeader';

const About = () => {
  return (
    <Layout>
      <PageHeader 
        title="About ZeexAI"
        subtitle="Creating a safer tomorrow through AI-powered security"
        backgroundImage="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
      />
      
      <section className="py-16 md:py-20">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-zeex-800">Our Mission</h2>
              <p className="text-lg mb-6 text-gray-700">
                At ZeexAI, we're dedicated to revolutionizing security and surveillance through cutting-edge artificial intelligence. Our mission is to create safer environments for homes, businesses, and public spaces by developing intelligent systems that can identify threats before they materialize.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                We believe that everyone deserves access to advanced security solutions that protect what matters most. Through continuous innovation and ethical AI development, we're building technology that serves humanity and enhances safety without compromising privacy.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" 
                alt="Zeex AI Team Working" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-zeex-50">
        <div className="container-default">
          <h2 className="text-3xl font-bold mb-12 text-center text-zeex-800">Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                alt="John Smith" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-zeex-800">John Smith</h3>
                <p className="text-zeex-500 font-medium mb-3">CEO & Founder</p>
                <p className="text-gray-600">
                  With over 20 years of experience in technology and security, John founded ZeexAI to bring AI innovation to surveillance systems.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" 
                alt="Sarah Johnson" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-zeex-800">Sarah Johnson</h3>
                <p className="text-zeex-500 font-medium mb-3">CTO</p>
                <p className="text-gray-600">
                  Sarah leads our technical development with a PhD in Computer Vision and 15 years developing AI systems for security applications.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
                alt="Michael Chen" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-zeex-800">Michael Chen</h3>
                <p className="text-zeex-500 font-medium mb-3">COO</p>
                <p className="text-gray-600">
                  Michael oversees operations with background in scaling tech startups and implementing enterprise security solutions globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-zeex-800">Our Story</h2>
            
            <div className="space-y-12">
              {/* Milestone 1 */}
              <div className="relative pl-10 border-l-2 border-zeex-300">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-zeex-500 rounded-full"></div>
                <div className="mb-2">
                  <span className="text-sm font-semibold text-zeex-500">2015</span>
                  <h3 className="text-xl font-bold text-zeex-800">ZeexAI Founded</h3>
                </div>
                <p className="text-gray-600">
                  Founded by John Smith with a vision to revolutionize security systems using artificial intelligence.
                </p>
              </div>

              {/* Milestone 2 */}
              <div className="relative pl-10 border-l-2 border-zeex-300">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-zeex-500 rounded-full"></div>
                <div className="mb-2">
                  <span className="text-sm font-semibold text-zeex-500">2018</span>
                  <h3 className="text-xl font-bold text-zeex-800">First Major Product Launch</h3>
                </div>
                <p className="text-gray-600">
                  Released our flagship intrusion detection system that redefined industry standards for AI-powered security.
                </p>
              </div>

              {/* Milestone 3 */}
              <div className="relative pl-10 border-l-2 border-zeex-300">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-zeex-500 rounded-full"></div>
                <div className="mb-2">
                  <span className="text-sm font-semibold text-zeex-500">2020</span>
                  <h3 className="text-xl font-bold text-zeex-800">Series A Funding</h3>
                </div>
                <p className="text-gray-600">
                  Secured $15 million in Series A funding to accelerate development and expand market presence.
                </p>
              </div>

              {/* Milestone 4 */}
              <div className="relative pl-10 border-l-2 border-zeex-300">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-zeex-500 rounded-full"></div>
                <div className="mb-2">
                  <span className="text-sm font-semibold text-zeex-500">2022</span>
                  <h3 className="text-xl font-bold text-zeex-800">Global Expansion</h3>
                </div>
                <p className="text-gray-600">
                  Expanded operations to Europe and Asia, establishing ZeexAI as a global leader in AI security solutions.
                </p>
              </div>

              {/* Milestone 5 */}
              <div className="relative pl-10">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-zeex-500 rounded-full"></div>
                <div className="mb-2">
                  <span className="text-sm font-semibold text-zeex-500">Present</span>
                  <h3 className="text-xl font-bold text-zeex-800">Leading Innovation</h3>
                </div>
                <p className="text-gray-600">
                  Today, ZeexAI continues to pioneer advancements in AI-powered security, protecting thousands of locations worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg py-20 text-white">
        <div className="container-default text-center">
          <h2 className="text-3xl font-bold mb-6">Join us in Creating a Safer Tomorrow</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Partner with ZeexAI and experience the future of security technology today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="btn-primary bg-white text-zeex-600 hover:bg-zeex-50">
              Contact Us
            </a>
            <a href="/solutions" className="btn-secondary text-white border-white hover:bg-white/10">
              Explore Our Solutions
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

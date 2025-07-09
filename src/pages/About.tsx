import React from 'react';
import Layout from '@/components/layout/Layout';
import { ArrowRight, Shield, Users, Award, Globe, TrendingUp, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Layout showFooter={false}>
      {/* Hero Section - Matching Contact Page Style */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900 overflow-hidden opacity-0 animate-fadeIn">
        {/* Background elements matching Contact page */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-20"></div>
        </div>
        
        {/* Centered content container with matching animation */}
        <div className="container-default relative z-10 transform translate-y-4 animate-slideUp">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-1.5 text-sm font-medium text-blue-200 backdrop-blur-sm mb-6">
              <Shield className="w-4 h-4" /> Pioneering AI Security
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
              About <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">ZeexAI</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fadeInDelay">
              We're redefining security infrastructure with AI that proactively identifies threats before they occur, protecting what matters most.
            </p>
          </div>
        </div>

        {/* Custom Animations Defined Inline - Matching Contact page */}
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
        
      {/* Mission Section with layered design */}
      <section className="py-10 md:py-16 bg-gray-50 relative overflow-hidden">
        <div className="container-default relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-1.5 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" /> Our Vision
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
                Redefining security through <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">AI innovation</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  At ZeexAI, we're transforming security infrastructure with cutting-edge artificial intelligence. Our mission is to create intelligent systems that proactively identify and mitigate threats before they occur, ensuring safer environments for homes, businesses, and public spaces.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We combine ethical AI development with advanced computer vision to deliver solutions that protect what matters most—without compromising privacy or performance.
                </p>
                <div className="mt-10">
                  <a href="/solutions" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 group transition-colors">
                    Explore our approach
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative">
                {/* Main image with frosted glass effect border */}
                <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10 backdrop-blur-sm border border-white/30 bg-gradient-to-br from-white/5 to-white/20">
                  <img 
                    src="https://i.ibb.co/vxbq8fkG/Whats-App-Image-2025-05-11-at-21-29-01-7dd79601-1.jpg" 
                    alt="Zeex AI Team Working" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl"></div>
                {/* Floating pattern */}
                <div className="absolute bottom-12 -right-10 w-20 h-20 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 rotate-12 hidden lg:block"></div>
                <div className="absolute top-12 -left-10 w-16 h-16 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500 -rotate-12 hidden lg:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-6 md:py-10 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center px-3 py-1.5 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4 mr-2" /> Our Growth
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
                Our Journey
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Milestones in our mission to revolutionize security technology
              </p>
            </div>
            
            <div className="relative">
              {/* Vertical line - hidden on mobile, visible on md+ */}
              <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-blue-500 md:left-1/2 md:-translate-x-px"></div>
              
              <div className="space-y-12 sm:space-y-16">
                {/* Milestone 1 */}
                <div className="relative flex flex-col md:flex-row items-start gap-6 md:gap-0">
                  <div className="flex-1 md:pr-8 lg:pr-16 md:text-right order-1">
                    <div className="mb-3 sm:mb-4">
                      <div className="inline-flex items-center px-3 py-1.5 bg-blue-50 rounded-full text-blue-600 text-sm font-medium">
                        <Users className="w-4 h-4 mr-2" /> 2024
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                      ZeexAI Founded
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Founded by Gaurav Yadav with a vision to revolutionize security systems using artificial intelligence.
                    </p>
                  </div>
                  
                  {/* Timeline dot - hidden on mobile, visible on md+ */}
                  <div className="hidden md:flex absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 items-center justify-center w-10 h-10 md:w-12 md:h-12 z-10">
                    <div className="w-full h-full rounded-full border-4 border-white bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                      <Users className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </div>
                  
                  <div className="flex-1 md:pl-8 lg:pl-16 pt-0 order-2 hidden md:block"></div>
                </div>

                {/* Milestone 2 */}
                <div className="relative flex flex-col md:flex-row items-start gap-6 md:gap-0">
                  <div className="flex-1 md:pr-8 lg:pr-16 order-1 hidden md:block"></div>
                  
                  {/* Timeline dot - hidden on mobile, visible on md+ */}
                  <div className="hidden md:flex absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 items-center justify-center w-10 h-10 md:w-12 md:h-12 z-10">
                    <div className="w-full h-full rounded-full border-4 border-white bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                      <Award className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </div>
                  
                  <div className="flex-1 md:pl-8 lg:pl-16 order-2">
                    <div className="mb-3 sm:mb-4">
                      <div className="inline-flex items-center px-3 py-1.5 bg-indigo-50 rounded-full text-indigo-600 text-sm font-medium">
                        <Award className="w-4 h-4 mr-2" /> 2024
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                      Incubated in IIT Madras
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Selected for pre-incubation at the prestigious institute of IIT Madras, under the Nirmaan program.
                    </p>
                  </div>
                </div>

                {/* Milestone 3 */}
                <div className="relative flex flex-col md:flex-row items-start gap-6 md:gap-0">
                  <div className="flex-1 md:pr-8 lg:pr-16 md:text-right order-1">
                    <div className="mb-3 sm:mb-4">
                      <div className="inline-flex items-center px-3 py-1.5 bg-blue-50 rounded-full text-blue-600 text-sm font-medium">
                        <Shield className="w-4 h-4 mr-2" /> Present
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                      Leading Innovation
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Today, ZeexAI continues to pioneer advancements in AI-powered security, protecting thousands of locations worldwide.
                    </p>
                  </div>
                  
                  {/* Timeline dot - hidden on mobile, visible on md+ */}
                  <div className="hidden md:flex absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 items-center justify-center w-10 h-10 md:w-12 md:h-12 z-10">
                    <div className="w-full h-full rounded-full border-4 border-white bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                      <Shield className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </div>
                  
                  <div className="flex-1 md:pl-8 lg:pl-16 pt-0 order-2 hidden md:block"></div>
                </div>
              </div>

              {/* Future arrow - responsive (always visible) */}
              <div className="relative mt-10 sm:mt-12 text-center">
                <div className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-full text-indigo-600 text-sm font-medium">
                  <TrendingUp className="w-4 h-4 mr-2" /> The journey continues...
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with modern cards */}
      <section className="py-10 md:py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="container-default relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1.5 bg-indigo-50 rounded-full text-indigo-600 text-sm font-medium mb-4">
              <Users className="w-4 h-4 mr-2" /> Our People
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Meet Our Leadership</h2>
            <p className="text-lg text-gray-600">
              A team of visionaries and experts driving innovation in AI security
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Team Member 1 - Founder */}
            <div className="group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-1.5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-white rounded-xl overflow-hidden">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img
                      src="https://i.ibb.co/9HM6KKrB/gaurav.jpg"
                      alt="Gaurav Yadav"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold mb-1 text-white">Gaurav Yadav</h3>
                      <p className="text-blue-200 font-medium">Founder & CEO</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex justify-center">
                        <a href="https://www.linkedin.com/in/yadavgauravkumar" className="text-gray-400 hover:text-blue-500 transition-colors">
                          <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-1.5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-white rounded-xl overflow-hidden">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img 
                      src="https://i.ibb.co/xSqvrQ8s/1732205528576.jpg"
                      alt="Sujit Laware" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold mb-1 text-white">Sujit Laware</h3>
                      <p className="text-blue-200 font-medium">Chief Technology Officer</p>
                    </div>
                  </div>
                  <div className="p-6 flex justify-center">
                    <a href="https://www.linkedin.com/in/sujit-laware/" className="text-gray-400 hover:text-blue-500 transition-colors">
                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-1.5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-white rounded-xl overflow-hidden">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img 
                      src="https://i.ibb.co/n8cWLpQy/sanidhya.jpg"
                      alt="Sanidhya Kanhere" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold mb-1 text-white">Sanidhya Kanhere</h3>
                      <p className="text-blue-200 font-medium">Chief Business Officer</p>
                    </div>
                  </div>
                  <div className="p-6 flex justify-center">
                    <a href="https://www.linkedin.com/in/sanidhyak9" className="text-gray-400 hover:text-blue-500 transition-colors">
                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-1.5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-white rounded-xl overflow-hidden">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img 
                      src="https://i.ibb.co/DfzKM5zQ/Whats-App-Image-2025-07-08-at-15-06-27-991cb742.jpg"
                      alt="Tarun Gangwar" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold mb-1 text-white">Tarun Gangwar</h3>
                      <p className="text-blue-200 font-medium">Chief Operating Officer</p>
                    </div>
                  </div>
                  <div className="p-6 flex justify-center">
                    <a href="https://in.linkedin.com/in/tarungangwar08" className="text-gray-400 hover:text-blue-500 transition-colors">
                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16 bg-gradient-to-br from-blue-800 to-indigo-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white opacity-10"></div>
          <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-blue-500 opacity-10"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container-default text-center relative z-10"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6">Join Us in Creating a Safer Tomorrow</h2>
            <p className="text-xl mb-10 text-blue-100">
              Partner with ZeexAI and experience the future of security technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-blue-800 font-semibold rounded-lg hover:bg-blue-50 transition-all hover:shadow-xl"
              >
                Request a Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default About;
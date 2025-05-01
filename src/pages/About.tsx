import React from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/shared/PageHeader';
import { ArrowRight, Shield, Users, Award, Globe, TrendingUp, ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      {/* Hero Section with 3D-like gradient background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-blue-900 to-indigo-800 py-24 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        </div>
        <div className="container-default relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-1.5 text-sm font-medium text-blue-200 backdrop-blur-sm mb-6">
              <Shield className="w-4 h-4" /> Pioneering AI Security
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              About <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">ZeexAI</span>
            </h1>
            <p className="text-xl text-blue-100 opacity-90 leading-relaxed max-w-2xl">
              We're redefining security infrastructure with AI that proactively identifies threats before they occur, protecting what matters most.
            </p>
          </div>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-blue-600/20 blur-3xl"></div>
        <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl"></div>
      </section>
      
      {/* Mission Section with layered design */}
      <section className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
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
                    src="/api/placeholder/800/640" 
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

      {/* Team Section with modern cards */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Team Member 1 */}
            <div className="group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-1.5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-white rounded-xl overflow-hidden">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img 
                      src="/api/placeholder/600/750"
                      alt="John Smith" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold mb-1 text-white">John Smith</h3>
                      <p className="text-blue-200 font-medium">CEO & Founder</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">
                      20+ years in technology and security. Founded ZeexAI to bring AI innovation to surveillance systems.
                    </p>
                    <div className="flex space-x-3">
                      <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
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
                      src="/api/placeholder/600/750"
                      alt="Sarah Johnson" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold mb-1 text-white">Sarah Johnson</h3>
                      <p className="text-blue-200 font-medium">CTO</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">
                      PhD in Computer Vision. 15 years developing AI systems for security applications.
                    </p>
                    <div className="flex space-x-3">
                      <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
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
                      src="/api/placeholder/600/750"
                      alt="Michael Chen" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold mb-1 text-white">Michael Chen</h3>
                      <p className="text-blue-200 font-medium">COO</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">
                      Expert in scaling tech startups and implementing enterprise security solutions globally.
                    </p>
                    <div className="flex space-x-3">
                      <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section with modern style */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container-default">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1.5 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4 mr-2" /> Our Growth
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Journey</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Milestones in our mission to revolutionize security technology
              </p>
            </div>
            
            <div className="relative">
              {/* Vertical line with gradient */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-blue-500 md:left-1/2 md:-translate-x-px"></div>
              
              <div className="space-y-16">
                {/* Milestone 1 */}
                <div className="relative flex flex-col md:flex-row group">
                  <div className="flex-1 md:pr-16 md:text-right order-1 md:order-1 mb-6 md:mb-0">
                    <div className="inline-flex items-center px-3 py-1.5 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-3">
                      <Users className="w-4 h-4 mr-2" /> 2015
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">ZeexAI Founded</h3>
                    <p className="text-gray-600">
                      Founded by John Smith with a vision to revolutionize security systems using artificial intelligence.
                    </p>
                  </div>
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-4 border-white bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                      <Users className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex-1 md:pl-16 pt-12 md:pt-0 order-3 md:order-2"></div>
                </div>

                {/* Milestone 2 */}
                <div className="relative flex flex-col md:flex-row group">
                  <div className="flex-1 md:pr-16 md:text-right order-1 md:order-1 mb-6 md:mb-0">
                  </div>
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-4 border-white bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex-1 md:pl-16 pt-12 md:pt-0 order-3 md:order-2">
                    <div className="inline-flex items-center px-3 py-1.5 bg-indigo-50 rounded-full text-indigo-600 text-sm font-medium mb-3">
                      <Award className="w-4 h-4 mr-2" /> 2018
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">First Major Product Launch</h3>
                    <p className="text-gray-600">
                      Released our flagship intrusion detection system that redefined industry standards for AI-powered security.
                    </p>
                  </div>
                </div>

                {/* Milestone 3 */}
                <div className="relative flex flex-col md:flex-row group">
                  <div className="flex-1 md:pr-16 md:text-right order-1 md:order-1 mb-6 md:mb-0">
                    <div className="inline-flex items-center px-3 py-1.5 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-3">
                      <TrendingUp className="w-4 h-4 mr-2" /> 2020
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Series A Funding</h3>
                    <p className="text-gray-600">
                      Secured $15 million in Series A funding to accelerate development and expand market presence.
                    </p>
                  </div>
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-4 border-white bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex-1 md:pl-16 pt-12 md:pt-0 order-3 md:order-2"></div>
                </div>

                {/* Milestone 4 */}
                <div className="relative flex flex-col md:flex-row group">
                  <div className="flex-1 md:pr-16 md:text-right order-1 md:order-1 mb-6 md:mb-0">
                  </div>
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-4 border-white bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                      <Globe className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex-1 md:pl-16 pt-12 md:pt-0 order-3 md:order-2">
                    <div className="inline-flex items-center px-3 py-1.5 bg-indigo-50 rounded-full text-indigo-600 text-sm font-medium mb-3">
                      <Globe className="w-4 h-4 mr-2" /> 2022
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Global Expansion</h3>
                    <p className="text-gray-600">
                      Expanded operations to Europe and Asia, establishing ZeexAI as a global leader in AI security solutions.
                    </p>
                  </div>
                </div>

                {/* Milestone 5 */}
                <div className="relative flex flex-col md:flex-row group">
                  <div className="flex-1 md:pr-16 md:text-right order-1 md:order-1 mb-6 md:mb-0">
                    <div className="inline-flex items-center px-3 py-1.5 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-3">
                      <Shield className="w-4 h-4 mr-2" /> Present
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Leading Innovation</h3>
                    <p className="text-gray-600">
                      Today, ZeexAI continues to pioneer advancements in AI-powered security, protecting thousands of locations worldwide.
                    </p>
                  </div>
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-4 border-white bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                      <Shield className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex-1 md:pl-16 pt-12 md:pt-0 order-3 md:order-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with glassmorphism */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700">
          <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] bg-center opacity-10"></div>
        </div>
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-indigo-400/20 blur-3xl"></div>
        
        <div className="container-default relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Join Us in Creating a Safer Tomorrow</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Partner with ZeexAI and experience the future of security technology today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-white text-blue-600 font-medium rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all flex items-center"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="/solutions" 
              className="px-8 py-4 text-white font-medium rounded-xl border-2 border-white/80 hover:bg-white/10 transition-all flex items-center backdrop-blur-sm"
            >
              Explore Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
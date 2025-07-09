
import React from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/shared/PageHeader';
import { FileText, Shield, Users, Scale, AlertTriangle, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

const TermsOfService = () => {
  return (
    <Layout showFooter={false}>
      <PageHeader
        title="Terms of Service"
        subtitle="Last updated: April 30, 2025"
      />

      <div className="container-default py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction Section */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-12 border border-green-100">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Terms & Conditions</h3>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to ZeexAI. Please read these Terms of Service carefully before using our website or services. By accessing our services, you agree to be bound by these terms and our Privacy Policy.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Section 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">1. Agreement to Terms</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                By accessing our website or using our services, you agree to be bound by these Terms of Service and our Privacy Policy. If you disagree with any part of the terms, you may not access the website or use our services.
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">2. Use of Services</h2>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                ZeexAI provides AI-powered surveillance and security solutions. Our services may include software, hardware, web applications, mobile applications, and related support services as described on our website.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">User Accounts</h3>
                  <p className="text-gray-700 leading-relaxed">
                    When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">License to Use</h3>
                  <p className="text-gray-700 leading-relaxed">
                    ZeexAI grants you a limited, non-exclusive, non-transferable, revocable license to use our services for your personal or business purposes in accordance with these Terms.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <FileText className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">3. Intellectual Property</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                The Service and its original content, features, and functionality are and will remain the exclusive property of ZeexAI and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of ZeexAI.
              </p>
            </div>

            {/* Section 4 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-red-100 p-2 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">4. Limitation of Liability</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                In no event shall ZeexAI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>
            </div>

            {/* Section 5 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <Scale className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">5. Governing Law</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these terms or your use of our services will be subject to the exclusive jurisdiction of the courts in Chennai, India.
              </p>
            </div>

            {/* Section 6 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <Clock className="w-5 h-5 text-yellow-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">6. Changes to Terms</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">7. Contact Us</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                If you have any questions about these Terms, please contact us at:
              </p>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-semibold text-gray-900">ZeexAI</p>
                      <p className="text-gray-700">Nirmaan, CFI</p>
                      <p className="text-gray-700">IIT Madras</p>
                      <p className="text-gray-700">Chennai, India 600036</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-green-600" />
                    <a href="mailto:admin@zeexai.com" className="text-green-600 hover:text-green-800 font-medium">
                      admin@zeexai.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;


import React from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/shared/PageHeader';
import { Shield, Eye, Lock, Users, FileText, Mail, MapPin, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <Layout showFooter={false}>
      <PageHeader
        title="Privacy Policy"
        subtitle="Last updated: April 30, 2025"
      />

      <div className="container-default py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 border border-blue-100">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Privacy Matters</h3>
                <p className="text-gray-700 leading-relaxed">
                  At ZeexAI, your privacy is our priority. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our AI-powered security services.
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
                  <Eye className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">1. Information We Collect</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Personal Data</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We may collect personally identifiable information, such as your name, email address, phone number, and postal address, when you register, contact us, or use our services. You may choose not to provide certain information, but this may limit your access to some features.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Derivative & Usage Data</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our servers automatically collect information such as your IP address, browser type, device information, operating system, access times, and pages visited before and after using our website.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Cookies & Analytics</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We use cookies and similar tracking technologies to enhance your experience, analyze site usage, and deliver personalized content. You can control cookies through your browser settings. We may use third-party analytics providers (such as Google Analytics) to help us understand how our site is used.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-green-100 p-2 rounded-lg">
                  <FileText className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">2. How We Use Your Information</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>To provide, operate, and maintain our services</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>To improve, personalize, and expand our offerings</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>To communicate with you, including customer support and updates</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>To process transactions and send related information</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>To monitor and analyze usage and trends</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>To detect, prevent, and address technical issues or security threats</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>To comply with legal obligations</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">3. Disclosure of Your Information</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Third-Party Service Providers</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We may share your information with trusted third parties who perform services for us, such as payment processing, data analysis, email delivery, hosting, and customer support. These providers are contractually obligated to protect your data.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Legal Requirements & Protection</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We may disclose your information if required by law, regulation, legal process, or to protect the rights, property, or safety of ZeexAI, our users, or others.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <FileText className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">4. Data Retention</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. When no longer needed, your data will be securely deleted or anonymized.
              </p>
            </div>

            {/* Section 5 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <Shield className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">5. Your Rights</h2>
              </div>
              
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have rights under data protection laws (such as GDPR or CCPA), including:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>The right to access, correct, or delete your personal data</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>The right to object to or restrict processing</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>The right to data portability</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>The right to withdraw consent at any time</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>The right to lodge a complaint with a supervisory authority</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-gray-700">
                To exercise your rights, please contact us using the information below.
              </p>
            </div>

            {/* Section 6 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-pink-100 p-2 rounded-lg">
                  <Users className="w-5 h-5 text-pink-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">6. Children's Privacy</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                ZeexAI does not knowingly collect or solicit personal information from children under 16. If you believe a child has provided us with personal data, please contact us and we will promptly delete such information.
              </p>
            </div>

            {/* Section 7 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-red-100 p-2 rounded-lg">
                  <Lock className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">7. Security of Your Information</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                We use industry-standard administrative, technical, and physical safeguards to protect your personal information. However, no method of transmission or storage is 100% secure. We encourage you to use strong passwords and protect your account information.
              </p>
            </div>

            {/* Section 8 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <FileText className="w-5 h-5 text-yellow-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">8. Changes to This Policy</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date above.
              </p>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">9. Contact Us</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                If you have questions or wish to exercise your privacy rights, please contact us at:
              </p>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">ZeexAI</p>
                      <p className="text-gray-700">Nirmaan, CFI</p>
                      <p className="text-gray-700">IIT Madras</p>
                      <p className="text-gray-700">Chennai, India 600036</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a href="mailto:admin@zeexai.com" className="text-blue-600 hover:text-blue-800 font-medium">
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

export default PrivacyPolicy;


import React from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/shared/PageHeader';

const PrivacyPolicy = () => {
  return (
    <Layout showFooter={false}>
      <PageHeader
        title="Privacy Policy"
        subtitle="Last updated: April 30, 2025"
      />

      <div className="container-default py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p>
            At ZeexAI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect via the Website includes:
          </p>

          <h3>Personal Data</h3>
          <p>
            Personally identifiable information, such as your name, email address, telephone number, and postal address that you voluntarily give to us when you register with the Website or when you choose to participate in various activities related to the Website. You are under no obligation to provide us with personal information, but your refusal to do so may prevent you from using certain features of the Website.
          </p>

          <h3>Derivative Data</h3>
          <p>
            Information our servers automatically collect when you access the Website, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Website.
          </p>

          <h2>Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Website to:
          </p>

          <ul>
            <li>Create and manage your account.</li>
            <li>Process your requests and transactions.</li>
            <li>Send you technical notices, updates, security alerts, and support messages.</li>
            <li>Respond to your comments, questions, and requests.</li>
            <li>Develop and improve our products and services.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Website.</li>
          </ul>

          <h2>Disclosure of Your Information</h2>
          <p>
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
          </p>

          <h3>By Law or to Protect Rights</h3>
          <p>
            If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
          </p>

          <h3>Third-Party Service Providers</h3>
          <p>
            We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
          </p>

          <h2>Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>

          <p>
            ZeexAI<br />
            123 AI Boulevard<br />
            Tech City, TC 10101<br />
            contact@zeex-ai.com<br />
            (555) 123-4567
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;

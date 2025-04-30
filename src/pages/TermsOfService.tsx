
import React from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/shared/PageHeader';

const TermsOfService = () => {
  return (
    <Layout>
      <PageHeader
        title="Terms of Service"
        subtitle="Last updated: April 30, 2025"
      />

      <div className="container-default py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p>
            Welcome to ZeexAI. Please read these Terms of Service carefully before using our website or services.
          </p>

          <h2>Agreement to Terms</h2>
          <p>
            By accessing our website or using our services, you agree to be bound by these Terms of Service and our Privacy Policy. If you disagree with any part of the terms, you may not access the website or use our services.
          </p>

          <h2>Use of Services</h2>
          <p>
            ZeexAI provides AI-powered surveillance and security solutions. Our services may include software, hardware, web applications, mobile applications, and related support services as described on our website.
          </p>

          <h3>User Accounts</h3>
          <p>
            When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
          </p>

          <h3>License to Use</h3>
          <p>
            ZeexAI grants you a limited, non-exclusive, non-transferable, revocable license to use our services for your personal or business purposes in accordance with these Terms.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of ZeexAI and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of ZeexAI.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            In no event shall ZeexAI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
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

export default TermsOfService;

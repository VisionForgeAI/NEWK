const Terms = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-8">Last updated: March 14, 2024</p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using VisionForge AI's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="mb-4">Permission is granted to temporarily access our services for personal or business use, subject to the following restrictions:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>You must not modify or copy our materials</li>
              <li>You must not use the materials for commercial purposes</li>
              <li>You must not attempt to reverse engineer any software</li>
              <li>You must not remove any copyright or proprietary notations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. Service Availability</h2>
            <p>
              We strive to ensure our services are available 24/7, but we cannot guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue any part of our services without notice.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
            <p>
              Certain services may require payment. You agree to provide accurate billing information and authorize us to charge the designated payment method for all applicable fees.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our services are owned by VisionForge AI and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p>
              VisionForge AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
            <p>
              For any questions regarding these Terms of Service, please contact us at:
              <br />
              Email: legal@visionforge.ai
              <br />
              Address: 123 AI Valley, San Francisco, CA 94105
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
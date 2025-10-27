import { Mail, Phone, MapPin } from "lucide-react";
import HeroSection from "../components/HeroSection";
import ScrollFloat from "../components/ScrollFloat";
import ReadyToTransformCTA from "../components/ReadyToTransformCTA";

const Privacy = () => {
  return (
    <div className="pt-20">
      <HeroSection
        title="Privacy Policy"
        subtitle="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
      />

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="text-blue-800 font-medium">
                <strong>Last Updated:</strong> January 15, 2024
              </p>
              <p className="text-blue-700 mt-2">
                This Privacy Policy describes how SarveSolutions ("we", "our",
                or "us") collects, uses, and shares your personal information
                when you use our website and services.
              </p>
            </div>

            <ScrollFloat
              className="text-3xl font-bold text-gray-900 mb-6 flex items-center"
              text="Information We Collect"
            />

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Personal Information
            </h3>
            <p className="text-gray-600 mb-4">
              We may collect personal information that you voluntarily provide
              to us, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>
                Name and contact information (email address, phone number)
              </li>
              <li>Company information and job title</li>
              <li>Project requirements and specifications</li>
              <li>Communication preferences</li>
              <li>
                Payment information (processed securely through third-party
                providers)
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Automatically Collected Information
            </h3>
            <p className="text-gray-600 mb-4">
              When you visit our website, we automatically collect certain
              information, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website information</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <ScrollFloat
              containerClassName="text-3xl font-bold text-gray-900 mb-6 flex items-center"
              text="How We Use Your Information"
            />

            <p className="text-gray-600 mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>To provide and improve our services</li>
              <li>To communicate with you about projects and services</li>
              <li>To process payments and manage billing</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To analyze website usage and improve user experience</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
            </ul>

            <ScrollFloat
              className="text-3xl font-bold text-gray-900 mb-6 flex items-center"
              text="Information Sharing"
            />

            <p className="text-gray-600 mb-4">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information in the following
              circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>
                With service providers who assist us in operating our business
              </li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or acquisition</li>
              <li>With your explicit consent</li>
            </ul>

            <ScrollFloat
              className="text-3xl font-bold text-gray-900 mb-6"
              text="Data Security"
            />
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the internet or electronic storage is 100%
              secure.
            </p>

            <ScrollFloat
              className="text-3xl font-bold text-gray-900 mb-6"
              text="Your Rights"
            />
            <p className="text-gray-600 mb-4">
              Depending on your location, you may have the following rights
              regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>
                Right to access and receive a copy of your personal information
              </li>
              <li>Right to rectify inaccurate or incomplete information</li>
              <li>Right to erase your personal information</li>
              <li>Right to restrict processing of your information</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Cookies and Tracking
            </h2>
            <p className="text-gray-600 mb-6">
              We use cookies and similar tracking technologies to enhance your
              experience on our website. You can control cookie settings through
              your browser preferences. Note that disabling cookies may affect
              the functionality of our website.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Third-Party Links
            </h2>
            <p className="text-gray-600 mb-6">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these external
              sites. We encourage you to review the privacy policies of any
              third-party sites you visit.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Children's Privacy
            </h2>
            <p className="text-gray-600 mb-6">
              Our services are not directed to children under 13 years of age.
              We do not knowingly collect personal information from children
              under 13. If we become aware that we have collected personal
              information from a child under 13, we will take steps to delete
              such information.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Changes to This Policy
            </h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last Updated" date. We encourage you
              to review this Privacy Policy periodically for any changes.
            </p>

            <ScrollFloat
              className="text-3xl font-bold text-gray-900 mb-6"
              text="Contact Us"
            />
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy or our privacy
              practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <Mail className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-700">
                  Email: privacy@sarvesolutions.com
                </span>
              </div>
              <div className="flex items-center mb-3">
                <Phone className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-700">Phone: +91-9904055986</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-700">
                  Address: Anand, Gujarat, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ReadyToTransformCTA />
    </div>
  );
};

export default Privacy;

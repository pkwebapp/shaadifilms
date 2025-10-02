import Head from 'next/head'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Shaadifilms</title>
        <meta name="description" content="Privacy Policy for Shaadifilms — professional wedding photography services." />
      </Head>

      <main className="min-h-screen bg-gray-50 py-16 px-4 sm:px-8 lg:px-24">
        <div className="mx-auto max-w-4xl bg-white rounded-2xl shadow-md p-8 sm:p-12">
         <header className="mb-8 text-center relative">
  {/* Go Back button (fixed so it always shows) */}
  <Link
    href="/contact"
    className="fixed top-46 left-46 z-50 flex items-center text-sm text-blue-600 hover:text-blue-800 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow"
  >
    <ArrowLeft className="mr-1 h-4 w-4" /> Go Back
  </Link>

  <div>
    <h1 className="text-3xl font-semibold">Privacy Policy</h1>
    <p className="mt-2 text-gray-600">Last updated: September 24, 2025</p>
  </div>
</header>

          <section className="prose prose-lg text-gray-800">
            <p>
              Welcome to <strong>Shaadifilms</strong> ("we", "us", "our"). We provide wedding
              photography and videography booking services through our website. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your personal information.
            </p>

            <h2>1. Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>
              When you make a booking or contact us, we may collect personal information such as
              your name, email address, phone number, event date and location, billing address,
              and any notes or preferences you share.
            </p>

            <h3>Non-personal Information</h3>
            <p>
              We automatically collect non-personal information such as your IP address, browser
              type, device information, pages visited, and usage analytics to help improve our
              website and services.
            </p>

            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>To confirm, manage, and provide photography/videography services and bookings.</li>
              <li>To communicate with you about appointments, invoices, and support.</li>
              <li>To improve and personalize the website experience and our services.</li>
              <li>To comply with legal obligations and enforce our terms.</li>
            </ul>

            <h2>3. Cookies & Tracking</h2>
            <p>
              We use cookies and similar technologies (including analytics tools) to operate the
              website and deliver a better user experience. You can control cookies through your
              browser settings; however, disabling certain cookies may affect site functionality.
            </p>

            <h2>4. Sharing & Disclosure</h2>
            <p>
              We will not sell your personal information. We may share information with:
            </p>
            <ul>
              <li>Service providers and freelancers who help deliver our bookings (e.g., payment
                processors, email providers).</li>
              <li>Third-party services you opt into (for example, external galleries or social
                platforms) — only after you choose to share content with them.</li>
              <li>When required by law or to protect our legal rights.</li>
            </ul>

            <h2>5. Data Retention</h2>
            <p>
              We retain personal information as long as necessary to provide services and fulfill
              business or legal obligations. If you would like us to delete your data, see the
              "Your Rights" section below and contact us.
            </p>

            <h2>6. Security</h2>
            <p>
              We take reasonable technical and organizational steps to protect your information.
              However, no online system is completely secure — we cannot guarantee absolute security.
            </p>

            <h2>7. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have rights such as accessing, correcting,
              exporting, or deleting your personal information. To exercise these rights, contact
              us using the details below.
            </p>

            <h2>8. Children's Privacy</h2>
            <p>
              Our services are not directed to children under 16. We do not knowingly collect
              personal information from children without parental consent. If you believe a child’s
              data has been submitted to us, please contact us so we can remove it.
            </p>

            <h2>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party sites. We are not responsible for the
              privacy practices or content of those sites; please review their privacy policies.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. When we do, we will update the
              "Last updated" date at the top of this page and — where appropriate — notify users.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have questions or requests about your data or this policy, please contact:
            </p>
            <ul>
              <li>Email: <a href="mailto:hello@shaadifilms.example">hello@shaadifilms.example</a></li>
              <li>Website: <Link href="/">Shaadifilms</Link></li>
            </ul>

            <p>
              <strong>Note:</strong> Replace the example contact information above with your actual
              business email, address, and any jurisdiction-specific details (for GDPR, CCPA,
              etc.) as required.
            </p>

            <footer className="pt-6">
              <p className="text-sm text-gray-600">© {new Date().getFullYear()} Shaadifilms. All rights reserved.</p>
            </footer>
          </section>
        </div>
      </main>
    </>
  )
}

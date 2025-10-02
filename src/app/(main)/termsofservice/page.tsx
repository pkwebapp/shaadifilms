import Head from 'next/head'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service — Shaadifilms</title>
        <meta name="description" content="Terms of Service for Shaadifilms — professional wedding photography booking platform." />
      </Head>

      <main className="min-h-screen bg-gray-50 py-16 px-4 sm:px-8 lg:px-24">
        <div className="mx-auto max-w-4xl bg-white rounded-2xl shadow-md p-8 sm:p-12">
          <header className="sticky top-0 z-40 bg-white border-b mb-8">
  {/* Go Back button */}
  <Link
    href="/contact"
    className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center text-sm text-blue-600 hover:text-blue-800"
  >
    <ArrowLeft className="mr-1 h-4 w-4" /> Go Back
  </Link>

  <div className="text-center py-4">
    <h1 className="text-3xl font-semibold">Terms of Service</h1>
    <p className="mt-2 text-gray-600">Last updated: September 24, 2025</p>
  </div>
</header>


          <section className="prose prose-lg text-gray-800">
            <p>
              Welcome to <strong>Shaadifilms</strong> ("we", "us", "our"). These Terms of Service
              ("Terms") govern your use of our website and wedding photography/videography booking
              services. By using our website, you agree to comply with and be bound by these Terms.
            </p>

            <h2>1. Eligibility</h2>
            <p>
              You must be at least 18 years old and capable of entering into a legally binding
              contract to use our services. By booking with us, you represent that the information
              you provide is accurate and complete.
            </p>

            <h2>2. Services</h2>
            <p>
              We provide wedding photography and videography services based on the package selected
              during booking. Specific deliverables, timelines, and pricing will be communicated in
              your booking confirmation or agreement.
            </p>

            <h2>3. Bookings & Payments</h2>
            <ul>
              <li>All bookings are subject to availability and confirmation by us.</li>
              <li>Deposits (if applicable) are non-refundable unless otherwise stated.</li>
              <li>Full payment terms will be outlined in your booking confirmation.</li>
              <li>Payments must be made using approved payment methods listed on our website.</li>
            </ul>

            <h2>4. Cancellations & Refunds</h2>
            <p>
              Cancellation and refund policies will be specified in your booking confirmation.
              Generally, deposits are non-refundable. Refunds (if any) are provided at our discretion
              and according to the agreement signed.
            </p>

            <h2>5. Client Responsibilities</h2>
            <ul>
              <li>Provide accurate details about the event (time, location, schedule).</li>
              <li>Ensure access to venues and obtain necessary permissions for photography/videography.</li>
              <li>Respect agreed schedules to avoid delays in coverage.</li>
            </ul>

            <h2>6. Intellectual Property</h2>
            <p>
              All images and videos captured by Shaadifilms remain our intellectual property unless
              otherwise agreed in writing. Clients receive personal usage rights for viewing,
              printing, and sharing. Commercial usage requires prior written consent.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              While we strive to provide high-quality services, we are not liable for unforeseen
              circumstances beyond our control (e.g., equipment failure, weather, venue restrictions).
              Our liability is limited to the amount paid for the booking.
            </p>

            <h2>8. Privacy</h2>
            <p>
              Our handling of personal information is described in our <Link href="/privacy-policy">Privacy Policy</Link>.
              By using our services, you also agree to our Privacy Policy.
            </p>

            <h2>9. Termination</h2>
            <p>
              We may suspend or terminate your access to our services if you violate these Terms or
              misuse our website/services. Any outstanding obligations will survive termination.
            </p>

            <h2>10. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of your
              jurisdiction. Any disputes will be handled in courts located in the relevant region.
            </p>

            <h2>11. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. When we do, we will update the "Last
              updated" date above and, where required, provide notice to users.
            </p>

            <h2>12. Contact Us</h2>
            <p>
              If you have questions about these Terms, please contact us:
            </p>
            <ul>
              <li>Email: <a href="mailto:hello@shaadifilms.example">hello@shaadifilms.example</a></li>
              <li>Website: <Link href="/">Shaadifilms</Link></li>
            </ul>

            <p>
              <strong>Note:</strong> Replace placeholder contact details with your actual business
              email, address, and jurisdiction-specific clauses as required.
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
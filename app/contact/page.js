'use client';

import { useState } from 'react';

export default function Contact() {
  const [otherInterest, setOtherInterest] = useState('');
  const [formStatus, setFormStatus] = useState(null); // success | error | null
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    const form = e.target;
    const data = new FormData(form);

    // Formspree endpoint
    const res = await fetch('https://formspree.io/f/mdkzknez', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: data,
    });

    if (res.ok) {
      setFormStatus('success');
      form.reset();
    } else {
      setFormStatus('error');
    }

    setIsSubmitting(false);
  }

  return (
    <main
      className="min-h-screen py-12 bg-cover bg-center text-blue-900"
      style={{ backgroundImage: "url('/contactpagebg.png')" }}
    >
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-blue-800 mb-12 pt-20 font-orbitron text-center">
          Contact Me
        </h1>

        <div className="flex flex-wrap gap-12 justify-center items-start bg-sky-100 bg-opacity-80 p-8 rounded-lg shadow-lg">
          {/* Profile Section */}
          <div className="w-full md:w-1/3 text-center space-y-4">
            <img
              src="/Al with AJC DroneWorks, LLC.png"
              alt="Al from AJC DroneWorks"
              className="w-40 h-auto mx-auto rounded-full shadow-lg"
            />
            <h2 className="text-2xl font-bold font-orbitron">Al – AJC DroneWorks, LLC</h2>
            <p className="font-orbitron text-blue-700">📍 South Jersey</p>
            <p className="font-orbitron text-blue-700">📧 ajcdroneworks@gmail.com</p>
            <p className="font-orbitron text-blue-700">📞 609-451-0008</p>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-2/3 bg-sky-50 p-6 rounded-lg shadow-inner space-y-6 text-left"
          >
            {/* Hidden spam trap */}
            <input type="text" name="_gotcha" style={{ display: 'none' }} />
            <input type="hidden" name="_subject" value="New contact from AJC DroneWorks!" />

            <div>
              <label className="block font-orbitron mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 rounded border border-blue-300"
              />
            </div>

            <div>
              <label className="block font-orbitron mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded border border-blue-300"
              />
            </div>

            <div>
              <label className="block font-orbitron mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-2 rounded border border-blue-300"
              />
            </div>

            <div>
              <label className="block font-orbitron mb-2">Areas of Interest</label>
              <select
                name="interests"
                multiple
                required
                className="w-full px-4 py-2 rounded border border-blue-300 h-32"
              >
                <option value="Real Estate Photography">Real Estate Photography</option>
                <option value="2D Mapping">2D Mapping</option>
                <option value="3D Modeling">3D Modeling</option>
                <option value="Cinematic Videography">Cinematic Videography</option>
                <option value="Events & FPV">Events & FPV</option>
                <option value="Other">Other (please specify below)</option>
              </select>
            </div>

            <div>
              <label className="block font-orbitron mb-2">Other Interests / Message</label>
              <textarea
                name="message"
                required
                rows="5"
                className="w-full px-4 py-2 rounded border border-blue-300"
                placeholder="Let me know what you're looking for..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition font-orbitron disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {/* Status messages */}
            {formStatus === 'success' && (
              <p className="text-green-700 mt-4 font-orbitron">✅ Message sent successfully!</p>
            )}
            {formStatus === 'error' && (
              <p className="text-red-700 mt-4 font-orbitron">❌ Oops! Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}

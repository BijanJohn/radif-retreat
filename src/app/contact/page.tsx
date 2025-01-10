import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Contact Us
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Interested in learning Classical Persian music? Get in touch with us to learn more about
            our courses and programs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <div className="grid grid-cols-1 gap-8">
            <div className="rounded-lg bg-gray-50 p-8">
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                Location
              </h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Classical Persian Music Retreat Center<br />
                Corpus Christi, Texas
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-8">
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                Contact Information
              </h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Email: info@radif-retreat.com<br />
                Phone: (Coming Soon)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

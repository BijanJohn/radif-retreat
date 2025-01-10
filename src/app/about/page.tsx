import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
            About Fared Shafinury
          </h1>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-lg leading-8 text-gray-600 space-y-8">
              <p>
                Fared Shafinury is an internationally acclaimed Iranian American artist and master of Classical Persian music.
                Based in Corpus Christi, Texas, he has dedicated his life to preserving and sharing the rich traditions of
                Persian classical music with students from around the world.
              </p>
              <p>
                As the founder of the Classical Persian Music Retreat Center, Fared creates an immersive environment where
                students can deeply engage with the musical traditions of Iran. His teaching methodology combines traditional
                Persian musical education with modern pedagogical approaches, making this ancient art form accessible to
                contemporary students.
              </p>
              <p>
                The retreat center, located in the serene setting of Corpus Christi, provides an ideal environment for
                focused study and practice. Our facility includes dedicated practice rooms, performance spaces, and
                areas for group instruction, all designed to support your musical journey.
              </p>
            </div>
            <div className="space-y-8">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/massoud-setar.jpg"
                  alt="Master musician playing the Persian Setar"
                  width={720}
                  height={960}
                  className="w-full object-cover"
                />
                <p className="mt-2 text-sm text-gray-500 text-center">
                  Image: Persian Setar performance (Credit: Wikimedia Commons)
                </p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/setar.jpg"
                  alt="Traditional Persian Setar instrument"
                  width={320}
                  height={427}
                  className="w-full object-cover"
                />
                <p className="mt-2 text-sm text-gray-500 text-center">
                  Image: Persian Setar (Credit: Wikimedia Commons)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

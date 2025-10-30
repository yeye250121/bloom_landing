'use client';

import Script from 'next/script';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ConsultationForm from '@/components/ConsultationForm';
import Features from '@/components/Features';
import FeatureList from '@/components/FeatureList';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* Kakao Pixel */}
      <Script
        id="kakao-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            kakaoPixel('4341098074617891089').pageView();
          `,
        }}
      />

      {/* Config Script */}
      <Script src="/config.js" strategy="beforeInteractive" />

      <main>
        <ConsultationForm />
        <Hero />
        <Features />
        <FeatureList />
        <Footer />
      </main>
    </>
  );
}

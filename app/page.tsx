'use client';

import Script from 'next/script';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ConsultationForm from '@/components/ConsultationForm';
import HowToParticipate from '@/components/HowToParticipate';
import SpecialBenefits from '@/components/SpecialBenefits';
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
        <section className="hero-image">
          <img
            src="https://hvwgs4k77hcs8ntu.public.blob.vercel-storage.com/%5B%EC%B5%9C%EC%A2%85%5D%20-%20%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%20%2818%29.jpg"
            alt="KT 텔레캅"
          />
        </section>
        <HowToParticipate />
        <SpecialBenefits />
        <Hero />
        <Features />
        <FeatureList />
        <Footer />
      </main>
    </>
  );
}

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
        <section className="hero-image">
          <img
            src="https://postfiles.pstatic.net/MjAyNTEwMzBfMTAg/MDAxNzYxODE2NTU3NTI4.6vwqr39MTBLHXqS0PXYayoeqIroB1r-NVpN32Tnb2TAg.0XMZKuj19-obTuh88ngErCLzs1me9nCKCAzOnUwN84wg.JPEG/%EC%B5%9C%EC%A2%85_-_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80_(18).jpg?type=w773"
            alt="KT 텔레캅"
          />
        </section>
        <Features />
        <FeatureList />
        <Footer />
      </main>
    </>
  );
}

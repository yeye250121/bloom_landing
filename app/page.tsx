import Header from '@/components/Header';
import FormSection from '@/components/FormSection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          {/* 타이틀 섹션 */}
          <section className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark leading-relaxed">
              상담 신청하고<br />KT CCTV 설치하기
            </h2>
          </section>

          {/* 폼 섹션 */}
          <FormSection />

          {/* 기능 소개 */}
          <FeaturesSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

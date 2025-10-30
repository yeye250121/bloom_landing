const features = [
  {
    icon: '📹',
    title: '고화질 영상',
    description: '선명한 화질로 모든 순간을 기록합니다',
  },
  {
    icon: '📱',
    title: '모바일 모니터링',
    description: '언제 어디서나 스마트폰으로 확인',
  },
  {
    icon: '🔒',
    title: '안전한 보안',
    description: '24시간 안정적인 보안 서비스',
  },
  {
    icon: '⚡',
    title: '빠른 설치',
    description: '전문가의 신속한 설치 서비스',
  },
];

export default function FeaturesSection() {
  return (
    <section className="mt-20 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-12">
        안전한 KT CCTV로<br />소중한 공간을 지키세요
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="p-8 rounded-2xl bg-background-gray transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-text-dark mb-2">
              {feature.title}
            </h3>
            <p className="text-text-light">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

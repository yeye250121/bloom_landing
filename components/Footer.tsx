export default function Footer() {
  return (
    <footer className="bg-text-dark text-background-gray py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div>
            <h4 className="text-white font-semibold mb-2">고객센터</h4>
            <p className="text-text-light text-sm">
              전화: 1588-0000 (평일 9시~18시)
            </p>
          </div>
          <div className="text-text-light text-sm">
            <p>
              본 페이지는 KT CCTV 상담 신청을 위한 페이지입니다.<br />
              입력하신 정보는 상담 목적으로만 사용됩니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

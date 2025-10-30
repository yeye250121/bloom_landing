interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-2xl p-8 sm:p-10 max-w-md w-full text-center animate-in fade-in slide-in-from-bottom-4 duration-300">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6">
          ✓
        </div>
        <h2 className="text-2xl font-bold text-text-dark mb-3">
          상담 신청이 완료되었습니다!
        </h2>
        <p className="text-text-medium mb-8">
          빠른 시일 내에 연락드리겠습니다.<br />
          감사합니다.
        </p>
        <button
          onClick={onClose}
          className="w-full h-14 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl transition-colors"
        >
          확인
        </button>
      </div>
    </div>
  );
}

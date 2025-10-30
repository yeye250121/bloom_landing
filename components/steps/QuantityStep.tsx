interface QuantityStepProps {
  quantity: string;
  privacyAgree: boolean;
  errors: { quantity?: string; privacyAgree?: string };
  onQuantityChange: (value: string) => void;
  onPrivacyChange: (value: boolean) => void;
  onSubmit: () => void;
  onPrev: () => void;
}

const quantities = ['1대', '2대', '3대', '4대', '5대', '6대 이상'];

export default function QuantityStep({
  quantity,
  privacyAgree,
  errors,
  onQuantityChange,
  onPrivacyChange,
  onSubmit,
  onPrev,
}: QuantityStepProps) {
  return (
    <div className="space-y-7">
      <h3 className="text-2xl font-bold text-text-dark leading-relaxed">
        설치하실 CCTV<br />대수를 선택해주세요.
      </h3>

      <div className="space-y-2">
        <label htmlFor="quantity" className="block text-base font-semibold text-text-dark">
          설치대수 <span className="text-red-500">*</span>
        </label>
        <select
          id="quantity"
          value={quantity}
          onChange={(e) => onQuantityChange(e.target.value)}
          className={`
            w-full h-14 px-4 pr-10 rounded-xl border-2 text-base
            focus:outline-none focus:ring-4 focus:ring-primary/10
            transition-colors appearance-none
            bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDEuNUw2IDYuNUwxMSAxLjUiIHN0cm9rZT0iIzkxOUJBOCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==')] bg-no-repeat bg-[right_1rem_center]
            ${errors.quantity ? 'border-red-500' : 'border-border focus:border-primary'}
            ${!quantity && 'text-text-light'}
          `}
        >
          <option value="">대수를 선택하세요</option>
          {quantities.map((qty) => (
            <option key={qty} value={qty}>{qty}</option>
          ))}
        </select>
        {errors.quantity && <p className="text-sm text-red-500 mt-1">{errors.quantity}</p>}
      </div>

      {/* 개인정보 동의 */}
      <div className="p-5 bg-background-gray rounded-xl space-y-3">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={privacyAgree}
            onChange={(e) => onPrivacyChange(e.target.checked)}
            className="mt-1 w-5 h-5 rounded border-border text-primary focus:ring-primary focus:ring-2"
          />
          <span className="text-sm font-medium text-text-dark">
            개인정보 수집 및 이용에 동의합니다. <span className="text-red-500">*</span>
          </span>
        </label>
        <div className="ml-8 text-xs text-text-light space-y-1">
          <p>수집항목: 전화번호, 설치지역, 설치대수</p>
          <p>이용목적: 상담 및 서비스 제공</p>
          <p>보유기간: 상담 완료 후 6개월</p>
        </div>
        {errors.privacyAgree && <p className="text-sm text-red-500 ml-8">{errors.privacyAgree}</p>}
      </div>

      <div className="flex gap-3">
        <button
          onClick={onPrev}
          className="flex-1 h-14 bg-background-gray hover:bg-gray-200 text-text-dark font-semibold text-lg rounded-xl transition-colors"
        >
          이전
        </button>
        <button
          onClick={onSubmit}
          className="flex-1 h-14 bg-primary hover:bg-primary-hover text-white font-semibold text-lg rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg"
        >
          상담 신청
        </button>
      </div>
    </div>
  );
}

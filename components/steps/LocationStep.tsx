interface LocationStepProps {
  location: string;
  error?: string;
  onChange: (value: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

const locations = [
  '서울', '경기', '인천', '강원',
  '대전', '세종', '충남', '충북',
  '부산', '울산', '경남', '경북', '대구',
  '광주', '전남', '전북', '제주'
];

export default function LocationStep({ location, error, onChange, onNext, onPrev }: LocationStepProps) {
  return (
    <div className="space-y-7">
      <h3 className="text-2xl font-bold text-text-dark leading-relaxed">
        설치하실 지역을<br />선택해주세요.
      </h3>

      <div className="space-y-2">
        <label htmlFor="location" className="block text-base font-semibold text-text-dark">
          설치지역 <span className="text-red-500">*</span>
        </label>
        <select
          id="location"
          value={location}
          onChange={(e) => onChange(e.target.value)}
          className={`
            w-full h-14 px-4 pr-10 rounded-xl border-2 text-base
            focus:outline-none focus:ring-4 focus:ring-primary/10
            transition-colors appearance-none
            bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDEuNUw2IDYuNUwxMSAxLjUiIHN0cm9rZT0iIzkxOUJBOCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==')] bg-no-repeat bg-[right_1rem_center]
            ${error ? 'border-red-500' : 'border-border focus:border-primary'}
            ${!location && 'text-text-light'}
          `}
        >
          <option value="">지역을 선택하세요</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>

      <div className="flex gap-3">
        <button
          onClick={onPrev}
          className="flex-1 h-14 bg-background-gray hover:bg-gray-200 text-text-dark font-semibold text-lg rounded-xl transition-colors"
        >
          이전
        </button>
        <button
          onClick={onNext}
          className="flex-1 h-14 bg-primary hover:bg-primary-hover text-white font-semibold text-lg rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg"
        >
          다음
        </button>
      </div>
    </div>
  );
}

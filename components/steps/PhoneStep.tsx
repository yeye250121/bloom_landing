interface PhoneStepProps {
  phone: string;
  error?: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

export default function PhoneStep({ phone, error, onChange, onNext }: PhoneStepProps) {
  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');

    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    } else {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    onChange(formatted);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onNext();
    }
  };

  return (
    <div className="space-y-7">
      <h3 className="text-2xl font-bold text-text-dark leading-relaxed">
        상담을 위해<br />전화번호를 입력해주세요.
      </h3>

      <div className="space-y-2">
        <label htmlFor="phone" className="block text-base font-semibold text-text-dark">
          전화번호 <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="010-0000-0000"
          maxLength={13}
          autoComplete="tel"
          className={`
            w-full h-14 px-4 rounded-xl border-2 text-base
            focus:outline-none focus:ring-4 focus:ring-primary/10
            transition-colors
            ${error ? 'border-red-500' : 'border-border focus:border-primary'}
          `}
        />
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>

      <button
        onClick={onNext}
        className="w-full h-14 bg-primary hover:bg-primary-hover text-white font-semibold text-lg rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg"
      >
        다음
      </button>
    </div>
  );
}

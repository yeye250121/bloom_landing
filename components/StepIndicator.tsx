import type { StepNumber } from '@/types/form';

interface StepIndicatorProps {
  currentStep: StepNumber;
}

const steps = [
  { number: 1, label: '전화번호' },
  { number: 2, label: '설치지역' },
  { number: 3, label: '설치대수' },
];

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="relative">
      {/* 연결선 */}
      <div className="absolute top-5 left-1/4 right-1/4 h-0.5 bg-border" />

      {/* 단계 */}
      <div className="relative flex justify-between">
        {steps.map((step) => {
          const isActive = currentStep === step.number;
          const isCompleted = currentStep > step.number;

          return (
            <div key={step.number} className="flex flex-col items-center z-10">
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-semibold text-base mb-2
                  transition-colors duration-200
                  ${
                    isActive || isCompleted
                      ? 'bg-primary text-white'
                      : 'bg-background-gray text-text-light'
                  }
                `}
              >
                {step.number}
              </div>
              <span
                className={`
                  text-sm font-medium
                  ${isActive || isCompleted ? 'text-text-dark' : 'text-text-light'}
                `}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

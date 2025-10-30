'use client';

import { useState, useEffect } from 'react';
import type { FormData, FormErrors, StepNumber } from '@/types/form';
import StepIndicator from './StepIndicator';
import PhoneStep from './steps/PhoneStep';
import LocationStep from './steps/LocationStep';
import QuantityStep from './steps/QuantityStep';
import SuccessModal from './SuccessModal';

export default function FormSection() {
  const [currentStep, setCurrentStep] = useState<StepNumber>(1);
  const [formData, setFormData] = useState<FormData>({
    phone: '',
    location: '',
    quantity: '',
    privacyAgree: false,
    referrer: '',
    timestamp: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // 유입 페이지 기록
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      referrer: document.referrer || 'Direct',
    }));
  }, []);

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // 에러 초기화
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const validateStep = (step: StepNumber): boolean => {
    const newErrors: FormErrors = {};

    switch (step) {
      case 1:
        if (!formData.phone) {
          newErrors.phone = '전화번호를 입력해주세요.';
        } else if (!/^01[0-9]-\d{4}-\d{4}$/.test(formData.phone)) {
          newErrors.phone = '올바른 전화번호 형식이 아닙니다. (예: 010-1234-5678)';
        }
        break;
      case 2:
        if (!formData.location) {
          newErrors.location = '설치지역을 선택해주세요.';
        }
        break;
      case 3:
        if (!formData.quantity) {
          newErrors.quantity = '설치대수를 선택해주세요.';
        }
        if (!formData.privacyAgree) {
          newErrors.privacyAgree = '개인정보 수집 및 이용에 동의해주세요.';
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 3) as StepNumber);
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1) as StepNumber);
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) return;

    const submitData = {
      ...formData,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      if (response.ok) {
        setShowSuccessModal(true);
        // 폼 초기화
        setTimeout(() => {
          setFormData({
            phone: '',
            location: '',
            quantity: '',
            privacyAgree: false,
            referrer: document.referrer || 'Direct',
            timestamp: '',
          });
          setCurrentStep(1);
          setShowSuccessModal(false);
        }, 3000);
      } else {
        alert('오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  return (
    <>
      <section className="max-w-2xl mx-auto mb-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10">
          <StepIndicator currentStep={currentStep} />

          <div className="mt-10">
            {currentStep === 1 && (
              <PhoneStep
                phone={formData.phone}
                error={errors.phone}
                onChange={(value) => updateFormData('phone', value)}
                onNext={nextStep}
              />
            )}
            {currentStep === 2 && (
              <LocationStep
                location={formData.location}
                error={errors.location}
                onChange={(value) => updateFormData('location', value)}
                onNext={nextStep}
                onPrev={prevStep}
              />
            )}
            {currentStep === 3 && (
              <QuantityStep
                quantity={formData.quantity}
                privacyAgree={formData.privacyAgree}
                errors={{ quantity: errors.quantity, privacyAgree: errors.privacyAgree }}
                onQuantityChange={(value) => updateFormData('quantity', value)}
                onPrivacyChange={(value) => updateFormData('privacyAgree', value)}
                onSubmit={handleSubmit}
                onPrev={prevStep}
              />
            )}
          </div>
        </div>
      </section>

      <SuccessModal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
    </>
  );
}

export interface FormData {
  phone: string;
  location: string;
  quantity: string;
  privacyAgree: boolean;
  referrer: string;
  timestamp: string;
}

export interface FormStep {
  step: number;
  title: string;
  description?: string;
}

export interface FormErrors {
  phone?: string;
  location?: string;
  quantity?: string;
  privacyAgree?: string;
}

export type StepNumber = 1 | 2 | 3;

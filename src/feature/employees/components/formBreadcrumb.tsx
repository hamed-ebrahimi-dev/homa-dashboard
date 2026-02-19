"use client";

import { ChevronLeft } from "lucide-react";

export interface FormStep {
  label: string;
  completed?: boolean;
}

interface FormBreadcrumbProps {
  steps: FormStep[];
  currentStep: number;
}

export const FormBreadcrumb = ({ steps, currentStep }: FormBreadcrumbProps) => {
  return (
    <div className=" px-6 py-4">
      <div className="flex items-center justify-center gap-2" dir="rtl">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-2">
            {index > 0 && <ChevronLeft className="h-5 w-5 text-gray-400" />}
            <span
              className={`text-[14px] ${
                index === currentStep
                  ? "text-primary-600 font-medium"
                  : index < currentStep
                    ? "text-gray-900 font-normal"
                    : "text-gray-400 font-normal"
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

"use client";

import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, Trash2 } from "lucide-react";
import Image from "next/image";
import { FormBreadcrumb } from "./formBreadcrumb";
import { PersonalInfoStep } from "./PersonalInfoStep";
import { Button } from "@/src/base/components/ui/button";
import { addEmployeeSchema, type AddEmployeeFormData } from "../schemas/addEmployeeSchema";
import { EducationStep } from "./EducationStep";
import { EmploymentStep } from "./EmploymentStep";

const FORM_STEPS = [
  { label: "اطلاعات شخصی", image: "/assets/image/addEmployeesImage.png" },
  { label: "سوابق تحصیلی", image: "/assets/image/addEmployeesImage.png" },
  { label: "سوابق شغلی", image: "/assets/image/interview section.png" },
];

const STORAGE_KEY = "employee-form-state";

type SavedFormState = {
  currentStep: number;
  formValues: Partial<AddEmployeeFormData>;
};

export const AddEmployeeForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const methods = useForm<AddEmployeeFormData>({
    resolver: zodResolver(addEmployeeSchema),
    mode: "onChange",
  });

  useEffect(() => {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      try {
        const { currentStep: savedStep, formValues } = JSON.parse(savedState) as SavedFormState;
        setCurrentStep(savedStep);
        methods.reset(formValues);
      } catch (error) {
        console.error("Failed to restore form state:", error);
      }
    }
  }, [methods]);

  const saveFormState = (step: number) => {
    const formValues = methods.getValues();
    const state: SavedFormState = {
      currentStep: step,
      formValues,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  };

  const clearFormState = () => {
    localStorage.removeItem(STORAGE_KEY);
    methods.reset();
    setCurrentStep(0);
  };

  const nextStep = async () => {
    let fieldsToValidate: (keyof AddEmployeeFormData)[] = [];

    if (currentStep === 0) {
      fieldsToValidate = ["firstName", "lastName", "nationalCode", "phone", "address"];
    } else if (currentStep === 1) {
      fieldsToValidate = ["degree", "field", "university", "graduationYear"];
    } else if (currentStep === 2) {
      fieldsToValidate = ["position", "department", "employmentType", "startDate", "salary"];
    }

    const isValid = await methods.trigger(fieldsToValidate);

    if (!isValid) {
      return;
    }

    if (currentStep < FORM_STEPS.length - 1) {
      const nextStepIndex = currentStep + 1;
      setCurrentStep(nextStepIndex);
      saveFormState(nextStepIndex);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      const prevStepIndex = currentStep - 1;
      setCurrentStep(prevStepIndex);
      saveFormState(prevStepIndex);
    }
  };

  const onSubmit = async (data: AddEmployeeFormData) => {
    try {
      console.log("Final form data:", data);
      clearFormState();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="min-h-screen bg-[#F8F9FC] p-6">
        <div className="max-w-[1200px] mx-auto space-y-6">
          <FormBreadcrumb steps={FORM_STEPS} currentStep={currentStep} />

          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="bg-white rounded-[16px] overflow-hidden">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-7 p-8">
                  {currentStep === 0 && <PersonalInfoStep />}
                  {currentStep === 1 && <EducationStep />}
                  {currentStep === 2 && <EmploymentStep />}
                </div>

                <div className="col-span-5 flex items-center justify-center p-8">
                  <div className="relative h-[666px] w-[314px]">
                    <Image
                      src={FORM_STEPS[currentStep].image}
                      alt={FORM_STEPS[currentStep].label}
                      fill
                      className="object-contain"
                      quality={100}
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 p-6">
                <div className="flex justify-between items-center">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={clearFormState}
                    className="h-[48px] px-6 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-[12px]"
                  >
                    <Trash2 className="w-5 h-5 ml-2" />
                    پاک کردن فرم
                  </Button>

                  <div className="flex gap-3">
                    {currentStep > 0 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={previousStep}
                        className="h-[48px] px-8 rounded-[12px]"
                      >
                        مرحله قبل
                      </Button>
                    )}

                    {currentStep === FORM_STEPS.length - 1 ? (
                      <Button
                        type="submit"
                        className="bg-primary-600 hover:bg-primary-700 h-[48px] px-8 rounded-[12px]"
                      >
                        ذخیره و ادامه
                        <ChevronLeft className="w-5 h-5 mr-2" />
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="bg-primary-600 hover:bg-primary-700 h-[48px] px-8 rounded-[12px]"
                      >
                        ذخیره و ادامه
                        <ChevronLeft className="w-5 h-5 mr-2" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

// components/TermsAndNavigation.tsx
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { FormCheckbox } from "../shared/FormCheckbox";

interface TermsAndNavigationProps {
  form: any;
  isFormValid: boolean;
  nextPageUrl: string;
  handleBack: () => void;
}

export default function FormFooter({
  form,
  isFormValid,
  nextPageUrl,
  handleBack,
}: TermsAndNavigationProps) {
  const getStartedButtonStyles = {
    display: "flex",
    width: "128px",
    padding: "12px 24px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderRadius: "12px",
    background: "#316EED",
    color: "#FFFFFF",
    fontFamily: "Fustat",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };

  return (
    <>
      {/* Terms and Conditions Checkbox */}
      <div className="mt-6">
        <FormCheckbox
          control={form.control}
          name="acceptTerms"
          label="Accept RentYard property adding terms & condition"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-6">
        <Button variant="default" onClick={handleBack} className="px-6 underline">
          Back
        </Button>

        {isFormValid ? (
          <Link href={nextPageUrl}>
            <Button type="submit" style={getStartedButtonStyles}>
              Get Started
            </Button>
          </Link>
        ) : (
          <Button type="button" disabled style={getStartedButtonStyles}>
            Get Started
          </Button>
        )}
      </div>
    </>
  );
}

/**
 * ODUSBABA Employment Law Intelligence Registry
 * ---------------------------------------------
 * Purpose:
 * - Country-aware labour law resolution
 * - HR advisory reasoning
 * - Visa & dismissal compliance guidance
 *
 * NOTE:
 * - This file is READ-ONLY intelligence
 * - Enforcement happens elsewhere
 */

export type CountryCode =
  | "UK"
  | "US"
  | "CA"
  | "IE"
  | "DE"
  | "NG"
  | "ZA";

export type EmploymentLawProfile = {
  country: CountryCode;
  authorities: string[];
  dismissalRule: string;
  visaRequirement: string;
  riskNotes?: string[];
};

const LAW_REGISTRY: Record<CountryCode, EmploymentLawProfile> = {
  UK: {
    country: "UK",
    authorities: ["ACAS", "Employment Rights Act 1996"],
    dismissalRule:
      "Dismissal must be for a fair reason and follow a fair procedure",
    visaRequirement: "Right-to-work check is mandatory",
    riskNotes: [
      "Unfair dismissal claims apply after qualifying period",
      "ACAS early conciliation required before tribunal",
    ],
  },

  US: {
    country: "US",
    authorities: ["Department of Labor"],
    dismissalRule:
      "At-will employment applies unless exceptions exist",
    visaRequirement: "Valid employment authorization required",
    riskNotes: [
      "Discrimination and retaliation exceptions apply",
    ],
  },

  CA: {
    country: "CA",
    authorities: ["Provincial Employment Standards"],
    dismissalRule:
      "Notice or pay in lieu required except for just cause",
    visaRequirement: "Valid work permit required",
  },

  IE: {
    country: "IE",
    authorities: ["Workplace Relations Commission"],
    dismissalRule:
      "Unfair dismissal protections apply after 12 months",
    visaRequirement: "Employment permit required",
  },

  DE: {
    country: "DE",
    authorities: ["German Labour Courts"],
    dismissalRule:
      "Strong employee protection with strict dismissal justification",
    visaRequirement: "Residence and work permit required",
  },

  NG: {
    country: "NG",
    authorities: ["Labour Act"],
    dismissalRule:
      "Dismissal must comply with contract and statutory provisions",
    visaRequirement: "Expat quota and work permit required",
  },

  ZA: {
    country: "ZA",
    authorities: ["CCMA"],
    dismissalRule:
      "Substantive and procedural fairness required",
    visaRequirement: "Valid work visa required",
  },
};

/**
 * loadEmploymentLaw
 * -----------------
 * Returns the employment law profile for a given country.
 * This function does NOT enforce — it only informs.
 */
export function loadEmploymentLaw(
  country: CountryCode
): EmploymentLawProfile {
  return LAW_REGISTRY[country];
}

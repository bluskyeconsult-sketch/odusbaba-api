// lib/odusbaba/law.ts

export type CountryCode =
  | "UK"
  | "US"
  | "CA"
  | "IE"
  | "DE"
  | "NG"
  | "ZA";

export function loadEmploymentLaw(country: CountryCode) {
  const registry = {
    UK: {
      authority: ["ACAS", "Employment Rights Act"],
      dismissal: "Fair reason + procedure required",
      visa: "Right-to-work mandatory",
    },
    US: {
      authority: ["Department of Labor"],
      dismissal: "At-will employment (exceptions apply)",
      visa: "Employment authorization required",
    },
    CA: {
      authority: ["Provincial Employment Standards"],
      dismissal: "Notice or pay in lieu required",
      visa: "Work permit required",
    },
    IE: {
      authority: ["Workplace Relations Commission"],
      dismissal: "Unfair dismissal protections apply",
      visa: "Employment permit required",
    },
    DE: {
      authority: ["German Labour Courts"],
      dismissal: "Strong employee protection",
      visa: "Residence + work permit required",
    },
    NG: {
      authority: ["Labour Act"],
      dismissal: "Contractual compliance required",
      visa: "Expat quota & work permit required",
    },
    ZA: {
      authority: ["CCMA"],
      dismissal: "Substantive & procedural fairness",
      visa: "Work visa required",
    },
  };

  return registry[country];
}

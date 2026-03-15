// lib/odusbaba/law.ts

export type CountryCode = "UK" | "NG" | "US" | "CA" | "EU";

export function getEmploymentLaw(country: CountryCode) {
  const laws = {
    UK: {
      minimumWage: "National Minimum Wage applies",
      visaRules: "Right-to-work check mandatory",
      contract: "Written statement required",
    },
    NG: {
      minimumWage: "National Minimum Wage Act",
      visaRules: "Work permit required for foreigners",
      contract: "Written contract recommended",
    },
    US: {
      minimumWage: "Federal & State minimum wage",
      visaRules: "Employment authorization required",
      contract: "At-will employment common",
    },
    CA: {
      minimumWage: "Provincial minimum wage",
      visaRules: "Work permit required",
      contract: "Employment standards by province",
    },
    EU: {
      minimumWage: "Country-specific",
      visaRules: "Work authorization varies",
      contract: "EU labor directives apply",
    },
  };

  return laws[country];
}

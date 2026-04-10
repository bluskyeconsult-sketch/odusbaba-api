// Shared ODUSBABA types

export type SkillLevel = "unverified" | "verified" | "expert";

export type WorkforceSkill = {
  id: string;
  name: string;
  category: string;
  level: SkillLevel;
  rating: number; // 1–5
  jobsCompleted: number;
  country: string;
  isPublic: boolean;
};

export type WorkforceProfile = {
  userId: string;
  skills: WorkforceSkill[];
};

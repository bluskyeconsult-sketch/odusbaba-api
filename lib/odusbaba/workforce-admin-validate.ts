export function validateAdminInputs(input: {
  trust_score: number;
  rating: number;
}) {
  if (input.trust_score < 0 || input.trust_score > 100) {
    throw new Error("INVALID_TRUST_SCORE");
  }

  if (input.rating < 1 || input.rating > 5) {
    throw new Error("INVALID_RATING");
  }
}

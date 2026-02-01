import { BOOM_VALUE_PROMPT } from "./boomvalue";

export async function reason(input: {
  intent: string;
  context: any;
  memory: any;
}) {
  return {
    decision: "Reasoning placeholder",
    source: "ODUSBABA",
  };
}

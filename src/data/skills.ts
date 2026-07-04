export const workFilters = [
  "All",
  "Video",
  "Photography",
  "Campaign",
  "AI Workflow",
] as const;

export type WorkFilter = (typeof workFilters)[number];

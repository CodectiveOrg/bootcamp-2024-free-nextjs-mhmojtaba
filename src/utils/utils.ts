import { FiltersType, SearchParams } from "@/types/types";

export function generateDefaultFilters(
  searchParams: SearchParams,
): FiltersType {
  const { query, expertise, gender, degree, option } = searchParams;

  return {
    query: normalizeFilter(query),
    expertise: normalizeFilter(expertise),
    gender: normalizeFilter(gender),
    degree: normalizeFilter(degree),
    option: normalizeFilter(option),
  };
}

function normalizeFilter(
  value: string | string[] | undefined,
): string | undefined {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

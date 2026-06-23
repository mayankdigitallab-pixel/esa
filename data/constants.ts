// Single source of truth for derived facts about ESA.
// Anything that depends on the year should derive from FOUNDING_YEAR.

export const FOUNDING_YEAR = 2015;

/** Number of full years since founding, computed at runtime / build time. */
export function yearsSince(year: number = FOUNDING_YEAR): number {
  return new Date().getFullYear() - year;
}

/** Human-friendly label like "Since 2015". */
export const SINCE_LABEL = `Since ${FOUNDING_YEAR}`;

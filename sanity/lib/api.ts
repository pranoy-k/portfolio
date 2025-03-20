/**
 * As this file is reused in several other files, try to keep it lean and small.
 * Importing other npm packages here could lead to needlessly increasing the client bundle size, or end up in a server-only function that don't need it.
 */

// Using static values instead of environment variables
export const dataset = "dummy-dataset";
export const projectId = "dummy-project-id";

// see https://www.sanity.io/docs/api-versioning for how versioning works
export const apiVersion = "2023-06-21";

// See the app/api/revalidate/route.ts for how this is used
export const revalidateSecret = "dummy-secret";

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
/**
 * Used to configure edit intent links, for Presentation Mode, as well as to configure where the Studio is mounted in the router.
 */
export const studioUrl = "/studio";

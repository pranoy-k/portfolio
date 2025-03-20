import "server-only";
import { experimental_taintUniqueValue } from "react";

// Using a dummy token instead of requiring an environment variable
export const token = "dummy-token";

// No need to check for token existence since we're providing a static value

experimental_taintUniqueValue(
  "Do not pass the sanity API read token to the client.",
  process,
  token,
);

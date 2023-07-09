import { splitComponenteStringProps } from "./types";

export function splitComponentString({
  input,
}: {
  input: string;
}): splitComponenteStringProps {
  const parts = input.split(":");

  const component = parts[0].split("@")[0].trim();

  const URL = parts[1];

  return {
    component,
    URL,
  };
}

import { getErrorLocation } from "../getErrorLocation";

export function handleError({ message }: { message: string }) {
  const location = getErrorLocation();
  throw new Error(`${message}\n${location}`);
}

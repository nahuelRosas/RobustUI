import { splitComponentString } from "../splitComponenteString";

export function getErrorLocation(): string {
  try {
    throw new Error();
  } catch (error) {
    if (error instanceof Error && error.stack) {
      const stackLines = error.stack.split("\n");
      let locationLine: string = "";

      for (let i = 1; i < stackLines.length; i++) {
        if (
          !stackLines[i].includes("/node_modules/") &&
          !stackLines[i].includes("packages/robust-")
        ) {
          locationLine = stackLines[i].trim();
          break;
        }
      }

      const locationObject = splitComponentString({
        input: locationLine,
      });

      return `Location: ${locationObject.component} ${locationObject.URL}`;
    }

    return "Unknown Location";
  }
}

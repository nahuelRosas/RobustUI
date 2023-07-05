export function getErrorLocation(): string {
  try {
    throw new Error();
  } catch (error: unknown) {
    if (error instanceof Error) {
      if (error.stack) {
        const stackLines = error.stack.split("\n");
        const locationLine = stackLines[2]?.trim();
        const regex = /\((.*):(\d+):(\d+)\)$/;
        const match = regex.exec(locationLine);

        if (match) {
          const [, fileName, lineNumber, columnNumber] = match;
          return `${fileName}:${lineNumber}:${columnNumber}`;
        }
      }
    }

    return "Unknown Location";
  }
}

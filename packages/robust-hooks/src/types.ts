// export type debounceFunction<T extends (...args: unknown[]) => void> = (
//   ...args: Parameters<T>
// ) => void;

// export interface debounce<T extends (...args: unknown[]) => void> {
//   fn: T;
//   delay: number;
// }

// export type imageEvent = React.SyntheticEvent<HTMLImageElement, Event>;

// export interface useImage {
//   src?: string;
//   srcSet?: string;
//   onLoad?: (event: imageEvent) => void;
//   onError?: (error: string) => void;
//   crossOrigin?: "anonymous" | "use-credentials" | "";
//   sizes?: string;
//   ignoreFallback?: boolean;
//   delay?: number;
// }

export * from "./useGlobalContext/types";

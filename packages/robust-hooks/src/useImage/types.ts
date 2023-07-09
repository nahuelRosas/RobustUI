export type ImageEvent = React.SyntheticEvent<HTMLImageElement, Event>;

export type UseImageProps = {
  src?: string;
  srcSet?: string;
  onLoad?: (event: ImageEvent) => void;
  onError?: (error: string) => void;
  crossOrigin?: "anonymous" | "use-credentials" | "";
  sizes?: string;
  ignoreFallback?: boolean;
  delay?: number;
};

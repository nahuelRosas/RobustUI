import { useRef, useState, useEffect, useCallback } from "react";
import { UseImageT, ImageEvent } from "@robust/hooks";

export function useImage({
  src,
  srcSet,
  onLoad,
  onError,
  crossOrigin,
  sizes,
  ignoreFallback = false,
  delay = 1200,
}: UseImageT): string {
  // const [imagesLoaded, setImagesLoaded] = useGlobalState<string[]>({
  // 	defaultValue: [],
  // 	key: 'imagesLoaded',
  // });
  const [imagesLoaded, setImagesLoaded] = useState<string[]>([]);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [status, setStatus] = useState("pending");
  const [isDelayed, setIsDelayed] = useState<boolean>(true);
  const [_ignoreFallback, setIgnoreFallback] =
    useState<boolean>(ignoreFallback);

  useEffect(() => {
    if (!src && !isDelayed) {
      setStatus("failed");
      return;
    } else if (imagesLoaded.includes(src as string)) {
      setIgnoreFallback(true);
      return;
    } else {
      setStatus("loading");
    }
  }, [src, imagesLoaded, _ignoreFallback, isDelayed]);

  const cleanupImage = useCallback(() => {
    const image = imageRef.current;
    if (image) {
      image.onload = null;
      image.onerror = null;
      imageRef.current = null;
    }
  }, []);

  const load = useCallback(() => {
    if (!src) return;

    if (imagesLoaded.includes(src)) {
      setStatus("loaded");
      return;
    }

    cleanupImage();

    const image = new Image();
    image.src = src;

    if (crossOrigin) {
      image.crossOrigin = crossOrigin;
    }

    if (srcSet) {
      image.srcset = srcSet;
    }

    if (sizes) {
      image.sizes = sizes;
    }

    image.onload = (event) => {
      setStatus("loaded");
      setImagesLoaded((imagesLoaded) =>
        imagesLoaded.includes(src) ? imagesLoaded : [...imagesLoaded, src]
      );
      cleanupImage();
      if (onLoad) {
        onLoad(event as unknown as ImageEvent);
      }
    };

    image.onerror = (error) => {
      cleanupImage();
      setStatus("failed");
      if (onError) {
        onError(error as string);
      }
    };

    imageRef.current = image;
  }, [
    src,
    imagesLoaded,
    cleanupImage,
    crossOrigin,
    srcSet,
    sizes,
    setImagesLoaded,
    onLoad,
    onError,
  ]);

  useEffect(() => {
    if (_ignoreFallback) {
      return;
    }

    if (status === "loading") {
      const timeoutId = setTimeout(() => {
        setIsDelayed(true);
        load();
      }, delay);

      return () => clearTimeout(timeoutId);
    }

    return cleanupImage;
  }, [status, load, delay, _ignoreFallback, cleanupImage]);

  useEffect(() => {
    return () => {
      cleanupImage();
    };
  }, [cleanupImage]);

  return _ignoreFallback ? "loaded" : isDelayed ? status : "loading";
}

import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

/**
 * Componente de imagem otimizada com:
 * - Suporte a WebP com fallback para JPG/PNG
 * - Lazy loading nativo
 * - Width e height explícitos para evitar CLS
 * - Placeholder durante carregamento
 */
export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Gera o caminho WebP a partir do caminho original
  const getWebPSrc = (originalSrc: string): string => {
    const lastDot = originalSrc.lastIndexOf('.');
    if (lastDot === -1) return originalSrc;
    return originalSrc.substring(0, lastDot) + '.webp';
  };

  const webpSrc = getWebPSrc(src);
  const finalLoading = priority ? 'eager' : loading;

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <picture>
      {!hasError && (
        <source srcSet={webpSrc} type="image/webp" />
      )}
      <img
        src={hasError ? src : webpSrc}
        alt={alt}
        width={width}
        height={height}
        loading={finalLoading}
        decoding="async"
        className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined,
        }}
      />
    </picture>
  );
};

export default OptimizedImage;

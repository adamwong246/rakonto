export const getApiUrl = (): string => {
  // Use the injected config if available
  if (typeof window !== 'undefined' && (window as any).INDRA_CONFIG?.API_URL) {
    return (window as any).INDRA_CONFIG.API_URL;
  }
  
  // Fallback for local development
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000';
  }
  
  // Empty string will use relative URLs as last resort
  return '';
};

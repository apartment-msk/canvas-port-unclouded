import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    ym: (id: number, method: string, ...args: any[]) => void;
  }
}

export const useYandexMetrika = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.ym) {
      window.ym(104380673, 'hit', window.location.href);
    }
  }, [location]);
};

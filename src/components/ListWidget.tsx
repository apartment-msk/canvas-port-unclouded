import { useEffect, useRef } from "react";

interface ListWidgetProps {
  className?: string;
}

declare global {
  interface Window {
    homereserve: {
      initWidgetSearch: (config: { token: string }) => void;
      initWidgetList: (config: { token: string }) => void;
    };
  }
}

export function ListWidget({ className }: ListWidgetProps) {
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Prevent double loading in development mode
    if (scriptLoadedRef.current) return;
    scriptLoadedRef.current = true;

    // Check if script already exists
    const existingScript = document.querySelector('script[src="https://homereserve.ru/widget.js"]');
    
    if (existingScript) {
      // Script already loaded, just initialize
      if (window.homereserve && window.homereserve.initWidgetList) {
        window.homereserve.initWidgetList({ token: "HYkUIAGFQD" });
      }
      return;
    }

    // Load the widget script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://homereserve.ru/widget.js';
    script.async = true;
    
    script.onload = () => {
      console.log('HomeReserve widget script loaded');
      if (window.homereserve && window.homereserve.initWidgetList) {
        window.homereserve.initWidgetList({ token: "HYkUIAGFQD" });
        console.log('HomeReserve widget initialized');
      } else {
        console.error('HomeReserve widget not available');
      }
    };

    script.onerror = () => {
      console.error('Failed to load HomeReserve widget script');
    };

    document.head.appendChild(script);

    return () => {
      scriptLoadedRef.current = false;
    };
  }, []);

  return (
    <div className={className}>
      <div id="hr-widget" className="w-full min-h-[600px]"></div>
    </div>
  );
}

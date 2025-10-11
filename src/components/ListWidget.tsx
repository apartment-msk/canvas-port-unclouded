import { useEffect } from "react";

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
  useEffect(() => {
    // Load the widget script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://homereserve.ru/widget.js';
    document.head.appendChild(script);

    // Initialize widget when script loads
    script.onload = () => {
      if (window.homereserve && window.homereserve.initWidgetList) {
        window.homereserve.initWidgetList({ token: "HYkUIAGFQD" });
      }
    };

    return () => {
      // Cleanup script if component unmounts
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className={className}>
      <div id="hr-widget" className="w-full"></div>
    </div>
  );
}

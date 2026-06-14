import React, { useEffect, createElement } from 'react';
export function SEO({ schema }: {schema: any;}) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [schema]);
  return null;
}
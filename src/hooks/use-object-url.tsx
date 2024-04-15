import { useState, useEffect } from "react";

export default function useObjectURL(data: Uint8Array | null) {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    let objectUrl: string | null = null;

    if (data) {
      objectUrl = URL.createObjectURL(new Blob([data]));
      setUrl(objectUrl);
    }

    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [data]);

  return url;
}

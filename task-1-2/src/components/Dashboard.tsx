import React, { useState, useEffect } from 'react';

export default function Dashboard() {
  const [result, setResult] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(true);

  useEffect(() => {
    // Create worker instance
    const worker = new Worker(
      new URL('../workers/compute.worker.ts', import.meta.url),
      { type: 'module' }
    );

    // Handle worker response
    worker.onmessage = (event: MessageEvent<number>) => {
      setResult(event.data);
      setIsCalculating(false);
    };

    // Start computation
    worker.postMessage(null);

    // Cleanup worker on unmount
    return () => worker.terminate();
  }, []);

  return (
    <div className="p-4">
      {isCalculating ? (
        <div>Calculating...</div>
      ) : (
        <div>Result: {result}</div>
      )}
    </div>
  );
}

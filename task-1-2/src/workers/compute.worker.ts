// Web Worker for heavy computation
self.onmessage = () => {
  let total = 0;
  for (let i = 0; i < 1e8; i++) {
    total += i;
  }
  self.postMessage(total);
};

// Add TypeScript type declaration
export {}; 
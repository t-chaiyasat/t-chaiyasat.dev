'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  
  return (
    <div className="container">
      <div className="m-3 text-center">
        <h5 className="">ERROR!</h5>
        <p>Oh No, Something Went Wrong... Try Refreshing!</p>
        <button
          onClick={
          // A function to reset the error boundary. When executed, the function 
          // will try to re-render the Error boundary's contents. If successful, 
          // the fallback error component is replaced with the result of the re-render.
          // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  );
}
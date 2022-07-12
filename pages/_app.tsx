import React, { useMemo, useState, createContext, useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
export const IsSignedInContext = createContext<{
  isSignedIn: string|undefined,
  setIsSignedIn: (isSigndIn: string) => void
} | null>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [isSignedIn, setIsSignedIn] = useState<string | undefined>();
  
  const getSignedIn = () => {
    // return undefined
    if (typeof window === "undefined")
      return undefined;
    const _isSignedIn = localStorage.getItem("userId");
    if (!_isSignedIn)
      return undefined
    return _isSignedIn
  }

  const isSignedInValue = useMemo(() => ({
    isSignedIn: getSignedIn(),
    setIsSignedIn: (newIsSignedIn: string) => {
      if (newIsSignedIn) {
        localStorage.setItem('userId', newIsSignedIn);
      }
      else {
        localStorage.removeItem("userId")
      }

      setIsSignedIn(newIsSignedIn);
    }
  }), [isSignedIn, setIsSignedIn])

  return (
    <IsSignedInContext.Provider value={isSignedInValue}>

      <Component {...pageProps} />;
    </IsSignedInContext.Provider>

  )
}

export default MyApp;

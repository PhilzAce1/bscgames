import React, { lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
const Bootstrap4 = lazy(() => import('./Bootstrap4'));
function ConditionalDesignLib({ children }) {
  const location = useLocation();
  return (
    <div className="App">
      <Suspense fallback={<></>}>
        {location.pathname !== '/' && <Bootstrap4 />}
      </Suspense>
      {children}
    </div>
  );
}

export default ConditionalDesignLib;

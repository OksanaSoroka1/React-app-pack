import React, {lazy, Suspense} from 'react';
import { Routes, Route} from 'react-router-dom'

const LazyEl = lazy(() => import('./features/pages'));

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading</p>}>
        <Routes>
          <Route path='/' element={<LazyEl/> }></Route>
        </Routes>

      </Suspense>
    </>
  );
}

export default App;

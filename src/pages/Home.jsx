import React, { lazy, Suspense } from 'react';
import SpinLoad from '../coponents/spinner/SpinLoad';

const LazyJobList = lazy(() => import('../coponents/joblist/JobList'));
const LazyBanner = lazy(() => import('../coponents/banner/Banner'))

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div className='flex justify-center'><SpinLoad></SpinLoad></div>}>
      <LazyBanner></LazyBanner>
        <LazyJobList />
      </Suspense>
    </div>
  );
}

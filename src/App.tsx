import {
  ConsistentSuspenseProvider,
  Suspense,
} from '@lomray/consistent-suspense';
import type { FC, PropsWithChildren } from 'react';
import { StrictMode } from 'react';
import './style.css';

const App: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConsistentSuspenseProvider>
      <Suspense fallback={<></>}>{children}</Suspense>
    </ConsistentSuspenseProvider>
  );
};

const AppStrict: FC<PropsWithChildren> = (props) => (
  <StrictMode>
    <App {...props} />
  </StrictMode>
);

export default AppStrict;

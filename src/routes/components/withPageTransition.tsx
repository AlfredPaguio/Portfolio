import React from 'react';
import PageTransition from './pageTransition';

type ReactComponent = React.FC;

const withPageTransition = (WrappedComponent: ReactComponent) => {
  return () => (
    <PageTransition>
      <WrappedComponent />
    </PageTransition>
  );
};

export default withPageTransition;
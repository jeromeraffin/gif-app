import React from 'react';
import Spinner from './Spinner';

const LoaderHOC = (WrappedComponent) =>
  ({ loading, ...props }) => loading
    ? <Spinner />
    : <WrappedComponent {...props}/>

export default LoaderHOC;

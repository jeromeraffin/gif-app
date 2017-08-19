import React from 'react';

const ErrorHOC = (WrappedComponent) =>
({...props}) => props.error
  ? <div>{props.gifs.error}</div>
  : <WrappedComponent {...props}/>

export default ErrorHOC;

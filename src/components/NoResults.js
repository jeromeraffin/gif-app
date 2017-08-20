import React from 'react';

const NoResultsHOC = (WrappedComponent) =>
({...props}) => (props.gifs.length === 0 && props.loaded)
  ? <div>No results for {props.searchParameter}</div>
  : <WrappedComponent {...props}/>

export default NoResultsHOC;

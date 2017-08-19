import React from 'react';

const NoResultsHOC = (WrappedComponent) =>
({...props}) => (props.gifs.length === 0 && props.loaded)
  ? <div>Aucun résultat</div>
  : <WrappedComponent {...props}/>

export default NoResultsHOC;

import React from 'react';

const CatGif = props => (
  <div>
    <iframe
      src={`https://giphy.com/embed/${props.id}`}
      width="480"
      height={props.height}
      frameBorder="0"
      className="giphy-embed"
      allowFullScreen
      title={props.id}
    />
    <p>{props.caption}</p>
    <button onClick={props.removeGif}>Remove this GIF</button>
  </div>
);

export default CatGif;

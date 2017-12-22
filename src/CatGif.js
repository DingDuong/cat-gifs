import React, { Component } from 'react';

class CatGif extends Component {

  render() {
    return (
      <div>
        <iframe 
          src={`https://giphy.com/embed/${this.props.id}`}
          width="480"
          height={this.props.height}
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
          title={this.props.id}
        />
        <p>{this.props.caption}</p>
        <button onClick={this.props.removeGif}>Remove this GIF</button>
      </div>
    )
  }
}

export default CatGif;

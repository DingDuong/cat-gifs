import React, { Component } from 'react';

class CatGif extends Component {
  render() {
    return <iframe 
              src={`https://giphy.com/embed/${this.props.id}`}
              width="480"
              height={this.props.height}
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
              title={this.props.id}
            />
  }
}

export default CatGif;

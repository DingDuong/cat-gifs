import React, { Component } from 'react';
import CatGif from "./CatGif";

class CatGifList extends Component {

  render() {
    const catGifs = this.props.gifs.map(gif => (
      <CatGif key={gif.id} id={gif.id} height={gif.height} />  
    ));

    return (
      <div>
        <h1>I HAVE {this.props.gifs.length} CAT GIFS OMGGGG</h1>
        {catGifs}
      </div>
    )
  }
}

CatGifList.defaultProps = {
  gifs: [{
    id: "3o72EX5QZ9N9d51dqo",
    height: "250"
  }, {
    id: "aC45M5Q4D07Pq",
    height: "360"
  }, {
    id: "W7dBXzbnEpOBG",
    height: "271"
  }, {
    id: "9gISqB3tncMmY",
    height: "270"
  }]
}

export default CatGifList;










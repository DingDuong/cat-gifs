import React, { Component } from 'react';
import CatGif from "./CatGif";

class CatGifList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      gifs: [
        {
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
        }
      ]
    }
  }

  handleRemove(idx) {
    const newGifs = [...this.state.gifs];
    newGifs.splice(idx, 1);
    this.setState({gifs: newGifs})
  }


  render() {
    const catGifs = this.state.gifs.map((gif,idx) => (
      <CatGif
        key={gif.id}
        id={gif.id}
        height={gif.height}
        removeGif={this.handleRemove.bind(this, idx)}
      />  
    ));

    return (
      <section>
        <h1>I HAVE {this.state.gifs.length} CAT GIFS OMGGGG</h1>
        {catGifs}
      </section>
    )
  }
}

export default CatGifList;










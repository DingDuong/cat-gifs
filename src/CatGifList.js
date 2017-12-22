import React, { Component } from 'react';
import CatGif from "./CatGif";
import NewGifForm from "./NewGifForm";

class CatGifList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      gifs: [
        {
          id: "3o72EX5QZ9N9d51dqo",
          height: "250",
          caption: "cats on turntables"
        }, {
          id: "aC45M5Q4D07Pq",
          height: "360",
          caption: "cat massage, v. relaxing"
        }, {
          id: "W7dBXzbnEpOBG",
          height: "271",
          caption: "i am going to pump your cats up"
        }, {
          id: "9gISqB3tncMmY",
          height: "270",
          caption: "use the force meow meow meow"
        }
      ]
    }
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newGif) {
    // this.setState({gifs: this.state.gifs.concat(newGif)})
    this.setState({gifs: [newGif, ...this.state.gifs]})
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
        caption={gif.caption}
        removeGif={this.handleRemove.bind(this, idx)}
      />  
    ));

    return (
      <section>
        <NewGifForm addGif={this.handleAdd} />
        <h1>I HAVE {this.state.gifs.length} CAT GIFS OMGGGG</h1>
        {catGifs}
      </section>
    )
  }
}

export default CatGifList;










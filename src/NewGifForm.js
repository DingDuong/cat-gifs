import React, { Component } from 'react';

class NewGifForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      height: '',
      caption: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    // pre es2015
    // var key = e.target.name;
    // var obj = {};
    // obj[key] = e.target.value;
    // this.setState(obj);

    // post es2015
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addGif(this.state);
  }

  render() {
    return (
      <div>
        <h4>Add a gif!</h4>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="id">Gif id:</label>
          <input
            type="text"
            name="id"
            id="id"
            placeholder="what is the gif id?"
            onChange={this.handleChange}
            value={this.state.id}
          />
          <label htmlFor="height">Gif height:</label>
          <input
            type="text"
            name="height"
            id="height"
            placeholder="what is the height?"
            onChange={this.handleChange}
            value={this.state.height}
          />
          <label htmlFor="caption">Gif caption:</label>
          <input
            type="text"
            name="caption"
            id="caption"
            placeholder="make a caption!"
            onChange={this.handleChange}
            value={this.state.caption}
          />
          <input type="submit" value="show me the lolcat!" />
        </form>
      </div>
    )
  }
}

export default NewGifForm;

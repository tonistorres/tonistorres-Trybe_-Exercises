import React from 'react';

class Image extends React.Component {
  render() {
    return <img className="App-render-size-img" src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;
import React, {
  Component
} from "react";

class Image extends Component {
  
  render() {
    console.log(this.props.source, this.props.src);
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;


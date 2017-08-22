import React, { Component } from 'react';
import Components from 'react';
import TextEditor from './TextEditor';

class ImageEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: props.image
    }
    
    if (!this.state.image) {
      this.state.image = {}
    }

    this.onChange = this.onChange.bind(this);
  }
  
  onChange = function(key, value) {
    this.state.image[key] = value;
    if(this.props.onChange)
      this.props.onChange(this.props.keyValue, this.state.image);
  }

  /**
   * Render Function
   */
  render() {
    return (
    <div>
        <img className="image-container" src={this.state.image.url} />
        
        {
          this.props.readonly!=true &&
          <div className="text-center mt-20 mb-20">
            <button type="button" className="btn btn-default">
                Change Image
            </button>
          </div>
        }

        <TextEditor 
          keyValue="caption"
          text={this.state.image.caption} 
          className="text-editor-img-caption"
          onChange={this.onChange}
          placeholder="Insert here image description..."
          readonly={this.props.readonly}
        ></TextEditor>
    </div>
    );
  }

}

export default ImageEditor;
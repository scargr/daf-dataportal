import React, { Component } from 'react';
import Components from 'react';
import TextareaAutosize from 'react-autosize-textarea';

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    }

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange = function(e) {
    let value = e.target.value;
    this.setState({text: value});
    this.props.onChange(this.props.keyValue, value)
  };

  /**
   * Render Function
   */
  render() {
    return (
    <div className={"text-editor " + this.props.className}>
      {
        this.props.readonly!=true &&
        <TextareaAutosize placeholder={this.props.placeholder} type="text" value={this.state.text} onChange={this.handleChange} />
      }
      {
        this.props.readonly==true &&
        this.state.text
      }
    </div>
    );
  }

}

export default TextEditor;
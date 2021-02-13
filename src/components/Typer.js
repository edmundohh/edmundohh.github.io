import React, { Component } from 'react';

class Typer extends Component {

    state = {
      text: '',
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 30,
      cursorVisibility: true
    }
  
    componentDidMount() {
        setTimeout(this.handleType, 900);
    }
  
    handleType = () => {
      const { dataText } = this.props;
      const { isDeleting, loopNum, text, typingSpeed } = this.state;
      const i = loopNum % dataText.length;
      const fullText = dataText[i];

      this.setState({
        text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
        typingSpeed: isDeleting ? 20 : 30
      });
  
      if (!isDeleting && text === fullText) {   
          if (loopNum == dataText.length - 1) {
            setTimeout(() => this.props.updateMenuVisibility(), 300);  
            this.setState({ cursorVisibility: false });
            return;
          }
          setTimeout(() => this.setState({ isDeleting: true }), 500);  
      } else if (isDeleting && text === '') {
        this.setState({
          isDeleting: false,
          loopNum: loopNum + 1
        });      
      }
      setTimeout(this.handleType, typingSpeed);
    };
  
    render() {    
      return (
        <h1>
          <span> $ { this.state.text }</span>
          {this.state.cursorVisibility ? <span id="cursor"></span> : null}
        </h1>
      );
    }
  }

  export default Typer;
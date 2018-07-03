import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import marked from 'marked';

class App extends React.Component {

    render() {
        return (

            <div className="app">
                <Header />
            </div>
        );
    }
}

//===================================================================================================================
//===================================================================================================================

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: 'Start writing HTML Markup in the editor above.'
        };

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {

        this.setState({
            text: event.target.value
        });
    }
    //'First &middot; Second'

    render() {

        
        return (
            
            <div >
                <div className="header">LIVE HTML MARKDOWN ENGINE</div>
                <div className="author">Made by Routh.</div>
                <div>
                </div>
                <div className = "editor">
                <p className="heading" className="heading-editor">EDITOR</p>
                <textarea id="editor" className="textarea" onChange={this.handleChange}>  </textarea>
                </div>


                <div className = "previewer">
                    <p className="heading">PREVIEWER</p>
                    <div id="preview" dangerouslySetInnerHTML={({ __html: marked(this.state.text) })} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
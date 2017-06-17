var React = require('react');

require('./Note.css');

var Note = React.createClass({
    getInitialState: function() {
        return {
            text: "paragrapth"
        };
    },

    handleChange: function(e) {
        this.setState({
            text: e.target.value
        });
    },

    render: function() {       

        return (
            <div className="noteEditor">                   
                <textarea 
                    placeholder="Enter you text" 
                    rows={3}
                    cols={40} 
                    className="textarea"  
                    onChange={this.handleChange}                                          
                />
                <p>text {this.state.text}</p>                
            </div>
        );
    }
});

module.exports = Note;
var React = require('react');
var Note = require('./Note.jsx')

require('./App.css');

var App = React.createClass({ 

    render: function() {
        return (
            <div className="notesApp"> 
                <h1>app</h1>
                <Note />
            </div>
        );
    }  
});

module.exports = App;
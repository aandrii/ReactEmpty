var React = require('react');

require('./Note.css');

var Note = React.createClass({
   

    render: function() {
        return (
            <div className="noteEditor">                   
                <textarea 
                    placeholder="Enter you text" 
                    rows={5} 
                    className="textarea"                                            
                />
                <button className="addButton" >ADD</button>
            </div>
        );
    }
});

module.exports = Note;
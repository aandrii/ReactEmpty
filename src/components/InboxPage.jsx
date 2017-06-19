import React from 'react';

import messages from '../messages.json';


const InboxPage = React.createClass({
    getInitialState() {
        return {
            messages
        };
    },

    render() {
        const {messages} = this.state;
        return (
            <div className='InboxPage'>
               <h2 className="title"> This is messages Inbox Page </h2> 
               <div> 
                   {
                        messages.map(message=>
                            <div key={message.id}>
                                {message.subject}
                            </div>
                        )
                   }
               </div>              
            </div>
        );
    }
});

export default InboxPage;
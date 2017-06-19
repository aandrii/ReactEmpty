import React from 'react';
import { Link } from 'react-router';

import './App.less';


const App = React.createClass({
    render() {
        return (
            <div className="app">
                <div className='menuBar'> 
                     <div className="menuItem"> 
                        <Link to ="/">App</Link>
                    </div>               
                    <div className="menuItem"> 
                        <Link to ="/about">About</Link>
                    </div>

                    <div className="menuItem"> 
                        <Link to ="/inbox">Inbox</Link>
                    </div>
                    
                </div>

                <div className='content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

export default App;
import React, { Component } from 'react';


class Home2 extends Component {
    
    render() { 
        return (<React.Fragment> 
            
            <h1>hello there</h1>
                <button onClick={this.renderas}>about us</button>      
            </React.Fragment> );
    };
    renderas=()=>{
        
            console.log("im in rendreas")
            return <h1>heloo</h1>;
    }
}
 
export default Home2;
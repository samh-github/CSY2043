import React from "react";
import ReactDOM from 'react-dom';

//const first_element = <h2>Welcome to my first react app</h2>


/* #### USING A CLASS COMPONENT ###
class Student extends React.Component {
    render() {
        return <h2>Welcome to my first react app</h2>;
    }
}
ReactDOM.render(<Student />, document.getElementById('root'));
*/


/* #### USING A Function COMPONENT ###
function Student() {
    return <h2>Welcome to my first react app</h2>;
}
ReactDOM.render(<Student />, document.getElementById('root'));
*/

class Student extends React.Component {

    constructor(){
        super();
        this.state = {webDesign: 'likes'};
    }

    render() {
        return <h2>I am a student that {this.state.webDesign}  web design</h2>;
    }
}
ReactDOM.render(<Student />, document.getElementById('root'));
import React from "react";
import ReactDOM from 'react-dom';

//const first_element = <h2>Welcome to my first react app</h2>

class Student extends React.Component {
    render() {
        return <h2>Welcome to my first react app</h2>;
    }
}

ReactDOM.render(<Student />, document.getElementById('root'));

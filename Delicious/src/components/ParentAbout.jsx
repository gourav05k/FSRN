import React from "react";
import About from "./About"
import AboutClass from "./AboutClass"

class ParentAbout extends React.Component {
    constructor() {
        console.log("parent constructor");
        super();
        this.state  = {
            count:0
        }
    }

    componentDidMount(){
        console.log("parent mounted");
        // this comp has been mounted/put to the DOM
    }
    
    componentDidUpdate(){
        console.log("parent updated");
    }
    
    componentWillUnmount(){
        console.log("parent unmounted");
    }
    
    render() {
        console.log("class and functional components rendered: parent rendered");
        return (
            <>
                <About name="Gourav kamboj" age="26" />
                <AboutClass name="Gourav kamboj" age="26" />
            </>
        )

    }
}


export default ParentAbout;


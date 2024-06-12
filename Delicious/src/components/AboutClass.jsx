import React from "react";

// React.Component is the base component
class AboutClass extends React.Component{
    // claases hv a constructor method/fn
    constructor(props){
        console.log("child constructor");
        super(props);
        // super method calls the constructor of the base component.
        this.state ={
            count:0
        }
    }
    componentDidMount(){
        console.log("child component has been mounted");
    }
    
    componentDidUpdate(){
        console.log("child component has been updated");
    }
    
    componentWillUnmount(){
        console.log("child component has been unmounted");
    }

    render(){
        console.log("child rendered");
        function UpdateCount(){
            this.setState({count:this.state.count+1});
            console.log(this.state.count);
        }
        return(
            <>
                <h1>Class Based Component</h1>
                <h1>fetching props name:{this.props.name} and age: {this.props.age}</h1>
                <h1>Count: {this.state.count}</h1>
                {/* to updated count value, we need to bind the updateCount mehod with this */}
                <button onClick={UpdateCount.bind(this)}>Update count</button>
            </>
        )
    }
}

export default AboutClass;
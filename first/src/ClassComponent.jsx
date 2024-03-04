import React from "react";

class MyClassComponent extends React.Component{
    constructor(){
        super()
        this.add = this.add.bind(this)
        this.state = {
            name: "",
            age: 18
        }
    }

    add(){
        this.setState({
            name: "Ritvik"
        })
        console.log(2);
        console.log(this.state.name)
    }

    componentDidMount = () => {
        console.log("this will run after first run")
    }

    render(){
        return(
            <React.Fragment>
                <p>Hey this is class Component</p>
                <button onClick={this.add}>add</button>
            </React.Fragment>
        )
    }
}

export default MyClassComponent;
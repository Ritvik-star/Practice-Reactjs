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
    shouldComponentUpdate=()=>{

    }
    componentDidUpdate=()=>{

    }
getSnapshotBeforeUpdate=()=>{
    
}
    show(){
        console.log(this.state.age);
    }
    sub=()=>{

    }
    render(){
        return(
            <React.Fragment>
                <p>Hey this is class Component</p>
                <button onClick={this.add}>add</button>
                <button onClick={this.show.bind(this)}>show</button>
            </React.Fragment>
        )
    }
}

export default MyClassComponent;
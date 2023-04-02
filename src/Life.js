import React, { Component } from "react";
import { Cycle } from "./Cycle";

class Life extends Component {
    constructor() {
        super();
        console.log("Constructor");
        this.state = {
            count: 2,
            name : "SK"
        }
    }
    componentDidMount() {
        console.log("componentDidMount");
        setInterval(() => {
            this.setState({ count: this.state.count + 1 })
            console.log(this.state.count);
        }, 4000)
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(" componentDidUpdate", prevState, this.state.count);
        if(prevState.name !== this.state.name){
            console.log("updated name");
        }
    } 
    shouldComponentUpdate() {
        return true
    }
    render() {
        console.log("Render");
        return (
            <div>
                <div>hello {this.state.count}
                <button onClick={() => this.setState({name:"react"})}>update name</button>
                </div>
                <Cycle /> 
            </div>
        )
    }
}

export default Life;
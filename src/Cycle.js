import { Component } from "react";

export class Cycle extends Component {
    constructor() {
        super();
        this.state ={
            age: 23,
        }
        console.log("Child Class");
    }
    componentDidMount() {
        console.log("Child ComponentDId Mount ");
    }
    componentDidUpdate() {
        console.log("Child CompoentDid Update");
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState);
        return true;
    }
    render() {
        console.log("Child render");
        return (
            <div>Cycle { " " } {this.state.age}
                <button onClick={() => this.setState({age : 35})}>Update age</button>
            </div>
        )
    }
}
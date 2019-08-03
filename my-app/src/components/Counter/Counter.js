import React, { Component } from 'react';

class Counter extends Component{

    constructor(props){
        super(props);
        this.state = {
            counter: 0
        };
    }

    decrease = () => {
        this.setState({
            counter: this.state.counter -1
        })
    }

    increase = () => {
        this.setState({
            counter: this.state.counter +1
        })
    }

    render(){
        return(
            <div className="Counter">
                <h1>
                    <button onClick={ this.decrease }> - </button>
                    { this.state.counter}
                    <button onClick={ this.increase}> +</button>
                </h1>
            </div>
        )
    }
}
export default Counter
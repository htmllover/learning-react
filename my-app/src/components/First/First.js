import React, {Component} from 'react';

class First extends Component {

    render() {
        return (
            <div className="employee">
                <h3>{ this.props.name}</h3>
                <p>Email: <a href="mailto:{this.props.email}">{this.props.email}</a></p>
                <p>Address: { this.props.address }</p>
                <p>Profession : {this.props.profession}</p>
            </div>
        )
    }
}

export default First